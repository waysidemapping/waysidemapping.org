---
category: Open Source Software
title: Pinhead Map Icons
subtitle: Comprehensive map icon library
hero_image: /img/pinhead-21-overview.png
photo: /img/photo-chico.jpg
photo_classes: dark-text
icon: /img/pinhead-logo.png
icon_alt: Rounded rectangle inscribed with "OSM 411"
date: 2026-03-30
start: 2026-02-13
start_label: First Commit
start_url: https://github.com/waysidemapping/pinhead/commit/3b97a2b227d79f571b8480641dd9d8d7dbd8d54f
license: CC0
license_url: https://github.com/waysidemapping/pinhead/blob/main/LICENSE
action: Explore project
action_url: https://pinhead.ink
tags:
  - map icons
  - open source software
---

Without symbols your map would just be a blank piece of paper. Fundamentally, a map is nothing more than a series of symbols representing something spatial. So you need good symbology to make a good map. And in my experience, to make a great map you need great icons for your map pins. But where to get them?

There are quite a few open source icon libraries out there, but they all have compromises. Some are too detailed and don't look good at the small sizes required by maps. Some come with license contraints or partial paywalls. Some are too limited in scope or too hard to use. So short of drawing their own, most open source cartographers have to settle with cobbling together free icons from different sources that don't really go together. Not ideal.

## One library, all the icons

In 2026 I started the [Pinhead icon library](github.com/waysidemapping/pinhead) to serve as a centralized, public domain, collaborative repository of map icons. The goal is nothing less than creating the best and biggest set of open source map icons on the web.

I seeded Pinhead with icons from popular public domain icons sources, including Maki, Temaki, NPS, and OpenStreetMap Carto. I gave every icon a descriptive name, conflated duplicates, scaled them to the same size and orientation, and cleaned up their SVGs. Work to improve legiblity and standardize design elements has also been underway. You can browse the [coverage page](https://pinhead.ink/coverage/) to see how Pinhead compares to other icon sets.

## Accessing Pinhead

I aim for Pinhead to be the easiest-to-access icon library. The icons are distributed in two main formats: as SVG files and as a compiled font file. I've built a few different distribution methods, each of which is updated upon release, so whenever an icon is added to Pinhead it will appear across the ecosystem automatically.

### Web distribution

I built a preview website, [pinhead.ink](https://pinhead.ink), where users can search and download individual Pinhead icons, copy their SVG codes, or get all the icon files in one download.

All version of all the icon files, metadata files, and font files are hosted at stable endpoints on the web server. This lets users reference remote resources in their apps like `<img src="https://pinhead.ink/v21/windmill.svg" width="15px" height="15px"/>` or `<link href="https://pinhead.ink/v21/pinhead.css" rel="stylesheet"/>`.

### Wikimedia Commons distribution

All Pinhead icons are [synced to Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Plain_black_Pinhead_SVG_icons), making them compatible to use within Wikipedia, Wikidata, the OpenStreetMap Wiki, and similar projects.

### QGIS distribution

Pinhead [is bundled](github.com/waysidemapping/pinhead-qgis-resources) by default within the Resource Sharing plugin in QGIS, making it straightforward for GIS pros to use and style Pinhead icons within QGIS projects.

### Node distribution

Node developers have their choice of two versioned packages for integrating Pinhead icons into their projects: [`@waysidemapping/pinhead`](https://www.npmjs.com/package/@waysidemapping/pinhead) (for SVG files) and [`@waysidemapping/pinhead-font`](https://www.npmjs.com/package/@waysidemapping/pinhead-font) (for the webfont).