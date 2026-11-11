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
os.makedirs(os.path.join(ROOT, "dist"), exist_ok=True)
with open(os.path.join(ROOT, "dist", "wiin.html"), "w", encoding="utf-8") as f:
    f.write(html)
print("dist/wiin.html", len(html.encode("utf-8")) // 1024, "KB")
