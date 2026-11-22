---
# chronicles.md - Template for new chronicles
# Used by `hugo new chronicles/my-chronicle.md`.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
synthesis: ""        # 1-2 lines shown on the cards
author: ""           # person who wrote the chronicle
illustrator: ""      # person who made the illustrations
contributors: []     # people who helped, for example ["Prénom", "Prénom"]
# image: images/chronicles/my-image.jpg   # file in assets/, optional
---

Écrit ici la chronique, en Markdown.