
A place for dumping some miscellaneous around CQ5

analyse-access.sh
=================

This script is made to ease the analysis of the access.log files
producing a readable report for later thinking.

It produces the _overall requests number_, _GET vs POST_, _Request
distribution over time_ and more.

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

