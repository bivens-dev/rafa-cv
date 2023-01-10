# Introduction
In this section we are going to build upon the theming concept from the first step and build it into a more complete feature.
This is a good example of a thing you will probably one day end up building for real and is another good chance to show 
you a bunch of new stuff you might not have seen before.

We are going to start by creating a bunch of new CSS styles for different color combinations. This is so as we build out the 
page it should become easy to just use really basic HTML and CSS like 

```html
<section class="surface-1">
    Example content goes here
</section>
```

We are going to start with a combination of 8 differnt types of these color combinations which we are going to call "surfaces" here.
They will all follow the same pattern from step 1 where we will have a light and dark theme version of each and it will be easy to 
switch between them using these techniques.

Next we are going to bring in some JavaScript and build a button that will allow users to manually toggle between the light and dark 
mode themes on the page. I'm going to show you 2 different ways of doing it.

The first is probably close to what you will have already seen in some of the courses. It's just plain HTML, JavaScript and CSS, nothing 
too fancy here but we will walk through it so you understand how it works first. This is a totally fine approach but as you will see we 
are going to end up with the code for this one feature in many different places. It's not too bad to keep track of right now because it 
is just one small feature but over time when you build a site with lots of different features, it is easy to start feeling overwhelmed 
and things will start to feel messy and complicated.

That is why I am going to show you a second way where we start to bring everything together into just 1 self contained file and we will 
actually build our own custom HTML tag just for our feature. It will be just like any other normal bit of HTML and you will then be able to
just add a tag on the page which we are going to call `<theme-toggle></theme-toggle>` and all of the logic will live inside of a JavaScript 
file which contains what is called a Web Component which I don't think you will have seen previously.

I wanted to introduce this idea to you because a lot of real world projects will end up using something like this and by the time you 
finally start to encounter frameworks like React or Vue etc they won't be so intimidating because they follow a very similar approach to 
what we are going to cover here.

Again, I wanted to give you a chance to be able to talk about things like this when you get to the interviews to show that you have had 
a chance to go beyond the basics and improve your chances of getting a good job out of this.