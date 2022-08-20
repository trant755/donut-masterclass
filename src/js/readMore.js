
    const article = document.querySelector('.article');
    const btn = document.querySelector('.program__article_btn');
    const maxHigh = window.getComputedStyle(article).maxHeigth;
    console.log('maxHigh: ', maxHigh);

    btn.addEventListener('click', (event) => {
        let target = event.target;
        heigthToggle();
        target.textContent === 'Read more' ? target.textContent = 'Read less' :
        target.textContent = 'Read more';  
        
    });
    
    function heigthToggle() {
        article.classList.contains('read_more') ? article.classList.replace('read_more', 'full-heigth') :
        article.classList.replace('full-heigth', 'read_more');
        
    }