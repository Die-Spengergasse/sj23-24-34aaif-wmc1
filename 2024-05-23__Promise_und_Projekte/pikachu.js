let pikachuUrl = "https://pokeapi.co/api/v2/pokemon/25222/";
pikachuUrl = "https://pokeapi.co/api/v2/pokemon/25/";
fetch(pikachuUrl)
    .then(res => {
        console.log(`OK? ${res.ok} bzw. stat ${res.status} `);
        if (!res.ok) { return Promise.reject(res.statusText); }
        return res.json();
    })
    .then(jsn => console.log("JSNSTR", JSON.stringify(jsn, null, 2)))
    .catch(e => console.error("ERROR: ", e));