// === Author and Copyright ===================================================================
//
// Copyright (c) 2012 Christian Plessl <christian@plesslweb.ch>
//
// === License ================================================================================
//
// Permission is hereby granted, free of charge, to any person obtaining a copy 
// of this software and associated documentation files (the "Software"), to deal in 
// the Software without restriction, including without limitation the rights to use, 
// copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
// and to permit persons to whom the Software is furnished to do so, subject to the 
// following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or 
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
// PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
// FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
// DEALINGS IN THE SOFTWARE.

// === Documentation ==========================================================================
//
// By default, Google Analytics does neither track download of files nor following outgoing 
// links.
// 
// This bit of code adds these capabilities to Google Analytics using a bit of jQuery magic.
// Every link that shall be tracked, is required to have a "track" class attribute.
//
// Whenever a user follows such a "tracked link", an page view event is logged with Google 
// Analytics. All page views have a virtual 'link' prefix, which makes it easy to get 
// information about all followed links.
//
// Example: following the link:
//
//     <a class="track" href="2012_our_whitepaper.pdf">Whitepaper</a>
// 
// will be registerd by Google Analytics as an access to 
// 
//     "/link/2021_our_whitepaper".
//
// This code requires that jQuery and Google Analytics is installed.

$(document).ready(function() {
  $("a.track").click(function() {
    var prefix = "link/"
    var msg = $(this).attr("href");
    re = /^(\w+):\/\//;
    tracking_url = msg.replace(re,"$1/");
    _gaq.push(['_trackPageview', prefix + tracking_url]);
  });
});
