Project Template

This is a template that I think would be useful to use for all projects.
The Grunt.js website (http://gruntjs.com/) will be useful especially the Getting Started section. Also if you are interested in learning
how to do this from scratch this video (http://css-tricks.com/video-screencasts/130-first-moments-grunt/) will be very helpful.

After cloning this project the first thing you need to do is go to terminal:

npm install -g grunt-cli

If you get an error that states 'Please try running this command again as root/Administrator.'
Simply just add 'sudo' to the beginning.

Next install:
npm install grunt --save-dev

Now you just need to install the dependencies. Since, I already created the package.json all you need to do is type `npm install`.

In this project I have the following:
"grunt-contrib-uglify" (Used to minify code)
"grunt-contrib-concat" (Used to concat files which helps reduce the size)
"grunt-contrib-sass" (Used to compile SASS to CSS)
"grunt-contrib-connect" (Used to create a server)
"grunt-contrib-jshint" (A tool that helps to detect errors and potential problems in your JavaScript code as well as write cleaner code.)
"grunt-contrib-watch" (Watches your files for changes)


*You may also have to install clean-css.
*For SASS you also need to:
gem install sass
gem install compass

Usage:
I have everything but the 'grunt server' and 'grunt watch' set as a default task which means all you need to do is type 'grunt' into terminal and they will automatically run.
Keep in mind typing 'grunt' into terminal is necessary to see changes to your 'sass' code as well as to check your javaScript.

If you want to start a server simply just type 'grunt connect' and Grunt will start a server and open the window for you. If you need additional windows
just copy and paste into a new tab and change the /path as needed.

I imagine overtime we may want to add something else that I don't have here. The process to install it would be very similar and it will be listed
on the website's documentation.

Usage for Grunt Watch:
To use Grunt Watch simply type 'grunt watch -v'

Note if you use Grunt watch you will need to download the Chrome plugin LiveReload (https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).
It likely exist for other browsers as well.
Alternatively, you can include: <script src="//localhost:35729/livereload.js"></script> on every html page.


Grunt watch is cool because apart from starting a server it does everything for you. The only problem is it can be buggy at times.
If you do have any errors you are going to have to end the task (hit control c) and then restart (simply press the "up arrow"). Also there can be a delay of anywhere from
2 - 10 seconds depending on how many things you changed and how big the files are.
I personally prefer to compile everything myself by running "grunt" and then just hitting the 'up arrow' every time. It's completely up to you.

Everything Else:
Bootstrap is preloaded with the Sass configuration. I purposely commented out many files that may not often be used in the 'bootstrap.scss' file
so that the site would run faster. At any time if you need to use them please refer to that file.

There is a standard 'styles.scss' that compiles a development version css (stylesDevelopment.css) and a production version which is minified (styles.css).
I did the same thing with the scripts.js file, one for development and a minified one for production.

If you guys have any further questions or find bugs please let me know. I'm going to play with Sass and Bootstrap components and make updates, if needed.



Also remember to add the standard documentation that Abdullah wants us to use for each project
That file should list:

1 - Name of open source libraries used

2 - Link to site or GitHub repository where you downloaded code

3 - Type of license

4 - Link to the license terms page

Other Notes:
The Sass version of Bootstrap did not come with a minified version of the bootstrap.js file.