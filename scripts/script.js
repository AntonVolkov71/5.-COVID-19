(() => {

    const baseUrl = 'https://covid19.mathdro.id/api/confirmed';
    const _handleErr = (err) => {
        console.log(`Упсс ошибка. Подсказка - ${err}`);
    }
    const country = 'Russia';

    //объявлени классов
    const api = new Api(baseUrl);
    const content = new Content();
    const sortValues = new SortValues();
    const topTenCountries = new TopTenCountries(document.querySelector('.rating__table'));
    const coefficients = new Coefficients(document.querySelector('.diagram'));
    const russia = new Russia(document.querySelector('.rating__table_russia'));

    //вызов методов
    api.getDates()
        .then((data) => {
            content.contentApear(sortValues.maxConfirmed(data));
            content.headerApear(sortValues.maxConfirmed(data))
                .then(() => listenerScrollheader());

            return data
        })
        .then((data) => {
            topTenCountries.tenCountries(sortValues.sortConfirmed(sortValues.delSumIdentical(data)))
            return (data)
        })
        .then((data) => {
            russia.countries(sortValues.russiaRegion(data, country))

            return (data)
        })
        .then(data => coefficients.coefficientDeaths(sortValues.delSumIdentical(data)))
        .catch(_handleErr);

    const listenerScrollheader = () => {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.page__header')
            if (scrollY >= 200) {
                header.classList.add('header')
            } else {
                header.classList.remove('header')
            }
        })
    }
})()