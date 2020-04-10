class Russia {
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

    addCountry(card) {
        this.table.appendChild(card);
    }

    countries(data) {
        this.addCountry(
            this.createTopConfimed(
                data[0].countryRegion,
                data[0].confirmed,
                data[0].deaths,
                data[0].recovered
            )
        )
    }
}