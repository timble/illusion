---
layout: default
title: Documentation
---

{% include layout/splitter.md %}

## Getting started

### Step 1

{% highlight bash %}
$ yarn add timble/illusion --dev
{% endhighlight %}

### Step 2

Include Modernizr and at least add `JS - No JS detection` and `flexbox detection` if you're gonna use flexbox.

### Step 3

- Include Normalize and include it before anything else (Not included in Illusion).
- Define your variables before loading illusion
- Load illusion
- Add your own mixins after illusion

#### Your base SCSS file might look like this:

{% highlight css %}
// Normalize
@import "bower_components/normalize";

// Variables - Hold your own variables as well as Illusion overrides
@import: "variables";

// Import Illusion
@import "bower_components/illusion";

// Mixins - You can overwrite Illusion mixins here if you wish
@import "mixins";
{% endhighlight %}

---

## Mixins

{% include documentation/mixins/breakpoint.html %}
{% include documentation/mixins/button.html %}
{% include documentation/mixins/clearfix.html %}
{% include documentation/mixins/container.html %}
{% include documentation/mixins/content-block.html %}
{% include documentation/mixins/coverall.html %}
{% include documentation/mixins/flexbox.html %}
{% include documentation/mixins/font-smoothing.html %}
{% include documentation/mixins/gallery.html %}
{% include documentation/mixins/hover.html %}
{% include documentation/mixins/js-disabled.html %}
{% include documentation/mixins/js-enabled.html %}
{% include documentation/mixins/modernizr.html %}
{% include documentation/mixins/no-flexbox.html %}
{% include documentation/mixins/pseudo.html %}
{% include documentation/mixins/ratio-block.html %}
{% include documentation/mixins/reset.html %}
{% include documentation/mixins/shift.html %}
{% include documentation/mixins/spacing.html %}
{% include documentation/mixins/span.html %}
{% include documentation/mixins/transition.html %}
{% include documentation/mixins/triangle.html %}
{% include documentation/mixins/visually-hidden.html %}
{% include documentation/mixins/visually-shown.html %}

---

## Functions

{% include documentation/functions/spacing.html %}

---

## Accessible forms

Forms are very important elements on your website. It is the way of getting connected with your audience. A lot of website hide their forms inside the styling of the page. Light grey borders with rounded corners and light shadows. More often that not these forms are not very accessible color contrast wise.

You can include the forms by setting the $illusion-form: to yes. Large fileds and large radio and checkboxes.

Based on BEM
