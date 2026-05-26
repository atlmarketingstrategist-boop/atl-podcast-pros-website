#!/usr/bin/env python3
import requests
import os

OUTPUT_DIR = "/Users/threat/atl-podcast-pros-website/public/assets/images/scroll-frames"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# All 17 generated image URLs from the completed jobs
FRAMES = [
    (2,  "https://gen.krea.ai/images/0a713f5c-aad1-4594-ad17-226aea5b8ac8.png"),
    (3,  "https://gen.krea.ai/images/d80e5456-ae05-439a-93b3-9676cf70d574.png"),
    (4,  "https://gen.krea.ai/images/2fac8fb5-dbdb-487e-8722-f5233a91be26.png"),
    (5,  "https://gen.krea.ai/images/c879cbc0-886c-4f49-8657-d8ae2a7451e7.png"),
    (6,  "https://gen.krea.ai/images/514a2b1e-5835-4b58-9aaf-97d781f9914d.png"),
    (7,  "https://gen.krea.ai/images/6af12c11-3182-43eb-82c4-1583ced345b3.png"),
    (8,  "https://gen.krea.ai/images/ba365039-9a7f-411f-b35a-2b42b37ff2e7.png"),
    (9,  "https://gen.krea.ai/images/8629afe4-b512-4dd5-b016-a99423c90b0b.png"),
    (10, "https://gen.krea.ai/images/23cc1151-88bf-4646-aac0-1e1107931d2e.png"),
    (11, "https://gen.krea.ai/images/6239781d-1b77-4eb7-a5ec-e832033dcf6e.png"),
    (12, "https://gen.krea.ai/images/a40ec39c-3b95-4033-8e9d-fdbddb7721f6.png"),
    (13, "https://gen.krea.ai/images/43d5e7d0-3354-47b2-b212-d60a234a4fd6.png"),
    (14, "https://gen.krea.ai/images/828958ad-8b2d-4344-b107-13f83d1e88a2.png"),
    (15, "https://gen.krea.ai/images/d4f5f618-d579-48a9-9a22-f108b438697f.png"),
    (16, "https://gen.krea.ai/images/e628db21-3f04-488c-a46c-94b6970adee8.png"),
    (17, "https://gen.krea.ai/images/cd941d64-d259-48ed-8185-a20ad22b2ff8.png"),
    (18, "https://gen.krea.ai/images/1fa47915-1fff-4feb-823e-b85596e56d6c.png"),
]

for frame_num, url in FRAMES:
    out_path = os.path.join(OUTPUT_DIR, f"frame-{frame_num:02d}.jpg")
    if os.path.exists(out_path):
        print(f"frame-{frame_num:02d}.jpg already exists, skipping")
        continue
    print(f"Downloading frame-{frame_num:02d}...", end=" ", flush=True)
    resp = requests.get(url, timeout=60, stream=True)
    if resp.status_code != 200:
        print(f"ERROR {resp.status_code}")
        continue
    with open(out_path, "wb") as f:
        for chunk in resp.iter_content(chunk_size=8192):
            f.write(chunk)
    size_kb = os.path.getsize(out_path) // 1024
    print(f"saved ({size_kb} KB)")

print("\n=== DONE ===")
saved = sorted(f for f in os.listdir(OUTPUT_DIR) if f.endswith(".jpg"))
print(f"Saved {len(saved)} files: {saved}")
