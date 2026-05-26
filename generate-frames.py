#!/usr/bin/env python3
import requests
import time
import os
import sys

API_KEY = "8aadefd4-7ccb-4b50-b851-32280bfc1fd1:b9Lh-swiVPPAhlLxoWrQMp4iFAZyUM2X"
GENERATE_URL = "https://api.krea.ai/generate/image/bfl/flux-1-dev"
JOBS_URL = "https://api.krea.ai/jobs/"
OUTPUT_DIR = "/Users/threat/atl-podcast-pros-website/public/assets/images/scroll-frames"

STYLE = "Photorealistic interior photography. Cinematic warm lighting. Modern home. No people. Ultra high quality. Consistent camera angle and perspective throughout."

FRAMES = [
    (2,  f"Bright modern living room with cream L-shaped sectional sofa, round wooden coffee table with lower shelf, large multi-pane windows with sheer white curtains, light hardwood floors, beige area rug. Clean everyday state. No equipment. Natural daylight. {STYLE}"),
    (3,  f"Same modern living room, cream L-shaped sectional sofa, round wooden coffee table, large multi-pane windows with sheer curtains, hardwood floors. Two cardboard delivery boxes placed on the floor near the coffee table. Books on lower shelf of coffee table. Clean room otherwise. Natural daylight. {STYLE}"),
    (4,  f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. Boxes now open, bubble wrap and packaging scattered on the floor. A microphone boom arm box and components visible among the items. Natural daylight. {STYLE}"),
    (5,  f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. Packaging cleared away. Two black microphone boom arm clamps placed on the edges of the round coffee table, not yet extended. Clean room. Natural daylight. {STYLE}"),
    (6,  f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. One black microphone boom arm fully clamped to the near edge of the coffee table, arm extended forward. A Shure SM7B condenser microphone mounted on it. Headphones hanging on the arm. Natural daylight. {STYLE}"),
    (7,  f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. Two black microphone boom arms clamped on opposite edges of the coffee table, each with a condenser microphone and headphones hanging from it. A Focusrite Scarlett audio interface placed on the table center between them. Natural daylight. {STYLE}"),
    (8,  f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. Coffee table has two microphone boom arms with condenser mics and headphones, and a Focusrite Scarlett audio interface. A large professional softbox light on a black floor stand positioned to the left side of the sofa. Softbox is off. Natural daytime light. {STYLE}"),
    (9,  f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. Coffee table mic setup fully in place. One softbox light on stand on left. A second softbox light on a floor stand being positioned to the right of the sofa. Both softboxes off. Natural daylight still coming through windows. {STYLE}"),
    (10, f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. Both professional softbox lights fully in position on left and right sides of the sofa, now turned on, casting warm fill light. Cables neatly routed along floor. Natural light still visible through windows. {STYLE}"),
    (11, f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows. Both softbox lights glowing warmly. Early evening outside, natural light dimming. Acoustic foam panels being mounted on the left side wall. Coffee table mic setup complete. {STYLE}"),
    (12, f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows showing dusk sky. Acoustic foam panels installed on both side walls. Warm amber light from both floor softboxes fills the room. Coffee table mic and audio interface setup complete. {STYLE}"),
    (13, f"Same modern living room, cream sectional sofa, round wooden coffee table, large multi-pane windows now fully dark showing night outside. Two overhead studio LED panel lights positioned above the sofa area. All studio lights beginning to illuminate the space with warm golden light. Acoustic panels on side walls. {STYLE}"),
    (14, f"Same modern living room at night, cream sectional sofa, round wooden coffee table, dark windows. All four studio lights on: two floor softboxes left and right, two overhead LED panel lights above. Dramatic warm golden light throughout. Coffee table has a warm LED underglow strip. Two mic setups with headphones on table. {STYLE}"),
    (15, f"Same modern living room at night, cream sectional sofa, round wooden coffee table with warm LED underglow, large dark windows. Warm cinematic studio lighting from floor softboxes and overhead panels. Two condenser microphone setups with headphones on coffee table. Acoustic foam panels on side walls visible in warm light. Premium mood. {STYLE}"),
    (16, f"Same modern living room at night, cream sectional sofa beautifully lit, round coffee table with warm LED glow, dark windows in background. All studio lighting perfected. Two condenser microphones on boom arms with headphones positioned over the coffee table. Soft warm light wraps the sofa. Acoustic panels on walls. The space feels intentional and professional. {STYLE}"),
    (17, f"Same modern living room at night. Complete professional podcast studio inside a home living room. Two host microphone positions on boom arms with headphones ready on the round coffee table. Floor softbox lights left and right. Overhead LED panels above. Warm cinematic golden light. Acoustic panels on side walls. Dark windows in background. Nearly complete. {STYLE}"),
    (18, f"Same modern living room at night. Final polished state. Complete professional podcast studio inside a modern home living room. Warm cinematic lighting from floor softboxes and overhead LED panels. Two microphone boom arm setups with condenser mics and headphones on the round coffee table with warm LED underglow. Acoustic foam panels on side walls. Cream sectional sofa warmly lit. Large dark windows in background. The transformation is complete. Ready to record. {STYLE}"),
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
            # Find image URL
            url = (data.get("output") or {}).get("url") or \
                  (data.get("output") or [None])[0] if isinstance(data.get("output"), list) else None
            if not url:
                url = data.get("image_url") or data.get("url")
            if not url and isinstance(data.get("output"), list) and len(data["output"]) > 0:
                url = data["output"][0]
            if not url:
                print(f"  ERROR: no image URL in completed job: {data}")
                return None
            return url
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

# Check which frames already exist
existing = set()
for fname in os.listdir(OUTPUT_DIR):
    if fname.startswith("frame-") and fname.endswith(".jpg"):
        try:
            num = int(fname.replace("frame-", "").replace(".jpg", ""))
            existing.add(num)
        except:
            pass
if existing:
    print(f"Already have frames: {sorted(existing)}")

total = len(FRAMES)
for i, (frame_num, prompt) in enumerate(FRAMES):
    if frame_num in existing:
        print(f"[{i+1}/{total}] Skipping frame {frame_num:02d} (already exists)")
        continue
    print(f"\n[{i+1}/{total}] Generating frame {frame_num:02d}...")
    job_id = submit_job(prompt, frame_num)
    if not job_id:
        print(f"  SKIPPING frame {frame_num:02d} due to submission error")
        continue
    img_url = poll_job(job_id, frame_num)
    if not img_url:
        print(f"  SKIPPING frame {frame_num:02d} due to poll/timeout error")
        continue
    ok = download_image(img_url, frame_num)
    if not ok:
        print(f"  FAILED to save frame {frame_num:02d}")

print("\n=== DONE ===")
saved = [f for f in os.listdir(OUTPUT_DIR) if f.endswith(".jpg")]
print(f"Files in scroll-frames: {sorted(saved)}")
