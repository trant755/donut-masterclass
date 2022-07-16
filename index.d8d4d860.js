!function(){
//! Скрипт плавной прокрутки по якорным ссылям
var e=[].slice.call(document.querySelectorAll('a[href*="#"]'));e.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=document.querySelector(e.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,o=setInterval((function(){var e=n/250;e>window.pageYOffset-n&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,n),clearInterval(o))}),4)}))}))}();
//# sourceMappingURL=index.d8d4d860.js.map
