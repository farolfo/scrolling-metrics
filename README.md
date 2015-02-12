# Scrolling Analytics (WIP)
Open source application that keeps track of what you are scrolling and how much time do you spend on each window. Improve your user experience!

In order to add _Scrolling Analytics_ to your web site, download and include the .js file in your web application. We will send information about the current scrolling status in the web page and you can see reports of which pages and sections are most seen!

###Overview

We don't want execute code on the main browser thread where the client web app is running. In order to achive this, we will use [service workers](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) to execute our code and send the scrolling data to our servers.

In order to collect the scorlling browser's data, we will use the properties:

* https://developer.mozilla.org/en-US/docs/Web/API/Window.innerHeight
* https://developer.mozilla.org/en-US/docs/Web/API/Element.scrollHeight
* https://developer.mozilla.org/en-US/docs/Web/API/Element.scrollTop
