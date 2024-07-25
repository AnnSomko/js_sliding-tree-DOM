var e=document.querySelectorAll("li"),n=document.querySelector("ul");e.forEach(function(e){var n=document.createElement("span");e.prepend(n),n.prepend(n.nextSibling)}),n.addEventListener("click",function(e){"SPAN"===e.target.tagName&&(e.target.nextSibling.hidden=!e.target.nextSibling.hidden)});
//# sourceMappingURL=index.64939809.js.map
