# domLib
A little javascript library designed for manipulating html DOM

# Installation
Installing this is as easy as copying the minifed js file into your directory and including it in the html head element.

# Documentation

### Basics
In this library, functions are accessed by doing d.[function name].

***
### getId
#### d.getId(id)
Used inplace of document.getElementById(id).

For example: d.getId("test") would get the id of "test", and is equivalent to document.getElementById("test").

You can directly use it, so you can do d.getId("test").innerHTML, and it will work fully.
***
### setTColour / setTColor (I will use the British spelling, you can use either)
#### d.setTColour(colour, id)
This sets the colour of the text in a specific id.

For example: d.setTColour("red", "paragraph1") would set all of the text in the id "paragraph1" to red. It can also support other colour schemes, such as rgb and hexadecimal.
***
### setSize
#### d.setSize(height, width, id)
This sets the size of an element by using it's id.

For example: d.setSize(500, 500, "paragraph1") would set "paragraph1" to be 500 by 500 pixels.
***
### setBackground
#### d.setBackground(type, data, settings, id)
This sets the background of an element with a wide arrange of options using it's id. However, if you use document.body as the id it changes the background for the whole body.

There are 2 types you can use, "colour" (Or "color") and "image". The id is the id of the element you want to change.

When using the "colour" type, the data is the colour you want to use, and you can either name it, use rgb or use hexadecimal.

When using the "image" type, the data is a link to the image you want to use, and you don't need to have the url() around it. The settings are default background settings, such as "no-repeat" and you can add more than one, for example "no-repeat right top", but it must follow the [shorthand properties](http://www.w3schools.com/css/css_background.asp).

For example: d.setBackground("colour", "red", "", "document.body") would set the whole page's background to red, which d.setBackground("image", "example.png", "no-repeat", "example1") would set the image to no-repeat in the element "example1"
***
### replaceText
#### d.replaceText(text, id)
This replaces the text in an element with an alternate set of text.

For example: The element "test" has the text "hi" in it. When you run d.replaceText("hello", "test"), the element "test" now has the text "hello" in it.
***
### addText
#### d.addText(text, id)
This adds the text to the end of an element.

For example: The element "test" has the text "hi" in it. When you run d.addText(" hello", "test"), the element "test" now has the text "hi hello" in it.
***
### clearText
#### d.clearText(id)
This clears the text in an element

For example: The element "test" has the text "hi" in it. When you run d.clearText(, "test"), the element "test" now has no text in it.
