---
layout: resume_singlepage
---
####Christopher Markus
Full stack .Net software developer

{% assign result = site.resume | where: "type","contact_item" %}
{% for section in result %}
{{ section.content }}
{% endfor %}

{% assign result = site.resume | where: "type","summary_item" %}
{% for section in result %}
{{ section.content }}
{% endfor %}

{% assign result = site.resume | where: "type","skill_item" %}
{% for section in result %}
{{ section.content }}
{% endfor %}

{% assign result = site.resume | where: "type","work_item" %}
{% for section in result %}
{{ section.content }}
{% endfor %}

{% assign result = site.resume | where: "type","project_item" %}
{% for section in result %}
{{ section.content }}
{% endfor %}

{% assign result = site.resume | where: "type","patent_item" %}
{% for section in result %}
{{ section.content }}
{% endfor %}

{% assign result = site.resume | where: "type","education_item" %}
{% for section in result %}
{{ section.content }}
{% endfor %}