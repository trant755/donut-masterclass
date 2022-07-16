//! Скрипт плавной прокрутки по якорным ссылям
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  //? Время анимации в мс
  animationTime = 1000,
  //? Кадров за время анимации, чем больше тем плавнее
  framesCount = 250;

anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    let coordY =
      document.querySelector(item.getAttribute('href')).getBoundingClientRect()
        .top + window.pageYOffset;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;

      if (
        scrollBy > window.pageYOffset - coordY &&
        window.innerHeight + window.pageYOffset < document.body.offsetHeight
      ) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});
