
    const article = document.querySelector('.article');
    const btn = document.querySelector('.program__article_btn');

    btn.addEventListener('click', (event) => {
        let target = event.target;
        article.classList.toggle('read_more');
        target.textContent === 'Read more' ? target.textContent = 'Read less' :
        target.textContent = 'Read more';            
    
    });
