---
layout: home
title: Illusion
---

## What is Illusion?
Illusion is an opinionated, mobile-first, progressive enhanced, accessible, SCSS base kit to kickstart websites with and helps you keep a maintainable SCSS code base.

Illusion is built to be used on top of <a href="#">Modernizr</a> and <a href="#">Normalize</a>. When included, Illusion does nothing. Enable features by <a href="#">setting SCSS variables</a> or using mixins.

Illusion let's you write consistent and clean code in less time. Based on an 8 point grid for harmonized design. Illusion is a combination of modern web-design philosophies, base styling and a mixin library.

The reason Illusion exists is because we found ourselves copy-pasting code from project to project even though we already used several libraries. The solution for a developer is an easy one then: just create your own!

---

### Opinionated
Illusion is very opinionated. We believe in certain values and philosophies. Illusion could be very useful to you if you share the same ideas:

- Mobile first philosophy and design
- Progressive enhancement
- Accessibility
- Maintainable CSS
- Harmonized design

---

### 8 point responsive grid

---

### Base styling

To stop all the copy pasting in this world we added some base styling. There are two levels that create base styling.

#### Level 1

The first level we call "Extendalize" and it basically extends Normalize styling the way we like it.

For example we remove top margins of elements and apply a bottom margin to block level elements that need it. We also remove the bottom margin from the last element in a parent.

Enable all extendalize features by setting the `$illusion-extendalize` to `true`

Individual features can be enabled by leaving `$illusion-extendalize` to `false` and set the feature itself to `true`. For example: `$illusion-extendalize-boxsizing: true;`

#### Level 2

The second level adds default styling for forms and sets a fallback for the body element for older browsers.

---

### Mixins

Illusion comes with a great mixin and function library. More info here