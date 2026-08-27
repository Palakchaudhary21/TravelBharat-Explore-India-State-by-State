

/* =========================================================
   STATE DETAILS DATA
========================================================= */

const stateDetailsData = {

    "Andhra Pradesh": {

        region: "South India",

        description:
            "Discover ancient temples, beautiful beaches, rich culture and unforgettable destinations across Andhra Pradesh.",

        about:
            "Andhra Pradesh is known for its rich cultural heritage, historic temples, scenic coastline and vibrant traditions. The state offers a wonderful combination of spirituality, history, nature and coastal experiences.",

        image:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",

        places: "30+",

        cities: "5+",

        bestTime: "October - March"

    }

};


/* =========================================================
   GET STATE NAME FROM URL
========================================================= */

const urlParams =
    new URLSearchParams(window.location.search);

const selectedState =
    urlParams.get("state");


/* =========================================================
   LOAD SELECTED STATE
========================================================= */

function loadStateDetails(stateName) {

    const state =
        stateDetailsData[stateName];

    /* State not found */

    if (!state) {

        console.log(
            "State data not found:",
            stateName
        );

        return;

    }


    /* =====================================================
       STATE HERO
    ===================================================== */

    const stateNameElement =
        document.getElementById("stateName");

    const stateRegion =
        document.getElementById("stateRegion");

    const stateDescription =
        document.getElementById("stateDescription");


    if (stateNameElement) {

        stateNameElement.textContent =
            stateName;

    }


    if (stateRegion) {

        stateRegion.textContent =
            state.region;

    }


    if (stateDescription) {

        stateDescription.textContent =
            state.description;

    }


    /* =====================================================
       ABOUT STATE
    ===================================================== */

    const stateImage =
        document.getElementById("stateImage");

    const aboutStateName =
        document.getElementById("aboutStateName");

    const stateAbout =
        document.getElementById("stateAbout");


    if (stateImage) {

        stateImage.src =
            state.image;

        stateImage.alt =
            `${stateName} tourism`;

    }


    if (aboutStateName) {

        aboutStateName.textContent =
            stateName;

    }


    if (stateAbout) {

        stateAbout.textContent =
            state.about;

    }


    /* =====================================================
       STATE INFORMATION
    ===================================================== */

    const infoRegion =
        document.getElementById("infoRegion");

    const infoPlaces =
        document.getElementById("infoPlaces");

    const infoCities =
        document.getElementById("infoCities");

    const infoBestTime =
        document.getElementById("infoBestTime");


    if (infoRegion) {

        infoRegion.textContent =
            state.region;

    }


    if (infoPlaces) {

        infoPlaces.textContent =
            state.places;

    }


    if (infoCities) {

        infoCities.textContent =
            state.cities;

    }


    if (infoBestTime) {

        infoBestTime.textContent =
            state.bestTime;

    }


    /* =====================================================
       SECTION TITLES
    ===================================================== */

    const citiesStateName =
        document.getElementById("citiesStateName");

    const placesStateName =
        document.getElementById("placesStateName");


    if (citiesStateName) {

        citiesStateName.textContent =
            stateName;

    }


    if (placesStateName) {

        placesStateName.textContent =
            stateName;

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

if (selectedState) {

    loadStateDetails(selectedState);

} else {

    console.log(
        "No state selected."
    );

}