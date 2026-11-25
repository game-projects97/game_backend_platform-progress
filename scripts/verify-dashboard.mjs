import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, appendFileSync } from "node:fs";
import { dirname, join } from "node:path";

const board = "board";
const manifest = JSON.parse(
  readFileSync(join(board, "publication.json"), "utf8"),
);
const raw = readFileSync(join(board, "state.json"));
const state = JSON.parse(raw);
if (createHash("sha256").update(raw).digest("hex") !== manifest.stateSha256) {
  throw new Error("게시 데이터 해시가 다릅니다.");
}
if (state.publication.revision !== manifest.revision) {
  throw new Error("게시 revision이 다릅니다.");
}
const ids = state.items.map(({ id }) => id);
if (
  new Set(ids).size !== ids.length ||
  state.items.some(({ recordKind }) => recordKind === "commit")
) {
  throw new Error("중복 작업 또는 연결하지 않은 커밋이 있습니다.");
}
const assets = join(board, "assets");
const entries = readdirSync(assets, { throwIfNoEntry: false }) ?? [];
for (const path of [
  join(board, "index.html"),
  ...entries
    .filter((name) => /publication-.*\.js$/.test(name))
    .map((name) => join(assets, name)),
]) {
  const content = readFileSync(path, "utf8");
  for (const match of content.matchAll(
    /(?:src=|href=|from\s*|import\s*)["'](\.\/[^"']+)/g,
  )) {
    if (
      !statSync(join(dirname(path), match[1]), {
        throwIfNoEntry: false,
      })?.isFile()
    ) {
      throw new Error(`게시 자산이 없습니다: ${match[1]}`);
    }
  }
}
console.log(
  `게시 데이터 확인: revision ${manifest.revision}, 작업 ${ids.length}개`,
);
if (process.argv.includes("--summary") && process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(
    process.env.GITHUB_STEP_SUMMARY,
    `대시보드 원본 revision: ${manifest.revision}\n게시 데이터 SHA-256: ${manifest.stateSha256}\n`,
  );
}
