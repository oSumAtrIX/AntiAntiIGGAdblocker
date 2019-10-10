// ==UserScript==
// @name         Anti IGG Anti Adblocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block IGG Anti Adblocker
// @author       oSumAtrIX
// @match        http://dl.pcgamestorrents.com/*
// @grant        none
// ==/UserScript==

(function() {

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    sleep(3000).then(() => {
        document.getElementById('idModal').parentElement.remove()
    })
})();
