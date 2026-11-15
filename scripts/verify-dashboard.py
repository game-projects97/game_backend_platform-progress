"""공개 대시보드의 원본과 실제 배포 자산을 확인한다."""
import hashlib
import json
from pathlib import Path
import re

board = Path('board')
manifest = json.loads((board / 'publication.json').read_text())
raw = (board / 'state.json').read_bytes()
state = json.loads(raw)
if hashlib.sha256(raw).hexdigest() != manifest['stateSha256']:
    raise SystemExit('게시 데이터 해시가 다릅니다.')
if state['publication']['revision'] != manifest['revision']:
    raise SystemExit('게시 revision이 다릅니다.')
ids = [item['id'] for item in state['items']]
if len(ids) != len(set(ids)) or any(item.get('recordKind') == 'commit' for item in state['items']):
    raise SystemExit('중복 작업 또는 연결하지 않은 커밋이 있습니다.')
for path in [board / 'index.html', *board.glob('assets/*publication-*.js')]:
    for relative in re.findall(r'''(?:src=|href=)["'](\./[^"']+)|(?:from\s*|import\s*)["'](\./[^"']+)''', path.read_text()):
        target = next(value for value in relative if value)
        if not (path.parent / target).is_file():
            raise SystemExit(f'게시 자산이 없습니다: {target}')
print(f"게시 데이터 확인: revision {manifest['revision']}, 작업 {len(ids)}개")
