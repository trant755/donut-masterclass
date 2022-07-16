//! Скрипт плавной прокрутки по якорным ссылям
const e=[].slice.call(document.querySelectorAll('a[href*="#"]'));e.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();let n=document.querySelector(e.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset,o=setInterval((function(){let e=n/250;e>window.pageYOffset-n&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,e):(window.scrollTo(0,n),clearInterval(o))}),4)}))}));
//# sourceMappingURL=index.2eccd261.js.map
