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

## Grid mixins

One of the most important aspects of a website is the grid it's based on. It can make a page feel balanced and in harmony when used right, but when used wrong a page may appear untrustworthy.

Illusion uses a grid that:
1. Is based on an 8 point grid
1. Has responsive gutters ranging from 16px to 32px (can be overwritten)
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
  @include container;
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

@media screen and (min-width: 560px) {
    .foo {
        padding-left: 24px;
        padding-right: 24px;
    }
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



##### Spacing variables

See spacing variables

##### Spacing mixin
The mixin follows the responsive breakpoints so you don't have to worry about that yourself. You can also stop the 'growing gutters' at any breakpoint (or custom width), it will keep the spacing from that breakpoint. It also accepts 0.5, 1 and 2 as an argument for the amount of spacing.

See spacing mixin

##### Spacing function
Accepts a value of 0.5, 1 or 2. If used in @include breakpoint it uses that current gutter. Also possible to define which 'size' it should use.

See spacing function