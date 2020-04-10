class SortValues {

    maxConfirmed(data) {
        let sumConfirmed = 0;
        data.forEach(element => sumConfirmed += element.confirmed);

        return sumConfirmed
    }

    delSumIdentical(info) {

        const delIdent = info.reduce(function (acc, curr) {
            let findIndex = acc.findIndex((item) => item["countryRegion"] === curr["countryRegion"]);
            if (findIndex === -1) {
                acc.push(curr)
            } else {
                acc[findIndex].confirmed = acc[findIndex].confirmed + curr.confirmed;
                acc[findIndex].recovered = acc[findIndex].recovered + curr.recovered;
                acc[findIndex].deaths = acc[findIndex].deaths + curr.deaths;
                acc[findIndex].active = acc[findIndex].active + curr.active;
            }
            return acc;
        }, []);

        return delIdent
    }
    
    sortConfirmed(data) {
        return data.sort((a, b) => b.confirmed - a.confirmed);
    }

    russiaRegion (data, country) {
        const onlyRussia = data.filter ((el) => {
            return el.countryRegion === country
        })
        return onlyRussia
    }
}

