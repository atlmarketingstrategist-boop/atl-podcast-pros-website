#!/usr/bin/env python3
import requests
import time
import os

API_KEY = "8aadefd4-7ccb-4b50-b851-32280bfc1fd1:b9Lh-swiVPPAhlLxoWrQMp4iFAZyUM2X"
GENERATE_URL = "https://api.krea.ai/generate/image/bfl/flux-1-dev"
JOBS_URL = "https://api.krea.ai/jobs/"
OUTPUT_DIR = "/Users/threat/atl-podcast-pros-website/public/assets/images/scroll-frames"

STYLE = "Photorealistic interior photography. Cinematic warm lighting. Modern suburban home, NOT a high-rise apartment, NOT a city skyline. No people. Ultra high quality. Consistent camera angle and perspective throughout."

ROOM_BASE = "cream L-shaped sectional sofa, round wooden coffee table with lower shelf, large multi-pane windows with sheer white curtains, light hardwood floors, beige area rug, trees and nature visible through windows"

FRAMES = [
    (5,
     f"Modern suburban living room with {ROOM_BASE}. Packaging from earlier delivery boxes cleared away. Two black microphone boom arm clamps are clearly clamped to opposite edges of the round coffee table — one on the near edge, one on the far edge — arms partially extended. No other equipment yet. Natural daylight. Trees visible outside windows. {STYLE}"),

    (10,
     f"Modern suburban living room with {ROOM_BASE}. Two black microphone boom arms with condenser microphones and headphones are mounted on opposite edges of the round coffee table. A Focusrite Scarlett audio interface sits on the coffee table between the two mic arms. Both professional softbox studio lights on black floor stands positioned left and right of the sofa are turned on, casting warm fill light across the sofa. Cables neatly routed along the floor. Daylight still coming through windows with trees outside. {STYLE}"),

    (11,
     f"Modern suburban living room with {ROOM_BASE} showing early evening sky and trees outside. Two black microphone boom arms with condenser microphones and headphones mounted on opposite edges of the round coffee table. Focusrite Scarlett audio interface on the table. Both professional softbox studio lights on floor stands glowing warmly left and right of the sofa. Acoustic foam panels being mounted on the left side wall. Natural light dimming outside, trees silhouetted against dusk sky. {STYLE}"),

    (12,
     f"Modern suburban living room with {ROOM_BASE} showing dusk sky with trees outside — suburban neighborhood exterior, NOT a city skyline, NOT floor-to-ceiling glass. Two black microphone boom arms with condenser microphones and headphones on opposite edges of the round coffee table. Focusrite Scarlett audio interface on table. Both softbox studio lights on floor stands glowing warm amber left and right of sofa. Acoustic foam panels fully installed on both side walls. Warm amber studio lighting fills the room. {STYLE}"),

    (13,
     f"Modern suburban living room with {ROOM_BASE} showing dark evening sky and silhouetted trees outside — suburban home exterior, NOT a city skyline. Two black microphone boom arms with condenser microphones and headphones over the round coffee table. Audio interface on table. Both softbox floor lights glowing warmly. Two overhead studio LED panel lights now positioned above the sofa area, illuminating from above. Acoustic foam panels on both side walls. Warm golden studio light throughout. {STYLE}"),

    (14,
     f"Modern suburban living room at night with {ROOM_BASE} showing dark night sky and trees outside — suburban home, NOT a city skyline. Coffee table has warm LED underglow strip. All four studio lights on: two floor softbox stands left and right, two overhead LED panels above sofa. Dramatic warm golden light. Two black microphone boom arms with condenser microphones and headphones mounted on coffee table edges. Focusrite Scarlett audio interface on table. Acoustic panels on walls. {STYLE}"),

    (15,
     f"Modern suburban living room at night with {ROOM_BASE} showing dark night sky and trees outside — suburban home, NOT a city skyline. Round coffee table with warm LED underglow. All studio lights creating warm cinematic mood. Two black microphone boom arms with condenser microphones and headphones on coffee table. Floor softbox lights left and right. Overhead LED panels above. Acoustic foam panels on side walls. Premium professional studio feel inside a suburban home. {STYLE}"),

    (16,
     f"Modern suburban living room at night with {ROOM_BASE} showing dark sky and trees outside — suburban home exterior, NOT a city skyline. Round coffee table with warm LED underglow. Two black microphone boom arms extended over the table with condenser microphones pointed downward and headphones hanging from the arms. Floor softboxes left and right glowing. Overhead LED panels above. Warm amber light wraps the cream sofa. Acoustic foam panels on walls. The space is polished and professional. {STYLE}"),

    (17,
     f"Modern suburban living room at night. Complete professional podcast studio inside a suburban home. Two black microphone boom arms with condenser microphones and headphones ready over the round wooden coffee table with warm LED underglow. Two floor softbox studio lights left and right of cream sectional sofa. Two overhead LED panel lights above. Warm cinematic golden light. Acoustic foam panels on side walls. Large multi-pane windows showing dark sky and trees outside — suburban trees, NOT a city skyline. Cream sofa beautifully lit. Nearly complete. {STYLE}"),

    (18,
     f"Modern suburban living room at night. Final polished state. Complete professional podcast studio inside a suburban home living room. Warm cinematic golden lighting from floor softboxes and overhead LED panels. Two black microphone boom arms with condenser microphones and headphones positioned over the round coffee table with warm LED underglow. Acoustic foam panels on both side walls. Cream L-shaped sectional sofa warmly lit. Large multi-pane windows showing dark night sky and trees outside — suburban neighborhood, NOT a city skyline. The transformation from living room to podcast studio is complete. Ready to record. {STYLE}"),
]

os.makedirs(OUTPUT_DIR, exist_ok=True)

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def submit_job(prompt, frame_num):
    payload = {
        "prompt": prompt,
        "width": 1920,
        "height": 1080,
        "guidance_scale": 3.5,
        "num_inference_steps": 28,
        "output_format": "jpeg"
    }
    resp = requests.post(GENERATE_URL, json=payload, headers=headers, timeout=30)
    if resp.status_code not in (200, 201):
        print(f"  ERROR submitting frame {frame_num:02d}: {resp.status_code} {resp.text}")
        return None
    data = resp.json()
    job_id = data.get("job_id") or data.get("id") or data.get("request_id")
    if not job_id:
        print(f"  ERROR: no job_id in response: {data}")
        return None
    print(f"  Submitted job {job_id}")
    return job_id

def poll_job(job_id, frame_num, max_wait=300):
    start = time.time()
    while time.time() - start < max_wait:
        time.sleep(5)
        resp = requests.get(f"{JOBS_URL}{job_id}", headers=headers, timeout=30)
        if resp.status_code != 200:
            print(f"  Poll error {resp.status_code}: {resp.text}")
            continue
        data = resp.json()
        status = data.get("status", "").lower()
        if status in ("completed", "succeeded", "success", "done"):
            # Extract URL from result.urls array
            result = data.get("result", {})
            urls = result.get("urls", [])
            if urls:
                return urls[0]
            # Fallback paths
            url = data.get("image_url") or data.get("url")
            if url:
                return url
            print(f"  ERROR: no image URL in completed job: {data}")
            return None
        elif status in ("failed", "error", "cancelled"):
            print(f"  Job {job_id} failed: {data}")
            return None
        else:
            elapsed = int(time.time() - start)
            print(f"  Frame {frame_num:02d} status: {status} ({elapsed}s elapsed)")
    print(f"  Timeout waiting for frame {frame_num:02d}")
    return None

def download_image(url, frame_num):
    out_path = os.path.join(OUTPUT_DIR, f"frame-{frame_num:02d}.jpg")
    resp = requests.get(url, timeout=60, stream=True)
    if resp.status_code != 200:
        print(f"  ERROR downloading frame {frame_num:02d}: {resp.status_code}")
        return False
    with open(out_path, "wb") as f:
        for chunk in resp.iter_content(chunk_size=8192):
            f.write(chunk)
    size_kb = os.path.getsize(out_path) // 1024
    print(f"  Saved frame-{frame_num:02d}.jpg ({size_kb} KB)")
    return True

total = len(FRAMES)
for i, (frame_num, prompt) in enumerate(FRAMES):
    print(f"\n[{i+1}/{total}] Generating frame {frame_num:02d}...")
    job_id = submit_job(prompt, frame_num)
    if not job_id:
        print(f"  SKIPPING frame {frame_num:02d} due to submission error")
        continue
    img_url = poll_job(job_id, frame_num)
    if not img_url:
        print(f"  SKIPPING frame {frame_num:02d} due to poll error")
        continue
    download_image(img_url, frame_num)

print("\n=== DONE ===")
saved = sorted(f for f in os.listdir(OUTPUT_DIR) if f.endswith(".jpg"))
print(f"Total files in scroll-frames: {len(saved)}")
print(saved)
