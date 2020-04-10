class Content {
    
    headerApear(data) {
        const headerTotal = document.querySelector('.header__total');
        headerTotal.textContent = data.toLocaleString();

        return Promise.resolve()
    }

    contentApear(data) {
        const contentTotal = document.querySelector('.total__number');
        contentTotal.textContent = data.toLocaleString();
    }
}