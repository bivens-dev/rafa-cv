# Introduction

In this section we are going to start building out a real simple intro section to give recruiters and potential employers an honest introduction to you 
and encourage them to get in touch. 

We use some responsive design techniques here as well to change how this section looks depending on how big the screen is.

## Container
We are going to create a `container` class here that we will use for the rest of the page to make sure it looks good on screens of all sizes. The idea 
here is that we don't want to take up the whole width of the screen like we did in the top menu section or the part we just built in Step 4. So this way 
we take up almost the entire screen width on a phone and we get bigger on larger screens but we also make a **maximum** size so it doesn't look weird 
on big screens.

This is a pretty common thing that you will come across in real life as well so it's a good opportunity to figure out how to build it as it can make your 
pages look much more professionally designed.

We will use it like this:

```html
<div class="container">
    <!-- Rest of our content goes here -->
</div>
```

The CSS we are going to use here is also not too complicated but might look a bit weird at first.

```css
.container {
  /* This line just says whatever room we have left on the page put the content in the center */
  margin-inline: auto;
  /* This clamp thing says whats the MINIMUM size you want, the IDEAL size you want and the MAX */
  width: clamp(16rem, 95vw, 85rem);
  /* Same thing here for the padding. I got these values from elsewhere I know they look confusing */
  padding-inline: clamp(1.375rem, 1.2rem + 0.89vw, 2rem);
  /* Whatever content we have inside this container we want to use relative positioning */
  position: relative;
}
```


