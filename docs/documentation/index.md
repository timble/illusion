---
layout: default
title: Documentation
description: Documentation on how to get started with Illusion and an overview of available functions, mixins and styling.
---

{% include layout/splitter.md %}

## Getting started

### Step 1

{% highlight bash %}
$ yarn add timble/illusion --dev
{% endhighlight %}

### Step 2

Include [Modernizr](https://modernizr.com/) and at least add `JS - No JS detection` and `flexbox detection` if you're gonna use flexbox.

### Step 3

Create a SCSS file, something like:

{% highlight css %}
// Include Normalize before anything else
@import "node_modules/normalize";

// Define your variables before loading Illusion
@import: "variables";

// Load Illusion
@import "node_modules/illusion";

// Start writing code
.foo {
  @include gallery(4);
}
{% endhighlight %}

---

## Recommendations

### Clean CSS

Use [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) to eliminate duplicate code. Duplicate code is generated because Illusion doesn't know whether you already used a specific mixin in an element when you use it again.

### Autoprefixer

Use [autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) to add the browser prefixes you need for your project.

---

## Base styling

To stop all the copy pasting in this world we added some base styling in two levels.

### Level 1: Extendalize

The first level we call "Extendalize" and it basically [extends Normalize](https://github.com/timble/illusion/tree/master/scss/atoms) styling the way we think it should be.

By default the extendalize styling is set to false and can be [configured using variables](https://github.com/timble/illusion/blob/master/scss/tools/variables/_extendalize.scss).

#### Enable all extendalize features:

{% highlight css %}
$illusion-extendalize: true;
{% endhighlight %}

#### Enable individual extendalize features:

{% highlight css %}
$illusion-extendalize: false;
$illusion-extendalize-boxsizing: true;
$illusion-extendalize-svg: true;
{% endhighlight %}

#### Disable individual extendalize features:

{% highlight css %}
$illusion-extendalize: true;
$illusion-extendalize-image: false;
$illusion-extendalize-paragraph: false;
{% endhighlight %}

### Level 2: Element styling

The second level adds default styling for certain elements. The following elements are available:

#### Body fallback

For browsers that do not support `CSS calc()` there's an option to set the body width to make it look better on those older browsers.

Enable the body fallback styling by setting the following variable:

{% highlight css %}
$illusion-body-fallback: true;
{% endhighlight %}

[All options](https://github.com/timble/illusion/blob/master/scss/tools/variables/_body-fallback.scss).

#### Forms

Default [form styling](/examples/#form) is available.

{% highlight css %}
$illusion-form: true;
{% endhighlight %}

[All options](https://github.com/timble/illusion/blob/master/scss/tools/variables/_form.scss).

---

## Mixins

All settings are controlled by setting your own variables and load them before the Illusion variables are loaded.

Illusion comes with a great mixin and function library. All the parameters inside mixins are overwriteable.

{% include documentation/mixins/breakpoint.html %}
{% include documentation/mixins/button.html %}
{% include documentation/mixins/clearfix.html %}
{% include documentation/mixins/container.html %}
{% include documentation/mixins/content-block.html %}
{% include documentation/mixins/coverall.html %}
{% include documentation/mixins/flexbox.html %}
{% include documentation/mixins/fluid-type.html %}
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
{% include documentation/mixins/svg-background.html %}
{% include documentation/mixins/transition.html %}
{% include documentation/mixins/triangle.html %}
{% include documentation/mixins/visually-hidden.html %}
{% include documentation/mixins/visually-shown.html %}

---

## Functions

{% include documentation/functions/spacing.html %}
