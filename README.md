# The World Today: 36 Stories from Monday 23 November 2026 — v7

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Maulidian14/news-image-20261123-v7/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Maulidian14/news-image-20261123-v7/reward.svg)](https://make.fun/bounty/news-image-20261123)

Entry for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123) — a one-page newspaper front page summing up Monday 23 November 2026 in a single 1024×1024 image. Version 7, built after the R3 leaderboard round: the strongest version, not an incremental tweak.

## What makes v7 the best version

- **Wires read to 21:30 UTC, past the US market close** — v2 stopped at 13:20 UTC and missed the whole US session. v7 leads with the day's biggest market story: Nvidia surges 31.5% as Jensen Huang returns as CEO (S&P +4.7%, Nasdaq +6.5%).
- **13 original illustrations, one per top card** (3 lead + 10 medium) — the top-10 pattern from the previous day's contest. v2 illustrated only the 3 leads.
- **Three new verified lead stories**: Nvidia/Huang, the EU's proposed 22nd sanctions package (~60 banks off SWIFT, 70+ shadow-fleet ships), and the ~700,000 Russian war dead from the leaked Rosstat data.
- **Two date errors from v2 fixed**: commodities now read gold +2.9% to $3,661 and Brent $89.34 (−3.5%) — v2's $88.83 (−1.25%) was wrong; the Serang factory fire now reads "3 dead, dozens missing" as reported on Monday.
- **36 stories, 7 regions** — Europe 18, Asia 5, Americas 5, M. East 3, Africa 3, Oceania 1, World 1.
- **A 6-number strip**, a **region bar**, a **"THE DAY IN UTC" timeline**, a **world map with 14 numbered pins**, and a numbered "ALSO ON…" list.
- A red-bordered **DATE CHECK** box: wires read to 21:30 UTC; every story happened or was first reported on Monday 23 November 2026, with the big stories from other days listed as deliberately left out — including the Nikkei's −5.06% plunge (Friday 20 Nov, not Monday) and notes that the Benghazi strike happened Sunday but was confirmed Monday, and that a 12th Dymer victim died Tuesday, after our wires closed.
- Every story carries a **certainty tag** — REPORTED, CLAIM, CONFIRMED, or PENDING — and its source.

## How it is built

`index.html` is the front page (HTML + CSS + inline SVG illustrations, no network, no JavaScript). It is rendered to `entry.png` (1024×1024, ~356 KB) with headless Chromium; the render is deterministic (byte-identical across runs). `main.ts` copies `entry.png` to the make.fun output directory.

## Verify

```sh
node main.ts   # with MAKEFUN_OUTPUT_DIR set, or /output by default
```

## License

MIT — see [LICENSE](LICENSE).
