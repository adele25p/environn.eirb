---
# articles.md - Template for new articles
# Used by `hugo new articles/my-article.md`.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
synthesis: ""        # 1-2 lines shown on the cards
author: ""           # person who wrote the article
illustrator: ""      # person who made the illustrations
contributors: []     # people who helped, for example ["Prénom", "Prénom"]
category: campus     # see data/categories.yaml
impact: 3            # 1 (low) to 5 (high)
# image: images/articles/my-image.jpg   # file in assets/, optional
---

Write the article here, in Markdown.