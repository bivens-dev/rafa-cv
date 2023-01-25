# Introduction
This section starts to focus more on adding our first real content sections to the page and giving the page a basic layout that we can work with.

## Layout Approach
The layout for the page needs to basically have 3 main components.
1. The top header section
2. The main content of the page
3. The footer section

We want to set it up where the header and the footer only really take up as much size as needed. However, for the main section we want that to then take up the rest of the page. For some of these things they are super common and appear on lots of different websites so you don't have to write that code yourself.

Bookmark this page: https://web.dev/patterns/layout/ so you can refer back to it later on when you need it.

We end up using two of the examples from that page here:
1. The first one is called `Pancake Stack` [Documentation Link](https://web.dev/patterns/layout/pancake-stack/) is what we use to do the main layout I was talking about where we just set up our page like this and everything just works:

```html
<html>
<head><!-- Head stuff goes here --></head>
<body class="pancake-stack">
  <header>
    <!-- Header content goes here -->
  </header>
  <main>
    <!-- Main content goes here -->
  </main>
  <footer>
    <!-- Footer stuff goes here -->
  </footer>
</body>
</html>
```

2. We also use another one of those patterns called `Content Center` [Documentation Link](https://web.dev/centering-in-css/) for when we have a scenario where we need to center some content inside of another section. You can see two examples of this already. In the first main section where we have your name etc we make sure that is all centered inside of that part of the page. We also do the same thing in the footer with the links we put there.

## Hero Section
Sometimes you will hear people talk about these really big sections at the top of a page as the `Hero section` on the page. I just wanted to call out a couple of things to keep in mind about it so far.

### Background Images
This is also a very common thing that people tend to use all the time where they have a background image and then text over the top of it.

The problem with that is that it can sometimes make it really hard to read so you might do things like 
- Put a semi-transparent color over the top of it
- Blur the image so it isn't so sharp.

We do both of those things in this example. When we are in the light or dark modes we even change the color we use as well to match other parts of the site. We also blur the image a bit more on the light version to make it read a bit better.

Another technique worth calling out here is you will notice that we are using 3 different versions of the same image all with different file formats here. This is a trick to make websites load faster. Basically, this code says to the browser: here are 3 different file formats in order of smallest filesize to largest. Pick the first one in that list that you know how to display (different browsers don't all know about things like `avif` image formats for example) and download that file.

So just to walk through that code with a bit more context here is what it looks like:

```css
.hero-section {
  /* 
    This next line is for browsers who don't understand the next part 
    think of it like a "fallback" as the "default option"
  */
  background-image: url("../images/porto-river-sunset.jpg");
  
  /* 
    Some browsers understand this -webkit-image-set thing we have here 
    and it works how I said above. If browsers understand it they will 
    go through this list from top to bottom until they realise an image 
    type that they support. So we list them from smallest filesize to largest
  */
  background-image: -webkit-image-set(
    url("../images/porto-river-sunset.avif") type("image/avif"),
    url("../images/porto-river-sunset.webp") type("image/webp"),
    url("../images/porto-river-sunset.jpg") type("image/jpeg")
  );

  /* 
    Some other browsers don't understand the -webkit-image-set code 
    but DO understand this image-set one instead. The logic is the same 
    as above but you can see how we are starting to come up with a solution 
    that works in ALL browsers and not just modern ones.

    It's possible to get tools that do a lot of this work for you automatically
    but for now I just wanted to show you what it looks like when you do it 
    manually so it won't confuse you in the future.
  */
  background-image: image-set(
    url("../images/porto-river-sunset.avif") type("image/avif"),
    url("../images/porto-river-sunset.webp") type("image/webp"),
    url("../images/porto-river-sunset.jpg") type("image/jpeg")
  );

  /* 
    The rest of this code works in all browsers and just sets some configuration 
    about how we want the image to be displayed. Like for example if the screen is 
    so big that it has room to show the image twice in the same space it could do that 
    but that would look silly for our scenario so we say `no-repeat` here.
  */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
}
```

If you want a more detailed breakdown on this topic you could take a look at this video https://www.youtube.com/watch?v=zHZRFwWQt2w this guy in general is actually pretty good, he covers things that range from beginner friendly to very advanced so don't worry if lots of it doesn't make sense at first.