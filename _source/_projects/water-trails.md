---
category: OpenStreetMap Data
title: Canoe & Kayak Trails
subtitle: Modern paddle tagging and visualization
icon: /img/opentrailmap-canoe-icon.svg
icon_alt: Canoe paddler
photo: /img/photo-kayak.jpg
image: /img/nfct-osm.jpg
date: 2025-07-11
updated: 2025-07-11
start: 2023-09-05
start_label: First Changeset
start_url: https://www.openstreetmap.org/changeset/140872822
tags:
  - paddle mapping
  - OpenStreetMap tagging
  - trails
---
## One big paddle network

I've been paddling my whole life, but I didn't think much about canoe and kayak mapping until I stumbled across the [Northern Forest Canoe Trail](https://www.northernforestcanoetrail.org/). It opened my eyes to the idea that the world's waterways form an interconnected paddle network similar to a road or trail network. Naturally I wanted to see how this could be modelled in OpenStreetMap.

Unfortunately, I found the existing OSM tagging to be lacking. While [`route=canoe`](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) relations were in use, as was the [`canoe=*`](https://wiki.openstreetmap.org/wiki/Key:canoe) access tag, there was no consistent, expressive way to tag things like portages, whitewater rapids, open water, unimproved access points, or links between land and water.

## Modern tagging for water trails

Over months of mapping the NFCT and similar water trails in the Northeast US, along with some community input, I developed an OSM data model that treats waterways as a routable paddle network. All the details needed for trip planning are represented. To help other mappers understand and use the model, I wrote extensive documentation on the OSM Wiki, including a comprehensive [Water Trails Mapping Guide](https://wiki.openstreetmap.org/wiki/Water_trails).

_Some of the waterway tags I created or popularized, and have documented:_

- [`rapids=*`](https://wiki.openstreetmap.org/wiki/Key:rapids) – the presence and grade of rapids
- [`portage=*`](https://wiki.openstreetmap.org/wiki/Key:portage) – access for a person carrying a small boat on foot
- [`open_water=*`](https://wiki.openstreetmap.org/wiki/Key:open_water) – how exposed is a waterway
- [`oneway:canoe=*`](https://wiki.openstreetmap.org/wiki/Key:oneway:canoe) – is it possible to paddle upstream 
- [`waterway=flowline`](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dflowline) – a slow-moving flow through a large body of water
- [`waterway=access_point`](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Daccess_point) – a place where a path meets the water
- [`waterway=link`](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dlink) – a topological connection between an access point and a waterway
- [`waterway=confluence`](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dconfluence) – a notable junction between two waterways
- [`route=portage`](https://wiki.openstreetmap.org/wiki/Tag:route%3Dportage) – a route taken to carry boats over land
- [`waterway:name=*`](https://wiki.openstreetmap.org/wiki/Key:waterway:name) – the name of the waterway contained in a water area
- [`waterbody:name=*`](https://wiki.openstreetmap.org/wiki/Key:waterbody:name) – the name of the water area surrounding a waterway

## Visualizing water trails

With the tagging squared away, the next step was to visualize the newly-mapped OSM data.

Coincidentally I had been working on [OpenTrailMap](/projects/opentrailmap/) for OpenStreetMap US, and was able to add a [Canoe & Kayak Trails view](https://opentrailmap.us/#map=11.07/43.2279/-76.2137&mode=canoe) with relative ease. The resulting map highlights things like access points, barriers, water locks, and canoeability. Mappers can also focus on specific attributes to expose missing data.

![](/img/opentrailmap-canoe-screenshot.jpg)

I also [added `portage=*` support](https://github.com/amandasaurus/waterwaymap.org/pull/43) to the [WaterwayMap canoe view](https://waterwaymap.org//#map=5.92/41.163/-76.419&tiles=planet-waterway-canoeable), allowing mappers to quickly identify gaps in the paddle network. Thanks to [@amandasaurus](https://github.com/amandasaurus) for maintaining this great tool!

![](/img/waterwaymap-canoe-screenshot.jpg)

## State of the Map US talk

For a quick overview of my paddle tagging schema and its origins, check out my talk from State of the Map US 2024 in Salt Lake City. The information described in the recording is still relevant as of 2025.

<iframe class="youtube-embed" src="https://www.youtube.com/embed/XXq6XYhDQlE?si=F6AyppFJjndUvgej" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>