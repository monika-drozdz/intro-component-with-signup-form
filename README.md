# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![desktop preview](./screenshot.jpg)

### Links

- Solution URL: [Solution](https://github.com/monika-drozdz/intro-component-with-signup-form)
- Live Site URL: [Preview Site](https://monika-drozdz.github.io/intro-component-with-signup-form/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- JavaScript
- Mobile-first workflow

### What I learned

Usage of @mixin and @include at-rules in order to re-use chunks of styles: 

```scss

@mixin flex($direction) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

@mixin shadow($color, $opacity) {
  box-shadow: 0 .375em 0 rgba($color, $opacity);
}

.main-container {
  @include flex(column);
  margin: 0 auto;
}

.form-container {
  background-color: $white;
  padding: 1.5em;
  border-radius: .5em;
  @include shadow($dk-blue, .2);
}

```

### Useful resources

- [Sass documentation](https://sass-lang.com/documentation) 

## Author

- GitHub - [@monika-drozdz](https://github.com/monika-drozdz)
- Frontend Mentor - [@monika-drozdz](https://www.frontendmentor.io/profile/monika-drozdz)

