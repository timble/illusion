---
layout: default
title: Frequently Asked Questions
description: The go-to place when you've got unanswered questions after reading the entire documentation site ;)
---

{% include layout/splitter.md title="Questions" %}

## Why the $illusion- prefix for some variables?

We make a difference between 'settings variables' and 'regular variables'. Settings variables are prefixed with `$illusion-` because they won’t change once set. Regular variables like `$spacing-` and `$color-` will be used inside your own SCSS, so we want to keep them short and memorisable.
