# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

```bash
bundle exec jekyll serve --livereload
```

Site is served at **http://127.0.0.1:4000/**. `baseurl` is empty because this is a GitHub Pages user site served at the domain root — the same baseurl CI deploys with, so local paths match production.

## Architecture

This is a personal portfolio site built on the [TeXt Theme](https://github.com/kitian616/jekyll-TeXt-theme) for Jekyll. The upstream theme is tracked as the `upstream` git remote (`kitian616/jekyll-TeXt-theme`).

**Content pages** (all use `layout: article`):
- `index.md` — home/about page
- `research.md`, `work_experience.md`, `class_projects.md`, `resume.md` — portfolio sections
- `Sagar-Sachdev-Resume.pdf` — linked directly from the nav

**Navigation** is defined in `_data/navigation.yml`. Adding a new top-level page requires an entry there.

**Site-wide configuration** is in `_config.yml` — skin, analytics (Google `G-6JLF3670L1`), author social links, and `baseurl`/`url`.

**Assets**: Images live in `assets/images/`. There is no image processing pipeline — drop files directly there and reference them with root-absolute paths (e.g. `/assets/images/pics/foo.png`).

**Theme files** (`_layouts/`, `_includes/`, `_sass/`) are local overrides of the upstream TeXt theme. Upstream is 443+ commits ahead of the merge base; merging upstream is high-risk due to likely conflicts with these customized files.
