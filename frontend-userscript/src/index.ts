// ==UserScript==
// @name         Prebid Professor Analyzer (POC)
// @description  This script helps user to collect data about work of Prebid slots on the page and analyze it using OpenAI
// @version      0.1.0
// @author       Cleo-s / Mykhailo Syrota
// @namespace    https://github.com/Cleo-s
// @homepageURL  https://github.com/Cleo-s
// @match        *://*/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

import { initPanel } from "./ui/panel";

function test(): string {
    return '[Prebid Analyzer] userscript loaded';

}

initPanel();
console.log(test());