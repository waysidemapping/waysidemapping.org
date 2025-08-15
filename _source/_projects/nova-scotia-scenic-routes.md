---
category: OpenStreetMap Data
title: Nova Scotia Scenic Drives
subtitle: Usable relations and highway shields
icon: /img/shield_ca_ns_s_ct.svg
icon_alt: Cabot Trail route shield icon depicting road through hills above water.
image: /img/ns-scenic-map.jpg
photo: /img/photo-cabot.jpg
photo_classes: dark-text
date: 2025-08-10
updated: 2025-08-14
start: 2023-08-02
start_label: First Changeset
start_url: https://www.openstreetmap.org/changeset/139363290
project: OSM Americana
project_url: https://github.com/osm-americana/openstreetmap-americana/issues/911
status: Complete
license_label: Licenses
license: <a href="https://www.openstreetmap.org/copyright/">ODbL</a>, <a href="https://github.com/osm-americana/openstreetmap-americana/blob/main/LICENSE">CC0</a>
tags:
  - OSM Americana
  - highway shields
  - map icons
---
## From the Cabot to the Evangeline
Nova Scotia is "Canada's Ocean Playground", at least according to its license plates. The province has an extensive network of well-signed scenic routes inviting tourists to follow backroads while on their maritime adventures. The routes commemorate Nova Scotia's history and culture, from the famed [Cabot Trail](https://en.wikipedia.org/wiki/Cabot_Trail) to the Acadian [Evangeline Trail](https://en.wikipedia.org/wiki/Evangeline_Trail) and beyond.

After a summer road trip winding my way through the rugged beauty of Nova Scotia's byways, I tasked myself with getting the province's scenic routes "on the map". To me, this meant mapping the routes in OpenStreetMap and then adding their shields to [OSM Americana](https://americanamap.org), a road-focused map style.

To my knowledge, this was the first time a state-level scenic route network has been comprehensive supported in an OSM-based map.

<div class="graphic-group graphic-background">
<div class="graphic-title">Shield icons by Quincy Morgan</div>
{% include graphic_image.html file='/img/shield_ca_ns_s_bdolsd.svg' caption="Bras d'Or" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_cet.svg' caption="Ceilidh" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_ct.svg' caption="Cabot" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_dnisd.svg' caption="Digby Neck" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_et.svg' caption="Evangeline" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_fdlt.svg' caption="Fleur-de-lis" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_gt.svg' caption="Glooscap" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_ksd.svg' caption="Kejimkujik" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_lr.svg' caption="Lighthouse" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_md.svg' caption="Marine" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_mdb.svg' caption="Macdonald" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_mkb.svg' caption="MacKay" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_mt.svg' caption="Marconi" width='100px' img_width='50px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_st.svg' caption="Sunrise" width='100px' img_width='50px' %}
</div>

## Mapping

When I investigated the data, I found that a few of the scenic routes had already been mapped in OpenStreetMap, though without a unified tagging scheme. I cleaned up and standardized these routes, added the remainder, and collected them all with a unique `network` tag. Now the full slate of routes could be fetched with [one simple query](https://overpass-ultra.us/#run&m=6.02/45.1682/-63.1248&q=NoewrgLgXAVgziAdgXWBAlgWwKbmgNgAZkBuAKDICdsAbYAIkWwgHcRKBregXnoGEAglAByAZSij6pCngAEAc1yYSQA).

## Shield icons

To represent the routes in Americana, I drew a complete set of highway shield vector icons. These are inspired by their corresponding roadside route signs, but are not exact replicas. Instead, the graphics are simplified and pixel-aligned in order to be legible at the very small sizes required by digital road maps.

As with all Americana icons, these graphics are licensed CC0, meaning you (and anyone!) can freely use them in your own projects.

<div class="graphic-group graphic-background">
<div class="graphic-title">Display size</div>
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
<div class="graphic-title">Simplified for legibility</div>
{% include graphic_image.html file='/img/ns-EvangelineTrail.png' img_classes='shadowed' caption="Official" width='100px' img_width='80px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_et.svg' caption="My take" width='100px' img_width='80px' %}
{% include graphic_image.html file='/img/ns-CeilidhTrail.png' img_classes='shadowed' caption="Official" width='100px' img_width='80px' %}
{% include graphic_image.html file='/img/shield_ca_ns_s_cet.svg' caption="My take" width='100px' img_width='80px' %}
</div>

## Americana support

[OpenStreetMap Americana](https://americanamap.org) is working to recreate the look and feel of North American paper highways maps using OSM data. Rendering highway shield icons along road routes is central to the cartography.

While numbered routes have extensive coverage in OSM, scenic routes tend to be undermapped. In fact, at the time of this work, Americana could only differentiate routes based on their `ref` tags, meaning unnumbered routes were not supported. Spurred in part by this N ova Scotia scenic route case, the Americana team built `name` selection into the shield rendering stack. This feature unlocked support for all kinds of niche, unnumbered road routes.

You can check out the live results over [on americanamap.org](https://americanamap.org/#map=12.29/45.64218/-61.4356).

{% include graphic_image.html file='/img/ns-scenic-americana.jpg' img_classes="shadowed" title="On the map" img_width='500px'%}

