---
category: OpenStreetMap Data
title: Nova Scotia Scenic Drives
subtitle: Usable relations and highway shields
icon: /img/shield_ca_ns_s_ct.svg
icon_alt: 
image: /img/ns-scenic-map.jpg
photo: /img/photo-cabot.jpg
photo_classes: dark-text
date: 2025-07-11
updated: 2025-07-11
start: 2023-08-02
start_label: First Changeset
start_url: https://www.openstreetmap.org/changeset/139363290
project: OSM Americana
project_url: https://github.com/osm-americana/openstreetmap-americana/issues/911
tags:
  - OSM Americana
  - highway shields
---
## From Cabot to Evangeline
As seen on its license plates, Nova Scotia is "Canada's Ocean Playground". The province has an extensive network of well-signed scenic routes inviting tourists to follow back roads while on their maritime adventures. The routes commemorate Nova Scotia's history and culture, from the famed [Cabot Trail](https://en.wikipedia.org/wiki/Cabot_Trail) to the Acadian [Evangeline Trail](https://en.wikipedia.org/wiki/Evangeline_Trail) and beyond.

<div class="graphic-group graphic-background">
<div class="group-title">My Nova Scotia scenic route shields</div>
{% include graphic_image.html file='/img/shield_ca_ns_s_bdolsd.svg' caption="Bras d'Or" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_cet.svg' caption="Ceilidh" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_ct.svg' caption="Cabot" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_dnisd.svg' caption="Digby Neck" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_et.svg' caption="Evangeline" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_fdlt.svg' caption="Fleur-de-lis" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_gt.svg' caption="Glooscap" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_ksd.svg' caption="Kejimkujik" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_lr.svg' caption="Lighthouse" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_md.svg' caption="Marine" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_mdb.svg' caption="Macdonald" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_mkb.svg' caption="MacKay" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_mt.svg' caption="Marconi" width='100px' img-width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_st.svg' caption="Sunrise" width='100px' img-width='50px' %}
</div>

Over at [OSM Americana](https://americanamap.org) we're working to recreate the look and feel of North American paper highways maps using OpenStreetMap data. Rendering highway shield icons along road routes is a central part of the cartography. While numbered routes have extensive coverage in OSM, scenic routes tend to be undermapped.

After a summer road trip winding my way through the serenity of the province, I tasked myself with getting Nova Scotia's scenic routes onto the Americana map. This was the first state-level scenic route network known to receive comprehensive support in an OSM-based map style.

## Mapping

Luckily, a few of the scenic routes had already been mapped in OpenStreetMap, though without a unified tagging scheme. I cleaned up and standardized the routes, added the missing ones, and collected them all with a unique `network` tag. Now the full slate of routes could be fetched with [one simple query](https://overpass-ultra.us/#run&m=6.02/45.1682/-63.1248&q=NoewrgLgXAVgziAdgXWBAlgWwKbmgNgAZkBuAKDICdsAbYAIkWwgHcRKBregXnoGEAglAByAZSij6pCngAEAc1yYSQA).

Scenic routes like these don't have official route numbers, but at the time of this work, Americana could only select an individual route in a network by its `ref` tag. Spurred in part by this use case, the Americana team built `name` selection into our shield rendering stack. This feature unlocked support for all kinds of niche, unnumbered road routes.

## Shield icons

To represent the routes in Americana, I drew a complete set of highway shield vector icons. These are inspired by their corresponding roadside route signs, but are not exact replicas. Instead, the graphics are simplified and pixel-aligned in order to be legible at their expected display size [on the Americana map](https://americanamap.org/#map=12.29/45.64218/-61.4356).

As with all Americana icons, these graphics are licensed CC0, meaning anyone can freely use them in their own projects.

<div class="graphic-group graphic-background">
<div class="group-title">Display size</div>
{% include graphic_image.html file='/img/shield_ca_ns_s_bdolsd.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_cet.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_ct.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_dnisd.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_et.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_fdlt.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_gt.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_ksd.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_lr.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_md.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_mdb.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_mkb.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_mt.svg' width='17px'%}
{% include graphic_image.html file='/img/shield_ca_ns_s_st.svg' width='17px'%}
</div>

<div class="graphic-group graphic-background">
<div class="group-title">Simplified for legibility</div>
{% include graphic_image.html file='/img/ns-EvangelineTrail.png' caption="Official" width='100px' img-width='80px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_et.svg' caption="My take" width='100px' img-width='80px' %}
{% include graphic_image.html file='/img/ns-CeilidhTrail.png' caption="Official" width='100px' img-width='80px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_cet.svg' caption="My take" width='100px' img-width='80px' %}
</div>
