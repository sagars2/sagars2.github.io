window.TEXT_SEARCH_DATA={
  'pages':[
    {%- for _item in site.data.navigation.header -%}
    {%- unless forloop.first -%},{%- endunless -%}
    {%- if _item.title -%}
      {%- assign _title = _item.title -%}
    {%- else -%}
      {%- include snippets/get-string-from-locale-config.html locale=_item.titles -%}
      {%- assign _title = __return -%}
    {%- endif -%}
    {%- include snippets/get-nav-url.html path=_item.url -%}
    {%- assign _url = __return -%}
    {'title':{{ _title | jsonify }},'url':{{ _url | jsonify }}}
    {%- endfor -%}
  ]
  {%- for _collection in site.collections -%}
    {%- if _collection.docs.size > 0 -%}
    ,'{{ _collection.label }}':[
      {%- for _article in _collection.docs -%}
      {%- unless forloop.first -%},{%- endunless -%}
      {'title':{{ _article.title | jsonify }},
      {%- include snippets/prepend-baseurl.html path=_article.url -%}
      {%- assign _url = __return -%}
      'url':{{ _url | jsonify }}}
      {%- endfor -%}
    ]
    {%- endif -%}
  {%- endfor -%}
};