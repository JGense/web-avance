const fetch = require('node-fetch');

export async function searchSncf(query) {
    let reponseApiSncf = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`).catch((error) => console.log(error));
    let jsonReponseSncf = await reponseApiSncf.json().catch((error) => {console.log(error)});
    return jsonReponseSncf.records.map(function(gare) {
        return gare.fields.gare_ut_libelle;
    });
}

async function printResultats() {
    const arrayGares = await searchSncf('besancon');
    console.log(arrayGares);
}

printResultats();

