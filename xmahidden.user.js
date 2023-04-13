// ==UserScript==
// @name         XMA Hidden Hidden
// @namespace    XMA Hidden Hidden
// @version      0.269
// @description  try to take over the world!
// @author       You
// @match        https://www.xivmodarchive.com/*
// @icon         https://www.xivmodarchive.com/favicon.png
// @grant        none
// @run-at       document-end
// @updateURL     https://github.com/Ghoulfriend/fortnite/raw/main/xmahidden.user.js
// @downloadURL   https://github.com/Ghoulfriend/fortnite/raw/main/xmahidden.user.js
// ==/UserScript==

(function() {
    'use strict';
function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

    function doit(){
contains('a', 'Hidden Mod')[0].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[1].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[2].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[3].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[4].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[5].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[6].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[7].parentElement.parentElement.parentElement.style.display = "none"
contains('a', 'Hidden Mod')[8].parentElement.parentElement.parentElement.style.display = "none"
    }

       setTimeout(doit, 0)
})();
