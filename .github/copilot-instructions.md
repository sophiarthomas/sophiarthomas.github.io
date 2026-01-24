<!-- copilot-instructions.md - guidance for AI coding agents working on this repo -->
# Repository guidance for AI coding agents

This repository is a small static personal site. The notes below focus on immediate, actionable facts an AI agent needs to be productive here.

## Big picture
- Purpose: static personal/portfolio site (HTML, CSS, tiny JS) under `src/` with a generated `dst/` when using the Makefile.
- Key directories:
  - `src/` — source HTML and Markdown pages (primary working files).
  - `assets/` — styles, fonts, and images used by pages.
  - `scripts/` — small client-side JS helpers (e.g. `dragElement.js`).
  - `dst/` — generated output (created by `make gen`).

Files to look at first: `src/index.html`, `src/*.md`, `assets/css/style.css`, `scripts/dragElement.js`, and `Makefile`.

## Build / preview / deploy workflows (concrete)
- The project uses a simple `Makefile` to generate `dst/` pages from `src/*.md` using `pandoc` and to assemble assets:
  - `make gen` — generate HTML from `src/*.md`, copy `assets/` and `scripts/`, and produce `dst/listall.html` via `tree`.
  - `make clean` — remove `dst/`.
  - `make push` — (clean + commit + push). Note: `make push` will run `git commit` and `git push`.
- Prerequisites discovered in the code:
  - `pandoc` (required for `make gen`, uses `--katex` and `--from gfm`).
  - `tree` (used to generate `dst/listall.html`).
  - A `pandoc`-compatible CSS is referenced as `assets/pandoc.css` in the Makefile — confirm this file exists before running `make gen` (it is not present in `assets/css/` by default).
- Quick local preview (no framework): serve `dst/` or `src/` with a static server. Example commands an engineer can run locally:
  - Build: `make gen` (requires `pandoc`, `tree`, and `assets/pandoc.css`)
  - Preview generated `dst/`: `python3 -m http.server 8000 --directory dst`
  - Quick preview without building: `python3 -m http.server 8000 --directory src`

## Project-specific conventions & patterns
- Styling: `assets/css/style.css` defines CSS variables in `:root` and is the canonical visual style. Inline styles are used in `src/index.html` for page-background and a few layout tweaks — prefer editing CSS variables in `style.css` when changing colors or site-wide layout.
- JS patterns: client-side UI is intentionally minimal. Example patterns in `src/index.html`:
  - Clipboard helpers: `copyText(selector)` and `copyBoth()` (uses `navigator.clipboard`).
  - `downloadVCard()` constructs a vCard blob and triggers a download.
  - `dragElement.js` is loaded with `defer` for draggable tile/window behavior — keep changes small and focused.
- Content generation: Markdown files in `src/*.md` are transformed to HTML by `pandoc` (see `Makefile` rule `dst/%.html: src/%.md`). When adding pages prefer creating `src/name.md` and letting `make gen` produce `dst/name.html`.

## Integration points & external deps
- `Makefile` depends on external CLIs (`pandoc`, `tree`). Tests and package managers (npm, pipenv, etc.) are not present — do not assume a Node or Python project layout beyond the static preview suggestions above.
- Images and icons live in `assets/img/` (used by `src/index.html`). Paths are relative in source files (e.g., `./assets/img/icons/github.jpg`).

## Files and examples to reference in edits
- `src/index.html` — primary interactive page; shows patterns for copying text to clipboard and generating vCards.
- `assets/css/style.css` — central styling: color variables, component classes (`.card`, `.window`, `.titlebar`).
- `Makefile` — canonical build/deploy flow for this repo.

## Safety & privacy notes
- `src/index.html` contains real contact info (email, phone). When modifying or generating content, respect privacy — don't publish or alter contact details without explicit user instruction.

## When editing: practical tips
- Keep edits minimal and local to the files affected (this is a simple static site).
- If adding a new page, add a `src/*.md` and run `make gen` to ensure it is copied to `dst/` correctly.
- If you modify CSS, prefer `assets/css/style.css` and use existing CSS variables where possible to maintain consistent theming.
- If you change build steps in `Makefile`, update this instructions file and call out any new external dependencies.

---
If any section is unclear or you'd like additional examples (e.g., how to add a new page end-to-end, or testing preview automation), tell me which part to expand and I'll update this file.
