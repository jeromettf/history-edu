"""img/ill/*.webp 목록으로 js/ill-index.js를 만든다. 새 그림을 넣은 뒤 실행한다."""
import os, json
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
have = {}
for n in sorted(os.listdir(os.path.join(ROOT, "img", "ill"))):
    if n.endswith(".webp"):
        bid, i = n[:-5].rsplit("-", 1)
        have.setdefault(bid, []).append(int(i))
for v in have.values():
    v.sort()
with open(os.path.join(ROOT, "js", "ill-index.js"), "w", encoding="utf-8") as f:
    f.write("/* tools/ill_index.py가 만든 파일: 새 그림이 있는 책과 쪽 */\nconst ILL_HAVE=" + json.dumps(have, separators=(",", ":")) + ";\n")
print(len(have), "books", sum(len(v) for v in have.values()), "images")
