# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The browser goes to the DNS to find the IP address of the server, it then request the files associated with the website, the server then sends the files for the browser to interpret.

## From start to finish how does that data reach you to be rendered in the browser?

The server use TCP/IP to send packets of data to your browser.  Once all the packets arrive they are assembled into the website

## What code is rendered in the browser?

The code that is in the body tag of the html document.

## What is the server-side code’s main function?

It handles request from the client and sends the desired data, so that it can be displayed in the browser

## What is the client-side code’s main function?

To request and display information from the server in a format that conveys the information to the user.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

However many are required to build a website with the required functionality.


## How many instances of the server-side code are available at any given time?

It depends on the service you pay for.  EC2 defaults at 20.

## What is runtime?

Runtime is the time from when the program starts until it finishes executing.

## How many instances of the databases connected to the server application are created?

It depends.  There will be an instance of the database that holds the current live data that is accessible on the web.  There could also be preproduction instances that have new functionality.
