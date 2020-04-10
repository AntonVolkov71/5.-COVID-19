class TopTenCountries {
    constructor(table) {
        this.table = table
    }
    createTopConfimed(countryRegion, confirmed, deaths, recovered) {
        const tr = document.createElement('tr');
        const tdCountry = document.createElement('td');
        const tdConfirmed = document.createElement('td');
        const tdDeaths = document.createElement('td');
        const tdRecovered = document.createElement('td');

        tr.classList.add('table__row');
        tdCountry.classList.add('table__data');
        tdConfirmed.classList.add('table__data');
        tdDeaths.classList.add('table__data');
        tdRecovered.classList.add('table__data');

        tdCountry.textContent = countryRegion;
        tdConfirmed.textContent = confirmed.toLocaleString();
        tdDeaths.textContent = deaths.toLocaleString();
        tdRecovered.textContent = recovered.toLocaleString();

        tr.appendChild(tdCountry);
        tr.appendChild(tdConfirmed);
        tr.appendChild(tdDeaths);
        tr.appendChild(tdRecovered);

        return tr
    }

    addFirst10Countries(card) {
        this.table.appendChild(card);
    }

    tenCountries(sortData) {
        for (let i = 0; i < 10; i += 1) {
            this.addFirst10Countries(
                this.createTopConfimed(
                    sortData[i].countryRegion,
                    sortData[i].confirmed,
                    sortData[i].deaths,
                    sortData[i].recovered
                )
            )
        }
    }
}