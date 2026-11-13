"""모든 스크립트를 index.html 안에 넣어 한 장짜리 dist/wiin.html을 만든다."""
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))


def inline(match):
    path = os.path.join(ROOT, match.group(1))
    with open(path, encoding="utf-8") as f:
        return "<script>\n" + f.read() + "\n</script>"


with open(os.path.join(ROOT, "index.html"), encoding="utf-8") as f:
    html = f.read()

html = re.sub(r'<script src="([^"]+)"></script>', inline, html)


def img_uri(match):
    import base64
    with open(os.path.join(ROOT, match.group(1)), "rb") as f:
        return "data:image/webp;base64," + base64.b64encode(f.read()).decode()


# 파일럿 그림(img/pilot/*.webp)을 data URI로 넣는다. pilot.js가 경로를 템플릿으로 만들므로 함수 자체를 바꾼다.
html = html.replace('href="img/pilot/${id}-${i}.webp"', 'href="${PILOT_SRC[id+\'-\'+i]}"')
srcs = {}
for name in sorted(os.listdir(os.path.join(ROOT, "img", "pilot"))):
    import base64
    with open(os.path.join(ROOT, "img", "pilot", name), "rb") as f:
        srcs[name[:-5]] = "data:image/webp;base64," + base64.b64encode(f.read()).decode()
import json
html = html.replace("const PILOT_IMG=", "const PILOT_SRC=" + json.dumps(srcs) + ";\nconst PILOT_IMG=", 1)
os.makedirs(os.path.join(ROOT, "dist"), exist_ok=True)
with open(os.path.join(ROOT, "dist", "wiin.html"), "w", encoding="utf-8") as f:
    f.write(html)
print("dist/wiin.html", len(html.encode("utf-8")) // 1024, "KB")
