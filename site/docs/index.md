---
layout: default
title: Documentation
---

## Getting started
### Step 1
{% highlight bash %}
$ bower install illusion --save //@TODO
{% endhighlight %}

### Step 2
Include Modernizr and at least add `JS - No JS detection` and `flexbox detection` if you're gonna use flexbox.

### Step 3
- Include Normalize and include it before anything else (Not included in Illusion). For example:
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

## Grid mixins

One of the most important aspects of a website is the grid it's based on. It can make a page feel balanced and in harmony when used right, but when used wrong a page may appear untrustworthy.

Illusion uses a grid that:
1. Is based on an 8 point grid
1. Has responsive gutters ranging from 16px to 40px
1. Is using calc() and pixels so vertical gutters follow horizontal ones
1. Comes with an optional fallback for the `<body>` element to have a set-width

### Available mixins:

#### @mixin container
Shouldn't be nested. Adds clearfix when used without flexbox and removes clearfix when used as flexbox. Adds left and right padding following the responsive gutters.

##### Arguments

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `flexbox` | `string` | `false` | Can be anything but false to work. For example both `@include container(flex);` and `@include container(true);` will enable flexbox |

##### Dependencies
For flexbox to work properly it uses Modernizr .flexbox.flexwrap

##### SCSS
{% highlight css %}
.foo {
  @include container();
}
.bar {
  @include container(flex);
}
{% endhighlight %}

##### CSS
{% highlight css %}
.foo {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
}

.foo:before,
.foo:after {
    display: table;
    content: " ";
}

.foo:after {
    clear: both;
}

.flexbox.flexwrap .bar {
    display: flex;
    flex-wrap: wrap;
    // And more...
}
{% endhighlight %}
---

## The 8 point grid
By placing everything on an 8 point grid you ensure that your design looks grisp on all screens. Even screens with a 1.5 dpi. <a href="https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632">Read more</a>

Another great advantage is that your whole design looks very balanced.

Exceptions could be fonts and their line-heights. For an optimal result you should try to maintain the line-height on the 8pt grid as much as possible. Whenever that's impossible because it looks weird you can always fall back to 4 pixel instead. You can have a line-height of 20px for example. It's adviced to keep the bottom margin on the 8pt grid.

### How to maintain your 8pt grid
The grid mixins are fully based on the 8pt grid so there's nothing special you'll have to do there

Paragraphs, headings and other styled block elements have a standard 24px bottom-margin with an exception for the headings. Headings have a 16px bottom-margin be a bit closer to the content it's representing to form a visual group.

For all other elements there are three more options to use
1. Use good old spacing variables that don't grow with the responisve gutters.
1. Use the spacing mixin to follow the responsive gutter.
1. If you don't want to automatically follow the responsive gutter you can use the spacing function.

#### Spacing variables
...

<p class="pull-top"><a href="#">See spacing variables</a>

#### Spacing mixin
The mixin follows the responsive breakpoints so you don't have to worry about that yourself. You can also stop the 'growing gutters' at any breakpoint (or custom width), it will keep the spacing from that breakpoint. It also accepts 0.5, 1 and 2 as an argument for the amount of spacing.

<p class="pull-top"><a href="#">See spacing mixin</a>

#### Spacing function
Accepts a value of 0.5, 1 or 2. If used in @include breakpoint it uses that current gutter. Also possible to define which 'size' it should use.

<p class="pull-top"><a href="#">See spacing function</a>

### Why the $illusion- prefix for some variables?
We make a difference between 'settings variables' and 'regular variables'. Settings variables are prefixed with `$illusion-` because they won’t change once set. Regular variables like `$spacing-` and `$color-` will be used inside your own SCSS, so we want to keep them short and memorisable

---

## Useful functions
De private grid functions hoeven hier niet bij

---

## Useful mixins
Allemaal useful

---

## Accessible forms
Forms are very important elements on your website. It is the way of getting connected with your audience. A lot of website hide their forms inside the styling of the page. Light grey borders with rounded corners and light shadows. More often that not these forms are not very accessible color contrast wise.

You can include the forms by setting the $illusion-form: to yes. Large fileds and large radio and checkboxes.

Based on BEM
<p class="pull-top"><a href="#">See example form</a>
