
A place for dumping some miscellaneous around CQ5

analyse-access.sh
=================

This script is made to ease the analysis of the access.log files
producing a readable report for later thinking.

It produces the _overall requests number_, _GET vs POST_, _Request
distribution over time_ and more.

The output will be in
[Markdown](http://daringfireball.net/projects/markdown/) syntax
therefore it will be easier to convert it to PDFs with tools like
[pandoc](http://johnmacfarlane.net/pandoc/) or showing it in a browser
with plugins like
[markdown viewer](https://addons.mozilla.org/en-US/firefox/addon/markdown-viewer/).

It can analyse as well custom path provided on the command line.

Taking from the comment within the file that will tell you how to run
it:

    # Analyse CQ access.log extrapolating various informations and producing a MarkDown output on stdout
    #
    # usage: 
    #    ./analyse-access.sh access.log.2013-*
    #
    # you can provide additional custom paths to analyse on the command line
    #    ./analyse-access.sh access.log.2013-* /my/custom/path/1 /my/custom/path/2
    #
    # you can save the output by a simple piping
    #    ./analyse-access.sh access.log.2013-* | tee yr2013.md

EditMode.js
===========

Often on CQ development you have to understand in javascript if you're
on author, publish or some sub-modes of author.

CQ helps you with the
[CQ.WCM](http://dev.day.com/docs/en/cq/current/widgets-api/index.html?class=CQ.WCM)
object but it won't be (and should not) available on publish.

The object will help you on a simple wrapping around and can be used
straight in your custom clientlibs when needed.

Taking from the comment within the file itself

    * Simple javascript object meant to be used within a CQ development to understand on a Javascript side which my Edit Mode is.
    * 
    * USAGE:
    *      1) Drop the file in your clientlib
    *      2) Reference it in your js.txt
    *
    *      You can now use it as it will automatically create an "editmode" object
    *              (editmode.isEditMode())    ? "I'm Authoring"   : ""
    *              (editmode.isPreviewMode()) ? "I'm in Preview"  : ""
    *              (editmode.isDesignMode())  ? "I'm in Design"   : ""
    *              (editmode.isDisabled())    ? "I'm in Disabled" : ""
