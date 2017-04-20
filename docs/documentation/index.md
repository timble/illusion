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

## Grid


### @mixin container
Shouldn't be nested. Adds clearfix when used without flexbox and removes clearfix when used as flexbox. Adds a max-width and left and right padding following the responsive gutters.

#### Arguments

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `flexbox` | `boolean` | `false` | Enables flexbox on container. For example `@include container(true);` will enable flexbox |

#### Dependencies
For flexbox to work properly it uses Modernizr `.flexbox.flexwrap`

#### SCSS
{% highlight css %}
.foo {
  @include container;
}
{% endhighlight %}

#### CSS
{% highlight css %}
.foo {
  margin-left: auto;
  margin-right: auto;
  max-width: 1176px;
  padding-left: 16px;
  padding-right: 16px;
}

.foo:before, .foo:after {
  display: table;
  content: " ";
}

.foo:after {
  clear: both;
}

@media screen and (min-width: 560px) {
  .foo {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media screen and (min-width: 1024px) {
  .foo {
    padding-left: 32px;
    padding-right: 32px;
  }
}
{% endhighlight %}

---

### @mixin span
...

#### Arguments

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `span` | `list` | - | .....  |
| `fromto` | `list` | `false to false` | .....  |
| `amount` | `number` | `1` | Gutter amount. defaults to `1` and can be set to `0.5`, `1` or `2` |
| `bottom` | `boolean` | `false` | When set to `true` it also adds a bottom gutter  |
| `float` | `string` | `left` | .....  |
| `defaultProperties` | `boolean` | `true` | If set to `false` the mixin won't add the `float` property nor the `margin` property on `:first-child` and `:last-child` |
| `omega` | `number` | `null` | Used by the `gallery mixin` |

#### SCSS
{% highlight css %}
.foo {
  @include span(6);
}
{% endhighlight %}

#### CSS
{% highlight css %}
.foo {
  width: calc((100% - 16px) / 2);
  margin-left: calc(16px);
  float: left;
}

.foo:first-child {
  margin-left: 0;
}

.foo:last-child {
  margin-right: -1px;
}

@media screen and (min-width: 560px) {
  .foo {
    width: calc((100% - 24px) / 2);
    margin-left: calc(24px);
  }
}

@media screen and (min-width: 1024px) {
  .foo {
    width: calc((100% - 32px) / 2);
    margin-left: calc(32px);
  }
}
{% endhighlight %}

##### Breakpoints use
It's best not to use this mixin inside a breakpoint since the mixin itself is creating media queries. So to avoid creating a LOT of duplicate code rather use the mixin itself to create breakpoints:

{% highlight scss %}
// BAD
.foo {
    @include span(6);
    @include breakpoint($beta) {
        @include span(4);
    }
}

// GOOD
.foo {
    @include span(6, 0 to $beta);
    @include span(4, $beta to $charlie, $defaultProperties: false);
    @include span(3, $charlie to $delta, $defaultProperties: false);
}

// $defaultProperties set to false on all except first mixin
// While this is not mandatory it is adviced to minimize compiled code
{% endhighlight %}

---

### @mixin gallery
Shortcut to create gallery-style grids. Adds clearing on nth-child items.

#### Arguments

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `span` | `list` | - | .....  |
| `fromto` | `list` | `false to false` | .....  |
| `amount` | `number` | `1` | Gutter amount. defaults to `1` and can be set to `0.5`, `1` or `2` |
| `bottom` | `boolean` | `true` | Set to `false` if you don't want bottom gutters  |
| `float` | `string` | `left` | .....  |
| `defaultProperties` | `boolean` | `true` | If set to `false` the mixin won't add the `float` property nor the `margin` property on `:first-child` and `:last-child` |

#### SCSS
{% highlight css %}
.foo {
  @include gallery(4);
}
{% endhighlight %}

#### CSS
{% highlight css %}
.foo {
    width: calc((100% - 32px) / 3);
    margin-left: calc(16px);
    margin-bottom: calc(16px);
    float: left;
}

.foo:nth-child(3n) {
    margin-right: -1px;
}

.foo:nth-child(3n+1) {
    margin-left: 0;
    clear: left;
}

.foo:first-child {
    margin-left: 0;
}

@media screen and (min-width: 560px) {
    .foo {
        width: calc((100% - 48px) / 3);
        margin-left: calc(24px);
        margin-bottom: calc(24px);
    }

    .foo:nth-child(n) {
        clear: none;
        margin-left: calc(24px);
        margin-right: 0;
    }

    .foo:nth-child(3n) {
        margin-right: -1px;
    }

    .foo:nth-child(3n+1) {
        margin-left: 0;
        clear: left;
    }
}

@media screen and (min-width: 1024px) {
    .foo {
        width: calc((100% - 64px) / 3);
        margin-left: calc(32px);
        margin-bottom: calc(32px);
    }

    .foo:nth-child(n) {
        clear: none;
        margin-left: calc(32px);
        margin-right: 0;
    }

    .foo:nth-child(3n) {
        margin-right: -1px;
    }

    .foo:nth-child(3n+1) {
        margin-left: 0;
        clear: left;
    }
}
{% endhighlight %}

##### Breakpoints use
It's best not to use this mixin inside a breakpoint since the mixin itself is creating media queries. So to avoid creating a LOT of duplicate code rather use the mixin itself to create breakpoints:

{% highlight scss %}
// BAD
.foo {
    @include gallery(6);
    @include breakpoint($beta) {
        @include gallery(4);
    }
}

// GOOD
.foo {
    @include gallery(6, 0 to $beta);
    @include gallery(4, $beta to $charlie, $defaultProperties: false);
    @include gallery(3, $charlie to $delta, $defaultProperties: false);
}

// $defaultProperties set to false on all except first mixin
// While this is not mandatory it is adviced to minimize compiled code
{% endhighlight %}

---

### @mixin shift
Visually change the order of elements...

#### Arguments

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `shift` | `list` | - | .....  |
| `fromto` | `list` | `false to false` | .....  |
| `amount` | `number` | `1` | Gutter amount. defaults to `1` and can be set to `0.5`, `1` or `2` |
| `defaultProperties` | `boolean` | `true` | If set to `false` the mixin won't add the `position` property |

#### SCSS
{% highlight css %}
.foo {
  @include shift(4);
}
{% endhighlight %}

#### CSS
{% highlight css %}
.foo {
    left: calc(((100% - 16px) / 2) + 16px);
    position: relative;
}

@media screen and (min-width: 560px) {
    .foo {
        left: calc(((100% - 24px) / 2) + 24px);
    }
}

@media screen and (min-width: 1024px) {
    .foo {
        left: calc(((100% - 32px) / 2) + 32px);
    }
}
{% endhighlight %}

##### Breakpoints use
It's best not to use this mixin inside a breakpoint since the mixin itself is creating media queries. So to avoid creating a LOT of duplicate code rather use the mixin itself to create breakpoints:

{% highlight scss %}
// BAD
.foo {
    @include shift(6);
    @include breakpoint($beta) {
        @include shift(4);
    }
}

// GOOD
.foo {
    @include shift(6, 0 to $beta);
    @include shift(4, $beta to $charlie, $defaultProperties: false);
    @include shift(3, $charlie to $delta, $defaultProperties: false);
}

// $defaultProperties set to false on all except first mixin
// While this is not mandatory it is adviced to minimize compiled code
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