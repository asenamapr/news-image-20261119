# News Image — Thursday, 19 November 2026

A one-page newspaper front page, **"THE WORLD TODAY"**, summing up the
world news of Thursday 19 November 2026 in a single 1024×1024 PNG.

## What it shows

- **Masthead:** "THURSDAY, 19 NOVEMBER 2026" in a red banner — the date
  is unmissable.
- **Hero band — the three lead stories of the day:**
  1. GTA VI global rollout begins — gamers enter Vice City after a
     13-year wait.
  2. Trump, Xi and Putin gather in Shenzhen, China — Xi hugged Trump
     on the tarmac.
  3. Anthropic IPO — the biggest ever, $81.3 billion raised at $83 a
     share, eyeing a $1.4+ trillion debut.
- **World map** with seven numbered pins tied to the top stories
  (Shenzhen, Vice City, San Francisco, Crimea, Gaza, India, London).
- **Story grid — 29 more stories in six sections** (Americas, Europe,
  Middle East & Africa, Asia & Pacific, Science & Tech, Culture,
  Business & Sport), for **32 stories in total across 6 continents** —
  including the Crimean Bridge attack, the Gaza ground operation,
  Jeffries set to be the first Black Speaker, the EU's €45bn Ukraine
  loan, Voyager 1 reaching one light-day from Earth, Cyclone Akvan,
  the record $190.4m Van Gogh sale, and the Myanmar ICJ verdict.
- **Footer:** "32 STORIES • 6 CONTINENTS • 19 NOVEMBER 2026".

## How it is built

`generate.py` draws the whole front page with Pillow (Python 3, PIL),
from fixed text and hand-written coarse continent outlines — no
network, no timestamps, no randomness, so re-running it produces
byte-identical output. `main.ts` (Node 22, standard library only)
copies `./entry.png` into the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`).

## License

MIT — see `LICENSE`.
