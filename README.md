# Base Express Project

So for each web project that you start, you almost always run into the same issue of reconfiguring all of same settings that your previous project liekly used.  The goal of this project is to create the foundation for any web project and removing any redundant code used between projects.  With that said, currently the following features have been implemented.

## Webpack

Webpack is a great tool in order to minify and optimize the static content that you serve to the user.  In this project, I have set up the ability to minify js and css on a Production and Development level.  On Development, you still see all of the readable code for both types of file.  On Production, the files are minified in order to save memory and optimize the user's experience.

## Express

I've set up the basic framework to hook up server calls via node.  At the moment, there is only the index controller that contains calls to the root of the server, but the server is configured and ready to go.

## Moustache

For a rendering engine, I've set up Moustache in order be able to send data from the controller to the html.  This creates a nice MVC design structure for the app.  

## Future Plans
 
This framework is a good start, but still incredibly basic.  Here are some ideas below that could be used to enhance the project.

1. Template System: Be able to serve templates in which the content is wrapped within.  This way, you wouldn't need to manage headers and footers on each page.
2. Google Analytics: Add basic support for Google Analytics JS
