---
layout: article
titles:
  # @start locale config
  en      : &EN       
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  # @end locale config
key: page-music
---

<h1 class="page-title">Music</h1>

<p class="page-subtitle">Artists I've seen live — house, electronic and everything in between.</p>

{%- assign _artists = site.data.artists -%}

{%- if _artists and _artists.size > 0 -%}

{%- assign _artists = _artists | sort: 'name' -%}
{%- assign _total_shows = 0 -%}
{%- for _artist in _artists -%}
  {%- assign _total_shows = _total_shows | plus: _artist.shows.size -%}
{%- endfor -%}

<p align="center"><strong>{{ _artists.size }}</strong> artists · <strong>{{ _total_shows }}</strong> shows</p>

<div class="artist-grid">
{%- for _artist in _artists -%}
  <div class="artist-card">
    <div class="artist-card__header">
      <h3 class="artist-card__name">
        {%- if _artist.spotify -%}
          <a href="{{ _artist.spotify }}" target="_blank" rel="noopener">{{ _artist.name }}</a>
        {%- else -%}
          {{ _artist.name }}
        {%- endif -%}
      </h3>
      {%- if _artist.shows.size > 1 -%}
        <span class="artist-card__count">×{{ _artist.shows.size }}</span>
      {%- endif -%}
    </div>
    <ul class="artist-card__shows">
      {%- assign _shows = _artist.shows | sort: 'year' | reverse -%}
      {%- for _show in _shows -%}
        <li>
          <span class="artist-card__year">{{ _show.year }}</span> · {{ _show.event }}
          {%- if _show.city %}<br>{{ _show.city }}{% endif -%}
        </li>
      {%- endfor -%}
    </ul>
  </div>
{%- endfor -%}
</div>

{%- else -%}

<div class="music-placeholder">
  <p class="music-placeholder__title">To be filled in…</p>
  <p>Still putting this list together. Check back soon.</p>
</div>

{%- endif -%}
