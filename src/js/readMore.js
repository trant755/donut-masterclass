
    const article = document.querySelector('.article');
    const btn = document.querySelector('.program__article_btn');

    btn.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.program__article_btn')) {
            console.log('target: ', target);

            article.classList.toggle('read_more');
        }
    });
