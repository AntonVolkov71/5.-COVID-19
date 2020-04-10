
class Coefficients {
    constructor(diagram) {
        this.diagram = diagram
    }
    sortCoefDeath(info) {
        const coefDea = [...info];

        coefDea.map((el) => {

            let flag = 0;
            flag = el.recovered / el.confirmed * 100;

            el.coefDeaths = flag.toFixed(1)


        })
        coefDea.sort((a, b) => (this.coefDeaths(b.confirmed, b.deaths)) - (this.coefDeaths(a.confirmed, a.deaths)))

        return coefDea
    }

    createCoefficientDeaths(country, percentDeaths, percentRecover) {
        const diagRow = document.createElement('div');
        diagRow.classList.add('diagram__row');

        const diagCaption = document.createElement('div');
        diagCaption.classList.add('diagram__caption');

        const diagCounrty = document.createElement('p');
        diagCounrty.classList.add('diagram__country');
        diagCounrty.textContent = country;

        const diagAnalytics = document.createElement('p');
        diagAnalytics.classList.add('diagram__analytics');
        diagAnalytics.textContent = 'Смертность ';

        const diagramTypeDead = document.createElement('span');
        diagramTypeDead.classList.add('diagram__data', 'diagram__data_type_dead');
        diagramTypeDead.textContent = `${percentDeaths}% • Вылечилось `;

        const diagramTypeHealed = document.createElement('span');
        diagramTypeHealed.classList.add('diagram__data', 'diagram__data_type_healed');
        diagramTypeHealed.textContent = `${percentRecover}%`;

        const diagramLine = document.createElement('div');
        diagramLine.classList.add('diagram__line');


        const diagramVisualHealed = document.createElement('div');
        diagramVisualHealed.classList.add('diagram__visualisation', 'diagram__visualisation_type_healed');
        diagramVisualHealed.style.width = `${percentRecover}%`;

        const diagramVisualDead = document.createElement('div');
        diagramVisualDead.classList.add('diagram__visualisation', 'diagram__visualisation_type_dead');
        diagramVisualDead.style.width = `${percentDeaths}%`;

        diagRow.appendChild(diagCaption);
        diagRow.appendChild(diagramLine);
        diagCaption.appendChild(diagCounrty);
        diagCaption.appendChild(diagAnalytics);
        diagAnalytics.appendChild(diagramTypeDead);
        diagAnalytics.appendChild(diagramTypeHealed);
        diagramLine.appendChild(diagramVisualHealed);
        diagramLine.appendChild(diagramVisualDead);

        return diagRow
    }

    addCoef(card) {
        this.diagram.appendChild(card);
    }

    coefficientDeaths(info) {

        let res = this
            .sortCoefDeath(info)
            .filter((el) => {
                return el.confirmed > 5000
            })
        for (let i = 0; i < 10; i += 1) {

            this.addCoef(
                this.createCoefficientDeaths(res[i].countryRegion,
                    this.coefDeaths(res[i].confirmed, res[i].deaths),
                    this.coefDeaths(res[i].confirmed, res[i].recovered)
                )
            )
        }
    }

    coefDeaths(confirm, values) {
        const coef = (values / confirm) * 100;
        return coef.toFixed(2);
    }
}