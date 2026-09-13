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

{%- comment -%} Display order is the file order in _data/artists.yml. {%- endcomment -%}
{%- assign _total_shows = 0 -%}
{%- for _artist in _artists -%}
  {%- assign _total_shows = _total_shows | plus: _artist.shows.size -%}
{%- endfor -%}

<p class="artist-stats"><strong>{{ _artists.size }}</strong> artists · <strong>{{ _total_shows }}</strong> shows</p>

<div class="artist-grid">
{%- for _artist in _artists -%}
  <div class="artist-card">
    <a class="artist-card__media" {% if _artist.spotify %}href="{{ _artist.spotify }}" target="_blank" rel="noopener" title="{{ _artist.name }} on Spotify"{% endif %}>
      {%- if _artist.image -%}<img src="{{ _artist.image }}" alt="" loading="lazy">{%- endif -%}
      {%- if _artist.shows.size > 1 -%}<span class="artist-card__count">×{{ _artist.shows.size }}</span>{%- endif -%}
      <h3 class="artist-card__name">{{ _artist.name }}</h3>
    </a>
    <ul class="artist-card__shows">
      {%- assign _shows = _artist.shows | sort: 'date' | reverse -%}
      {%- for _show in _shows -%}
        <li>
          <span class="artist-card__date">{{ _show.date | date: '%b %Y' }}</span>
          <span class="artist-card__event">{{ _show.event }}</span>
          <span class="artist-card__place">{% if _show.venue %}{{ _show.venue }} · {% endif %}{{ _show.city }}</span>
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
