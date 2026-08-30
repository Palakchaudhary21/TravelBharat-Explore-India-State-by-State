
/* =========================================================
   1. NAVBAR ELEMENTS
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");

const header =
    document.querySelector(".header");

const themeBtn =
    document.getElementById("themeBtn");

const themeIcon =
    document.getElementById("themeIcon");


/* =========================================================
   2. MOBILE NAVBAR
========================================================= */

if (menuBtn && navMenu) {

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("active");

            menuBtn.classList.toggle("active");

            document.body.classList.toggle(
                "menu-open"
            );

        }
    );

}


/* =========================================================
   3. CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

            if (menuBtn) {

                menuBtn.classList.remove(
                    "active"
                );

            }

            document.body.classList.remove(
                "menu-open"
            );

        }
    );

});


/* =========================================================
   4. CLOSE MOBILE MENU OUTSIDE CLICK
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !header ||
            !navMenu ||
            !menuBtn
        ) {
            return;
        }


        const clickedInsideNavbar =
            header.contains(event.target);


        if (!clickedInsideNavbar) {

            navMenu.classList.remove(
                "active"
            );

            menuBtn.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   5. ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navMenu &&
            menuBtn
        ) {

            navMenu.classList.remove(
                "active"
            );

            menuBtn.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   6. NAVBAR SCROLL EFFECT
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (!header) {
            return;
        }


        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   7. ACTIVE NAVIGATION
========================================================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            link.classList.add(
                "active"
            );

        }
    );

});


/* =========================================================
   8. DARK MODE
========================================================= */

function enableDarkMode() {

    document.body.classList.add(
        "dark-mode"
    );


    if (themeIcon) {

        themeIcon.textContent = "☀️";

    }


    localStorage.setItem(
        "travelBharatTheme",
        "dark"
    );

}


function disableDarkMode() {

    document.body.classList.remove(
        "dark-mode"
    );


    if (themeIcon) {

        themeIcon.textContent = "🌙";

    }


    localStorage.setItem(
        "travelBharatTheme",
        "light"
    );

}


/* =========================================================
   9. DARK MODE BUTTON
========================================================= */

if (themeBtn && themeIcon) {

    themeBtn.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            if (isDark) {

                disableDarkMode();

            } else {

                enableDarkMode();

            }

        }
    );

}


/* =========================================================
   10. LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "travelBharatTheme"
    );


if (savedTheme === "dark") {

    enableDarkMode();

} else {

    disableDarkMode();

}


/* =========================================================
   11. HERO SEARCH ELEMENTS
========================================================= */

const heroSearch =
    document.getElementById(
        "heroSearch"
    );

const searchBtn =
    document.getElementById(
        "searchBtn"
    );

const clearSearch =
    document.getElementById(
        "clearSearch"
    );

const searchMessage =
    document.getElementById(
        "searchMessage"
    );


/* =========================================================
   12. HERO SEARCH DATA
========================================================= */

const searchData = [

    "Rajasthan",
    "Maharashtra",
    "Madhya Pradesh",
    "Kerala",
    "Goa",
    "Gujarat",
    "Uttar Pradesh",
    "Tamil Nadu",
    "Himachal Pradesh",
    "Uttarakhand",

    "Ujjain",
    "Indore",
    "Bhopal",
    "Mumbai",
    "Jaipur",
    "Udaipur",
    "Agra",
    "Varanasi",
    "Manali",
    "Munnar",

    "Taj Mahal",
    "Mahakaleshwar Temple",
    "Gateway of India",
    "Hawa Mahal",
    "City Palace",
    "Goa Beaches",
    "Khajuraho Temples",
    "Golden Temple"

];


/* =========================================================
   13. HERO SEARCH FUNCTION
========================================================= */

function performSearch() {

    if (!heroSearch) {
        return;
    }


    const searchValue =
        heroSearch.value
            .trim()
            .toLowerCase();


    /* Empty Search */

    if (searchValue === "") {

        if (searchMessage) {

            searchMessage.textContent =
                "Please enter a state, city or tourist place.";

        }

        return;

    }


    /* Find Results */

    const results =
        searchData.filter(item => {

            return item
                .toLowerCase()
                .includes(searchValue);

        });


    /* Results Found */

    if (results.length > 0) {

        if (searchMessage) {

            searchMessage.textContent =
                `${results.length} destination(s) found for "${heroSearch.value.trim()}"`;

        }

    }


    /* No Results */

    else {

        if (searchMessage) {

            searchMessage.textContent =
                `No destination found for "${heroSearch.value.trim()}".`;

        }

    }

}


/* =========================================================
   14. HERO SEARCH BUTTON
========================================================= */

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


/* =========================================================
   15. HERO SEARCH ENTER KEY
========================================================= */

if (heroSearch) {

    heroSearch.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


/* =========================================================
   16. HERO SEARCH INPUT
========================================================= */

if (heroSearch) {

    heroSearch.addEventListener(
        "input",
        () => {

            const value =
                heroSearch.value.trim();


            if (
                value !== "" &&
                clearSearch
            ) {

                clearSearch.style.display =
                    "flex";

            } else {

                if (clearSearch) {

                    clearSearch.style.display =
                        "none";

                }


                if (searchMessage) {

                    searchMessage.textContent =
                        "";

                }

            }

        }
    );

}


/* =========================================================
   17. HERO CLEAR SEARCH
========================================================= */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        () => {

            if (heroSearch) {

                heroSearch.value = "";

                heroSearch.focus();

            }


            if (searchMessage) {

                searchMessage.textContent =
                    "";

            }


            clearSearch.style.display =
                "none";

        }
    );

}


/* =========================================================
   18. 28 STATES DATA
========================================================= */

const statesData = [

    {
        name: "Andhra Pradesh",
        region: "South India",
        places: "30+ Places",
        image: "images/states/andhrapradesh.jpg",
        description: "Explore ancient temples, beautiful beaches, historic cities and the rich cultural heritage of Andhra Pradesh."
    },

    {
        name: "Arunachal Pradesh",
        region: "North-East India",
        places: "25+ Places",
        image: "images/states/arunachal.jpg",
        description: "Discover snow-covered mountains, peaceful valleys, monasteries and breathtaking Himalayan landscapes."
    },

    {
        name: "Assam",
        region: "North-East India",
        places: "25+ Places",
        image: "images/states/assam.jpg",
        description: "Experience tea gardens, wildlife, the Brahmaputra River and the vibrant culture of Assam."
    },

    {
        name: "Bihar",
        region: "East India",
        places: "25+ Places",
        image: "images/states/bihar.jpg",
        description: "Explore ancient Buddhist sites, historic landmarks, temples and the spiritual heritage of Bihar."
    },

    {
        name: "Chhattisgarh",
        region: "Central India",
        places: "20+ Places",
        image: "images/states/chhattisgarh.jpg",
        description: "Discover waterfalls, forests, tribal culture, ancient temples and beautiful natural landscapes."
    },

    {
        name: "Goa",
        region: "Western India",
        places: "15+ Places",
        image: "images/states/goa.jpg",
        description: "Relax on beautiful beaches, explore Portuguese heritage and enjoy Goa's vibrant atmosphere."
    },

    {
        name: "Gujarat",
        region: "Western India",
        places: "25+ Places",
        image: "images/states/gujarat.jpg",
        description: "Explore historic cities, temples, wildlife, colorful traditions and the Great Rann of Kutch."
    },

    {
        name: "Haryana",
        region: "North India",
        places: "15+ Places",
        image: "images/states/haryana.jpg",
        description: "Discover historic sites, cultural landmarks, ancient traditions and modern attractions of Haryana."
    },

    {
        name: "Himachal Pradesh",
        region: "North India",
        places: "30+ Places",
        image: "images/states/himachal.jpg",
        description: "Experience snow-covered mountains, peaceful valleys, adventure activities and charming hill towns."
    },

    {
        name: "Jharkhand",
        region: "East India",
        places: "20+ Places",
        image: "images/states/jharkhand.jpg",
        description: "Explore waterfalls, forests, temples and the natural beauty of Jharkhand."
    },

    {
        name: "Karnataka",
        region: "South India",
        places: "35+ Places",
        image: "images/states/karnataka.jpg",
        description: "Discover magnificent palaces, heritage monuments, beaches, waterfalls and vibrant cities."
    },

    {
        name: "Kerala",
        region: "South India",
        places: "30+ Places",
        image: "images/states/kerala.jpg",
        description: "Experience peaceful backwaters, lush greenery, beaches and the beauty of God's Own Country."
    },

    {
        name: "Madhya Pradesh",
        region: "Central India",
        places: "35+ Places",
        image:"images/states/madhyapradesh.jpg",
        description: "Discover ancient temples, wildlife sanctuaries, historic cities and the heart of incredible India."
    },

    {
        name: "Maharashtra",
        region: "Western India",
        places: "40+ Places",
        image: "images/states/maharashtra.jpg",
        description: "Discover vibrant cities, ancient caves, forts, beaches and diverse cultural experiences."
    },

    {
        name: "Manipur",
        region: "North-East India",
        places: "15+ Places",
        image: "images/states/manipur.jpg",
        description: "Explore beautiful lakes, hills, cultural traditions and the unique natural beauty of Manipur."
    },

    {
        name: "Meghalaya",
        region: "North-East India",
        places: "20+ Places",
        image: "images/states/meghalaya.jpg",
        description: "Discover living root bridges, waterfalls, caves, green hills and charming villages."
    },

    {
        name: "Mizoram",
        region: "North-East India",
        places: "15+ Places",
        image:"images/states/mizoram.jpg",
        description: "Experience peaceful hills, lush landscapes, traditional culture and scenic destinations."
    },

    {
        name: "Nagaland",
        region: "North-East India",
        places: "15+ Places",
        image: "images/states/nagaland.jpg",
        description: "Explore mountain landscapes, tribal heritage, colorful festivals and unique traditions."
    },

    {
        name: "Odisha",
        region: "East India",
        places: "25+ Places",
        image: "images/states/odisha.jpg",
        description: "Discover magnificent temples, beaches, ancient architecture and Odisha's rich cultural heritage."
    },

    {
        name: "Punjab",
        region: "North India",
        places: "20+ Places",
        image: "images/states/punjab.jpg",
        description: "Experience vibrant culture, historic monuments, spiritual destinations and traditional Punjabi hospitality."
    },

    {
        name: "Rajasthan",
        region: "North-West India",
        places: "40+ Places",
        image:"images/states/rajasthan.jpg",
        description: "Explore royal palaces, magnificent forts, colorful culture and the golden Thar Desert."
    },

    {
        name: "Sikkim",
        region: "North-East India",
        places: "20+ Places",
        image:"images/states/sikkim.jpg",
        description: "Discover Himalayan peaks, peaceful monasteries, lakes and spectacular mountain landscapes."
    },

    {
        name: "Tamil Nadu",
        region: "South India",
        places: "40+ Places",
        image: "images/states/tamilnadu.jpg",
        description: "Explore magnificent temples, ancient architecture, beaches and the rich traditions of Tamil Nadu."
    },

    {
        name: "Telangana",
        region: "South India",
        places: "20+ Places",
        image: "images/states/telangana.jpg",
        description: "Discover historic forts, magnificent monuments, temples and the vibrant city of Hyderabad."
    },

    {
        name: "Tripura",
        region: "North-East India",
        places: "15+ Places",
        image: "images/states/tripura.jpg",
        description: "Explore royal palaces, ancient temples, forests and the peaceful landscapes of Tripura."
    },

    {
        name: "Uttar Pradesh",
        region: "North India",
        places: "50+ Places",
        image: "images/states/uttar pradesh.jpg",
        description: "Discover the Taj Mahal, sacred cities, historic monuments and India's remarkable cultural heritage."
    },

    {
        name: "Uttarakhand",
        region: "North India",
        places: "30+ Places",
        image: "images/states/uttarakhand.jpg",
        description: "Explore majestic Himalayas, sacred temples, rivers, valleys and peaceful hill destinations."
    },

    {
        name: "West Bengal",
        region: "East India",
        places: "30+ Places",
        image: "images/states/westbengal.jpg",
        description: "Experience Kolkata's heritage, Himalayan landscapes, beautiful beaches and rich Bengali culture."
    }

];


/* =========================================================
   19. STATES ELEMENTS
========================================================= */

const statesGrid =
    document.getElementById(
        "statesGrid"
    );

const stateSearch =
    document.getElementById(
        "stateSearch"
    );

const clearStateSearch =
    document.getElementById(
        "clearStateSearch"
    );

const noStateResult =
    document.getElementById(
        "noStateResult"
    );


/* =========================================================
   20. GENERATE STATE CARDS
========================================================= */

function displayStates(states) {

    if (!statesGrid) {

        console.error(
            "statesGrid element not found!"
        );

        return;

    }


    /* Clear old cards */

    statesGrid.innerHTML = "";


    /* No Results */

    if (states.length === 0) {

        statesGrid.style.display =
            "none";


        if (noStateResult) {

            noStateResult.style.display =
                "block";

        }

        return;

    }


    /* Show Grid */

    statesGrid.style.display =
        "grid";


    if (noStateResult) {

        noStateResult.style.display =
            "none";

    }


    /* Generate Every State Card */

    states.forEach(
        (state, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "state-card";


            card.style.animationDelay =
                `${index * 0.05}s`;


            card.innerHTML = `

                <div class="state-image">

                    <img
                        src="${state.image}"
                        alt="${state.name} tourism"
                        loading="lazy"
                    >

                    <span class="state-badge">
                        ${state.places}
                    </span>

                </div>


                <div class="state-content">

                    <span class="state-location">
                        📍 ${state.region}
                    </span>


                    <h3>
                        ${state.name}
                    </h3>


                    <p>
                        ${state.description}
                    </p>


                    <a
                        href="#"
                        class="state-link"
                        data-state="${state.name}"
                    >

                        Explore ${state.name}

                        <span>→</span>

                    </a>

                </div>

            `;


            statesGrid.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   21. INITIAL STATE DISPLAY
========================================================= */

if (statesGrid) {
    displayStates(statesData);
}

const stateDetailsData = {

    /* =====================================================
       ANDHRA PRADESH
    ===================================================== */

    "Andhra Pradesh": {

        region: "South India",

        description:
            "Discover ancient temples, beautiful beaches, rich culture and unforgettable destinations across Andhra Pradesh.",

        about:
            "Andhra Pradesh is known for its rich cultural heritage, historic temples, scenic coastline and vibrant traditions. The state offers a wonderful combination of spirituality, history, nature and coastal experiences.",

        image: "images/hero/andhra-pradesh.jpg",
        places: "30+",

        cities: "5+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Visakhapatnam",
                description:"A beautiful coastal city known for beaches, hills and scenic landscapes.",
                image: "images/Visakhapatnam.jpg"

            },

            {
                name: "Vijayawada",
                description:
                    "A major cultural and commercial city located on the banks of the Krishna River.",
                    image: "images/Vijayawada.jpg"
            },

            {
                name: "Tirupati",
                description:
                    "A famous pilgrimage destination known for the Tirumala Venkateswara Temple.",
                    image: "images/Tirupati.jpg"

            },

            {
                name: "Amaravati",
                description:
                    "A historic and culturally significant destination on the Krishna River.",
                    image: "images/Amaravati.jpg"
            }

        ],

        touristPlaces: [

    {
        name: "Tirumala Temple",

        category: "religious",

        image: "images/places/Tirumala Temple.jpg",

        description:
            "One of India's most famous pilgrimage destinations dedicated to Lord Venkateswara.",

        about:
            "Tirumala Temple, located in the Tirumala hills near Tirupati, is one of India's most important pilgrimage destinations. The temple is dedicated to Lord Venkateswara and attracts visitors from across the country.",

        location:
            "Tirumala, Tirupati, Andhra Pradesh",

        bestTime:
            "September - February",

        duration:
            "1 - 2 Days",

        entryFee:
            "Darshan tickets and special services vary",

        howToReach: {

            flight:
                "The nearest airport is Tirupati Airport. Taxis and local transport are available towards Tirumala.",

            train:
                "Tirupati railway station is the major railway station. Local buses, taxis and other transport are available.",

            bus:
                "APSRTC and other buses connect Tirupati with major cities. From Tirupati, buses are available towards Tirumala.",

            road:
                "Tirupati is well connected by road with major cities of Andhra Pradesh and nearby states.",

            local:
                "APSRTC buses, taxis and other local transport options are available between Tirupati and Tirumala."
        },

        nearbyPlaces: [
            "Sri Padmavathi Temple",
            "Kapila Theertham",
            "Talakona Waterfalls"
        ],

        travelTips: [
            "Check the official temple website before planning darshan.",
            "Book special darshan or accommodation in advance when required.",
            "Follow temple dress and entry guidelines.",
            "Avoid carrying restricted items inside the temple premises."
        ]
    },


    {
        name: "Araku Valley",

        category: "nature",

        image: "images/places/Araku Valley.jpg",

        description:
            "A scenic hill destination surrounded by lush green landscapes and Eastern Ghats.",

        about:
            "Araku Valley is a beautiful hill destination in the Eastern Ghats known for its green valleys, streams, waterfalls, tribal culture and coffee plantations. Andhra Pradesh Tourism also highlights Araku as an important tourism destination in the Visakhapatnam region.",

        location:
            "Alluri Sitharama Raju District, Andhra Pradesh",

        bestTime:
            "October - March",

        duration:
            "2 - 3 Days",

        entryFee:
            "Depends on the attraction visited",

        howToReach: {

            flight:
                "The nearest major airport is Visakhapatnam Airport. From Visakhapatnam, taxis and other road transport are available.",

            train:
                "Araku can be reached from Visakhapatnam by train. The journey is popular for its scenic Eastern Ghats landscapes.",

            bus:
                "Buses are available from Visakhapatnam and nearby towns towards Araku.",

            road:
                "Araku Valley is connected by road with Visakhapatnam and nearby destinations.",

            local:
                "Local taxis and tourist vehicles are commonly used to explore Araku Valley and nearby attractions."
        },

        nearbyPlaces: [
            "Borra Caves",
            "Chaparai Waterfalls",
            "Ananthagiri Hills",
            "Tribal Museum"
        ],

        travelTips: [
            "Carry comfortable footwear for sightseeing.",
            "Carry a light jacket because evenings can be cool.",
            "Keep some cash for local shops and smaller attractions.",
            "Respect local tribal culture and traditions."
        ]
    },


    {
        name: "Visakhapatnam Beaches",

        category: "nature",

        image: "images/places/Visakhapatnam Beaches.jpg",

        description:
            "Beautiful coastal attractions offering relaxing seaside experiences along the Bay of Bengal.",

        about:
            "Visakhapatnam is a major coastal destination of Andhra Pradesh known for its beaches, hills, harbour and scenic coastline. Popular coastal areas include Rushikonda Beach and other beaches around the city.",

        location:
            "Visakhapatnam, Andhra Pradesh",

        bestTime:
            "October - March",

        duration:
            "2 - 3 Days",

        entryFee:
            "Generally free for beach access; individual attractions may have separate charges",

        howToReach: {

            flight:
                "Visakhapatnam Airport is the main airport serving the city and has connectivity with major Indian cities.",

            train:
                "Visakhapatnam Railway Station is well connected with major cities across India.",

            bus:
                "APSRTC and private buses connect Visakhapatnam with major cities and towns.",

            road:
                "Visakhapatnam is well connected by road with major cities of Andhra Pradesh and neighbouring states.",

            local:
                "City buses, auto-rickshaws, taxis and app-based cab services can be used for local travel."
        },

        nearbyPlaces: [
            "Rushikonda Beach",
            "Kailasagiri",
            "INS Kurusura Submarine Museum",
            "Yarada Beach"
        ],

        travelTips: [
            "Visit beaches during safer daylight hours.",
            "Check local weather and sea conditions before entering the water.",
            "Carry sunscreen, sunglasses and drinking water.",
            "Keep beaches clean and avoid littering."
        ]
    },


    {
        name: "Borra Caves",

        category: "adventure",

        image: "images/places/Borra Caves.jpg",

        description:
            "Spectacular limestone caves in the Eastern Ghats known for unique natural rock formations.",

        about:
            "Borra Caves are spectacular natural limestone caves located in the Ananthagiri hills near Araku Valley. The caves are known for their impressive rock formations and are one of the major attractions around Visakhapatnam and Araku.",

        location:
            "Ananthagiri Hills, Andhra Pradesh",

        bestTime:
            "October - March",

        duration:
            "Half Day - 1 Day",

        entryFee:
            "Ticket charges may vary; check the latest local information before visiting",

        howToReach: {

            flight:
                "Visakhapatnam Airport is the nearest major airport. From there, visitors can continue by road.",

            train:
                "Borra Guhalu railway station is located near the caves and is served by trains on the Visakhapatnam-Araku route.",

            bus:
                "Buses and tourist vehicles are available from Visakhapatnam and Araku towards the cave area.",

            road:
                "The caves are connected by road with Araku Valley and Visakhapatnam.",

            local:
                "Local taxis and tourist vehicles can be used to travel between Araku, Borra Caves and nearby attractions."
        },

        nearbyPlaces: [
            "Araku Valley",
            "Ananthagiri Hills",
            "Tribal Museum",
            "Chaparai Waterfalls"
        ],

        travelTips: [
            "Wear comfortable shoes because the cave area involves walking.",
            "Be careful on wet or uneven surfaces.",
            "Follow the instructions provided at the attraction.",
            "Carry drinking water during sightseeing."
        ]
    }

]

    },


    /* =====================================================
       ARUNACHAL PRADESH
    ===================================================== */

    "Arunachal Pradesh": {

        region: "North-East India",

        description:
            "Explore majestic Himalayan mountains, peaceful valleys, monasteries and breathtaking natural landscapes.",

        about:
            "Arunachal Pradesh is India's northeastern frontier state, famous for its mountains, monasteries, forests and scenic valleys. It is an ideal destination for nature lovers, adventure seekers and cultural explorers.",

        image:"images/hero/arunachal-pradesh.jpg",

        places: "25+",

        cities: "5+",

        bestTime: "Oct - Apr",

        popularCities: [

            {
                name: "Tawang",
                description:
                    "A beautiful Himalayan destination famous for its monastery and mountain scenery.",
                    image: "images/Tawang.jpg"
            },

            {
                name: "Itanagar",
                description:
                    "The capital city surrounded by hills, forests and cultural attractions.",
                    image: "images/Itanagar.jpg"
            },

            {
                name: "Bomdila",
                description:
                    "A peaceful hill destination offering spectacular Himalayan views.",
                image: "images/Bomdila.jpg"

            },

            {
                name: "Ziro",
                description:
                    "A scenic valley known for green landscapes and unique tribal culture.",
                image: "images/Ziro.jpg"   
            }

        ],

        touristPlaces: [

   {
    name: "Tawang Monastery",

    category: "religious",

    image: "images/places/Tawang Monastery.jpg",

    description:
        "A magnificent Buddhist monastery surrounded by beautiful Himalayan mountains.",

    about:
        "Tawang Monastery is one of the most important Buddhist monasteries in Arunachal Pradesh. It is known for its peaceful surroundings, beautiful architecture, spiritual importance and spectacular Himalayan views.",

    location:
        "Tawang, Arunachal Pradesh",

    bestTime:
        "March - October",

    duration:
        "1 - 2 Days",

    entryFee:
        "Generally free; special services may have separate charges",

    howToReach: {

        flight:
            "The nearest airport options are Tezpur and Guwahati. From the airport, taxis and other road transport are available towards Tawang.",

        train:
            "The nearest major railway access is around Tezpur. From there, visitors can continue towards Tawang by road.",

        bus:
            "Buses and shared vehicles are available from Tezpur, Bomdila and nearby towns towards Tawang.",

        road:
            "Tawang is connected by road through Bhalukpong, Bomdila and Sela Pass.",

        local:
            "Local taxis and shared vehicles are available for sightseeing around Tawang."
    },

    nearbyPlaces: [
        "Sela Pass",
        "Bum La Pass",
        "Madhuri Lake",
        "Tawang War Memorial"
    ],

    travelTips: [
        "Carry warm clothes because the weather can be very cold.",
        "Respect monastery rules and local Buddhist traditions.",
        "Carry essential medicines for high-altitude travel.",
        "Check weather and road conditions before travelling."
    ]
},

    {
    name: "Sela Pass",

    category: "nature",

    image: "images/places/Sela Pass.jpg",

    description:
        "A spectacular high-altitude mountain pass known for snow-covered landscapes and beautiful Himalayan scenery.",

    about:
        "Sela Pass is one of the most beautiful mountain passes on the route to Tawang. Surrounded by snow-covered mountains, the pass offers breathtaking views and is especially attractive during the winter season.",

    location:
        "Sela Pass, Arunachal Pradesh",

    bestTime:
        "March - October",

    duration:
        "Half Day",

    entryFee:
        "No standard sightseeing entry fee",

    howToReach: {

        flight:
            "The nearest practical airport options are Tezpur and Guwahati, followed by a road journey towards Tawang.",

        train:
            "Visitors can use railway connections near Tezpur and continue towards Tawang by road.",

        bus:
            "Buses and shared vehicles operate on the Tawang route depending on weather and road conditions.",

        road:
            "Sela Pass lies on the road route between Bomdila and Tawang.",

        local:
            "Private vehicles, taxis and shared tourist vehicles are commonly used."
    },

    nearbyPlaces: [
        "Sela Lake",
        "Tawang Monastery",
        "Jaswant Garh War Memorial",
        "Nuranang Falls"
    ],

    travelTips: [
        "Check weather and road conditions before travelling.",
        "Carry warm clothes, especially during winter.",
        "Take precautions against high-altitude sickness.",
        "Keep extra travel time because weather can cause delays."
    ]
},

    {
    name: "Ziro Valley",

    category: "nature",

    image: "images/places/Ziro Valley.jpg",

    description:
        "A peaceful valley famous for green hills, rice fields, scenic landscapes and unique tribal culture.",

    about:
        "Ziro Valley is a beautiful destination known for its green rice fields, pine-covered hills, pleasant climate and unique Apatani tribal culture. It is an ideal destination for travellers looking for nature, peaceful surroundings and cultural experiences.",

    location:
        "Lower Subansiri District, Arunachal Pradesh",

    bestTime:
        "March - October",

    duration:
        "2 - 3 Days",

    entryFee:
        "Depends on the attraction visited",

    howToReach: {

        flight:
            "Visitors can use nearby airports around Itanagar or other regional airports and continue to Ziro by road.",

        train:
            "Railway access is available through nearby stations, followed by road travel to Ziro.",

        bus:
            "Buses and shared vehicles connect Ziro with Itanagar and other towns of Arunachal Pradesh.",

        road:
            "Ziro is well connected by road with Itanagar and other major towns.",

        local:
            "Local taxis and private vehicles are useful for exploring villages and nearby attractions."
    },

    nearbyPlaces: [
        "Talley Valley Wildlife Sanctuary",
        "Apatani Villages",
        "Shivlinga",
        "Ziro Music Festival Area"
    ],

    travelTips: [
        "Respect the customs and traditions of the Apatani community.",
        "Wear comfortable shoes while exploring villages and natural areas.",
        "Carry rain protection because weather can change quickly.",
        "Avoid littering and help keep the valley clean."
    ]
},

    {
    name: "Bum La Pass",

    category: "adventure",

    image: "images/places/Bum La Pass.jpg",

    description:
        "A dramatic high-altitude destination near the India-China border surrounded by rugged Himalayan landscapes.",

    about:
        "Bum La Pass is a high-altitude mountain pass located near the India-China border in the Tawang region. It is known for its dramatic Himalayan landscape, high altitude and historical significance.",

    location:
        "Tawang District, Arunachal Pradesh",

    bestTime:
        "April - October",

    duration:
        "Half Day - 1 Day",

    entryFee:
        "Permit and local travel requirements apply",

    howToReach: {

        flight:
            "The nearest practical airport options are Tezpur and Guwahati. From there, visitors continue towards Tawang by road.",

        train:
            "Visitors can use railway access around Tezpur and continue towards Tawang by road.",

        bus:
            "Shared transport may be available up to Tawang, while Bum La generally requires an approved local vehicle.",

        road:
            "Bum La Pass is reached from Tawang by mountain road and access depends on weather and security conditions.",

        local:
            "Local registered vehicles and permitted tour vehicles are generally used to reach Bum La."
    },

    nearbyPlaces: [
        "Sangetsar Lake",
        "Tawang Monastery",
        "Sela Pass",
        "Tawang War Memorial"
    ],

    travelTips: [
        "Check the latest permit requirements before visiting.",
        "Carry heavy winter clothing because temperatures can be extremely cold.",
        "Take precautions because of the high altitude.",
        "Follow security instructions in the border area.",
        "Keep extra travel time because weather can affect road access."
    ]
}
]

    },


    /* =====================================================
       ASSAM
    ===================================================== */

    "Assam": {

        region: "North-East India",

        description:
            "Experience lush tea gardens, wildlife sanctuaries, the Brahmaputra River and Assam's vibrant culture.",

        about:
            "Assam is known for its tea plantations, wildlife, rivers and rich cultural traditions. The state offers beautiful natural landscapes and is home to the famous Kaziranga National Park.",

        image:"images/hero/assam.jpg",

        places: "25+",

        cities: "6+",

        bestTime: "Oct - Apr",

        popularCities: [

            {
                name: "Guwahati",
                description:
                    "The largest city of Assam and an important gateway to Northeast India.",
                    image: "images/Guwahati.jpg"
            },

            {
                name: "Jorhat",
                description:
                    "Known for tea gardens and its cultural importance.",
                      image: "images/Jorhat.jpg"
            },

            {
                name: "Dibrugarh",
                description:
                    "A beautiful city surrounded by famous tea plantations.",
                    image: "images/Dibrugarh.jpg"

            },

            {
                name: "Tezpur",
                description:
                    "A scenic city located beside the Brahmaputra River.",
                    image: "images/Tezpur.jpg"
            }

        ],

        touristPlaces: [

    {
        name: "Kaziranga National Park",

        category: "nature",

        image: "images/places/Kaziranga National Park.jpg",

        description:
            "A world-famous national park known for the one-horned rhinoceros, wildlife and beautiful grasslands.",

        about:
            "Kaziranga National Park is one of India's most famous wildlife destinations. It is especially known for its population of the greater one-horned rhinoceros, along with elephants, wild water buffalo, deer and many species of birds.",

        location:
            "Golaghat and Nagaon Districts, Assam",

        bestTime:
            "November - April",

        duration:
            "1 - 2 Days",

        entryFee:
            "Safari and park entry charges vary",

        howToReach: {

            flight:
                "The nearest airport options include Jorhat and Guwahati. From the airport, taxis and other road transport are available towards Kaziranga.",

            train:
                "Furkating and other nearby railway stations provide rail access. From the station, taxis and local transport are available.",

            bus:
                "Buses and shared vehicles connect Kaziranga with Guwahati, Jorhat and other major towns of Assam.",

            road:
                "Kaziranga is well connected by road through National Highway 37 and can be reached from Guwahati, Jorhat and nearby cities.",

            local:
                "Local taxis and authorised safari vehicles are available for sightseeing and wildlife safaris."
        },

        nearbyPlaces: [
            "Orang National Park",
            "Majuli Island",
            "Jorhat",
            "Kakochang Waterfalls"
        ],

        travelTips: [
            "Book your wildlife safari in advance during the busy season.",
            "Follow all national park rules and safari instructions.",
            "Do not disturb or feed wild animals.",
            "Carry binoculars, comfortable clothes and sun protection.",
            "Follow the park's latest entry and safari timings."
        ]
    },


    {
        name: "Kamakhya Temple",

        category: "religious",

        image: "images/places/Kamakhya Temple.jpg",

        description:
            "One of India's most important Shakti temples located on the Nilachal Hill in Guwahati.",

        about:
            "Kamakhya Temple is one of the most revered Hindu temples in Assam and an important pilgrimage destination. Located on Nilachal Hill in Guwahati, the temple is dedicated to Goddess Kamakhya and is associated with Shaktism and ancient religious traditions.",

        location:
            "Nilachal Hill, Guwahati, Assam",

        bestTime:
            "October - April",

        duration:
            "Half Day - 1 Day",

        entryFee:
            "General entry is available; special darshan and services may have separate charges",

        howToReach: {

            flight:
                "Lokpriya Gopinath Bordoloi International Airport is the nearest major airport. Taxis and app-based transport are available to the temple.",

            train:
                "Guwahati Railway Station is the major railway station. From there, taxis, buses and local transport are available.",

            bus:
                "City buses and other public transport options connect different parts of Guwahati with the temple area.",

            road:
                "Guwahati has good road connectivity with major cities of Assam and neighbouring states.",

            local:
                "Taxis, auto-rickshaws and app-based cab services can be used to reach Nilachal Hill."
        },

        nearbyPlaces: [
            "Umananda Temple",
            "Assam State Museum",
            "Umananda Island",
            "Navagraha Temple"
        ],

        travelTips: [
            "Dress respectfully while visiting the temple.",
            "Check temple timings and special entry guidelines before visiting.",
            "The temple can be very crowded during festivals.",
            "Keep personal belongings safe in crowded areas.",
            "Respect religious customs and temple rules."
        ]
    },


    {
        name: "Majuli Island",

        category: "nature",

        image: "images/places/Majuli Island.jpg",

        description:
            "A beautiful river island known for Assamese culture, traditional villages, monasteries and scenic landscapes.",

        about:
            "Majuli is a culturally rich river island situated in the Brahmaputra River. It is famous for its traditional Assamese lifestyle, Satras, mask-making traditions, festivals, village landscapes and peaceful surroundings.",

        location:
            "Majuli District, Assam",

        bestTime:
            "October - March",

        duration:
            "2 - 3 Days",

        entryFee:
            "Depends on the attractions and activities visited",

        howToReach: {

            flight:
                "Jorhat Airport is the nearest airport. From Jorhat, visitors can continue towards the ferry point by road.",

            train:
                "Jorhat railway station provides convenient railway access. From Jorhat, road transport is available towards the ferry terminal.",

            bus:
                "Buses and shared vehicles are available between Jorhat and the ferry point.",

            road:
                "Visitors can travel by road to Nimati Ghat and then take a ferry towards Majuli.",

            local:
                "Bicycles, rented vehicles, auto-rickshaws and local transport can be used to explore the island."
        },

        nearbyPlaces: [
            "Kamalabari Satra",
            "Auniati Satra",
            "Dakhinpat Satra",
            "Mishing Villages"
        ],

        travelTips: [
            "Check ferry timings before planning your journey.",
            "Carry cash because some remote areas may have limited digital payment options.",
            "Respect local village traditions and cultural practices.",
            "Carry comfortable footwear for exploring villages and Satras.",
            "Avoid littering and help protect the island environment."
        ]
    },


    {
        name: "Manas National Park",

        category: "adventure",

        image: "images/places/Manas National Park.jpg",

        description:
            "A spectacular wildlife destination famous for forests, grasslands, rivers and diverse wildlife.",

        about:
            "Manas National Park is a beautiful wildlife sanctuary located near the foothills of the Himalayas. The park is known for its rich biodiversity, scenic landscapes and wildlife including elephants, rhinoceroses, wild buffaloes, deer and many species of birds.",

        location:
            "Chirang and Baksa Districts, Assam",

        bestTime:
            "November - April",

        duration:
            "1 - 2 Days",

        entryFee:
            "Park entry and safari charges vary",

        howToReach: {

            flight:
                "Guwahati International Airport is the nearest major airport. From Guwahati, taxis and other road transport are available towards Manas.",

            train:
                "Nearby railway stations provide access to the Manas region, followed by road transport towards the park.",

            bus:
                "Buses and shared vehicles are available from Guwahati and nearby towns towards the Manas region.",

            road:
                "Manas is connected by road with Guwahati and other parts of Assam.",

            local:
                "Local taxis and authorised safari vehicles are available for exploring the national park."
        },

        nearbyPlaces: [
            "Bansbari Range",
            "Manas River",
            "Bodoland",
            "Bhutan Border Area"
        ],

        travelTips: [
            "Book your safari and accommodation in advance during peak season.",
            "Follow all wildlife sanctuary rules.",
            "Maintain a safe distance from wild animals.",
            "Carry binoculars and comfortable outdoor clothing.",
            "Check weather, park timings and safari availability before travelling."
        ]
    }

]
    },


    /* =====================================================
       BIHAR
    ===================================================== */

    "Bihar": {

        region: "East India",

        description:
            "Explore ancient Buddhist sites, historic landmarks, temples and the spiritual heritage of Bihar.",

        about:
            "Bihar has played an important role in India's spiritual and historical journey. It is closely associated with Buddhism, ancient universities and important pilgrimage destinations.",

        image:"images/hero/bihar.jpg",

        places: "25+",

        cities: "5+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Patna",
                description:
                    "The capital city and an important historical and cultural center.",
                    image: "images/Patna.jpg"
            },

            {
                name: "Gaya",
                description:
                    "A major spiritual destination associated with Hindu and Buddhist traditions.",
                    image: "images/Gaya.jpg"
            },

            {
                name: "Bodh Gaya",
                description:
                    "One of the world's most important Buddhist pilgrimage destinations.",
                    image: "images/BodhGaya.jpg"
            },

            {
                name: "Rajgir",
                description:
                    "An ancient city surrounded by hills and important historical sites.",
                    image: "images/Rajgir.jpg"
            }

        ],

        touristPlaces: [

    {
        name: "Mahabodhi Temple",

        category: "religious",

        image: "images/places/Mahabodhi Temple.jpg",

        description:
            "A sacred Buddhist temple in Bodh Gaya where Gautama Buddha attained enlightenment.",

        about:
            "Mahabodhi Temple is one of the most important Buddhist pilgrimage destinations in the world. Located in Bodh Gaya, the temple complex is associated with the place where Gautama Buddha attained enlightenment under the Bodhi Tree. The site is also a UNESCO World Heritage Site.",

        location:
            "Bodh Gaya, Gaya, Bihar",

        bestTime:
            "September - April",

        duration:
            "1 Day",

        entryFee:
            "Entry conditions and special services may vary",

        howToReach: {

            flight:
                "Gaya Airport is the nearest airport. Patna Airport is another major option. Taxis and local transport are available towards Bodh Gaya.",

            train:
                "Gaya Junction is the major railway station. From Gaya, taxis, auto-rickshaws and other local transport are available.",

            bus:
                "Buses connect Bodh Gaya with Gaya, Patna and other major cities of Bihar.",

            road:
                "Bodh Gaya is well connected by road with Gaya, Patna and other nearby cities.",

            local:
                "Auto-rickshaws, cycle-rickshaws and taxis are available around Bodh Gaya."
        },

        nearbyPlaces: [
            "Bodhi Tree",
            "80 Feet Buddha Statue",
            "Thai Temple",
            "Sujata Garh"
        ],

        travelTips: [
            "Dress respectfully because this is a major religious site.",
            "Remove footwear before entering areas where required.",
            "Maintain silence and respect the peaceful atmosphere.",
            "Photography and electronic gadgets may be restricted in certain areas.",
            "Check the latest temple timings before visiting."
        ]
    },


    {
        name: "Nalanda University Ruins",

        category: "heritage",

        image: "images/places/Nalanda University Ruins.jpg",

        description:
            "Ancient Buddhist university ruins representing India's remarkable history of education and learning.",

        about:
            "The Archaeological Site of Nalanda Mahavihara preserves the remains of one of the ancient world's great centres of learning. The university flourished for centuries and attracted scholars and monks from different parts of Asia. The ruins include monasteries, temples, stupas and other archaeological structures.",

        location:
            "Nalanda, Bihar",

        bestTime:
            "September - April",

        duration:
            "Half Day - 1 Day",

        entryFee:
            "Entry fee may vary according to current ASI guidelines",

        howToReach: {

            flight:
                "Patna Airport is the nearest major airport. From Patna, visitors can travel towards Nalanda by road.",

            train:
                "Nearby railway stations provide access to Nalanda. Rajgir and other nearby stations can also be used depending on the route.",

            bus:
                "Buses and shared vehicles connect Nalanda with Rajgir, Bihar Sharif and other nearby towns.",

            road:
                "Nalanda is well connected by road with Patna, Rajgir and other major destinations in Bihar.",

            local:
                "Auto-rickshaws and taxis are available from Nalanda town for local sightseeing."
        },

        nearbyPlaces: [
            "Nalanda Museum",
            "Rajgir Hills",
            "Venu Van",
            "Hiuen Tsang Memorial Hall"
        ],

        travelTips: [
            "Wear comfortable footwear because the archaeological area involves walking.",
            "Do not climb or touch protected ruins.",
            "Maintain cleanliness and follow heritage-site rules.",
            "Photography and electronic gadgets may be subject to ASI rules.",
            "Visit the Nalanda Museum to understand the history of the site better."
        ]
    },


    {
        name: "Rajgir Hills",

        category: "nature",

        image: "images/places/Rajgir Hills.jpg",

        description:
            "A scenic group of ancient hills known for Buddhist, Jain and historical significance.",

        about:
            "Rajgir is surrounded by ancient hills and has deep historical and religious importance. The area is associated with Gautama Buddha and several important Buddhist and Jain sites. Visitors can enjoy scenic landscapes, historical monuments, temples and viewpoints around the hills.",

        location:
            "Rajgir, Nalanda District, Bihar",

        bestTime:
            "September - April",

        duration:
            "1 - 2 Days",

        entryFee:
            "Depends on the attraction visited",

        howToReach: {

            flight:
                "Patna Airport is the nearest major airport. Gaya Airport can also be considered depending on the travel route.",

            train:
                "Rajgir Railway Station provides railway access to the destination.",

            bus:
                "Buses and shared vehicles connect Rajgir with Patna, Nalanda, Bihar Sharif and other nearby destinations.",

            road:
                "Rajgir is well connected by road with Patna, Nalanda and Bodh Gaya.",

            local:
                "Auto-rickshaws, taxis and local vehicles are available for sightseeing around Rajgir."
        },

        nearbyPlaces: [
            "Vishwa Shanti Stupa",
            "Griddhakuta Hill",
            "Venu Van",
            "Rajgir Ropeway"
        ],

        travelTips: [
            "Wear comfortable shoes for exploring the hills.",
            "Carry water during outdoor sightseeing.",
            "Check ropeway timings before planning your visit.",
            "Avoid littering in natural and religious areas.",
            "Keep extra time for exploring the different attractions around Rajgir."
        ]
    },


    {
        name: "Golghar",

        category: "heritage",

        image: "images/places/Golghar.jpg",

        description:
            "An iconic dome-shaped historical monument in Patna offering panoramic views of the city and Ganga.",

        about:
            "Golghar is a historic granary in Patna that was built in 1786. The massive dome-shaped structure was designed as a storehouse for food grains. Its spiral staircase leads visitors to the top, from where panoramic views of Patna and the Ganga can be enjoyed.",

        location:
            "West of Gandhi Maidan, Patna, Bihar",

        bestTime:
            "September - April",

        duration:
            "2 - 3 Hours",

        entryFee:
            "Check current entry guidelines and charges",

        howToReach: {

            flight:
                "Jay Prakash Narayan International Airport is the nearest airport. Taxis and app-based cabs are available from the airport.",

            train:
                "Patna Junction is the major railway station. From there, taxis, auto-rickshaws and city buses are available.",

            bus:
                "City buses connect Golghar with different parts of Patna.",

            road:
                "Golghar is centrally located in Patna and is easily accessible by road.",

            local:
                "Auto-rickshaws, taxis, city buses and app-based cab services are available."
        },

        nearbyPlaces: [
            "Gandhi Maidan",
            "Bihar Museum",
            "Buddha Smriti Park",
            "Patna Museum"
        ],

        travelTips: [
            "Visit during cooler hours for a more comfortable experience.",
            "Wear comfortable footwear for climbing the staircase.",
            "Follow the monument's current visitor guidelines.",
            "Do not litter around the historical structure.",
            "Keep your belongings safe while exploring crowded areas."
        ]
    }

]
    },


    /* =====================================================
       CHHATTISGARH
    ===================================================== */

    "Chhattisgarh": {

        region: "Central India",

        description:
            "Discover waterfalls, forests, tribal culture, ancient temples and beautiful natural landscapes.",

        about:
            "Chhattisgarh is known for dense forests, waterfalls, tribal traditions and ancient temples. The state offers many offbeat destinations for nature and culture lovers.",

        image:"images/hero/chhattisgarh.jpg",
        places: "20+",

        cities: "5+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Raipur",
                description:
                    "The capital city and a major commercial center of Chhattisgarh.",
                    image: "images/Raipur.jpg"
            },

            {
                name: "Bilaspur",
                description:
                    "A major city known for its cultural and natural attractions.",
                    image: "images/Bilaspur.jpg"
            },

            {
                name: "Jagdalpur",
                description:
                    "A gateway to Bastar's waterfalls, forests and tribal culture.",
                    image: "images/Jagdalpur.jpg"
            },

            {
                name: "Ambikapur",
                description:
                    "A scenic city surrounded by forests and natural landscapes.",
                    image: "images/Ambikapur.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Chitrakote Waterfall",

    category: "nature",

    image: "images/places/Chitrakote Waterfall.jpg",

    description:
        "A magnificent horseshoe-shaped waterfall on the Indravati River, known for its wide cascade, surrounding forests and breathtaking natural beauty.",

    about:
        "Chitrakote Waterfall is one of the most famous natural attractions of Bastar, Chhattisgarh. Located near Jagdalpur on the Indravati River, the waterfall drops from a height of around 90-95 feet and is famous for its horseshoe-shaped appearance. It is popularly known as the 'Niagara of India' or 'Mini Niagara of India'. The waterfall is especially spectacular during and after the monsoon when the surrounding forests become lush green.",

    location:
        "Bastar, Chhattisgarh",

    bestTime:
        "July - October",

    duration:
        "1 Day",

    entryFee:
        "Entry charges may apply depending on the facilities or activities available",

    howToReach: {

        flight:
            "Jagdalpur Airport provides air access to the Bastar region. Raipur Airport is another major option, followed by road travel to Jagdalpur and Chitrakote.",

        train:
            "Jagdalpur Railway Station is the nearest major railway station and is connected with cities including Raipur and Visakhapatnam.",

        bus:
            "Regular buses connect Jagdalpur with nearby towns and cities. From Jagdalpur, local buses and other vehicles can be used to reach Chitrakote.",

        road:
            "Chitrakote Waterfall is approximately 38-40 km from Jagdalpur and can be reached by road through the Bastar region.",

        local:
            "Taxis, hired cars and local vehicles are available from Jagdalpur for visiting Chitrakote Waterfall."
    },

    nearbyPlaces: [
        "Tirathgarh Waterfall",
        "Kanger Valley National Park",
        "Kotumsar Cave",
        "Kailash Cave",
        "Bastar Palace"
    ],

    travelTips: [
        "The waterfall is especially beautiful during and after the monsoon season.",
        "Be careful near the waterfall and follow local safety instructions.",
        "Avoid entering restricted or dangerous areas around the waterfall.",
        "Carry comfortable footwear as some areas may be uneven.",
        "Carry drinking water and basic outdoor essentials.",
        "Check local weather conditions before travelling during heavy monsoon."
    ]
},
            {
    name: "Bastar",

    category: "nature",

    image: "images/places/Bastar.jpg",

    description:
        "A culturally rich and naturally beautiful region of Chhattisgarh known for dense forests, waterfalls, caves, tribal culture, wildlife and traditional handicrafts.",

    about:
        "Bastar is a scenic and culturally significant district of Chhattisgarh with Jagdalpur as its headquarters. The region is famous for its dense forests, waterfalls, natural caves, wildlife, ancient temples, tribal traditions, handicrafts, music and festivals. Major attractions include Chitrakote Waterfall, Tirathgarh Waterfall, Kanger Valley National Park, Kotumsar Cave, Kailash Cave, Bastar Palace and Dalpat Sagar. Bastar is also widely known for its rich tribal culture and traditional arts and crafts.",

    location:
        "Bastar, Chhattisgarh",

    bestTime:
        "November - June",

    duration:
        "2 - 4 Days",

    entryFee:
        "No general entry fee for the Bastar region; individual attractions may have separate charges",

    howToReach: {

        flight:
            "Jagdalpur Airport provides air connectivity to the Bastar region. Raipur Airport is another major option followed by road travel to Jagdalpur.",

        train:
            "Jagdalpur Railway Station provides railway access to Bastar and is connected with destinations including Raipur and Visakhapatnam.",

        bus:
            "Regular bus services connect Jagdalpur with major cities and nearby towns in Chhattisgarh and neighbouring states.",

        road:
            "Bastar is well connected by road with Jagdalpur serving as the main base for exploring the region. Road connectivity is available from Raipur and other nearby cities.",

        local:
            "Taxis, hired vehicles, local buses and other transport options are available in Jagdalpur for visiting tourist attractions around Bastar."
    },

    nearbyPlaces: [
        "Chitrakote Waterfall",
        "Tirathgarh Waterfall",
        "Kanger Valley National Park",
        "Kotumsar Cave",
        "Kailash Cave",
        "Bastar Palace",
        "Dalpat Sagar"
    ],

    travelTips: [
        "Plan sufficient time to explore the natural and cultural attractions of Bastar.",
        "Respect local tribal traditions, customs and communities.",
        "Carry comfortable clothing and footwear for outdoor exploration.",
        "Check weather and attraction-specific opening conditions before travelling.",
        "Follow forest and wildlife regulations while visiting protected areas.",
        "Avoid travelling into restricted forest areas without authorized guides or permissions."
    ]
},

            {
    name: "Bhoramdeo Temple",

    category: "religious",

    image: "images/places/Bhoramdeo Temple.jpg",

    description:
        "An ancient Shiva temple famous for its intricate stone carvings, historic architecture and resemblance to the temples of Khajuraho.",

    about:
        "Bhoramdeo Temple is an approximately thousand-year-old temple dedicated to Lord Shiva, located at Chouragaon near Kawardha in Kabirdham district of Chhattisgarh. Built between the 7th and 11th centuries, the temple is surrounded by scenic mountain landscapes and is renowned for its artistic stone carvings and architectural beauty. Because of its architectural resemblance to Khajuraho, it is popularly known as the 'Khajuraho of Chhattisgarh'.",

    location:
        "Chouragaon, Kabirdham, Chhattisgarh",

    bestTime:
        "October - March",

    duration:
        "Half Day - 1 Day",

    entryFee:
        "Generally free; special events or facilities may have separate charges",

    howToReach: {

        flight:
            "The nearest major airport is Swami Vivekananda Airport in Raipur, followed by road travel to Kawardha and Bhoramdeo.",

        train:
            "Raipur Railway Station is the nearest major railway access, followed by road travel to Kawardha.",

        bus:
            "Kawardha is connected by bus services with Raipur, Bilaspur, Durg and other nearby cities.",

        road:
            "Bhoramdeo Temple is approximately 18 km from Kawardha and about 125 km from Raipur. The temple is accessible by road.",

        local:
            "Taxis, auto-rickshaws and hired vehicles can be used from Kawardha to reach Bhoramdeo Temple."
    },

    nearbyPlaces: [
        "Bhoramdev Wildlife Sanctuary",
        "Chilphi Valley",
        "Madwa Mahal",
        "Chherki Mahal",
        "Sarodha Dam"
    ],

    travelTips: [
        "Dress respectfully while visiting the temple.",
        "Remove footwear before entering designated temple areas.",
        "Photography may be restricted in certain areas.",
        "Take time to observe the detailed stone carvings and architecture.",
        "Avoid touching or damaging historical sculptures.",
        "The Bhoramdev Festival is an important cultural event held annually."
    ]
},

            {
    name: "Kanger Valley National Park",

    category: "adventure",

    image: "images/places/Kanger Valley National Park.jpg",

    description:
        "A beautiful national park known for dense forests, wildlife, waterfalls, limestone caves and rich biodiversity.",

    about:
        "Kanger Valley National Park is one of the most scenic natural areas of Bastar. Located near Jagdalpur, the park covers approximately 200 square kilometres and is known for its dense mixed deciduous forests, rich biodiversity, limestone caves, streams and waterfalls. Important attractions include Kotumsar Cave, Kailash Cave, Dandak Cave, Tirathgarh Waterfall and Kanger Dhara. The park is also known for the Bastar Hill Myna, the state bird of Chhattisgarh.",

    location:
        "Bastar, Chhattisgarh",

    bestTime:
        "November - June",

    duration:
        "1 - 2 Days",

    entryFee:
        "Park entry, guide, safari and activity charges may apply",

    howToReach: {

        flight:
            "Jagdalpur Airport provides air access to the Bastar region. Raipur Airport is another option followed by road travel to Jagdalpur.",

        train:
            "Jagdalpur Railway Station is the nearest major railway access for visitors travelling to Kanger Valley National Park.",

        bus:
            "Buses and shared vehicles connect Jagdalpur with nearby towns and villages around the national park.",

        road:
            "Kanger Valley National Park is located about 24 km southeast of Jagdalpur. The park can be accessed through designated gates including the Kutumsar and Netanar gates.",

        local:
            "Taxis and hired vehicles are available from Jagdalpur for visiting the national park and its attractions."
    },

    nearbyPlaces: [
        "Tirathgarh Waterfall",
        "Kotumsar Cave",
        "Kailash Cave",
        "Dandak Cave",
        "Kanger Dhara"
    ],

    travelTips: [
        "Check the park's current opening dates, timings and entry rules before travelling.",
        "Follow all forest and wildlife regulations.",
        "Do not disturb, feed or approach wild animals.",
        "Night visits are not allowed inside the national park.",
        "Carry comfortable outdoor clothing and suitable footwear.",
        "Cave visits may be restricted depending on weather and safety conditions.",
        "Heavy vehicles are not allowed inside the park.",
        "Consider hiring an authorized guide for a safer and more informative visit."
    ]
}

        ]

    },


    /* =====================================================
       GOA
    ===================================================== */

    "Goa": {

        region: "Western India",

        description:
            "Relax on beautiful beaches, explore Portuguese heritage and experience Goa's vibrant coastal atmosphere.",

        about:
            "Goa is famous for its beaches, Portuguese-influenced architecture, churches, nightlife and relaxed coastal lifestyle. It is one of India's most popular holiday destinations.",

        image:"images/hero/goa.jpg",

        places: "15+",

        cities: "4+",

        bestTime: "Nov - Feb",

        popularCities: [

            {
                name: "Panaji",
                description:
                    "The capital city known for colorful streets, heritage buildings and river views.",
                    image: "images/Panaji.jpg"
                    
            },

            {
                name: "Calangute",
                description:
                    "A popular beach destination with a lively tourism atmosphere.",
                    image: "images/Calangute.jpg"
            },

            {
                name: "Vasco da Gama",
                description:
                    "An important coastal city and transport hub.",
                    image: "images/VascodaGama.jpg"
            },

            {
                name: "Margao",
                description:
                    "A cultural and commercial center in South Goa.",
                    image: "images/Margao.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Baga Beach",

    category: "adventure",

    image: "images/places/Baga Beach.jpg",

    description:
        "A vibrant beach in North Goa known for its scenic coastline, water sports, beach shacks, nightlife and lively atmosphere.",

    about:
        "Baga Beach is one of the most popular beaches in North Goa and forms part of the long coastline stretching from Fort Aguada towards Vagator and Chapora. The beach is known for its scenic creek, sandy shoreline, water sports and lively tourist atmosphere. Visitors can enjoy activities such as parasailing, jet skiing, banana boat rides and other water-based adventures. Baga is also surrounded by restaurants, beach shacks and entertainment options.",

    location:
        "Baga, North Goa, Goa",

    bestTime:
        "November - March",

    duration:
        "1 Day",

    entryFee:
        "No general entry fee; charges apply separately for water sports and activities",

    howToReach: {

        flight:
            "Dabolim Airport and Manohar International Airport are the nearest major airports. From the airport, Baga can be reached by taxi or hired vehicle.",

        train:
            "Madgaon Junction and Thivim Railway Station are commonly used railway access points for North Goa. Baga can be reached from the station by taxi or local transport.",

        bus:
            "Regular buses connect Baga with Panaji, Mapusa, Calangute and other parts of Goa.",

        road:
            "Baga is well connected by road with Panaji, Mapusa, Calangute and other major tourist areas of Goa.",

        local:
            "Taxis, rental cars, scooters, auto-rickshaws and local buses are available for travelling around Baga and nearby beaches."
    },

    nearbyPlaces: [
        "Calangute Beach",
        "Anjuna Beach",
        "Vagator Beach",
        "Chapora Fort",
        "Aguada Fort"
    ],

    travelTips: [
        "November to March is generally a pleasant period for beach activities.",
        "Use authorized operators for water sports and adventure activities.",
        "Follow safety instructions before participating in water sports.",
        "Carry sunscreen, sunglasses, drinking water and comfortable beachwear.",
        "Be careful while swimming and avoid entering the sea during rough conditions.",
        "Keep the beach clean and dispose of waste responsibly."
    ]
},

            {
    name: "Basilica of Bom Jesus",

    category: "religious",

    image: "images/places/Basilica Of Bom Jesus.jpg",

    description:
        "A historic basilica in Old Goa famous for its Baroque architecture, rich heritage and the relics of Saint Francis Xavier.",

    about:
        "The Basilica of Bom Jesus is one of the most important historical and religious monuments of Goa. Located in Old Goa, the basilica was completed in 1605 and is a magnificent example of Baroque architecture. It is especially famous for housing the relics of Saint Francis Xavier in a silver casket. The church has an impressive granite façade featuring different classical architectural styles and forms part of the historic monuments of Old Goa recognized as a World Heritage site.",

    location:
        "Old Goa, Goa",

    bestTime:
        "November - February",

    duration:
        "2 - 3 Hours",

    entryFee:
        "Generally free for visitors; special facilities or exhibitions may have separate charges",

    howToReach: {

        flight:
            "Dabolim Airport and Manohar International Airport are the major airports serving Goa. From the airport, Old Goa can be reached by taxi or hired vehicle.",

        train:
            "Karmali Railway Station is the nearest convenient railway station for Old Goa. Madgaon Railway Station is another major railway option.",

        bus:
            "Local and state bus services connect Old Goa with Panaji and other parts of Goa.",

        road:
            "The Basilica is located in Old Goa and is easily accessible by road from Panaji and other major parts of Goa.",

        local:
            "Taxis, rental cars, scooters and local buses can be used to reach the basilica from nearby areas."
    },

    nearbyPlaces: [
        "Se Cathedral",
        "Church of St. Francis of Assisi",
        "Church of Saint Cajetan",
        "Archaeological Museum of Goa",
        "Viceroy's Arch"
    ],

    travelTips: [
        "Dress respectfully while visiting the basilica.",
        "Maintain silence and respect worshippers during religious services.",
        "Check the latest visiting and Mass timings before travelling.",
        "Photography may be restricted in certain areas.",
        "Do not touch religious artefacts or historical structures.",
        "Allow enough time to explore the architecture and surrounding heritage area."
    ]
},

           {
    name: "Fort Aguada",

    category: "heritage",

    image: "images/places/Fort Aguada.jpg",

    description:
        "A historic Portuguese fort overlooking the Arabian Sea, famous for its massive laterite walls, panoramic views and historic lighthouse.",

    about:
        "Fort Aguada is one of Goa's most important Portuguese-era forts and was built as a major defensive structure overlooking the Arabian Sea and the Mandovi River. The fort is constructed mainly from laterite stone and was designed to protect the entrance to the Mandovi estuary. It included a large freshwater storage system, defensive walls, a citadel and facilities for cannons. The fort's elevated position provides impressive views of the coastline and surrounding sea.",

    location:
        "Sinquerim, Candolim, North Goa, Goa",

    bestTime:
        "September - March",

    duration:
        "2 - 3 Hours",

    entryFee:
        "Entry charges may apply to specific attractions or facilities",

    howToReach: {

        flight:
            "Dabolim Airport and Manohar International Airport are the major airports serving Goa. From the airport, Fort Aguada can be reached by taxi or hired vehicle.",

        train:
            "Thivim and Madgaon are major railway stations used by visitors travelling to Goa. From the railway station, Fort Aguada can be reached by road.",

        bus:
            "Local buses connect Panaji, Candolim, Sinquerim and nearby areas. Visitors can use local transport followed by a short road journey to the fort.",

        road:
            "Fort Aguada is accessible by road through Aguada-Siolim Road from the Sinquerim side. A motorable route leads directly towards the hilltop fort.",

        local:
            "Taxis, rental cars, scooters and other local transport options are available from Candolim, Sinquerim and Panaji."
    },

    nearbyPlaces: [
        "Sinquerim Beach",
        "Candolim Beach",
        "Aguada Lighthouse",
        "Reis Magos Fort",
        "Calangute Beach"
    ],

    travelTips: [
        "Wear comfortable footwear because the fort involves walking over uneven surfaces.",
        "Carry drinking water, especially during hot weather.",
        "Visit early morning or late afternoon for a more comfortable experience.",
        "Be careful near elevated edges and follow safety signs.",
        "Respect the historical structure and do not damage or climb restricted areas.",
        "Check the latest opening timings before visiting."
    ]
},{
    name: "Dudhsagar Falls",

    category: "nature",

    image: "images/places/Dudhsagar Falls.jpg",

    description:
        "A spectacular multi-tiered waterfall in the Western Ghats known for its powerful white cascades, lush forests and dramatic mountain scenery.",

    about:
        "Dudhsagar Falls is one of Goa's most spectacular natural attractions, located in the Western Ghats near the Goa-Karnataka border. The waterfall is formed by the Mandovi River and drops dramatically through a forested mountain landscape. During the monsoon, the waterfall becomes especially powerful and its white, foaming streams resemble milk, giving it the name 'Dudhsagar', meaning 'Sea of Milk'. The surrounding area is rich in tropical forest and offers a memorable nature and adventure experience.",

    location:
        "Sanguem, Goa - Goa-Karnataka Border",

    bestTime:
        "October - February",

    duration:
        "1 Day",

    entryFee:
        "Entry, transport, guide and activity charges may apply depending on the access route and operator",

    howToReach: {

        flight:
            "Dabolim Airport and Manohar International Airport are the major airports serving Goa. From the airport, visitors can travel by road towards the Dudhsagar region.",

        train:
            "Collem Railway Station is commonly used as an access point for the Dudhsagar region. Railway access and permitted routes should be checked before travelling.",

        bus:
            "Buses are available up to nearby towns such as Collem and Mollem. From there, visitors generally need authorized local transport or other permitted access arrangements.",

        road:
            "Dudhsagar is located in the Western Ghats and access involves forest routes. Visitors should use authorized routes and permitted vehicles where required.",

        local:
            "Local taxis, authorized safari vehicles and tour operators can assist visitors with access to the waterfall depending on current forest regulations."
    },

    nearbyPlaces: [
        "Bhagwan Mahavir Wildlife Sanctuary",
        "Mollem National Park",
        "Tambdi Surla Temple",
        "Devil's Canyon",
        "Collem"
    ],

    travelTips: [
        "The waterfall is especially spectacular during and after the monsoon.",
        "Check current forest department rules and access restrictions before travelling.",
        "Do not enter restricted forest or railway areas.",
        "Wear sturdy footwear suitable for wet and uneven terrain.",
        "Carry drinking water and basic outdoor essentials.",
        "Avoid swimming in strong currents around the waterfall.",
        "Use authorized local guides or transport operators where required.",
        "Keep the forest clean and do not leave plastic or other waste behind."
    ]
}

        ]

    },


    /* =====================================================
       GUJARAT
    ===================================================== */

    "Gujarat": {

        region: "Western India",

        description:
            "Explore historic cities, magnificent temples, wildlife, colorful traditions and the Great Rann of Kutch.",

        about:
            "Gujarat offers a remarkable combination of heritage, spirituality, wildlife and unique landscapes. From ancient temples to the white desert of Kutch, the state has diverse attractions.",

        image:"images/hero/gujarat.jpg",

        places: "25+",

        cities: "6+",

        bestTime: "Oct - Feb",

        popularCities: [

            {
                name: "Ahmedabad",
                description:
                    "A historic city famous for heritage architecture and vibrant culture.",
                    image: "images/Ahmedabad.jpg"
            },

            {
                name: "Vadodara",
                description:
                    "A cultural city known for palaces, museums and art.",
                    image: "images/Vadodara.jpg"
            },

            {
                name: "Rajkot",
                description:
                    "A major city with historical and cultural attractions.",
                    image: "images/Rajkot.jpg"
            },

            {
                name: "Bhuj",
                description:
                    "A gateway to the unique landscapes and crafts of Kutch.",
                    image: "images/Bhuj.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Rann of Kutch",

    category: "nature",

    image: "images/places/Rann Of Kutch.jpg",

    description:
        "A vast white salt desert famous for its breathtaking landscapes, traditional culture, handicrafts, sunsets and the vibrant Rann Utsav.",

    about:
        "The Great Rann of Kutch is a spectacular seasonal salt marsh located in the Kutch region of Gujarat. During the dry season, the vast landscape transforms into a brilliant white salt desert stretching across the horizon. The region is known for its unique natural environment, traditional Kutchi culture, handicrafts, folk music, colourful clothing and cultural celebrations. The Rann Utsav attracts visitors with cultural performances, local crafts, food and desert experiences.",

    location:
        "Kutch, Gujarat",

    bestTime:
        "November - February",

    duration:
        "2 - 3 Days",

    entryFee:
        "Permit and attraction charges may apply depending on the area and activities",

    howToReach: {

        flight:
            "Bhuj Airport is the nearest major airport for visiting the Rann of Kutch. From Bhuj, visitors can travel by road towards Dhordo and the White Rann.",

        train:
            "Bhuj Railway Station is the nearest major railway station and is connected with several cities in Gujarat and other parts of India.",

        bus:
            "Bus services connect Bhuj with major towns in Kutch. Local and tourist transport options are available towards Dhordo and surrounding areas.",

        road:
            "The White Rann is accessible by road from Bhuj through Bhuj-Khavda-Dhordo route. The distance from Bhuj to Dhordo is approximately 80 km.",

        local:
            "Taxis, rental vehicles and tourist transport services are available from Bhuj for exploring the Rann region."
    },

    nearbyPlaces: [
        "Dhordo",
        "Kalo Dungar",
        "India Bridge",
        "Mandvi Beach",
        "Hodka Village"
    ],

    travelTips: [
        "Carry valid identification and obtain the required permit before visiting restricted areas.",
        "The desert can become very cold at night during winter, so carry warm clothing.",
        "Carry sunglasses, sunscreen and comfortable footwear during daytime.",
        "Sunrise and sunset offer some of the best views of the salt desert.",
        "Respect local communities and their traditional culture.",
        "Do not litter or damage the natural salt landscape."
    ]
},
            {
    name: "Somnath Temple",

    category: "religious",

    image: "images/places/Somnath Temple.jpg",

    description:
        "One of India's most revered Shiva temples and the first among the twelve Jyotirlingas, located dramatically on the Arabian Sea coast.",

    about:
        "Shree Somnath Jyotirlinga Temple is one of the most important pilgrimage destinations in Gujarat. Located at Prabhas Patan on the western coast, the temple is traditionally regarded as the first among the twelve holy Jyotirlingas of Lord Shiva. The present temple was reconstructed after India's independence and was inaugurated in its current form in 1951. Its beautifully carved architecture, coastal location and spiritual significance attract pilgrims and visitors throughout the year.",

    location:
        "Prabhas Patan, Gir Somnath, Gujarat",

    bestTime:
        "October - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Generally free for temple entry; separate charges may apply for specific facilities or shows",

    howToReach: {

        flight:
            "Diu Airport is a nearby air option. Rajkot and other major Gujarat airports can also be used, followed by road travel to Somnath.",

        train:
            "Somnath Railway Station is the nearest railway station and is connected with major towns and cities in Gujarat and other parts of India.",

        bus:
            "Regular buses connect Somnath with Junagadh, Veraval, Rajkot, Ahmedabad and other major destinations.",

        road:
            "Somnath is well connected by road. The temple is approximately 82 km from Junagadh and around 120 km from Porbandar.",

        local:
            "Auto-rickshaws, taxis and local vehicles are available in Somnath and Veraval for visiting the temple and nearby attractions."
    },

    nearbyPlaces: [
        "Bhalka Tirth",
        "Triveni Sangam",
        "Prabhas Patan Museum",
        "Somnath Beach",
        "Geeta Mandir"
    ],

    travelTips: [
        "Dress respectfully while visiting the temple.",
        "Follow the temple's security and photography rules.",
        "Check the latest darshan and aarti timings before visiting.",
        "Keep sufficient time for exploring nearby pilgrimage sites.",
        "Avoid carrying prohibited items inside the temple premises.",
        "October to February is generally more comfortable for sightseeing."
    ]
},
            {
    name: "Statue of Unity",

    category: "heritage",

    image: "images/places/Statue of Unity.jpg",

    description:
        "The world's tallest statue, dedicated to Sardar Vallabhbhai Patel and surrounded by scenic hills, the Narmada River and major tourism attractions.",

    about:
        "The Statue of Unity is a monumental tribute to Sardar Vallabhbhai Patel, India's first Deputy Prime Minister and Home Minister, and the leader associated with the integration of India's princely states. Standing approximately 182 metres tall, the statue was inaugurated on 31 October 2018 at Kevadia in Gujarat. It stands on Sadhu Bet island near the Narmada River and Sardar Sarovar Dam. The surrounding destination includes attractions such as the Valley of Flowers, Vishwa Van, Ekta Mall, museums, viewing areas and other visitor experiences.",

    location:
        "Ekta Nagar, Narmada, Gujarat",

    bestTime:
        "October - February",

    duration:
        "1 - 2 Days",

    entryFee:
        "Ticket charges apply; prices vary depending on the attractions and visitor experience selected",

    howToReach: {

        flight:
            "Vadodara Airport is one of the nearest major airports. Ahmedabad Airport is another convenient option followed by road travel to Ekta Nagar.",

        train:
            "Ekta Nagar Railway Station provides direct railway access to the Statue of Unity destination. Vadodara is another major railway option.",

        bus:
            "Bus services connect Ekta Nagar with Vadodara, Ahmedabad and nearby towns. Local transport is available within the tourist area.",

        road:
            "Ekta Nagar is well connected by road with Vadodara and Ahmedabad. The Statue of Unity is located near the Sardar Sarovar Dam.",

        local:
            "Local buses, taxis, tourist vehicles and destination transport services are available for visiting attractions around Ekta Nagar."
    },

    nearbyPlaces: [
        "Sardar Sarovar Dam",
        "Valley of Flowers",
        "Vishwa Van",
        "Ekta Mall",
        "Cactus Garden",
        "Jungle Safari"
    ],

    travelTips: [
        "Book attraction tickets in advance during weekends and holiday periods.",
        "Check the official opening schedule before planning your visit.",
        "The Statue of Unity is closed on Mondays for maintenance according to Gujarat Tourism.",
        "Wear comfortable footwear because the destination involves considerable walking.",
        "Keep sufficient time to explore the surrounding attractions.",
        "October to February is generally more comfortable for sightseeing."
    ]
},

           {
    name: "Gir National Park",

    category: "adventure",

    image: "images/places/Gir National Park.jpg",

    description:
        "A world-famous wildlife destination and the only natural habitat of the Asiatic lion, known for jungle safaris, diverse wildlife and rich birdlife.",

    about:
        "Gir National Park and Wildlife Sanctuary is one of Gujarat's most important wildlife destinations and is globally known as the only natural habitat of the Asiatic lion. The protected area covers a vast landscape of dry deciduous forests, grasslands, hills and seasonal rivers. Besides Asiatic lions, visitors may encounter leopards, chital, sambar, nilgai, wild boar, hyenas and many species of birds. Jungle safaris provide an opportunity to explore the forest while observing wildlife in its natural habitat.",

    location:
        "Gir Somnath and Junagadh, Gujarat",

    bestTime:
        "November - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "Safari, entry permit and guide charges apply",

    howToReach: {

        flight:
            "Rajkot Airport is one of the major air options for reaching Gir, followed by road travel. Other Gujarat airports can also be used depending on the travel route.",

        train:
            "Junagadh and Veraval are major railway access points for Gir. From these stations, visitors can continue by road to the national park.",

        bus:
            "Junagadh and Veraval have bus connectivity with the Gir region. Local buses and taxis can be used for the onward journey.",

        road:
            "Gir is well connected by road with Junagadh, Veraval, Somnath and other parts of Gujarat.",

        local:
            "Authorized safari vehicles, taxis and local transport services are available for reaching safari entry points and nearby attractions."
    },

    nearbyPlaces: [
        "Devalia Safari Park",
        "Somnath Temple",
        "Sasan Gir",
        "Kankai Mata Temple",
        "Kamleshwar Dam"
    ],

    travelTips: [
        "Obtain a valid safari entry permit before entering the forest.",
        "Use only official and authorized safari booking platforms.",
        "Maintain a safe distance from wildlife and remain inside the vehicle.",
        "Do not feed animals or disturb them during the safari.",
        "Avoid loud sounds, honking and music inside the forest.",
        "Do not litter or carry prohibited plastic items into the forest.",
        "Wear comfortable clothing suitable for outdoor wildlife exploration.",
        "Wildlife sightings are never guaranteed, so enjoy the complete forest experience."
    ]
}
        ]

    },


    /* =====================================================
       HARYANA
    ===================================================== */

    "Haryana": {

        region: "North India",

        description:
            "Discover historic sites, cultural landmarks, ancient traditions and modern attractions of Haryana.",

        about:
            "Haryana combines historical significance with modern cities and cultural traditions. The state has important sites associated with ancient Indian history and spirituality.",

        image:"images/hero/haryana.jpg",

        places: "15+",

        cities: "5+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Gurugram",
                description:
                    "A modern business and technology hub near Delhi.",
                     image: "images/Gurugram.jpg"
            },

            {
                name: "Faridabad",
                description:
                    "A major urban center with historical and recreational attractions.",
                     image: "images/Faridabad.jpg"
            },

            {
                name: "Kurukshetra",
                description:
                    "An important spiritual and historical destination.",
                     image: "images/Kurukshetra.jpg"
            },

            {
                name: "Panipat",
                description:
                    "A historic city known for major battles and cultural heritage.",
                     image: "images/Panipat.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Kurukshetra",

    category: "religious",

    image: "images/places/Kurukshetra.jpg",

    description:
        "A sacred and historically significant destination associated with the Mahabharata and Bhagavad Gita, known for holy sarovars, temples, museums and ancient pilgrimage sites.",

    about:
        "Kurukshetra is one of Haryana's most important religious and historical destinations. The region is traditionally associated with the Mahabharata and is believed to be the place where Lord Krishna delivered the Bhagavad Gita to Arjuna at Jyotisar. Major attractions include Brahma Sarovar, Jyotisar, Sannihit Sarovar, Sthaneshwar Mahadev Temple, Bhadrakali Temple, Sri Krishna Museum, Kurukshetra Panorama and Science Centre, Dharohar Museum and Bhishma Kund. The city attracts pilgrims, history enthusiasts and cultural travellers throughout the year.",

    location:
        "Kurukshetra, Haryana",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "Generally free for major religious sites; museums and selected attractions may have separate charges",

    howToReach: {

        flight:
            "Chandigarh Airport and Indira Gandhi International Airport in Delhi are the nearest major airport options. Kurukshetra can then be reached by road or train.",

        train:
            "Kurukshetra Junction Railway Station is an important railway station with connections to Delhi, Chandigarh, Ambala and other major cities.",

        bus:
            "Regular bus services connect Kurukshetra with Delhi, Chandigarh, Ambala, Karnal and other cities of Haryana.",

        road:
            "Kurukshetra is well connected by road through major highways and routes from Delhi, Chandigarh, Ambala and other parts of Haryana.",

        local:
            "Auto-rickshaws, taxis, local buses and hired vehicles are available for visiting the city's religious and historical attractions."
    },

    nearbyPlaces: [
        "Brahma Sarovar",
        "Jyotisar",
        "Sannihit Sarovar",
        "Sthaneshwar Mahadev Temple",
        "Bhishma Kund",
        "Sri Krishna Museum",
        "Kurukshetra Panorama and Science Centre"
    ],

    travelTips: [
        "Dress respectfully while visiting temples and religious places.",
        "Maintain cleanliness around sacred sarovars and temple premises.",
        "Check timings of museums and attractions before visiting.",
        "The International Gita Mahotsav is an important cultural and spiritual event.",
        "Avoid disturbing religious ceremonies and pilgrims.",
        "October to March is generally comfortable for sightseeing."
    ]
},
            {
    name: "Sultanpur National Park",

    category: "nature",

    image: "images/places/Sultanpur National Park.jpg",

    description:
        "A famous wetland and birdwatching destination near Gurugram, known for migratory birds, peaceful landscapes, nature trails and biodiversity.",

    about:
        "Sultanpur National Park is a protected wetland in Gurugram district and an important destination for birdwatchers and nature lovers. The park is a Ramsar Site of International Importance and supports more than 250 species of resident and migratory birds. During the winter season, visitors can observe migratory species arriving from Europe, Siberia and Central Asia. The park features wetlands, grasslands, walking trails, watchtowers and bird-viewing areas, making it an excellent destination for wildlife photography and nature exploration.",

    location:
        "Sultanpur, Gurugram, Haryana",

    bestTime:
        "November - February",

    duration:
        "Half Day - 1 Day",

    entryFee:
        "Park entry and applicable activity or facility charges may apply",

    howToReach: {

        flight:
            "Indira Gandhi International Airport in Delhi is the nearest major airport. Sultanpur National Park is approximately 50 km from Delhi.",

        train:
            "Gurugram Railway Station is a convenient railway access point. Visitors can continue towards Sultanpur by taxi or local transport.",

        bus:
            "Local and regional buses connect Gurugram and nearby areas with Sultanpur and Farukh Nagar.",

        road:
            "The park is approximately 15 km from Gurugram and can be reached by road through the Gurugram-Farukh Nagar route.",

        local:
            "Taxis, auto-rickshaws and hired vehicles are available from Gurugram for reaching the national park."
    },

    nearbyPlaces: [
        "Damdama Lake",
        "Sohna",
        "Farrukhnagar",
        "Sheetla Mata Mandir",
        "Gurugram"
    ],

    travelTips: [
        "November to February is ideal for observing migratory birds.",
        "Carry binoculars and a camera for birdwatching.",
        "Maintain silence and avoid disturbing birds and wildlife.",
        "Stay on designated trails and observation areas.",
        "Do not feed birds or other animals.",
        "Carry comfortable footwear for walking around the park.",
        "Check current park opening dates and timings before visiting."
    ]
},

            {
    name: "Pinjore Gardens",

    category: "heritage",

    image: "images/places/Pinjore Gardens.jpg",

    description:
        "A magnificent 17th-century Mughal-style garden known for its terraced landscapes, fountains, historic architecture and peaceful surroundings.",

    about:
        "Pinjore Gardens, also known as Yadavindra Gardens, is a historic garden complex located in Pinjore near Panchkula. Built in the 17th century, the gardens are an excellent example of Mughal garden design and feature beautifully arranged terraces, fountains, water channels, pavilions and landscaped greenery. The garden's location at the foothills of the lower Shivalik hills adds to its scenic beauty. Historic structures and the traditional garden layout make it an important heritage attraction of Haryana.",

    location:
        "Pinjore, Panchkula, Haryana",

    bestTime:
        "October - March",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Entry charges may apply",

    howToReach: {

        flight:
            "Chandigarh Airport is the nearest major airport and is well connected with Pinjore by road.",

        train:
            "Kalka Railway Station is a convenient railway access point and is located close to Pinjore.",

        bus:
            "Regular buses connect Pinjore with Panchkula, Chandigarh, Kalka and other nearby towns.",

        road:
            "Pinjore Gardens are well connected by road and are located near the Chandigarh-Kalka route.",

        local:
            "Taxis, auto-rickshaws and local buses are available from Kalka, Panchkula and Chandigarh."
    },

    nearbyPlaces: [
        "Kalka",
        "Morni Hills",
        "Tikkar Tal",
        "Bhima Devi Temple",
        "Chandigarh"
    ],

    travelTips: [
        "Visit during the morning or late afternoon for comfortable sightseeing.",
        "Wear comfortable footwear for walking through the garden terraces.",
        "The gardens are particularly attractive when the fountains and landscaped areas are active.",
        "Respect the historic structures and do not damage garden installations.",
        "Carry drinking water during warmer months.",
        "Check current opening timings and entry charges before visiting."
    ]
},
           {
    name: "Morni Hills",

    category: "adventure",

    image: "images/places/Morni Hills.jpg",

    description:
        "The only hill station of Haryana, known for lush Shivalik landscapes, twin lakes, trekking, birdwatching, camping and outdoor adventure activities.",

    about:
        "Morni Hills is a scenic hill destination in Panchkula district situated in the lower Shivalik range. Located at an elevation of around 3,600 feet, Morni is known for its green hills, forests, valleys and the beautiful Tikkar Tal twin lakes. The region offers opportunities for trekking, nature walks, birdwatching, camping, rock climbing and other outdoor activities. The surrounding landscape supports a variety of flora and fauna, making Morni an attractive eco-tourism destination for nature and adventure lovers.",

    location:
        "Morni, Panchkula, Haryana",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "Generally no general entry fee; adventure activities, camping and specific facilities may have separate charges",

    howToReach: {

        flight:
            "Chandigarh Airport is the nearest major airport. From Chandigarh, Morni Hills can be reached by road through Panchkula.",

        train:
            "Kalka Railway Station is the nearest major railway access point. From Kalka, visitors can continue by taxi or local transport.",

        bus:
            "Local and regional buses connect Panchkula and nearby towns with Morni.",

        road:
            "Morni Hills is approximately 45 km from Chandigarh and can be reached by road through Panchkula.",

        local:
            "Taxis and hired vehicles are the most convenient options for exploring Morni Hills, Tikkar Tal and nearby attractions."
    },

    nearbyPlaces: [
        "Tikkar Tal",
        "Morni Fort",
        "Morni Wildlife Sanctuary",
        "Thapli Nature Camp",
        "Ghaggar River"
    ],

    travelTips: [
        "Carry comfortable trekking shoes for hiking and nature trails.",
        "October to March is generally comfortable for outdoor activities.",
        "Carry light warm clothing during winter evenings.",
        "Follow safety instructions during trekking and adventure activities.",
        "Do not litter in the hills, forests or around Tikkar Tal.",
        "Avoid entering restricted forest areas without permission.",
        "Book accommodation or camping facilities in advance during weekends and holidays."
    ]
}

        ]

    },


    /* =====================================================
       HIMACHAL PRADESH
    ===================================================== */

    "Himachal Pradesh": {

        region: "North India",

        description:
            "Experience snow-covered mountains, peaceful valleys, adventure activities and charming hill towns.",

        about:
            "Himachal Pradesh is one of India's most popular mountain destinations. It is famous for snow-capped peaks, valleys, forests, temples and adventure activities.",

        image:"images/hero/himachal-pradesh.jpg",

        places: "30+",

        cities: "7+",

        bestTime: "Mar - Jun",

        popularCities: [

            {
                name: "Shimla",
                description:
                    "A famous hill station known for colonial architecture and mountain views.",
                    image: "images/Shimla.jpg"
            },

            {
                name: "Manali",
                description:
                    "A popular destination for mountains, valleys and adventure activities.",
                    image: "images/Manali.jpg"
            },

            {
                name: "Dharamshala",
                description:
                    "A scenic mountain town known for Tibetan culture and monasteries.",
                    image: "images/Dharamshala.jpg"
            },

            {
                name: "Kullu",
                description:
                    "A beautiful valley surrounded by mountains and rivers.",
                    image: "images/Kullu.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Rohtang Pass",

    category: "adventure",

    image: "images/places/Rohtang Pass.jpg",

    description:
        "A spectacular high-altitude mountain pass near Manali known for snow-covered landscapes, glaciers, Himalayan views and thrilling adventure experiences.",

    about:
        "Rohtang Pass is a high mountain pass in the Pir Panjal range of the Himalayas and an important gateway connecting the Kullu Valley with the Lahaul and Spiti region. Located at an altitude of around 3,978 metres, the pass offers dramatic views of snow-covered peaks, glaciers and mountain valleys. During the accessible season, visitors come here to experience snow activities, photography and breathtaking Himalayan landscapes. Access to Rohtang Pass is regulated and tourism vehicles may require permits.",

    location:
        "Rohtang Pass, Kullu, Himachal Pradesh",

    bestTime:
        "May - October",

    duration:
        "1 Day",

    entryFee:
        "Tourism permit, congestion fee and applicable vehicle or activity charges may apply",

    howToReach: {

        flight:
            "Bhuntar Airport near Kullu is the nearest airport. From Bhuntar, visitors can travel by road towards Manali and Rohtang Pass.",

        train:
            "Joginder Nagar is the nearest narrow-gauge railway option. Chandigarh and Pathankot are major broad-gauge railway access points followed by road travel.",

        bus:
            "Regular buses connect Manali with Kullu, Bhuntar, Chandigarh, Delhi and other major destinations. From Manali, local transport is used for Rohtang Pass.",

        road:
            "Rohtang Pass is approximately 51 km from Manali and is reached through the Manali-Leh highway route. Access is subject to weather, road conditions and government regulations.",

        local:
            "Taxis and authorized tourism vehicles are available from Manali for visiting Rohtang Pass. Required tourism permits should be obtained before travel."
    },

    nearbyPlaces: [
        "Solang Valley",
        "Manali",
        "Marhi",
        "Gulaba",
        "Atal Tunnel",
        "Sissu"
    ],

    travelTips: [
        "Check the latest road and weather conditions before travelling.",
        "Obtain the required Rohtang tourism permit before visiting.",
        "Carry warm clothing even during summer because temperatures can remain very low.",
        "Wear suitable footwear for snow and uneven mountain terrain.",
        "Avoid travelling during severe weather conditions.",
        "Do not litter in the Himalayan environment.",
        "Follow all instructions from local authorities and traffic officials."
    ]
},
           {
    name: "Shimla Ridge",

    category: "heritage",

    image: "images/places/Shimla Ridge.jpg",

    description:
        "A famous open promenade in the heart of Shimla known for panoramic Himalayan views, colonial architecture, cultural events and the iconic Christ Church.",

    about:
        "The Ridge is one of the most recognizable landmarks of Shimla and forms a large open space running east to west alongside the famous Mall Road. It acts as the cultural and social hub of the city and offers beautiful views towards the surrounding Himalayan mountains. Important landmarks around the Ridge include Christ Church, the State Library, Gaiety Theatre, Town Hall and the Mahatma Gandhi statue. The area also hosts cultural celebrations and seasonal events throughout the year.",

    location:
        "The Ridge, Shimla, Himachal Pradesh",

    bestTime:
        "March - June and October - December",

    duration:
        "2 - 4 Hours",

    entryFee:
        "No general entry fee",

    howToReach: {

        flight:
            "Shimla Airport at Jubbarhatti is the nearest airport and is approximately 23 km from Shimla. Taxis are available from the airport.",

        train:
            "Shimla Railway Station is connected to Kalka through the historic UNESCO World Heritage Kalka-Shimla railway line.",

        bus:
            "Regular buses connect Shimla with Delhi, Chandigarh, Kalka and other cities of Himachal Pradesh and North India.",

        road:
            "Shimla is well connected by road from Chandigarh, Delhi, Kalka and other major cities. The Ridge is located in central Shimla near Mall Road.",

        local:
            "The Ridge and Mall Road are primarily pedestrian areas. Local taxis and buses can be used to reach nearby points, followed by walking."
    },

    nearbyPlaces: [
        "Mall Road",
        "Christ Church",
        "Jakhoo Temple",
        "Gaiety Theatre",
        "Scandal Point",
        "Shimla State Museum"
    ],

    travelTips: [
        "Wear comfortable shoes because much of central Shimla is explored on foot.",
        "Carry warm clothing during winter and evenings.",
        "Visit early morning or evening for pleasant weather and beautiful views.",
        "The Ridge can become crowded during peak tourist seasons.",
        "Respect the historic buildings and public spaces.",
        "Avoid littering and follow local pedestrian and traffic regulations."
    ]
},
{
    name: "Solang Valley",

    category: "adventure",

    image: "images/places/Solang Valley.jpg",

    description:
        "A scenic valley near Manali famous for paragliding, skiing, zorbing, ropeway rides, snow activities and spectacular Himalayan scenery.",

    about:
        "Solang Valley, also known as Solang Nullah, is a beautiful mountain valley located approximately 13 km from Manali. Surrounded by deodar forests and high Himalayan peaks, the valley is one of Himachal Pradesh's most popular adventure destinations. During summer, visitors can enjoy activities such as paragliding, zorbing, quad biking, rock climbing, camping and ropeway rides. In winter, the valley becomes a popular destination for skiing and snow-based activities.",

    location:
        "Solang Valley, Manali, Himachal Pradesh",

    bestTime:
        "December - February for snow and skiing; April - June for general adventure activities",

    duration:
        "1 Day",

    entryFee:
        "No general valley entry fee; adventure activities, ropeway and equipment rentals have separate charges",

    howToReach: {

        flight:
            "Bhuntar Airport near Kullu is the nearest airport. From the airport, visitors can travel by road towards Manali and Solang Valley.",

        train:
            "Joginder Nagar is the nearest narrow-gauge railway option. Chandigarh and Pathankot are major railway access points followed by road travel.",

        bus:
            "Regular buses connect Manali with Kullu, Bhuntar and other major towns. Local buses and taxis can be used from Manali to Solang Valley.",

        road:
            "Solang Valley is approximately 13 km from Manali and is easily accessible by road.",

        local:
            "Taxis, local buses, rental vehicles and tour operators are available from Manali for travelling to Solang Valley."
    },

    nearbyPlaces: [
        "Rohtang Pass",
        "Atal Tunnel",
        "Manali",
        "Vashisht Temple",
        "Hidimba Devi Temple",
        "Sissu"
    ],

    travelTips: [
        "Choose adventure activities only through authorized operators.",
        "Follow safety instructions before participating in paragliding, skiing or other activities.",
        "Carry warm clothing during winter and snow season.",
        "Wear suitable shoes for outdoor activities.",
        "Check weather conditions before planning adventure activities.",
        "Avoid restricted or unsafe areas around mountain slopes and streams.",
        "Carry drinking water and avoid littering."
    ]
},

           {
    name: "Dharamshala",

    category: "nature",

    image: "images/places/Dharamshala.jpg",

    description:
        "A picturesque Himalayan destination surrounded by the Dhauladhar ranges, known for Tibetan culture, monasteries, waterfalls, trekking and peaceful mountain landscapes.",

    about:
        "Dharamshala is a scenic hill destination located in the Kangra Valley beneath the Dhauladhar mountain range. The city is divided broadly into Lower Dharamshala and Upper Dharamshala, with McLeod Ganj forming one of its most famous areas. McLeod Ganj is known for Tibetan culture and is often called 'Little Lhasa'. Dharamshala offers a combination of mountain scenery, Buddhist monasteries, colonial heritage, waterfalls, temples and trekking opportunities. Popular attractions include Bhagsunag Falls, Triund, Dal Lake, St. John's Church, Norbulingka Institute, Gyuto Monastery and the Dharamshala War Memorial.",

    location:
        "Dharamshala, Kangra, Himachal Pradesh",

    bestTime:
        "March - June and September - November",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general city entry fee; individual attractions, museums and activities may have separate charges",

    howToReach: {

        flight:
            "Kangra Airport at Gaggal is approximately 14 km from Dharamshala and provides convenient air access. Taxis are available from the airport.",

        train:
            "Pathankot is the nearest major broad-gauge railway access point. A narrow-gauge railway line connects the region with Kangra.",

        bus:
            "Regular buses connect Dharamshala with Delhi, Chandigarh, Pathankot, Shimla, Manali, Kullu and other destinations.",

        road:
            "Dharamshala is well connected by road with major cities of Himachal Pradesh and neighbouring states.",

        local:
            "Taxis, local buses, auto-rickshaws and hired vehicles are available for travelling between Dharamshala, McLeod Ganj and nearby attractions."
    },

    nearbyPlaces: [
        "McLeod Ganj",
        "Bhagsunag Falls",
        "Triund",
        "Dal Lake",
        "St. John's Church",
        "Norbulingka Institute",
        "Gyuto Monastery"
    ],

    travelTips: [
        "Carry comfortable walking or trekking shoes.",
        "March to June is generally pleasant for sightseeing and outdoor activities.",
        "Carry warm clothing because temperatures can drop in the upper areas.",
        "Respect Tibetan Buddhist traditions and religious places.",
        "Follow designated trekking routes while visiting Triund and other mountain trails.",
        "Check weather conditions before trekking.",
        "Keep the mountain environment clean and avoid single-use plastic."
    ]
}

        ]

    },


    /* =====================================================
       JHARKHAND
    ===================================================== */

    "Jharkhand": {

        region: "East India",

        description:
            "Explore waterfalls, forests, temples and the natural beauty of Jharkhand.",

        about:
            "Jharkhand is known for dense forests, waterfalls, wildlife and tribal culture. The state offers beautiful natural destinations and important religious sites.",

        image:"images/hero/jharkhand.jpg",

        places: "20+",

        cities: "5+",

        bestTime: "Oct - Feb",

        popularCities: [

            {
                name: "Ranchi",
                description:
                    "The capital city known for waterfalls and green surroundings.",
                     image: "images/Ranchi.jpg"
            },

            {
                name: "Jamshedpur",
                description:
                    "A planned industrial city surrounded by natural beauty.",
                     image: "images/Jamshedpur.jpg"
            },

            {
                name: "Deoghar",
                description:
                    "A major religious destination famous for the Baidyanath Temple.",
                     image: "images/Deoghar.jpg"
            },

            {
                name: "Dhanbad",
                description:
                    "A major city known for its industrial importance.",
                     image: "images/Dhanbad.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Dassam Falls",

    category: "nature",

    image: "images/places/Dassam Falls.jpg",

    description:
        "A spectacular natural waterfall formed by the Kanchi River, surrounded by rocky landscapes and lush greenery near Ranchi.",

    about:
        "Dassam Falls, also known as Dassam Ghagh, is one of the most popular waterfalls near Ranchi. The Kanchi River, a tributary of the Subarnarekha River, cascades down from a height of around 144 feet, creating a dramatic natural landscape. The waterfall is surrounded by forests, rocks and scenic greenery, making it a popular destination for nature lovers, photographers and weekend travellers.",

    location:
        "Taimara, Ranchi, Jharkhand",

    bestTime:
        "October - January",

    duration:
        "Half Day - 1 Day",

    entryFee:
        "Entry and facility charges may apply depending on the current tourism arrangements",

    howToReach: {

        flight:
            "Birsa Munda Airport in Ranchi is the nearest major airport. From Ranchi, visitors can travel by road towards Taimara and Dassam Falls.",

        train:
            "Ranchi Railway Station is the nearest major railway station. From Ranchi, the waterfall can be reached by taxi or private vehicle.",

        bus:
            "Buses are available from Ranchi towards Bundu and nearby areas. Local transport or taxis can then be used to reach the waterfall.",

        road:
            "Dassam Falls is approximately 40-45 km from Ranchi on the Ranchi-Jamshedpur route. A motorable road branches towards Taimara village.",

        local:
            "Taxis and private vehicles are convenient options for reaching Dassam Falls from Ranchi."
    },

    nearbyPlaces: [
        "Hundru Falls",
        "Jonha Falls",
        "Sita Falls",
        "Getalsud Dam",
        "Kanke Dam"
    ],

    travelTips: [
        "October to January is considered an ideal period for visiting the waterfall.",
        "Be extremely careful near the water and slippery rocks.",
        "Avoid entering deep or fast-flowing water.",
        "Wear comfortable footwear suitable for uneven terrain.",
        "Carry drinking water and basic outdoor essentials.",
        "Do not litter around the waterfall or surrounding forest.",
        "Follow local safety instructions and restricted-area signs."
    ]
},
            {
    name: "Baidyanath Temple",

    category: "religious",

    image: "images/places/Baidyanath Temple.jpg",

    description:
        "A highly revered Shiva temple in Deoghar and one of the twelve Jyotirlingas, attracting pilgrims from across India.",

    about:
        "Baidyanath Temple, also known as Baba Baidyanath Dham, is one of the most important pilgrimage destinations in Jharkhand. Located in Deoghar, the temple complex consists of 22 temples, with the main Baidyanath Temple being the largest and tallest. It houses one of the twelve revered Jyotirlingas of Lord Shiva. The temple becomes especially significant during the Shravan month when large numbers of devotees undertake the traditional Kanwar pilgrimage to offer holy water to Lord Shiva.",

    location:
        "Deoghar, Jharkhand",

    bestTime:
        "October - March",

    duration:
        "Half Day - 1 Day",

    entryFee:
        "Generally free for regular temple darshan; special darshan or facilities may have separate arrangements",

    howToReach: {

        flight:
            "Deoghar Airport provides convenient air access to the city. Ranchi Airport is another option followed by road travel to Deoghar.",

        train:
            "Baidyanathdham Railway Station is close to the temple, while Jasidih Junction is a major railway station approximately 8 km away.",

        bus:
            "Regular buses connect Deoghar with Ranchi, Dumka, Bhagalpur, Patna and other nearby cities.",

        road:
            "Deoghar is well connected by road with major cities of Jharkhand and neighbouring states.",

        local:
            "Auto-rickshaws, taxis and local vehicles are available for travelling around Deoghar and visiting nearby attractions."
    },

    nearbyPlaces: [
        "Naulakha Mandir",
        "Tapovan Hill",
        "Basukinath Temple",
        "Trikut Parvat",
        "Ramakrishna Mission Vidyapith",
        "Nandan Pahar"
    ],

    travelTips: [
        "Dress respectfully while visiting the temple.",
        "Follow temple security and darshan instructions.",
        "The temple can become extremely crowded during Shravan and major festivals.",
        "Check current darshan and temple timings before travelling.",
        "Keep belongings secure in crowded pilgrimage areas.",
        "Maintain cleanliness inside and around the temple complex.",
        "Respect religious rituals and avoid disturbing devotees."
    ]
},

            {
    name: "Netarhat",

    category: "nature",

    image: "images/places/Netarhat.jpg",

    description:
        "A peaceful hill destination in Jharkhand known as the Queen of Chhotanagpur, famous for spectacular sunrises, sunsets, forests, waterfalls and scenic valleys.",

    about:
        "Netarhat is a beautiful hill destination located in Latehar district and is popularly known as the 'Queen of Chhotanagpur'. Surrounded by dense forests, rolling hills and green valleys, Netarhat is one of Jharkhand's most scenic destinations. The region is especially famous for its Sunrise Point and Magnolia Sunset Point. Other attractions include Upper Ghaghri Falls, Lower Ghaghri Falls, Koel View Point, Lodh Falls and Sadni Falls. The peaceful environment makes Netarhat ideal for nature lovers, photographers and travellers looking for a relaxing mountain getaway.",

    location:
        "Netarhat, Latehar, Jharkhand",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Days",

    entryFee:
        "Generally no general entry fee; individual attractions or activities may have separate charges",

    howToReach: {

        flight:
            "Birsa Munda Airport in Ranchi is the nearest major airport. From Ranchi, Netarhat can be reached by road.",

        train:
            "Latehar is a nearby railway access point, while Ranchi is the major railway hub for travellers visiting Netarhat.",

        bus:
            "Buses connect Ranchi and nearby towns with Netarhat. Private taxis are also available for the journey.",

        road:
            "Netarhat is approximately 145-156 km from Ranchi and can be reached by road through the scenic plateau region.",

        local:
            "Taxis and hired vehicles are convenient for exploring Netarhat and its surrounding waterfalls and viewpoints."
    },

    nearbyPlaces: [
        "Magnolia Sunset Point",
        "Netarhat Sunrise Point",
        "Upper Ghaghri Falls",
        "Lower Ghaghri Falls",
        "Koel View Point",
        "Lodh Falls",
        "Sadni Falls"
    ],

    travelTips: [
        "Visit Sunrise Point early in the morning for panoramic views.",
        "Magnolia Sunset Point is ideal for watching the evening sunset.",
        "Carry warm clothing, especially during winter nights.",
        "Wear comfortable footwear for visiting waterfalls and viewpoints.",
        "Drive carefully on hilly and winding roads.",
        "Avoid entering dense forest areas without local guidance.",
        "Keep the hill environment clean and avoid littering."
    ]
},

            {
    name: "Hundru Falls",

    category: "adventure",

    image: "images/places/Hundru Falls.jpg",

    description:
        "One of Jharkhand's most spectacular waterfalls, where the Subarnarekha River plunges dramatically through rocky terrain surrounded by natural greenery.",

    about:
        "Hundru Falls is one of the most famous waterfalls near Ranchi and is formed by the Subarnarekha River. The river drops from a height of approximately 320 feet, creating a spectacular cascade surrounded by rocky landscapes and forested hills. During the monsoon, the waterfall becomes especially powerful and dramatic. The area is also known as a trekking and picnic destination, while the pool at the base of the waterfall attracts visitors during safer conditions.",

    location:
        "Ranchi, Jharkhand",

    bestTime:
        "August - March",

    duration:
        "Half Day - 1 Day",

    entryFee:
        "Entry and facility charges may apply depending on current tourism arrangements",

    howToReach: {

        flight:
            "Birsa Munda Airport in Ranchi is the nearest major airport. From Ranchi, visitors can travel by road to Hundru Falls.",

        train:
            "Ranchi Railway Station is the nearest major railway station and provides convenient access to the waterfall by road.",

        bus:
            "Buses are available from Ranchi towards nearby towns and routes around Hundru. Local transport or taxis can be used for the final journey.",

        road:
            "Hundru Falls is approximately 45 km from Ranchi and is accessible through the Ranchi-Purulia Highway. An alternative route through Ormanjhi and Sikidiri is also available.",

        local:
            "Taxis, private vehicles and hired cars are convenient options for travelling from Ranchi to Hundru Falls."
    },

    nearbyPlaces: [
        "Dassam Falls",
        "Jonha Falls",
        "Getalsud Dam",
        "Sita Falls",
        "Kanke Dam"
    ],

    travelTips: [
        "The waterfall is especially spectacular during the monsoon.",
        "Be extremely careful around slippery rocks and strong water currents.",
        "Avoid entering the water when the current is strong.",
        "Wear comfortable footwear suitable for trekking and uneven terrain.",
        "Carry drinking water and basic outdoor essentials.",
        "Follow local safety instructions and restricted-area signs.",
        "Do not litter around the waterfall or surrounding forest.",
        "Check weather conditions before planning your visit."
    ]
}

        ]

    },


    /* =====================================================
       KARNATAKA
    ===================================================== */

    "Karnataka": {

        region: "South India",

        description:
            "Discover magnificent palaces, heritage monuments, beaches, waterfalls and vibrant cities.",

        about:
            "Karnataka offers a diverse travel experience with ancient heritage sites, royal palaces, beautiful beaches, forests and modern cities.",

        image:"images/hero/karnataka.jpg",

        places: "35+",

        cities: "7+",

        bestTime: "Oct - Feb",

        popularCities: [

            {
                name: "Bengaluru",
                description:
                    "India's major technology hub known for parks and modern attractions.",
                     image: "images/Bengaluru.jpg"
            },

            {
                name: "Mysuru",
                description:
                    "A royal city famous for its magnificent palace.",
                     image: "images/Mysuru.jpg"
            },

            {
                name: "Hampi",
                description:
                    "A historic destination filled with spectacular ruins and monuments.",
                     image: "images/Dhanbad.jpg"
            },

            {
                name: "Mangaluru",
                description:
                    "A coastal city known for beaches and cultural traditions.",
                     image: "images/Hampi.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Mysore Palace",

    category: "heritage",

    image: "images/places/Mysore Palace.jpg",

    description:
        "A magnificent royal palace in Mysuru famous for its Indo-Saracenic architecture, grand interiors, historic treasures and spectacular illumination.",

    about:
        "Mysore Palace, also known as Amba Vilas Palace, is one of the most iconic heritage landmarks of Karnataka. The present three-storeyed palace was designed by British architect Henry Irwin and constructed between 1897 and 1912 in the Indo-Saracenic style. The palace features ornate ceilings, sculpted pillars, stained glass, carved doors, royal paintings and the famous Durbar Hall. The palace complex also contains temples and a residential museum. It is especially spectacular when illuminated during Sundays, public holidays and the Dasara celebrations.",

    location:
        "Mysuru, Karnataka",

    bestTime:
        "October - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Entry charges apply; ticket rates may vary for different visitor categories and facilities",

    howToReach: {

        flight:
            "Mysuru Airport provides air access to the city. Kempegowda International Airport in Bengaluru is another major option followed by road or rail travel to Mysuru.",

        train:
            "Mysuru Railway Station is the nearest major railway station and is located close to the palace.",

        bus:
            "Regular buses connect Mysuru with Bengaluru, Coorg, Hassan, Mangaluru and other major cities of Karnataka.",

        road:
            "Mysuru is well connected by road with Bengaluru and other major cities. The palace is located in the heart of the city.",

        local:
            "Auto-rickshaws, taxis, buses and app-based cab services are available for travelling around Mysuru."
    },

    nearbyPlaces: [
        "Chamundi Hills",
        "Mysuru Zoo",
        "St. Philomena's Church",
        "Jaganmohan Palace",
        "Karanji Lake",
        "Brindavan Gardens"
    ],

    travelTips: [
        "Visit in the evening if you want to see the palace illumination.",
        "Check the latest palace timings and ticket details before visiting.",
        "Photography may be restricted inside the palace.",
        "Wear comfortable footwear while exploring the large palace complex.",
        "Maintain silence and respect the historic interiors and exhibits.",
        "The Dasara season can be extremely crowded, so plan accordingly."
    ]
},
            {
    name: "Hampi",

    category: "heritage",

    image: "images/places/Hampi.jpg",

    description:
        "A spectacular UNESCO World Heritage destination famous for ancient temples, royal ruins, stone monuments, massive boulders and the remains of the Vijayanagara Empire.",

    about:
        "Hampi is one of India's most remarkable historical destinations and was once the grand capital of the Vijayanagara Empire. Located along the Tungabhadra River, the region contains extensive ruins of temples, palaces, markets, gateways and royal structures spread across a dramatic landscape of granite boulders and hills. Major attractions include Virupaksha Temple, Vijaya Vittala Temple, the iconic Stone Chariot, Lotus Mahal, Elephant Stables, Queen's Bath and the monolithic Narasimha statue. The monuments of Hampi were recognized as a UNESCO World Heritage Site in 1986.",

    location:
        "Hampi, Vijayanagara, Karnataka",

    bestTime:
        "October - February",

    duration:
        "2 - 3 Days",

    entryFee:
        "Many areas are open for exploration; certain protected monuments and attractions may have separate entry charges",

    howToReach: {

        flight:
            "Jindal Vijayanagar Airport near Vidyanagar is a nearby air option. Hubballi Airport is another major option followed by road travel to Hampi.",

        train:
            "Hosapete Junction is the nearest major railway station and is approximately 13 km from Hampi.",

        bus:
            "Regular buses connect Hosapete with Bengaluru, Hyderabad, Hubballi and other cities. Local buses and vehicles connect Hosapete with Hampi.",

        road:
            "Hampi is well connected by road with Hosapete and other cities of Karnataka. The ruins are spread across a large area and require local travel.",

        local:
            "Auto-rickshaws, taxis, rental bicycles and other local transport options are available for exploring different parts of Hampi."
    },

    nearbyPlaces: [
        "Virupaksha Temple",
        "Vijaya Vittala Temple",
        "Stone Chariot",
        "Lotus Mahal",
        "Elephant Stables",
        "Hemakuta Hill",
        "Matanga Hill"
    ],

    travelTips: [
        "Wear comfortable shoes because Hampi involves considerable walking.",
        "Carry sunscreen, sunglasses and sufficient drinking water.",
        "Start sightseeing early to avoid the strongest afternoon heat.",
        "Respect protected monuments and do not climb restricted structures.",
        "Hire a local guide if you want detailed historical information.",
        "Allow at least two days to explore the major monuments properly.",
        "Sunrise and sunset from the surrounding hills offer excellent views."
    ]
},
           {
    name: "Coorg",

    category: "nature",

    image: "images/places/Coorg.jpg",

    description:
        "A scenic hill destination known for coffee plantations, misty mountains, lush forests, waterfalls, wildlife and peaceful natural landscapes.",

    about:
        "Coorg, officially known as Kodagu, is one of Karnataka's most popular hill destinations and is often called the 'Scotland of India'. The region is famous for its rolling hills, dense forests, coffee plantations, spice gardens, waterfalls and pleasant climate. Visitors can explore Abbey Falls, Raja's Seat, Mandalpatti, Dubare Elephant Camp, Talacauvery and various coffee estates. Coorg is also known for its distinctive Kodava culture, traditional cuisine and warm hospitality.",

    location:
        "Kodagu, Karnataka",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general entry fee for Coorg; individual attractions and activities may have separate charges",

    howToReach: {

        flight:
            "Mysuru Airport is a convenient nearby airport. Mangaluru International Airport and Kempegowda International Airport in Bengaluru are additional options followed by road travel.",

        train:
            "Coorg does not have a major railway station. Mysuru and Hassan are convenient railway access points followed by road travel.",

        bus:
            "Regular buses connect Madikeri with Mysuru, Bengaluru, Mangaluru and other cities of Karnataka.",

        road:
            "Coorg is well connected by road with Mysuru, Mangaluru, Hassan and Bengaluru. Madikeri serves as the main town and base for exploring the region.",

        local:
            "Taxis, rental cars and local tour vehicles are convenient options for visiting waterfalls, viewpoints, plantations and other attractions."
    },

    nearbyPlaces: [
        "Abbey Falls",
        "Raja's Seat",
        "Mandalpatti",
        "Dubare Elephant Camp",
        "Talacauvery",
        "Nisargadhama",
        "Namdroling Monastery"
    ],

    travelTips: [
        "October to March is generally comfortable for sightseeing and outdoor activities.",
        "Carry light rain protection because weather can change quickly in the hills.",
        "Wear comfortable footwear for waterfalls and plantation walks.",
        "Try a guided coffee plantation tour to learn about local coffee production.",
        "Drive carefully on winding hill roads.",
        "Respect local communities and plantation property.",
        "Carry warm clothing for early mornings and evenings."
    ]
},
            {
    name: "Gokarna",

    category: "religious",

    image: "images/places/Gokarna.jpg",

    description:
        "A coastal destination famous for sacred temples, beautiful beaches, dramatic cliffs, peaceful surroundings and a unique combination of pilgrimage and beach tourism.",

    about:
        "Gokarna is a popular coastal town in Uttara Kannada district known for both its religious significance and scenic Arabian Sea beaches. The town is traditionally associated with Lord Shiva and is home to the revered Mahabaleshwar Temple. Gokarna's coastline features several well-known beaches including Om Beach, Kudle Beach, Half Moon Beach and Paradise Beach. The distinctive Om-shaped coastline of Om Beach, peaceful surroundings and trekking routes between beaches make Gokarna popular among pilgrims, beach lovers, backpackers and nature enthusiasts.",

    location:
        "Gokarna, Uttara Kannada, Karnataka",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general entry fee for Gokarna or its beaches; individual attractions and activities may have separate charges",

    howToReach: {

        flight:
            "Dabolim Airport in Goa and Hubballi Airport are among the nearest major airport options. From the airport, Gokarna can be reached by road or train.",

        train:
            "Gokarna Road Railway Station is the nearest railway station. Ankola and Kumta are additional railway access points in the region.",

        bus:
            "Regular buses connect Gokarna with Bengaluru, Mangaluru, Goa, Hubballi and other cities.",

        road:
            "Gokarna is well connected by road along the Karnataka coast and can be reached from Goa, Mangaluru, Bengaluru and nearby towns.",

        local:
            "Auto-rickshaws, taxis, rental scooters and local vehicles are available for travelling between the town and nearby beaches."
    },

    nearbyPlaces: [
        "Om Beach",
        "Kudle Beach",
        "Half Moon Beach",
        "Paradise Beach",
        "Mahabaleshwar Temple",
        "Yana Caves",
        "Mirjan Fort"
    ],

    travelTips: [
        "October to March is generally a pleasant period for beach and outdoor activities.",
        "Dress respectfully while visiting temples.",
        "Be cautious while swimming because sea conditions can change quickly.",
        "Wear suitable footwear for beach trekking and rocky trails.",
        "Carry sunscreen, drinking water and basic beach essentials.",
        "Respect local religious customs and temple rules.",
        "Avoid littering on beaches and keep the coastline clean."
    ]
}
        ]

    },


    /* =====================================================
       KERALA
    ===================================================== */

    "Kerala": {

        region: "South India",

        description:
            "Experience peaceful backwaters, lush greenery, beautiful beaches and the beauty of God's Own Country.",

        about:
            "Kerala is famous for its backwaters, tropical landscapes, beaches, hill stations and rich cultural traditions. It is one of India's most scenic travel destinations.",

        image:"images/hero/kerala.jpg",

        places: "30+",

        cities: "7+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Kochi",
                description:
                    "A historic coastal city famous for heritage and cultural attractions.",
                     image: "images/Kochi.jpg"
            },

            {
                name: "Thiruvanancithapuram",
                description:
                    "The capital ty known for temples, museums and beaches.",
                     image: "images/Thiruvanancithapuram.jpg"
            },

            {
                name: "Munnar",
                description:
                    "A beautiful hill station surrounded by tea plantations.",
                     image: "images/Munnar.jpg"
            },

            {
                name: "Alappuzha",
                description:
                    "Famous for peaceful backwaters and houseboat experiences.",
                     image: "images/Alappuzha.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Alappuzha Backwaters",

    category: "nature",

    image: "images/places/Alappuzha Backwaters.jpg",

    description:
        "A beautiful network of serene canals, lakes, lagoons and waterways famous for traditional houseboats, lush landscapes, village life and peaceful backwater cruises.",

    about:
        "Alappuzha, popularly known as Alleppey and the 'Venice of the East', is one of Kerala's most famous backwater destinations. The region is surrounded by an intricate network of canals, lakes, lagoons and freshwater rivers lined with coconut palms, paddy fields and traditional villages. A traditional Kerala houseboat, known as a kettuvallam, provides one of the best ways to experience the peaceful waterways and observe the local lifestyle. Alappuzha is also known for boat races, coir products and its coastal landscape.",

    location:
        "Alappuzha, Kerala",

    bestTime:
        "November - February",

    duration:
        "1 - 2 Days",

    entryFee:
        "No general entry fee; houseboat cruises, shikara rides and other activities have separate charges",

    howToReach: {

        flight:
            "Cochin International Airport is the nearest major airport and is approximately 85 km from Alappuzha. From the airport, visitors can travel by taxi or bus.",

        train:
            "Alappuzha Railway Station is the nearest railway station and is located within the city.",

        bus:
            "Regular buses connect Alappuzha with Kochi, Thiruvananthapuram, Kottayam, Kollam and other cities of Kerala.",

        road:
            "Alappuzha is well connected by road with major cities of Kerala and can be reached through the national highway network.",

        local:
            "Auto-rickshaws, taxis, local buses, shikara boats and houseboats are available for exploring Alappuzha and its waterways."
    },

    nearbyPlaces: [
        "Alappuzha Beach",
        "Vembanad Lake",
        "Kuttanad",
        "Pathiramanal Island",
        "Marari Beach",
        "Krishnapuram Palace"
    ],

    travelTips: [
        "A houseboat cruise is one of the best ways to experience the backwaters.",
        "November to February generally offers comfortable weather for sightseeing.",
        "Carry sunscreen, sunglasses and light comfortable clothing.",
        "Choose registered houseboat operators for overnight cruises.",
        "Respect local communities and avoid littering in the waterways.",
        "Carry insect repellent, especially during evening and overnight cruises.",
        "Check weather conditions before planning a boat trip."
    ]
},

           {
    name: "Munnar",

    category: "nature",

    image: "images/places/Munnar.jpg",

    description:
        "A breathtaking hill station famous for rolling tea plantations, mist-covered mountains, waterfalls, forests and cool pleasant weather.",

    about:
        "Munnar is one of Kerala's most famous hill stations, situated in the Western Ghats at the confluence of three mountain streams—Mudrapuzha, Nallathanni and Kundala. The region is renowned for its extensive tea plantations, misty hills, valleys, forests and scenic viewpoints. Munnar is also associated with Eravikulam National Park, home to the endangered Nilgiri Tahr, and is known for the rare Neelakurinji flowers that bloom periodically across the hills. The destination offers opportunities for trekking, nature walks, photography and exploring tea estates.",

    location:
        "Munnar, Idukki, Kerala",

    bestTime:
        "September - May",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general entry fee for Munnar; individual attractions, parks and activities may have separate charges",

    howToReach: {

        flight:
            "Cochin International Airport is the nearest major airport, approximately 110 km from Munnar. Madurai Airport is another option depending on the travel route.",

        train:
            "Aluva and Ernakulam are convenient major railway stations for reaching Munnar. From the railway station, visitors can continue by road.",

        bus:
            "Regular buses connect Munnar with Kochi, Aluva, Ernakulam, Thekkady, Kottayam and other destinations in Kerala.",

        road:
            "Munnar is well connected by road through the Western Ghats and can be reached from Kochi, Kothamangalam, Thekkady and nearby hill destinations.",

        local:
            "Taxis, rental cars, local buses and guided tour vehicles are available for exploring Munnar and nearby attractions."
    },

    nearbyPlaces: [
        "Eravikulam National Park",
        "Mattupetty Dam",
        "Echo Point",
        "Kundala Lake",
        "Tea Museum",
        "Top Station",
        "Attukad Waterfalls"
    ],

    travelTips: [
        "Carry light warm clothing because temperatures can be cool, especially in the mornings and evenings.",
        "Wear comfortable shoes for walking through tea plantations and nature trails.",
        "Check weather conditions before visiting high-altitude viewpoints.",
        "Follow park rules while visiting Eravikulam National Park.",
        "Do not damage tea plants or enter restricted plantation areas.",
        "Try a guided tea plantation or tea factory experience.",
        "Avoid littering and help preserve the fragile mountain environment."
    ]
},

            {
    name: "Sree Padmanabhaswamy Temple",

    category: "religious",

    image: "images/places/Sree Padmanabhaswamy Temple.jpg",

    description:
        "A magnificent historic Vishnu temple in Thiruvananthapuram known for its Dravidian architecture, spiritual importance, grand gopuram and rich cultural heritage.",

    about:
        "Sree Padmanabhaswamy Temple is one of the most important Hindu temples in Kerala and is located in the heart of Thiruvananthapuram. The temple is dedicated to Lord Vishnu, depicted in the reclining Anantha Shayana posture. Its architecture combines Kerala and Dravidian styles and features an impressive seven-storeyed gopuram. The temple has immense religious, historical and cultural significance and is also renowned for its extraordinary treasures and long history. Entry is subject to temple rules and traditional dress requirements.",

    location:
        "Thiruvananthapuram, Kerala",

    bestTime:
        "October - March",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Generally no entry fee for eligible devotees; special offerings and temple services may have separate charges",

    howToReach: {

        flight:
            "Thiruvananthapuram International Airport is the nearest airport and is only a short distance from the temple.",

        train:
            "Thiruvananthapuram Central Railway Station is the nearest major railway station and is located close to the temple.",

        bus:
            "Regular city and interstate buses connect Thiruvananthapuram with major cities and towns across Kerala and neighbouring states.",

        road:
            "The temple is located in the centre of Thiruvananthapuram and is easily accessible by road from different parts of the city.",

        local:
            "Auto-rickshaws, taxis, city buses and app-based cab services are widely available around Thiruvananthapuram."
    },

    nearbyPlaces: [
        "Kuthira Malika Palace",
        "Napier Museum",
        "Thiruvananthapuram Zoo",
        "Shangumukham Beach",
        "Kovalam Beach",
        "Sree Chitra Art Gallery"
    ],

    travelTips: [
        "Follow the temple's traditional dress code before visiting.",
        "Only eligible visitors are permitted inside the temple according to temple rules.",
        "Photography and electronic devices may be restricted in the temple premises.",
        "Maintain silence and respect religious customs.",
        "Check the latest darshan timings and temple guidelines before visiting.",
        "Avoid carrying prohibited items into the temple complex.",
        "The temple can become crowded during major festivals and special occasions."
    ]
},

            {
    name: "Varkala Beach",

    category: "adventure",

    image: "images/places/Varkala Beach.jpg",

    description:
        "A spectacular coastal destination famous for its dramatic red cliffs, Arabian Sea views, golden sands, sunsets, water activities and peaceful beach atmosphere.",

    about:
        "Varkala Beach, also known as Papanasam Beach, is one of Kerala's most distinctive coastal destinations. It is famous for its dramatic laterite cliffs rising above the Arabian Sea, a geological feature that gives Varkala its unique character. The beach is popular for swimming, relaxation, sunset views and exploring the lively cliff area filled with restaurants, shops and wellness centres. Varkala also has strong religious significance, with the nearby Janardhana Swamy Temple and Sivagiri Mutt attracting pilgrims and cultural travellers.",

    location:
        "Varkala, Thiruvananthapuram, Kerala",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "No general beach entry fee; water activities and other services may have separate charges",

    howToReach: {

        flight:
            "Thiruvananthapuram International Airport is the nearest major airport, approximately 40 km from Varkala.",

        train:
            "Varkala Sivagiri Railway Station provides convenient railway access and connects the town with major destinations in Kerala.",

        bus:
            "Regular buses connect Varkala with Thiruvananthapuram, Kollam and other towns across Kerala.",

        road:
            "Varkala is well connected by road with Thiruvananthapuram, Kollam and other coastal destinations of Kerala.",

        local:
            "Auto-rickshaws, taxis, rental scooters and local buses are available for travelling between Varkala town, the cliff and nearby attractions."
    },

    nearbyPlaces: [
        "Janardhana Swamy Temple",
        "Sivagiri Mutt",
        "Varkala Cliff",
        "Kappil Beach",
        "Kappil Lake",
        "Varkala Tunnel"
    ],

    travelTips: [
        "Visit during the early morning or evening for pleasant weather and beautiful views.",
        "Be careful near the cliff edges and follow designated pathways.",
        "Check sea conditions before swimming.",
        "Carry sunscreen, sunglasses and comfortable beachwear.",
        "Respect the religious significance of Papanasam Beach.",
        "Wear comfortable footwear for walking along the cliff and beach.",
        "Keep the beach clean and avoid leaving plastic waste behind."
    ]
}

        ]

    },


    /* =====================================================
       MADHYA PRADESH
    ===================================================== */

    "Madhya Pradesh": {

        region: "Central India",

        description:
            "Discover ancient temples, wildlife sanctuaries, historic cities and the heart of incredible India.",

        about:
            "Madhya Pradesh is located in the heart of India and is famous for historic monuments, temples, wildlife reserves and diverse natural landscapes.",

        image:"images/hero/madhya-pradesh.jpg",

        places: "35+",

        cities: "8+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Bhopal",
                description:
                    "The capital city known for lakes, museums and historic attractions.",
                    image: "images/Bhopal.jpg"
            },

            {
                name: "Indore",
                description:
                    "A vibrant city famous for food, markets and cultural attractions.",
                    image: "images/Indore.jpg"
            },

            {
                name: "Ujjain",
                description:
                    "A major spiritual city famous for Mahakaleshwar Temple.",
                    image: "images/Ujjain.jpg"
            },

            {
                name: "Khajuraho",
                description:
                    "A world-famous heritage destination known for its temples.",
                    image: "images/Khajuraho.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Khajuraho Temples",

    category: "heritage",

    image: "images/places/Khajuraho Temples.jpg",

    description:
        "A magnificent group of ancient Hindu and Jain temples famous for intricate stone carvings, Nagara-style architecture, sculptures and exceptional artistic heritage.",

    about:
        "The Khajuraho Group of Monuments is one of India's most celebrated heritage destinations and a UNESCO World Heritage Site. The temples were built mainly between 950 and 1050 AD during the Chandela dynasty and are renowned for their detailed sculptures, religious imagery, architectural design and artistic expression. The surviving monuments are divided into Western, Eastern and Southern groups. Major temples include Kandariya Mahadeva Temple, Lakshmana Temple, Vishvanatha Temple, Matangeshwar Temple, Devi Jagadambi Temple and Chitragupta Temple. The complex represents both Hindu and Jain traditions and is considered an outstanding example of medieval Indian architecture and sculpture.",

    location:
        "Khajuraho, Chhatarpur, Madhya Pradesh",

    bestTime:
        "October - February",

    duration:
        "1 - 2 Days",

    entryFee:
        "Entry charges apply to protected monument groups; ticket rates may vary by monument and visitor category",

    howToReach: {

        flight:
            "Khajuraho Airport is the nearest airport and is located close to the town. Flights connect Khajuraho with selected major Indian cities.",

        train:
            "Khajuraho Railway Station provides railway access to the destination. Mahoba and Jhansi are additional railway options depending on the route.",

        bus:
            "Regular buses and road transport connect Khajuraho with Jhansi, Satna, Panna, Chhatarpur and other nearby destinations.",

        road:
            "Khajuraho is well connected by road with Chhatarpur, Panna, Satna, Jhansi and other cities of Madhya Pradesh.",

        local:
            "Auto-rickshaws, taxis, rental vehicles and local tour services are available for exploring the temple groups."
    },

    nearbyPlaces: [
        "Panna National Park",
        "Raneh Falls",
        "Ajaigarh Fort",
        "Maharaja Chhatrasal Museum",
        "Ken Gharial Sanctuary",
        "Archaeological Museum"
    ],

    travelTips: [
        "October to February is generally the most comfortable period for sightseeing.",
        "Wear comfortable footwear because the temple complex involves considerable walking.",
        "Hire a knowledgeable local guide for a better understanding of the sculptures and history.",
        "Respect the protected monuments and do not touch or damage the carvings.",
        "Carry water, sunscreen and sun protection during daytime sightseeing.",
        "The Khajuraho Dance Festival is an important cultural event usually held in February.",
        "Check monument timings and ticket information before visiting."
    ]
},

            {
    name: "Mahakaleshwar Temple",

    category: "religious",

    image: "images/places/Mahakaleshwar Temple.jpg",

    description:
        "One of India's twelve Jyotirlingas, this sacred Shiva temple in Ujjain is renowned for its spiritual importance, ancient traditions and distinctive south-facing Jyotirlinga.",

    about:
        "Shri Mahakaleshwar Temple is one of the most revered Hindu pilgrimage sites in Madhya Pradesh and one of the twelve Jyotirlingas of Lord Shiva. Located in the ancient city of Ujjain on the banks of the Shipra River, the temple has deep historical and religious significance. The Mahakaleshwar Jyotirlinga is traditionally described as swayambhu, meaning self-manifested, and is uniquely south-facing among the twelve Jyotirlingas. The temple complex also contains the Omkareshwar shrine and Nagchandreshwar shrine. The famous Bhasma Aarti is performed daily and is one of the temple's most distinctive religious rituals.",

    location:
        "Ujjain, Madhya Pradesh",

    bestTime:
        "October - March",

    duration:
        "Half Day - 1 Day",

    entryFee:
        "Regular darshan is generally available without a general entry fee; special darshan, aarti and puja services may have separate charges",

    howToReach: {

        flight:
            "Devi Ahilyabai Holkar Airport in Indore is the nearest major airport, approximately 53 km from Ujjain.",

        train:
            "Ujjain Junction is an important railway station with connections to many major cities of India.",

        bus:
            "Regular bus services connect Ujjain with Indore, Bhopal, Ratlam, Gwalior, Kota and other cities.",

        road:
            "Ujjain is well connected by road with Indore, Bhopal, Ratlam, Omkareshwar and other major destinations of Madhya Pradesh.",

        local:
            "Auto-rickshaws, taxis, city buses and app-based cab services are available for travelling around Ujjain."
    },

    nearbyPlaces: [
        "Mahakal Lok",
        "Ram Ghat",
        "Harsiddhi Temple",
        "Kal Bhairav Temple",
        "Mangalnath Temple",
        "Vedh Shala",
        "Sandipani Ashram"
    ],

    travelTips: [
        "Follow the temple's dress code and security guidelines.",
        "Check the latest darshan and Bhasma Aarti booking rules before visiting.",
        "Bhasma Aarti requires advance arrangements according to current temple procedures.",
        "The temple can become extremely crowded during Mahashivratri and Shravan.",
        "Maintain silence and respect religious rituals.",
        "Avoid carrying prohibited items inside the temple premises.",
        "Keep belongings secure in crowded pilgrimage areas."
    ]
},
           {
    name: "Kanha National Park",

    category: "adventure",

    image: "images/places/Kanha National Park.jpg",

    description:
        "A spectacular wildlife destination known for Bengal tigers, barasingha, dense forests, grasslands, wildlife safaris and rich biodiversity.",

    about:
        "Kanha National Park is one of India's most famous tiger reserves and protected wildlife destinations. Located in the Maikal range of the Satpura hills, the park is characterized by sal and bamboo forests, open grasslands, streams and scenic valleys. Kanha is particularly famous for its population of Bengal tigers and hard-ground barasingha, along with leopards, sloth bears, wild dogs, gaur and many species of birds. Jeep safaris provide visitors with opportunities to explore the park's diverse habitats and observe wildlife in its natural environment.",

    location:
        "Mandla and Balaghat, Madhya Pradesh",

    bestTime:
        "October - June",

    duration:
        "2 - 3 Days",

    entryFee:
        "Safari entry, vehicle, guide and applicable park charges vary by zone and visitor category",

    howToReach: {

        flight:
            "Jabalpur Airport is a convenient major airport for reaching Kanha. Nagpur Airport is another option followed by road travel.",

        train:
            "Jabalpur and Gondia are convenient railway access points depending on the selected park gate and travel route.",

        bus:
            "Buses connect nearby towns such as Mandla, Balaghat and Seoni. Taxis are generally used for the final journey to the park gates.",

        road:
            "Kanha is accessible by road from Jabalpur, Nagpur, Mandla, Balaghat and other nearby cities. The park has multiple entry gates.",

        local:
            "Registered safari vehicles and local guides are available for exploring designated zones of the national park."
    },

    nearbyPlaces: [
        "Kanha Museum",
        "Kisli",
        "Khatia Gate",
        "Mukki Gate",
        "Bamni Dadar",
        "Kanha Meadows"
    ],

    travelTips: [
        "Book safari permits and authorized vehicles in advance during peak season.",
        "Early morning and afternoon safaris offer different wildlife experiences.",
        "Follow the instructions of forest officials and safari guides.",
        "Maintain silence and never attempt to approach or feed wild animals.",
        "Carry binoculars, a camera and comfortable outdoor clothing.",
        "Avoid bright clothing and strong perfumes during wildlife safaris.",
        "Do not litter inside the national park.",
        "Park access and safari zones may change according to weather and forest department regulations."
    ]
},
           {
    name: "Pachmarhi",

    category: "nature",

    image: "images/places/Pachmarhi.jpg",

    description:
        "A beautiful hill station known as the Queen of Satpura, famous for waterfalls, forests, caves, viewpoints, ancient rock shelters and peaceful mountain landscapes.",

    about:
        "Pachmarhi is a scenic hill station in Madhya Pradesh situated in the Satpura range and popularly known as the 'Satpura ki Rani'. Surrounded by forests, hills and valleys, the destination is famous for its waterfalls, caves and panoramic viewpoints. Popular attractions include Bee Fall, Apsara Vihar, Silver Fall, Pandav Caves, Jatashankar Cave, Rajendragiri and Dhupgarh, the highest point in Madhya Pradesh. Pachmarhi's combination of natural beauty, wildlife and ancient rock formations makes it one of the state's most popular nature destinations.",

    location:
        "Pachmarhi, Narmadapuram, Madhya Pradesh",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general hill-station entry fee; individual attractions, sightseeing permits and activities may have separate charges",

    howToReach: {

        flight:
            "Raja Bhoj Airport in Bhopal is the nearest major airport, approximately 200 km from Pachmarhi. Taxis are available for the onward road journey.",

        train:
            "Pipariya Railway Station is the nearest railway station and is approximately 40 km from Pachmarhi.",

        bus:
            "Regular buses and road transport connect Pachmarhi with Pipariya, Narmadapuram, Bhopal and nearby cities.",

        road:
            "Pachmarhi is connected by road through Pipariya and Narmadapuram and can be reached by taxi or private vehicle.",

        local:
            "Taxis, hired vehicles and local sightseeing services are available for visiting waterfalls, caves and viewpoints around Pachmarhi."
    },

    nearbyPlaces: [
        "Bee Fall",
        "Apsara Vihar",
        "Dhupgarh",
        "Pandav Caves",
        "Jatashankar Cave",
        "Silver Fall",
        "Rajendragiri"
    ],

    travelTips: [
        "October to March is generally comfortable for sightseeing and outdoor activities.",
        "Carry comfortable trekking shoes for waterfalls, caves and nature trails.",
        "Carry light warm clothing during winter mornings and evenings.",
        "Be careful around slippery rocks near waterfalls.",
        "Follow local forest and tourism regulations.",
        "Avoid entering restricted forest areas without permission.",
        "Carry sufficient drinking water during outdoor excursions.",
        "Keep the Satpura landscape clean and avoid littering."
    ]
}
        ]

    },


    /* =====================================================
       MAHARASHTRA
    ===================================================== */

    "Maharashtra": {

        region: "Western India",

        description:
            "Discover vibrant cities, ancient caves, magnificent forts, beaches and diverse cultural experiences.",

        about:
            "Maharashtra combines modern cities with ancient heritage, historic forts, caves, beaches and religious destinations. Mumbai is one of India's most important metropolitan cities.",

        image:"images/hero/maharashtra.jpg",

        places: "40+",

        cities: "8+",

        bestTime: "Oct - Feb",

        popularCities: [

            {
                name: "Mumbai",
                description:
                    "India's financial capital known for iconic landmarks and coastal views.",
                    image: "images/Mumbai.jpg"
            },

            {
                name: "Pune",
                description:
                    "A cultural and educational center surrounded by historic attractions.",
                    image: "images/Pune.jpg"
            },

            {
                name: "Nashik",
                description:
                    "A spiritual city famous for temples and vineyards.",
                    image: "images/Nashik.jpg"
            },

            {
                name: "Aurangabad",
                description:
                    "A historic city serving as a gateway to major heritage sites.",
                    image: "images/Aurangabad.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Gateway of India",

    category: "heritage",

    image: "images/places/Gateway Of India.jpg",

    description:
        "An iconic waterfront monument in Mumbai built during the British era, known for its Indo-Saracenic architecture and views of the Arabian Sea.",

    about:
        "The Gateway of India is one of Mumbai's most recognizable landmarks and stands on the waterfront at Apollo Bunder. The monument was built to commemorate the visit of King George V and Queen Mary to India in 1911, and its foundation stone was laid in 1911. Designed by architect George Wittet, the monument combines Indo-Saracenic architectural elements with influences from Hindu and Muslim architectural traditions. The waterfront surrounding the Gateway offers views of the Arabian Sea and serves as a departure point for boats travelling towards Elephanta Island.",

    location:
        "Apollo Bunder, Mumbai, Maharashtra",

    bestTime:
        "October - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "No general entry fee for the monument",

    howToReach: {

        flight:
            "Chhatrapati Shivaji Maharaj International Airport is the nearest major airport. From the airport, visitors can reach South Mumbai by taxi or local transport.",

        train:
            "Chhatrapati Shivaji Maharaj Terminus and Churchgate Railway Station are convenient railway access points. From there, taxis and buses can be used to reach Apollo Bunder.",

        bus:
            "Mumbai BEST buses and other public transport services connect the Gateway area with different parts of Mumbai.",

        road:
            "The Gateway of India is located in South Mumbai near Colaba and is well connected by road.",

        local:
            "Taxis, auto-rickshaws in permitted areas, buses and app-based cab services are available. The monument is also accessible on foot from nearby Colaba attractions."
    },

    nearbyPlaces: [
        "Taj Mahal Palace",
        "Colaba Causeway",
        "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
        "Marine Drive",
        "Elephanta Caves",
        "Jehangir Art Gallery"
    ],

    travelTips: [
        "Visit during early morning or evening for pleasant weather and waterfront views.",
        "The area can become crowded during weekends and holidays.",
        "Be careful with personal belongings in crowded tourist areas.",
        "Boat services to Elephanta Island operate from the Gateway area subject to weather and schedules.",
        "Avoid littering around the waterfront.",
        "Check boat timings and weather conditions before planning an Elephanta trip."
    ]
},
            {
    name: "Ajanta Caves",

    category: "heritage",

    image: "images/places/Ajanta Caves.jpg",

    description:
        "A spectacular group of ancient Buddhist rock-cut caves famous for magnificent paintings, sculptures, monasteries and exceptional artistic heritage.",

    about:
        "The Ajanta Caves are a UNESCO World Heritage Site consisting of approximately 30 Buddhist rock-cut caves carved into a horseshoe-shaped gorge. The caves were developed mainly between the 2nd century BCE and around the 6th century CE and contain monasteries, prayer halls, sculptures and some of the finest surviving ancient Indian murals. The paintings depict Buddhist stories, royal life, nature and scenes from the Jataka tales. The Ajanta complex represents an outstanding achievement of ancient Indian art, architecture and Buddhist cultural heritage.",

    location:
        "Ajanta, Aurangabad District, Maharashtra",

    bestTime:
        "October - March",

    duration:
        "1 Day",

    entryFee:
        "Entry charges apply; ticket rates may vary for Indian and foreign visitors and online/offline booking options",

    howToReach: {

        flight:
            "Aurangabad Airport is the nearest major airport. Jalgaon Airport is another option depending on the travel route.",

        train:
            "Jalgaon Railway Station is one of the most convenient railway access points for Ajanta Caves. Aurangabad Railway Station is another option.",

        bus:
            "Buses and tourist vehicles connect Ajanta with Jalgaon, Aurangabad and nearby towns.",

        road:
            "Ajanta Caves are accessible by road from Aurangabad, Jalgaon and other major destinations in Maharashtra.",

        local:
            "Local buses, taxis and hired tourist vehicles are available for reaching the cave complex from nearby towns."
    },

    nearbyPlaces: [
        "Ellora Caves",
        "Bibi Ka Maqbara",
        "Daulatabad Fort",
        "Panchakki",
        "Ghrishneshwar Temple"
    ],

    travelTips: [
        "October to March is generally comfortable for exploring the caves.",
        "Wear comfortable footwear because the site involves walking and uneven surfaces.",
        "Photography restrictions may apply inside certain caves.",
        "Do not touch the ancient paintings, sculptures or cave surfaces.",
        "Carry drinking water and sun protection.",
        "Hire an authorized guide for a deeper understanding of the paintings and history.",
        "Check weekly closure days and monument timings before visiting."
    ]
},

           {
    name: "Lonavala",

    category: "nature",

    image: "images/places/Lonavala.jpg",

    description:
        "A picturesque hill station in the Western Ghats known for lush green valleys, waterfalls, caves, lakes, viewpoints and pleasant monsoon landscapes.",

    about:
        "Lonavala is one of Maharashtra's most popular hill destinations and is located in the Sahyadri ranges between Mumbai and Pune. The region becomes especially scenic during the monsoon when waterfalls, mist-covered hills and green valleys transform the landscape. Popular attractions include Tiger Point, Rajmachi Fort, Bhushi Dam, Karla Caves, Bhaja Caves and Lonavala Lake. The destination is ideal for weekend trips, nature walks, trekking, photography and exploring the historic forts and Buddhist caves of the surrounding region.",

    location:
        "Lonavala, Pune District, Maharashtra",

    bestTime:
        "June - February",

    duration:
        "1 - 2 Days",

    entryFee:
        "No general entry fee for Lonavala; individual attractions and activities may have separate charges",

    howToReach: {

        flight:
            "Pune International Airport is the nearest major airport. Mumbai Airport is another convenient option.",

        train:
            "Lonavala Railway Station is an important station on the Mumbai-Pune railway route and is easily accessible from both cities.",

        bus:
            "Regular buses connect Lonavala with Mumbai, Pune, Khandala and nearby towns.",

        road:
            "Lonavala is conveniently located between Mumbai and Pune and is easily accessible by the Mumbai-Pune Expressway and other major roads.",

        local:
            "Taxis, auto-rickshaws, rental vehicles and local buses are available for visiting nearby attractions."
    },

    nearbyPlaces: [
        "Khandala",
        "Tiger Point",
        "Rajmachi Fort",
        "Karla Caves",
        "Bhaja Caves",
        "Bhushi Dam",
        "Lohagad Fort"
    ],

    travelTips: [
        "Monsoon is the most scenic season, but waterfalls and rocky areas can become slippery.",
        "Wear proper trekking or outdoor footwear.",
        "Avoid entering strong water currents during heavy rain.",
        "Check weather and road conditions before travelling during monsoon.",
        "Start trekking early to avoid crowds and afternoon weather changes.",
        "Carry rain protection during the monsoon.",
        "Do not litter around viewpoints, forts, waterfalls or forests."
    ]
},

            {
    name: "Raigad Fort",

    category: "heritage",

    image: "images/places/Raigad Fort.jpg",

    description:
        "A historic hill fort associated with Chhatrapati Shivaji Maharaj, known for its strategic mountain setting, grand ruins, temples and Maratha heritage.",

    about:
        "Raigad Fort is one of the most important historical forts of Maharashtra and holds a special place in Maratha history. Located on a hill in the Sahyadri range, the fort served as the capital of Chhatrapati Shivaji Maharaj after his coronation in 1674. The fort complex includes the Rajwada ruins, Takmak Tok, Maha Darwaja, Nagarkhana Darwaja, Jagadishwar Temple and the samadhi of Chhatrapati Shivaji Maharaj. The fort offers spectacular views of the surrounding valleys and mountains and is an important destination for visitors interested in Maharashtra's history and heritage.",

    location:
        "Raigad District, Maharashtra",

    bestTime:
        "October - February",

    duration:
        "1 Day",

    entryFee:
        "Entry and applicable ropeway or facility charges may apply",

    howToReach: {

        flight:
            "Pune International Airport and Chhatrapati Shivaji Maharaj International Airport in Mumbai are the nearest major airport options, followed by road travel.",

        train:
            "Mangaon Railway Station is a convenient railway access point for Raigad Fort. From Mangaon, visitors can continue by road.",

        bus:
            "State transport buses and local vehicles connect nearby towns such as Mahad and Mangaon with the Raigad region.",

        road:
            "Raigad Fort is accessible by road from Mumbai, Pune, Mahad and Mangaon. The base village is Pachad.",

        local:
            "Taxis and hired vehicles are available from nearby towns. The fort can be reached through the traditional trekking route or by ropeway, subject to operation."
    },

    nearbyPlaces: [
        "Jagadishwar Temple",
        "Takmak Tok",
        "Rajwada",
        "Maha Darwaja",
        "Raigad Ropeway",
        "Gandhar Pale Caves"
    ],

    travelTips: [
        "Wear sturdy and comfortable footwear because the fort involves climbing and walking.",
        "Start early to explore the fort comfortably.",
        "Carry sufficient drinking water and basic trekking essentials.",
        "Check ropeway operating status before planning your visit.",
        "Be careful near cliff edges, especially around Takmak Tok.",
        "Respect historic structures and do not damage or climb restricted monuments.",
        "Avoid visiting during severe monsoon conditions unless local authorities confirm safe access.",
        "Keep the fort premises clean."
    ]
}
        ]

    },


    /* =====================================================
       MANIPUR
    ===================================================== */

    "Manipur": {

        region: "North-East India",

        description:
            "Explore beautiful lakes, hills, cultural traditions and the unique natural beauty of Manipur.",

        about:
            "Manipur is known for its scenic landscapes, rich traditions, beautiful lakes and vibrant cultural heritage. It offers peaceful destinations for nature and culture lovers.",

        image:"images/hero/manipur.jpg",
            

        places: "15+",

        cities: "4+",

        bestTime: "Oct - Apr",

        popularCities: [

            {
                name: "Imphal",
                description:
                    "The capital city and cultural center of Manipur.",
                     image: "images/Imphal.jpg"
            },

            {
                name: "Moirang",
                description:
                    "A historic town near Loktak Lake.",
                     image: "images/Moirang.jpg"
            },

            {
                name: "Ukhrul",
                description:
                    "A scenic hill destination surrounded by natural beauty.",
                     image: "images/Ukhrul.jpg"
            },

            {
                name: "Churachandpur",
                description:
                    "A culturally diverse town surrounded by hills.",
                     image: "images/Churachandpur.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Loktak Lake",

    category: "nature",

    image: "images/places/Loktak Lake.jpg",

    description:
        "The largest freshwater lake in Northeast India, famous for its floating phumdis, scenic landscapes, traditional fishing communities and the unique Keibul Lamjao National Park.",

    about:
        "Loktak Lake is one of the most remarkable natural attractions of Manipur and is located in Bishnupur district. The lake is famous for its floating masses of vegetation, soil and organic matter known as phumdis, which create unique floating landscapes across the water. Loktak is also home to Keibul Lamjao National Park, the world's only floating national park and the last natural habitat of the endangered Sangai, or brow-antlered deer. Visitors can enjoy boating, scenic views from Sendra and explore the traditional lifestyle of communities living around the lake.",

    location:
        "Moirang, Bishnupur, Manipur",

    bestTime:
        "October - March",

    duration:
        "1 Day",

    entryFee:
        "No general lake entry fee; boating, water activities and selected facilities may have separate charges",

    howToReach: {

        flight:
            "Bir Tikendrajit International Airport in Imphal is the nearest airport. From Imphal, Loktak Lake can be reached by road towards Moirang.",

        train:
            "Jiribam Railway Station is the major railway access point for Manipur. From there, visitors can continue by road towards Imphal and Loktak Lake.",

        bus:
            "Regular buses and shared vehicles connect Imphal with Moirang and nearby areas around Loktak Lake.",

        road:
            "Loktak Lake is approximately 48 km from Imphal and is accessible by road through Moirang.",

        local:
            "Taxis, hired vehicles and local transport are available from Imphal and Moirang. Boats are available for exploring parts of the lake."
    },

    nearbyPlaces: [
        "Keibul Lamjao National Park",
        "Sendra Island",
        "Moirang",
        "INA Memorial",
        "Takmu Water Sports Complex",
        "Moirang Thangjing Temple"
    ],

    travelTips: [
        "Early morning is a good time for boating and experiencing the peaceful lake environment.",
        "Do not disturb floating phumdis or local fishing communities.",
        "Carry binoculars for birdwatching and wildlife observation.",
        "Wear comfortable footwear and carry sun protection.",
        "Follow boating and water-safety instructions.",
        "Avoid littering in and around the lake.",
        "Check local weather and boating conditions before planning your visit."
    ]
},

           {
    name: "Shree Govindajee Temple",

    category: "religious",

    image: "images/places/Shree Govindajee Temple.jpg",

    description:
        "A historic Vaishnavite temple in Imphal dedicated to Radha and Krishna, known for its twin golden domes, devotional traditions and beautiful courtyard.",

    about:
        "Shree Shree Govindajee Temple is one of the important religious and cultural landmarks of Imphal. Located beside the former royal palace complex of Manipur's Maharajas, the temple is a historic centre of Vaishnavite tradition. Its prominent features include twin domes covered with gold-plated sheets, a paved courtyard and a large congregation hall. The main shrine is dedicated to Radha and Krishna, while daily aarti and devotional activities attract devotees and visitors. The temple provides an opportunity to experience Manipur's distinctive Vaishnavite culture and traditions.",

    location:
        "Imphal, Manipur",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Hours",

    entryFee:
        "Generally no general entry fee; offerings and temple services may have separate arrangements",

    howToReach: {

        flight:
            "Bir Tikendrajit International Airport in Imphal is the nearest airport and is located within the city.",

        train:
            "Jiribam Railway Station is the major railway access point for Manipur, followed by road travel to Imphal.",

        bus:
            "Regular buses and shared vehicles connect Imphal with different towns and districts of Manipur.",

        road:
            "The temple is located within Imphal city and is easily accessible by road from major parts of the city.",

        local:
            "Auto-rickshaws, taxis, local buses and app-based or hired vehicles are available around Imphal."
    },

    nearbyPlaces: [
        "Kangla Fort",
        "Ima Keithel",
        "Manipur State Museum",
        "Imphal War Cemetery",
        "Shaheed Minar",
        "Manipur State Palace"
    ],

    travelTips: [
        "Dress respectfully while visiting the temple.",
        "Maintain silence and respect devotees during prayers and aarti.",
        "Early morning is a good time to experience the temple's devotional atmosphere.",
        "Follow temple rules regarding photography and restricted areas.",
        "Remove footwear wherever required.",
        "Avoid disturbing religious ceremonies.",
        "Keep the temple premises clean."
    ]
},
           {
    name: "Kangla Fort",

    category: "heritage",

    image: "images/places/Kangla Fort.jpg",

    description:
        "A historic fortress and former seat of Manipur's rulers, known for ancient ruins, sacred sites, moats, traditional architecture and the rich history of the Manipur kingdom.",

    about:
        "Kangla Fort is one of the most historically significant heritage sites of Manipur and is located in the heart of Imphal. Kangla served as the centre of political power and the ancient capital of the Manipur kingdom until 1891. The historic complex contains archaeological remains, sacred ponds, temples, ancient structures and the distinctive inner and outer moats. Kangla represents the cultural and political history of Manipur and provides visitors with an opportunity to understand the heritage of the Meitei kingdom. The site is one of the most important historical attractions in Imphal.",

    location:
        "Imphal, Manipur",

    bestTime:
        "October - March",

    duration:
        "3 - 5 Hours",

    entryFee:
        "Applicable entry charges may apply",

    howToReach: {

        flight:
            "Bir Tikendrajit International Airport is the nearest airport and is located within Imphal.",

        train:
            "Jiribam Railway Station is the major railway access point, followed by road travel to Imphal.",

        bus:
            "Local and regional buses connect Imphal with different parts of Manipur.",

        road:
            "Kangla Fort is centrally located in Imphal and is easily accessible by road from different parts of the city.",

        local:
            "Auto-rickshaws, taxis, local buses and hired vehicles are convenient options for reaching Kangla."
    },

    nearbyPlaces: [
        "Shree Govindajee Temple",
        "Ima Keithel",
        "Imphal War Cemetery",
        "Manipur State Museum",
        "Shaheed Minar",
        "Bir Tikendrajit Park"
    ],

    travelTips: [
        "Allow several hours to explore the historic complex properly.",
        "Wear comfortable walking shoes.",
        "Respect sacred areas, temples and archaeological structures.",
        "Do not climb or damage protected monuments.",
        "Carry drinking water during warmer months.",
        "Follow photography restrictions wherever applicable.",
        "Consider a local guide for better understanding of Manipur's history.",
        "Keep the fort premises clean and avoid littering."
    ]
},

            {
    name: "Shirui Hills",

    category: "adventure",

    image: "images/places/Shirui Hills.jpg",

    description:
        "A beautiful mountain destination in Ukhrul famous for the rare Shirui Lily, rolling green landscapes, panoramic views, trekking trails and rich biodiversity.",

    about:
        "Shirui Hills, also known as Shirui Kashong Hills, is one of the most beautiful natural attractions of Manipur and is located in Ukhrul district. The hills are famous for the rare Shirui Lily, the state flower of Manipur, which grows naturally in this region. The landscape consists of rolling grass-covered hills, forests, misty valleys and panoramic viewpoints. Shirui Hills is also home to rare birds and wildlife and offers opportunities for trekking, photography and nature exploration. The annual Shirui Lily Festival celebrates the region's unique natural and cultural heritage.",

    location:
        "Ukhrul, Manipur",

    bestTime:
        "October - May",

    duration:
        "1 - 2 Days",

    entryFee:
        "Generally no general hill entry fee; local tourism activities or guided experiences may have separate charges",

    howToReach: {

        flight:
            "Bir Tikendrajit International Airport in Imphal is the nearest airport. From Imphal, visitors can travel by road towards Ukhrul.",

        train:
            "Jiribam Railway Station is the major railway access point for Manipur, followed by a long road journey towards Ukhrul.",

        bus:
            "Buses and shared vehicles connect Imphal with Ukhrul and other towns in the region.",

        road:
            "Shirui Hills is located in Ukhrul district, approximately 90 km from Imphal, and is accessible by road.",

        local:
            "Local taxis, hired vehicles and shared transport are available in Ukhrul for visiting Shirui Hills and surrounding areas."
    },

    nearbyPlaces: [
        "Shirui Kashong Peak",
        "Ukhrul Town",
        "Khangkhui Lime Caves",
        "Hundung Mangva Cave",
        "Khayang Peak",
        "Tangkhul Naga Villages"
    ],

    travelTips: [
        "Wear sturdy trekking shoes for hiking on the hills.",
        "Weather can change quickly, so carry light rain protection.",
        "Do not pick or damage Shirui Lily flowers.",
        "Follow local trekking routes and environmental guidelines.",
        "Respect the traditions and communities of the Tangkhul Naga region.",
        "Carry sufficient water and basic trekking essentials.",
        "Avoid littering and help protect the fragile mountain ecosystem.",
        "Check local weather and road conditions before travelling."
    ]
}
        ]

    },


    /* =====================================================
       MEGHALAYA
    ===================================================== */

    "Meghalaya": {

        region: "North-East India",

        description:
            "Discover living root bridges, waterfalls, caves, green hills and charming villages.",

        about:
            "Meghalaya is known as one of India's most scenic northeastern states. It is famous for waterfalls, caves, forests, living root bridges and beautiful hill towns.",

        image:"images/hero/meghalaya.jpg",

        places: "20+",

        cities: "5+",

        bestTime: "Oct - Apr",

        popularCities: [

            {
                name: "Shillong",
                description:
                    "The capital city surrounded by hills, waterfalls and scenic landscapes.",
                     image: "images/Shillong.jpg"
            },

            {
                name: "Cherrapunji",
                description:
                    "A famous destination known for rainfall, waterfalls and caves.",
                     image: "images/Cherrapunji.jpg"
            },

            {
                name: "Mawsynram",
                description:
                    "A scenic destination known for its extraordinary rainfall.",
                     image: "images/Mawsynram.jpg"
            },

            {
                name: "Jowai",
                description:
                    "A peaceful hill town surrounded by natural beauty.",
                     image: "images/Jowai.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Living Root Bridges",

    category: "adventure",

    image: "images/places/Living Root Bridges.jpg",

    description:
        "Unique natural bridges created by guiding and training the living roots of rubber fig trees across streams and valleys, showcasing Meghalaya's traditional bio-engineering knowledge.",

    about:
        "The Living Root Bridges of Meghalaya are remarkable examples of traditional ecological engineering developed by indigenous communities. Strong roots of Ficus elastica trees are carefully guided through bamboo or betel-nut supports until they grow across rivers and steep valleys and form naturally living bridges. The bridges can take many years to become strong and functional, but they continue growing and can remain usable for generations. The most famous examples include the Double Decker Living Root Bridge at Nongriat, while other bridges can be found around Mawlynnong and nearby villages. These bridges represent the close relationship between Meghalaya's communities, forests and natural environment.",

    location:
        "Nongriat, Sohra and other areas of Meghalaya",

    bestTime:
        "October - May",

    duration:
        "1 - 2 Days",

    entryFee:
        "No general entry fee for the bridges; local village, guide and tourism charges may apply",

    howToReach: {

        flight:
            "Shillong Airport is one of the nearest airports. Guwahati International Airport is another major option, followed by road travel to Sohra or other bridge locations.",

        train:
            "Guwahati Railway Station is the major railway access point for Meghalaya. From Guwahati, visitors can continue by road.",

        bus:
            "Buses and shared vehicles connect Shillong with Sohra, Mawlynnong and other tourist destinations in Meghalaya.",

        road:
            "The bridges are located in different villages. Nongriat is accessed through the Tyrna village route near Sohra.",

        local:
            "Local taxis and hired vehicles can be used to reach the trekking starting points. Local guides are recommended for longer bridge treks."
    },

    nearbyPlaces: [
        "Nongriat Village",
        "Double Decker Living Root Bridge",
        "Rainbow Falls",
        "Mawlynnong Village",
        "Nohkalikai Falls",
        "Mawsmai Caves"
    ],

    travelTips: [
        "Wear sturdy trekking shoes because reaching the bridges can involve long stairways and steep trails.",
        "Carry sufficient drinking water and light snacks.",
        "Start the trek early to allow enough time for exploring and returning.",
        "Hire a local guide for longer or unfamiliar routes.",
        "Do not damage or climb on delicate parts of the living roots.",
        "Respect local village customs and private property.",
        "Avoid littering along the forest trails and near streams.",
        "Check weather conditions before trekking because heavy rain can make trails slippery."
    ]
},

            {
    name: "Nohkalikai Falls",

    category: "nature",

    image: "images/places/Nohkalikai Falls.jpg",

    description:
        "A spectacular plunge waterfall near Sohra, famous for its dramatic cliff, turquoise-green pool, misty forests and breathtaking natural scenery.",

    about:
        "Nohkalikai Falls is one of the most spectacular waterfalls in Meghalaya and is located near Sohra, formerly known as Cherrapunji. The waterfall drops dramatically from a height of around 340 metres into a striking blue-green pool surrounded by cliffs and dense forests. It is fed largely by rainwater collected on the plateau above, making its appearance particularly impressive during and after the rainy season. The waterfall is also associated with a tragic Khasi legend that gives the place its name and cultural significance. Several viewpoints around the area provide excellent views of the falls and surrounding landscape.",

    location:
        "Sohra, East Khasi Hills, Meghalaya",

    bestTime:
        "June - December",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Entry or local viewing charges may apply depending on the access point",

    howToReach: {

        flight:
            "Shillong Airport is approximately 79 km away, while Guwahati International Airport is approximately 167 km away. From either airport, visitors can travel by road to Sohra.",

        train:
            "Guwahati Railway Station is the major railway access point. From Guwahati, visitors can continue to Shillong and Sohra by road.",

        bus:
            "Buses and shared vehicles are available from Shillong towards Sohra. Local taxis can be used for the final journey.",

        road:
            "Nohkalikai Falls is approximately 7.5 km from Sohra and can be reached by road from the town.",

        local:
            "Taxis and local tourist vehicles are convenient options for visiting the falls and nearby attractions."
    },

    nearbyPlaces: [
        "Mawsmai Caves",
        "Seven Sisters Falls",
        "Eco Park",
        "Arwah Cave",
        "Thangkharang Park",
        "Mawkdok Dympep Valley"
    ],

    travelTips: [
        "Visit during or after the rainy season for a more powerful waterfall.",
        "Carry a rain jacket because weather conditions around Sohra can change quickly.",
        "Wear comfortable non-slip footwear.",
        "Be careful near viewpoints and cliff edges.",
        "Follow local safety instructions and restricted-area signs.",
        "Carry drinking water and basic rain protection.",
        "Avoid littering around the viewpoint and surrounding forest."
    ]
},
            {
    name: "Mawsmai Caves",

    category: "adventure",

    image: "images/places/Mawsmai Caves.jpg",

    description:
        "A fascinating limestone cave system near Sohra known for narrow passages, stalactites, stalagmites, natural rock formations and an exciting cave-exploration experience.",

    about:
        "Mawsmai Caves are among the most accessible and popular limestone caves in Meghalaya and are located near Sohra. The cave contains naturally formed limestone structures including stalactites, stalagmites and rock columns created over long periods by the movement of water through the limestone. Visitors can walk through a section of the cave system containing narrow passages, low ceilings and naturally sculpted formations. Some sections require visitors to bend, squeeze through narrow spaces or move carefully, making the experience enjoyable for travellers interested in nature and adventure.",

    location:
        "Sohra, East Khasi Hills, Meghalaya",

    bestTime:
        "October - May",

    duration:
        "1 - 2 Hours",

    entryFee:
        "Entry charges apply and may vary according to current local tourism rates",

    howToReach: {

        flight:
            "Shillong Airport is the nearest airport option, while Guwahati International Airport provides broader air connectivity. From either airport, continue by road towards Sohra.",

        train:
            "Guwahati Railway Station is the nearest major railway access point, followed by road travel to Sohra.",

        bus:
            "Buses and shared vehicles connect Shillong with Sohra. Local taxis are available for reaching the cave.",

        road:
            "Mawsmai Cave is located near Sohra and can be easily reached by road from the town.",

        local:
            "Taxis, hired vehicles and local sightseeing services are available around Sohra."
    },

    nearbyPlaces: [
        "Nohkalikai Falls",
        "Nohsngithiang Falls",
        "Eco Park",
        "Thangkharang Park",
        "Arwah Cave",
        "Mawkdok Dympep Valley"
    ],

    travelTips: [
        "Wear shoes with good grip because the cave floor can be wet and slippery.",
        "Some passages are narrow and may require bending or squeezing through.",
        "Carry minimal luggage while entering the cave.",
        "Follow the designated tourist route and local safety instructions.",
        "Do not touch or damage the natural limestone formations.",
        "Avoid visiting during extreme weather if access conditions are restricted.",
        "Carry a light rain jacket because Sohra receives frequent rainfall."
    ]
},
            {
    name: "Umiam Lake",

    category: "nature",

    image: "images/places/Umiam Lake.jpg",

    description:
        "A scenic reservoir surrounded by green hills near Shillong, famous for panoramic landscapes, boating, water sports, sunsets and peaceful lakeside views.",

    about:
        "Umiam Lake, also known as Bara Pani, is a beautiful man-made reservoir located in Ri-Bhoi district on the Guwahati-Shillong route. The lake was formed in the early 1960s after the Umiam River was dammed as part of a hydroelectric power project. Surrounded by forested hills and scenic roads, the lake has become one of Meghalaya's most popular leisure destinations. Visitors can enjoy boating, water sports, photography, lakeside views and peaceful sunsets. Lum Nehru Park and other lakeside attractions provide additional opportunities for relaxation and sightseeing.",

    location:
        "Ri-Bhoi District, Meghalaya",

    bestTime:
        "October - March",

    duration:
        "3 - 5 Hours",

    entryFee:
        "No general lake entry fee; boating, water sports, parks and other facilities may have separate charges",

    howToReach: {

        flight:
            "Shillong Airport is approximately 14 km away, while Guwahati International Airport is approximately 102 km away.",

        train:
            "Guwahati Railway Station is the major railway access point for travellers arriving by train, followed by road travel towards Shillong and Umiam.",

        bus:
            "Buses and shared vehicles operate between Guwahati, Shillong and destinations along the Guwahati-Shillong highway.",

        road:
            "Umiam Lake is located approximately 15 km from Shillong and is directly accessible through National Highway 6.",

        local:
            "Private taxis, shared cabs and hired vehicles are convenient options for visiting the lake and nearby attractions."
    },

    nearbyPlaces: [
        "Lum Nehru Park",
        "Lumpongdeng Island",
        "Don Bosco Museum",
        "Shillong Golf Course",
        "Shillong Peak",
        "Ward's Lake"
    ],

    travelTips: [
        "Visit around sunrise or sunset for the best scenic views and photography.",
        "Boating and water sports should be undertaken only through authorized operators.",
        "Carry a light jacket because weather around the lake can change quickly.",
        "Follow safety instructions during water-based activities.",
        "Carry rain protection during the monsoon season.",
        "Avoid littering around the lake and surrounding hills.",
        "Check weather and activity availability before planning water sports."
    ]
}
        ]

    },


    /* =====================================================
       MIZORAM
    ===================================================== */

    "Mizoram": {

        region: "North-East India",

        description:
            "Experience peaceful hills, lush landscapes, traditional culture and scenic destinations.",

        about:
            "Mizoram is a beautiful hill state known for green landscapes, peaceful towns, forests and rich cultural traditions.",

        image:"images/hero/mizoram.jpg",

        places: "15+",

        cities: "4+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Aizawl",
                description:
                    "The capital city located among beautiful green hills.",
                    image: "images/Aizawl.jpg"
            },

            {
                name: "Lunglei",
                description:
                    "A scenic hill town offering beautiful views.",
                    image: "images/Lunglei.jpg"
            },

            {
                name: "Champhai",
                description:
                    "A picturesque destination near the Myanmar border.",
                    image: "images/Champhai.jpg"
            },

            {
                name: "Serchhip",
                description:
                    "A peaceful town surrounded by green hills.",
                    image: "images/Serchhip.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Aizawl",

    category: "nature",

    image: "images/places/Aizawl.jpg",

    description:
        "The scenic capital of Mizoram, known for beautiful hill landscapes, Mizo culture, traditional markets, churches and panoramic views across the surrounding valleys.",

    about:
        "Aizawl is the capital and largest city of Mizoram, situated on a ridge surrounded by steep hills and valleys. Located at an elevation of around 1,132 metres, the city offers a combination of natural beauty, Mizo culture, traditional markets and important heritage attractions. Visitors can explore the Mizoram State Museum, Durtlang Hills, Solomon's Temple, Bara Bazar and several churches and viewpoints. Aizawl also provides an excellent base for exploring other destinations across Mizoram.",

    location:
        "Aizawl, Mizoram",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general entry fee for the city; individual attractions may have separate charges",

    howToReach: {

        flight:
            "Lengpui Airport is the nearest airport and provides air connectivity to Aizawl. Silchar Airport in Assam is another option followed by road travel.",

        train:
            "Mizoram currently has limited direct railway connectivity. Silchar Railway Station in Assam is a major railway access point, followed by road travel to Aizawl.",

        bus:
            "Regular buses and shared vehicles connect Aizawl with Silchar, Guwahati, Shillong and other towns in the Northeast.",

        road:
            "Aizawl is connected by road with Silchar, Shillong, Guwahati and other parts of Mizoram.",

        local:
            "Taxis, shared cabs, local buses and hired vehicles are available for travelling around Aizawl."
    },

    nearbyPlaces: [
        "Durtlang Hills",
        "Mizoram State Museum",
        "Solomon's Temple",
        "Bara Bazar",
        "Aizawl Zoological Park",
        "Muthi Hill",
        "KV Paradise"
    ],

    travelTips: [
        "October to March generally offers pleasant weather for sightseeing.",
        "Carry a light jacket because temperatures can be cooler in the hills.",
        "Wear comfortable footwear because Aizawl has steep roads and hilly terrain.",
        "Explore Bara Bazar to experience local Mizo culture and shopping.",
        "Respect local customs and religious places.",
        "Check road and weather conditions before travelling to nearby hill destinations.",
        "Avoid littering and help maintain the clean hill environment."
    ]
},

            {
    name: "Durtlang Hills",

    category: "adventure",

    image: "images/places/Durtlang Hills.jpg",

    description:
        "A scenic hill range overlooking Aizawl, famous for panoramic city views, green landscapes, photography and peaceful hilltop experiences.",

    about:
        "Durtlang Hills are a prominent natural attraction located to the north of Aizawl. The hills provide spectacular panoramic views over Aizawl and the surrounding valleys and mountains. Their elevated viewpoints make them popular among photographers, nature lovers and travellers looking for peaceful surroundings away from the busy city centre. The winding roads and steep terrain also make the area an interesting destination for scenic drives and outdoor exploration.",

    location:
        "Durtlang, Aizawl, Mizoram",

    bestTime:
        "October - March",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Generally no entry fee for the viewpoints; individual attractions or facilities may have separate charges",

    howToReach: {

        flight:
            "Lengpui Airport is the nearest airport. From the airport, visitors can travel by road to Aizawl and then continue towards Durtlang.",

        train:
            "Silchar Railway Station is a major railway access point, followed by road travel to Aizawl and Durtlang.",

        bus:
            "Local buses and shared vehicles operate between Aizawl and surrounding areas including Durtlang.",

        road:
            "Durtlang Hills are easily accessible by road from central Aizawl and are located north of the city.",

        local:
            "Taxis, shared cabs and hired vehicles are convenient options for reaching the viewpoints."
    },

    nearbyPlaces: [
        "Aizawl View Point",
        "Mizoram State Museum",
        "Solomon's Temple",
        "Bara Bazar",
        "Aizawl Zoological Park",
        "Reiek Tlang"
    ],

    travelTips: [
        "Visit during clear weather for the best panoramic views of Aizawl.",
        "Early morning and evening are good times for photography.",
        "Wear comfortable shoes because some areas have steep terrain.",
        "Be careful near viewpoints and road edges.",
        "Carry light rain protection because weather can change quickly.",
        "Avoid littering around the hills.",
        "Respect local communities and private property."
    ]
},{
    name: "Mizoram State Museum",

    category: "heritage",

    image: "images/places/Mizoram State Museum.jpg",

    description:
        "An important cultural museum in Aizawl showcasing Mizo history, traditional clothing, textiles, tools, weapons, household objects, anthropology and natural history.",

    about:
        "Mizoram State Museum is an important ethnographic and cultural museum located in the heart of Aizawl on MacDonald Hill. Established in 1977, the museum preserves and displays objects representing the traditional lifestyle and cultural heritage of the Mizo people. Its collections include textiles, traditional clothing, household materials, weapons, tools, musical and cultural objects, transportation-related items and natural-history specimens. The museum's galleries provide visitors with an opportunity to understand the history, traditions and everyday life of Mizoram's indigenous communities.",

    location:
        "MacDonald Hill, Aizawl, Mizoram",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Hours",

    entryFee:
        "Entry charges may apply according to current museum rules",

    howToReach: {

        flight:
            "Lengpui Airport is the nearest airport. Visitors can travel from the airport to central Aizawl by taxi or other road transport.",

        train:
            "Silchar Railway Station is the nearest major railway access point, followed by road travel to Aizawl.",

        bus:
            "Local buses and shared vehicles connect the museum area with different parts of Aizawl.",

        road:
            "The museum is centrally located on MacDonald Hill and can be reached easily by road from major parts of Aizawl.",

        local:
            "Taxis, shared cabs, auto-rickshaws where available and local buses can be used to reach the museum."
    },

    nearbyPlaces: [
        "Durtlang Hills",
        "Bara Bazar",
        "Solomon's Temple",
        "Aizawl Zoological Park",
        "Muthi Hill",
        "KV Paradise"
    ],

    travelTips: [
        "Allow at least one to two hours to explore the museum galleries.",
        "Check current opening days and timings before visiting.",
        "Follow museum rules regarding photography.",
        "Do not touch displayed artefacts unless permitted.",
        "Read the descriptions of traditional objects to understand their cultural significance.",
        "Maintain silence and respect other visitors.",
        "The museum is a good starting point for understanding Mizo culture before exploring the rest of Mizoram."
    ]
},

           {
    name: "Solomon's Temple",

    category: "religious",

    image: "images/places/Solomon's Temple.jpg",

    description:
        "A grand non-denominational Christian church in Aizawl known for its striking white architecture, peaceful surroundings, large courtyard and distinctive religious design.",

    about:
        "Solomon's Temple is a prominent religious and architectural landmark located in the Kidron Valley near Aizawl. The temple was established by the Kohhran Thianghlim, also known as the Holy Church, founded by Dr. L.B. Sailo. The foundation stone was laid in 1996 and the complex developed over many years. The large white structure features distinctive pillars, arches and spires and is surrounded by a spacious courtyard and landscaped areas. The site has become an important religious and tourist attraction in Aizawl and provides a peaceful environment for visitors.",

    location:
        "Chawlhmun, Aizawl, Mizoram",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Hours",

    entryFee:
        "Generally no general entry fee; visitors should follow current church guidelines",

    howToReach: {

        flight:
            "Lengpui Airport is the nearest airport. From the airport, visitors can reach Aizawl and continue by road to Chawlhmun.",

        train:
            "Silchar Railway Station is a major railway access point, followed by road travel to Aizawl.",

        bus:
            "Local buses and shared vehicles connect central Aizawl with surrounding areas.",

        road:
            "Solomon's Temple is located in the Kidron Valley, around 10 km from the heart of Aizawl, and is accessible by road.",

        local:
            "Taxis, shared cabs and hired vehicles are convenient options for visiting the temple."
    },

    nearbyPlaces: [
        "Mizoram State Museum",
        "Durtlang Hills",
        "Bara Bazar",
        "Aizawl Zoological Park",
        "Muthi Hill",
        "Reiek Tlang"
    ],

    travelTips: [
        "Dress respectfully because this is an active religious site.",
        "Maintain silence and respect worshippers and religious activities.",
        "Check current visiting hours before travelling.",
        "Follow photography restrictions if applicable.",
        "Avoid disturbing prayer services or ceremonies.",
        "The temple is closed to visitors on Sundays according to current published timings.",
        "Keep the temple complex and surrounding area clean."
    ]
}

        ]

    },


    /* =====================================================
       NAGALAND
    ===================================================== */

    "Nagaland": {

        region: "North-East India",

        description:
            "Explore mountain landscapes, tribal heritage, colorful festivals and unique traditions.",

        about:
            "Nagaland is known for its diverse tribal cultures, mountain landscapes, colorful festivals and traditional communities.",

        image:"images/hero/nagaland.jpg",

        places: "15+",

        cities: "4+",

        bestTime: "Oct - May",

        popularCities: [

            {
                name: "Kohima",
                description:
                    "The capital city known for its hills and cultural heritage.",
                    image: "images/Kohima.jpg"
            },

            {
                name: "Dimapur",
                description:
                    "The largest urban center and gateway to Nagaland.",
                    image: "images/Dimapur.jpg"
            },

            {
                name: "Mokokchung",
                description:
                    "A scenic town known for Ao Naga culture.",
                    image: "images/Mokokchung.jpg"
            },

            {
                name: "Mon",
                description:
                    "A culturally rich destination known for tribal traditions.",
                    image: "images/Mon.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Hornbill Festival",

    category: "heritage",

    image: "images/places/Hornbill Festival.jpg",

    description:
        "Nagaland's famous annual cultural festival showcasing the traditions, music, dance, food, crafts and heritage of the state's diverse Naga tribes.",

    about:
        "The Hornbill Festival is one of Nagaland's most celebrated cultural events and is popularly known as the 'Festival of Festivals'. Organized every year at the Naga Heritage Village in Kisama near Kohima, the festival brings together different Naga tribes and communities to showcase their traditional dances, songs, indigenous games, handicrafts, cuisine and cultural practices. The festival also features music performances, art exhibitions, local food stalls and traditional village displays. It provides visitors with an opportunity to experience the rich cultural diversity and heritage of Nagaland in one location.",

    location:
        "Kisama Heritage Village, Kohima, Nagaland",

    bestTime:
        "December",

    duration:
        "1 - 3 Days",

    entryFee:
        "Festival entry and event-specific charges may apply; ticket rates vary according to the current festival schedule",

    howToReach: {

        flight:
            "Dimapur Airport is the nearest major airport. From Dimapur, visitors can travel by road to Kohima and Kisama.",

        train:
            "Dimapur Railway Station is the major railway access point for Nagaland. From Dimapur, taxis and buses are available towards Kohima.",

        bus:
            "Regular buses, shared taxis and tourist vehicles connect Dimapur with Kohima.",

        road:
            "Kisama Heritage Village is located approximately 12 km from Kohima and is accessible by road.",

        local:
            "Taxis, shared vehicles and local transport are available from Kohima to Kisama during the festival."
    },

    nearbyPlaces: [
        "Kisama Heritage Village",
        "Kohima War Cemetery",
        "Kohima Cathedral",
        "Naga Heritage Village",
        "Dzükou Valley",
        "Japfu Peak"
    ],

    travelTips: [
        "Book accommodation well in advance because Kohima becomes very busy during the festival.",
        "Check the official festival dates and event schedule before travelling.",
        "Respect traditional performances, ceremonies and local customs.",
        "Try traditional Naga cuisine from authorized food stalls.",
        "Carry warm clothing because December weather in Kohima can be cold.",
        "Keep personal belongings secure in crowded festival areas.",
        "Avoid littering and help maintain the cleanliness of the heritage village."
    ]
},
           {
    name: "Kisama Heritage Village",

    category: "heritage",

    image: "images/places/Kisama Heritage Village.jpg",

    description:
        "A cultural heritage complex near Kohima designed to showcase the traditional architecture, customs, lifestyle and cultural identity of Nagaland's Naga tribes.",

    about:
        "Kisama Heritage Village is an important cultural attraction near Kohima and the main venue of the annual Hornbill Festival. The village is designed as a traditional Naga settlement, with distinctive tribal morungs, houses and structures representing different Naga communities. Visitors can learn about traditional architecture, handicrafts, food, music, dances and community traditions. During the Hornbill Festival, Kisama becomes a vibrant centre of cultural performances and celebrations, attracting visitors from across India and around the world.",

    location:
        "Kisama, Kohima District, Nagaland",

    bestTime:
        "October - May",

    duration:
        "3 - 5 Hours",

    entryFee:
        "Entry charges may apply during special events and festivals",

    howToReach: {

        flight:
            "Dimapur Airport is the nearest airport. From Dimapur, visitors can travel by road to Kohima and then Kisama.",

        train:
            "Dimapur Railway Station is the nearest major railway station, followed by road travel to Kohima.",

        bus:
            "Buses and shared taxis connect Dimapur and Kohima. Local vehicles are available from Kohima to Kisama.",

        road:
            "Kisama Heritage Village is approximately 12 km from Kohima and is easily accessible by road.",

        local:
            "Taxis and hired vehicles are the most convenient options for travelling between Kohima and Kisama."
    },

    nearbyPlaces: [
        "Hornbill Festival Grounds",
        "Kohima War Cemetery",
        "Kohima Cathedral",
        "Dzükou Valley",
        "Japfu Peak",
        "Kohima Village"
    ],

    travelTips: [
        "Visit during the Hornbill Festival for the most vibrant cultural experience.",
        "Respect tribal traditions and ask permission before photographing people during cultural activities.",
        "Wear comfortable footwear for walking around the heritage complex.",
        "Carry warm clothing during winter.",
        "Check opening hours before visiting outside festival season.",
        "Do not touch or damage traditional structures.",
        "Try local food and handicrafts from authorized vendors."
    ]
},
            {
    name: "Dzukou Valley",

    category: "adventure",

    image: "images/places/Dzukou Valley.jpg",

    description:
        "A spectacular high-altitude valley known for rolling green hills, seasonal flowers, streams, misty landscapes and scenic trekking trails.",

    about:
        "Dzukou Valley is one of Nagaland's most beautiful natural destinations and is located near the border of Nagaland and Manipur. The valley is surrounded by mountains and is famous for its lush green landscapes, winding streams, seasonal flowers and peaceful atmosphere. The unique Dzukou Lily, found in the valley, is one of its most distinctive natural features. The destination is popular among trekkers, nature lovers and photographers because of its scenic trails, changing landscapes and panoramic mountain views. The valley can be reached through trekking routes from the Viswema or Jakhama side.",

    location:
        "Kohima District, Nagaland",

    bestTime:
        "October - May",

    duration:
        "1 - 2 Days",

    entryFee:
        "Local entry, guide, camping or trekking charges may apply depending on the route and current regulations",

    howToReach: {

        flight:
            "Dimapur Airport is the nearest major airport. From Dimapur, visitors can travel to Kohima and then continue towards the trekking base.",

        train:
            "Dimapur Railway Station is the nearest major railway access point, followed by road travel to Kohima and the valley's trekking routes.",

        bus:
            "Buses and shared vehicles are available from Dimapur to Kohima. Local taxis can be used to reach Viswema or Jakhama.",

        road:
            "The main trekking approaches are through Viswema and Jakhama villages near Kohima.",

        local:
            "Local taxis and hired vehicles can take visitors to the trekking starting points. Local guides are recommended for first-time trekkers."
    },

    nearbyPlaces: [
        "Japfu Peak",
        "Viswema Village",
        "Jakhama Village",
        "Kisama Heritage Village",
        "Hornbill Festival Grounds",
        "Kohima"
    ],

    travelTips: [
        "Wear proper trekking shoes with good grip.",
        "Carry sufficient drinking water and basic trekking supplies.",
        "Weather can change quickly, so carry rain protection and warm clothing.",
        "Hire a local guide if you are unfamiliar with the trekking route.",
        "Start the trek early to allow sufficient time for exploration and return.",
        "Do not pick or damage rare flowers and plants.",
        "Avoid littering and carry waste back with you.",
        "Camping may require permission or local arrangements depending on current regulations."
    ]
},
            {
    name: "Japfu Peak",

    category: "adventure",

    image: "images/places/Japfu Peak.jpg",

    description:
        "One of Nagaland's highest mountain peaks, famous for challenging trekking trails, panoramic views, dense forests and the world's tallest known rhododendron tree.",

    about:
        "Japfu Peak is one of the highest peaks in Nagaland and is located south of Kohima. The mountain is surrounded by forests and offers spectacular views of the surrounding hills and valleys. Japfu is particularly famous for its trekking route and the remarkable giant rhododendron tree associated with the region. The peak is popular among adventure enthusiasts, trekkers and nature photographers. The trek passes through forested landscapes and gradually opens into scenic mountain viewpoints, making it one of Nagaland's notable outdoor experiences.",

    location:
        "Kohima District, Nagaland",

    bestTime:
        "October - April",

    duration:
        "1 - 2 Days",

    entryFee:
        "Trekking, guide or local permission charges may apply depending on the current route regulations",

    howToReach: {

        flight:
            "Dimapur Airport is the nearest major airport. From Dimapur, visitors can travel by road to Kohima and then towards the Japfu trekking area.",

        train:
            "Dimapur Railway Station is the nearest major railway access point, followed by road travel to Kohima.",

        bus:
            "Buses and shared taxis connect Dimapur and Kohima. Local transport can be arranged from Kohima towards the trekking base.",

        road:
            "Japfu Peak can be approached through villages and trekking routes south of Kohima, particularly around Viswema.",

        local:
            "Local taxis and hired vehicles are available for reaching the trekking starting point. Hiring a local guide is recommended."
    },

    nearbyPlaces: [
        "Dzukou Valley",
        "Viswema Village",
        "Jakhama Village",
        "Kisama Heritage Village",
        "Kohima",
        "Hornbill Festival Grounds"
    ],

    travelTips: [
        "Japfu is a challenging trek, so maintain a reasonable level of physical fitness.",
        "Wear sturdy trekking shoes and carry appropriate outdoor clothing.",
        "Start early because the trek can take several hours.",
        "Carry enough drinking water and energy snacks.",
        "Weather conditions can change quickly at higher elevations.",
        "Hire a local guide if you are unfamiliar with the route.",
        "Do not damage vegetation or disturb wildlife.",
        "Follow local trekking and forest regulations.",
        "Carry all waste back with you and avoid littering."
    ]
}
        ]

    },


    /* =====================================================
       ODISHA
    ===================================================== */

    "Odisha": {

        region: "East India",

        description:
            "Discover magnificent temples, beautiful beaches, ancient architecture and Odisha's rich cultural heritage.",

        about:
            "Odisha is famous for its ancient temples, classical traditions, beaches and historic architecture. It offers a rich combination of spirituality and culture.",

        image:"images/hero/odisha.jpg",

        places: "25+",

        cities: "6+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Bhubaneswar",
                description:
                    "The capital city famous for ancient temples and modern attractions.",
                    image: "images/Bhubaneswar.jpg"
            },

            {
                name: "Puri",
                description:
                    "A major pilgrimage and beach destination.",
                    image: "images/Puri.jpg"
            },

            {
                name: "Cuttack",
                description:
                    "A historic city known for culture and heritage.",
                    image: "images/Cuttack.jpg"
            },

            {
                name: "Konark",
                description:
                    "A famous heritage destination known for the Sun Temple.",
                    image: "images/Konark.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Jagannath Temple",

    category: "religious",

    image: "images/places/Jagannath Temple.jpg",

    description:
        "One of India's most revered Hindu temples, dedicated to Lord Jagannath and famous for its spiritual significance, ancient Kalinga architecture and grand Rath Yatra.",

    about:
        "The Jagannath Temple in Puri is one of the most important pilgrimage destinations in India and is traditionally regarded as one of the Char Dham. The temple was constructed in the 12th century and became the centre of the Jagannath tradition in Odisha. The main shrine is dedicated to Lord Jagannath along with Lord Balabhadra and Devi Subhadra. The temple complex is surrounded by two massive walls and features the iconic Nilachakra and Singhadwara. The annual Rath Yatra attracts millions of devotees and is one of the most famous religious festivals in India.",

    location:
        "Puri, Odisha",

    bestTime:
        "October - February",

    duration:
        "3 - 5 Hours",

    entryFee:
        "No general entry fee for devotees; only eligible visitors are permitted inside the main temple complex",

    howToReach: {

        flight:
            "Biju Patnaik International Airport in Bhubaneswar is the nearest major airport, approximately 60 km from Puri.",

        train:
            "Puri Railway Station is the nearest major railway station and has direct connectivity with several major cities.",

        bus:
            "Regular buses connect Puri with Bhubaneswar, Cuttack and other cities of Odisha.",

        road:
            "Puri is well connected by road with Bhubaneswar, Cuttack and other parts of Odisha.",

        local:
            "Auto-rickshaws, cycle-rickshaws, taxis and local transport are available throughout Puri."
    },

    nearbyPlaces: [
        "Puri Beach",
        "Gundicha Temple",
        "Markandeshwar Temple",
        "Raghurajpur Artist Village",
        "Swargadwar Beach",
        "Konark Sun Temple"
    ],

    travelTips: [
        "Follow all temple dress and entry rules.",
        "Photography is not permitted inside the main temple premises.",
        "Mobile phones, cameras and electronic gadgets may need to be deposited before entering.",
        "Maintain silence and respect religious ceremonies.",
        "Avoid carrying unnecessary valuables.",
        "Visit early in the morning to avoid heavy crowds.",
        "During Rath Yatra, expect very large crowds and follow official safety instructions."
    ]
},

            {
    name: "Konark Sun Temple",

    category: "heritage",

    image: "images/places/Konark Sun Temple.jpg",

    description:
        "A magnificent UNESCO World Heritage Site designed as the colossal chariot of the Sun God, famous for its intricate stone carvings, wheels and extraordinary Kalinga architecture.",

    about:
        "The Konark Sun Temple is one of the greatest achievements of ancient Indian temple architecture and is located near the coast of Odisha. Built in the 13th century during the reign of King Narasimhadeva I of the Eastern Ganga dynasty, the temple was designed as a gigantic chariot dedicated to Surya, the Sun God. The structure features 24 intricately carved wheels and seven horses. Although much of the original temple is now in ruins, the remaining Jagamohana, Natya Mandap and magnificent sculptures demonstrate exceptional craftsmanship and architectural precision. The monument is a UNESCO World Heritage Site.",

    location:
        "Konark, Puri District, Odisha",

    bestTime:
        "October - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Entry charges apply according to current monument ticket rates",

    howToReach: {

        flight:
            "Biju Patnaik International Airport in Bhubaneswar is the nearest major airport, approximately 60-65 km away.",

        train:
            "Puri Railway Station is the nearest major railway station, approximately 35 km from Konark.",

        bus:
            "Regular buses connect Konark with Puri and Bhubaneswar.",

        road:
            "Konark is well connected by road with Puri and Bhubaneswar through the coastal route.",

        local:
            "Taxis, auto-rickshaws and hired tourist vehicles are available for local sightseeing."
    },

    nearbyPlaces: [
        "Chandrabhaga Beach",
        "Archaeological Museum",
        "Puri Beach",
        "Ramachandi Temple",
        "Raghurajpur Artist Village",
        "Pipili"
    ],

    travelTips: [
        "Visit in the morning or late afternoon for comfortable sightseeing.",
        "Wear comfortable footwear because the complex involves considerable walking.",
        "Do not climb or touch protected sculptures and monuments.",
        "Carry water and sun protection during warmer months.",
        "Consider visiting the Archaeological Museum nearby.",
        "Check current monument timings and ticket prices before visiting.",
        "The annual Konark Dance Festival is generally held in December."
    ]
},
            {
    name: "Puri Beach",

    category: "nature",

    image: "images/places/Puri Beach.jpg",

    description:
        "A beautiful golden-sand beach on the Bay of Bengal, known for sunrise views, seaside walks, religious atmosphere and the vibrant coastal life of Puri.",

    about:
        "Puri Beach forms the eastern boundary of the famous pilgrimage city of Puri and is one of Odisha's most popular coastal attractions. The beach combines natural beauty with the spiritual atmosphere of the Jagannath pilgrimage town. Visitors can enjoy peaceful sunrise walks, watch the waves, relax by the sea and experience local food and beach culture. The area around Swargadwar is particularly active and is closely connected with the religious traditions of Puri. The beach also provides easy access to several important attractions in and around the city.",

    location:
        "Puri, Odisha",

    bestTime:
        "October - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "No general entry fee",

    howToReach: {

        flight:
            "Biju Patnaik International Airport in Bhubaneswar is approximately 60 km away from Puri.",

        train:
            "Puri Junction is the nearest railway station and provides direct connectivity with several Indian cities.",

        bus:
            "Regular bus services connect Puri with Bhubaneswar, Cuttack and other destinations.",

        road:
            "Puri is well connected by road and can be reached easily from Bhubaneswar and nearby cities.",

        local:
            "Auto-rickshaws, taxis, cycle-rickshaws and local transport are easily available around Puri."
    },

    nearbyPlaces: [
        "Jagannath Temple",
        "Swargadwar Beach",
        "Gundicha Temple",
        "Raghurajpur Artist Village",
        "Markandeshwar Temple",
        "Konark Sun Temple"
    ],

    travelTips: [
        "Early morning is ideal for sunrise walks and photography.",
        "Follow local beach safety instructions.",
        "Avoid swimming in rough sea conditions.",
        "Keep valuables secure while spending time on the beach.",
        "Use designated areas for bathing and water activities.",
        "Avoid littering and use available waste bins.",
        "Try local seafood and traditional Odia food from hygienic establishments."
    ]
},

           {
    name: "Chilika Lake",

    category: "nature",

    image: "images/places/Chilika Lake.jpg",

    description:
        "A vast brackish-water lagoon on the Odisha coast, famous for migratory birds, Irrawaddy dolphins, islands, fishing communities and spectacular natural landscapes.",

    about:
        "Chilika Lake is one of India's most important coastal lagoons and a major biodiversity destination in Odisha. The vast brackish-water lagoon stretches across parts of Puri, Khordha and Ganjam districts and connects with the Bay of Bengal. It is famous for its rich birdlife, especially during the winter migratory season, and is an important habitat for the endangered Irrawaddy dolphin. Popular visitor areas include Satapada, known for dolphin sightings, and the islands of Nalabana, Kalijai and others. Boating through the lagoon provides an opportunity to experience its wetlands, islands, fishing villages and diverse aquatic ecosystem.",

    location:
        "Puri, Khordha and Ganjam Districts, Odisha",

    bestTime:
        "November - February",

    duration:
        "1 Day",

    entryFee:
        "No general lake entry fee; boating, sanctuary and local tourism charges may apply",

    howToReach: {

        flight:
            "Biju Patnaik International Airport in Bhubaneswar is the nearest major airport.",

        train:
            "Puri, Balugaon and Khurda Road are useful railway access points depending on the chosen part of Chilika.",

        bus:
            "Buses connect major towns such as Bhubaneswar, Puri and Balugaon with different access points around Chilika.",

        road:
            "Chilika can be reached by road from Bhubaneswar and Puri. Satapada is one of the most popular access points for tourists.",

        local:
            "Local taxis and hired vehicles are available. Boats operated by authorized local operators can be used for lake sightseeing."
    },

    nearbyPlaces: [
        "Satapada",
        "Nalabana Bird Sanctuary",
        "Kalijai Temple",
        "Mangalajodi",
        "Rambha",
        "Rajhans Island",
        "Puri Beach"
    ],

    travelTips: [
        "Winter is the best season for migratory bird watching.",
        "Satapada is popular for boat trips and Irrawaddy dolphin sightings.",
        "Use only authorized boats and follow boat safety instructions.",
        "Do not feed or disturb dolphins and birds.",
        "Carry binoculars for birdwatching.",
        "Carry sun protection and drinking water.",
        "Avoid plastic waste and protect the fragile wetland ecosystem.",
        "Weather and boat operations may affect sightseeing, so check local conditions before travelling."
    ]
}

        ]

    },


    /* =====================================================
       PUNJAB
    ===================================================== */

    "Punjab": {

        region: "North India",

        description:
            "Experience vibrant culture, historic monuments, spiritual destinations and traditional Punjabi hospitality.",

        about:
            "Punjab is known for its vibrant culture, historic landmarks, delicious cuisine, music and important Sikh pilgrimage sites.",

        image:"images/hero/punjab.jpg",

        places: "20+",

        cities: "5+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Amritsar",
                description:
                    "A major spiritual and cultural destination famous for the Golden Temple.",
                    image: "images/Amritsar.jpg"
            },

            {
                name: "Ludhiana",
                description:
                    "A major commercial and industrial city.",
                    image: "images/Ludhiana.jpg"
            },

            {
                name: "Jalandhar",
                description:
                    "A historic city with cultural and religious attractions.",
                    image: "images/Jalandhar.jpg"
            },

            {
                name: "Patiala",
                description:
                    "A royal city known for palaces and traditional culture.",
                    image: "images/Patiala.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Golden Temple",

    category: "religious",

    image: "images/places/Golden Temple.jpg",

    description:
        "The holiest Sikh shrine, famous for its magnificent golden architecture, sacred Amrit Sarovar, peaceful atmosphere and the tradition of community langar.",

    about:
        "The Golden Temple, officially known as Sri Harmandir Sahib, is located in the heart of Amritsar and is the spiritual centre of Sikhism. The shrine stands in the middle of the sacred Amrit Sarovar and is connected to the surrounding complex by a causeway. Its golden exterior, marble work, intricate decoration and reflection in the sacred pool make it one of India's most iconic religious landmarks. The complex also includes the Akal Takht and provides free community meals through the famous langar tradition. Visitors can experience prayer, devotional music, architecture and the spirit of community service.",

    location:
        "Amritsar, Punjab",

    bestTime:
        "October - March",

    duration:
        "3 - 5 Hours",

    entryFee:
        "No entry fee",

    howToReach: {

        flight:
            "Sri Guru Ram Dass Jee International Airport is the nearest airport and is approximately 13 km from the Golden Temple.",

        train:
            "Amritsar Railway Station is approximately 2 km away and has railway connectivity with several major Indian cities.",

        bus:
            "Regular buses connect Amritsar with Delhi, Chandigarh, Jalandhar, Ludhiana and other cities.",

        road:
            "Amritsar is well connected by road with major cities of Punjab and northern India.",

        local:
            "Auto-rickshaws, cycle-rickshaws, taxis, e-rickshaws and local buses are available around Amritsar."
    },

    nearbyPlaces: [
        "Jallianwala Bagh",
        "Partition Museum",
        "Akal Takht",
        "Durgiana Temple",
        "Gobindgarh Fort",
        "Wagah Border"
    ],

    travelTips: [
        "Cover your head before entering the Golden Temple complex.",
        "Remove your footwear and wash your feet before entering the main complex.",
        "Dress modestly and respectfully.",
        "Maintain silence and respect devotees during prayers.",
        "Do not smoke, consume alcohol or carry tobacco products inside the religious complex.",
        "Try the free langar as part of the temple's community tradition.",
        "Avoid littering and help maintain the cleanliness of the complex.",
        "Early morning and evening are especially peaceful times to visit."
    ]
},
           {
    name: "Jallianwala Bagh",

    category: "heritage",

    image: "images/places/Jallianwala Bagh.jpg",

    description:
        "A historic memorial in Amritsar commemorating the victims of the 1919 Jallianwala Bagh massacre and India's struggle for independence.",

    about:
        "Jallianwala Bagh is one of the most significant historical sites associated with India's freedom movement. On 13 April 1919, a large gathering of people was fired upon by British troops under the command of Brigadier-General Reginald Dyer. The tragedy became a major turning point in India's struggle against British rule. Today, the site is preserved as a national memorial and contains a memorial monument, preserved walls with bullet marks, the Martyrs' Well and a museum and gallery that document the events and their historical significance. The site serves as a solemn reminder of the sacrifices made during India's independence movement.",

    location:
        "Amritsar, Punjab",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Hours",

    entryFee:
        "No general entry fee",

    howToReach: {

        flight:
            "Sri Guru Ram Dass Jee International Airport is approximately 13 km from Amritsar city.",

        train:
            "Amritsar Railway Station is the nearest major railway station and is approximately 2 km from the Golden Temple area.",

        bus:
            "Regular buses connect Amritsar with major cities of Punjab and neighbouring states.",

        road:
            "Jallianwala Bagh is centrally located near the Golden Temple and is easily accessible by road.",

        local:
            "Auto-rickshaws, cycle-rickshaws, e-rickshaws and taxis are readily available in the surrounding area."
    },

    nearbyPlaces: [
        "Golden Temple",
        "Partition Museum",
        "Akal Takht",
        "Gobindgarh Fort",
        "Durgiana Temple",
        "Maharaja Ranjit Singh Museum"
    ],

    travelTips: [
        "Maintain a respectful and quiet atmosphere inside the memorial.",
        "Allow enough time to visit the museum and memorial areas.",
        "Read the historical displays to understand the significance of the site.",
        "Do not damage or touch protected historical structures.",
        "Photography rules may apply in certain areas.",
        "The site can become crowded during weekends and national holidays.",
        "Avoid littering and respect the memorial environment."
    ]
},
           {
    name: "Wagah Border",

    category: "heritage",

    image: "images/places/Wagah Border.jpg",

    description:
        "The famous India-Pakistan border crossing near Amritsar, known for its energetic Beating Retreat ceremony, synchronized military drill and patriotic atmosphere.",

    about:
        "Wagah Border, more precisely the Attari-Wagah border area, is one of India's best-known border tourism destinations. Located near Amritsar, it is famous for the daily Beating Retreat ceremony conducted by Indian and Pakistani border forces. The ceremony features synchronized marching, ceremonial movements, lowering of the national flags and the closing of the border gates. The event attracts large crowds and has become a distinctive cultural and patriotic experience for visitors. The border area also represents the historical and geographical division between India and Pakistan.",

    location:
        "Attari, Amritsar District, Punjab",

    bestTime:
        "October - March",

    duration:
        "3 - 5 Hours",

    entryFee:
        "Generally no standard entry fee; access arrangements and seating may be subject to current security and administration rules",

    howToReach: {

        flight:
            "Sri Guru Ram Dass Jee International Airport in Amritsar is the nearest airport.",

        train:
            "Amritsar Railway Station is the nearest major railway station. From Amritsar, visitors can continue by road towards Attari.",

        bus:
            "Local buses and tourist vehicles connect Amritsar with Attari and nearby border areas.",

        road:
            "The Attari-Wagah border is approximately 30 km from Amritsar and can be reached by road.",

        local:
            "Taxis, hired tourist vehicles and local transport are available from Amritsar."
    },

    nearbyPlaces: [
        "Golden Temple",
        "Jallianwala Bagh",
        "Partition Museum",
        "Pul Kanjari",
        "Attari Railway Station",
        "Gobindgarh Fort"
    ],

    travelTips: [
        "Reach well before the ceremony because security checks and crowds can take time.",
        "Carry valid government identification as required by current security regulations.",
        "Follow instructions given by security personnel.",
        "Avoid carrying restricted items or unnecessary luggage.",
        "Check the current ceremony timing before travelling because timings can vary seasonally.",
        "The ceremony can be crowded, especially on weekends and holidays.",
        "Respect the national symbols and maintain proper behaviour throughout the ceremony."
    ]
},
           {
    name: "Harike Wetland",

    category: "nature",

    image: "images/places/Harike Wetland.jpg",

    description:
        "A major wetland and bird sanctuary at the confluence of the Beas and Sutlej rivers, famous for migratory birds, rich biodiversity and peaceful natural landscapes.",

    about:
        "Harike Wetland and Bird Sanctuary is one of northern India's important wetland ecosystems and is located at the confluence of the Beas and Sutlej rivers. The wetland covers a large shallow-water ecosystem surrounded by marshes, vegetation and agricultural landscapes. It is particularly important for migratory birds that arrive during the winter season from regions including Central Asia, Europe and Siberia. The wetland supports a wide variety of resident and migratory birds and is also associated with rare aquatic wildlife. It was declared a bird sanctuary in 1982 and was designated as a Ramsar Site in 1990, making it an important destination for birdwatchers and nature lovers.",

    location:
        "Harike, Punjab",

    bestTime:
        "November - February",

    duration:
        "3 - 5 Hours",

    entryFee:
        "Entry and activity charges may apply according to current sanctuary regulations",

    howToReach: {

        flight:
            "Sri Guru Ram Dass Jee International Airport in Amritsar is one of the nearest major airports. Other access options include airports around Punjab followed by road travel.",

        train:
            "Firozpur, Amritsar and nearby railway stations can be used depending on the chosen route, followed by road travel to Harike.",

        bus:
            "Buses and shared vehicles connect nearby towns and cities with Harike and surrounding areas.",

        road:
            "Harike is accessible by road from Amritsar, Firozpur, Kapurthala and other parts of Punjab.",

        local:
            "Taxis and hired vehicles are convenient for reaching the wetland and nearby observation areas."
    },

    nearbyPlaces: [
        "Harike Bird Sanctuary",
        "Beas River",
        "Sutlej River",
        "Kanjli Wetland",
        "Firozpur",
        "Amritsar"
    ],

    travelTips: [
        "November to February is ideal for observing migratory birds.",
        "Carry binoculars and a camera with a suitable zoom lens.",
        "Maintain a quiet environment while watching birds.",
        "Do not feed or disturb wildlife.",
        "Stay on designated paths and observation areas.",
        "Avoid entering restricted wetland zones.",
        "Carry drinking water and sun protection.",
        "Avoid plastic waste and help protect the wetland ecosystem.",
        "Check current sanctuary timings and access restrictions before visiting."
    ]
}
        ]

    },


    /* =====================================================
       RAJASTHAN
    ===================================================== */

    "Rajasthan": {

        region: "North-West India",

        description:
            "Explore royal palaces, magnificent forts, colorful culture and the golden Thar Desert.",

        about:
            "Rajasthan is famous for royal heritage, magnificent forts, palaces, deserts, colorful festivals and traditional culture. It is one of India's most iconic tourism destinations.",

        image:"images/hero/rajasthan.jpg",

        places: "40+",

        cities: "8+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Jaipur",
                description:
                    "The Pink City famous for palaces, forts and vibrant markets.",
                     image: "images/Jaipur.jpg"
            },

            {
                name: "Udaipur",
                description:
                    "The City of Lakes known for palaces and beautiful landscapes.",
                     image: "images/Udaipur.jpg"
            },

            {
                name: "Jodhpur",
                description:
                    "The Blue City famous for Mehrangarh Fort.",
                     image: "images/Jodhpur.jpg"
            },

            {
                name: "Jaisalmer",
                description:
                    "The Golden City known for its desert landscapes and fort.",
                     image: "images/Jaisalmer.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Hawa Mahal",

    category: "heritage",

    image: "images/places/Hawa Mahal.jpg",

    description:
        "An iconic pink sandstone palace in Jaipur famous for its honeycomb-like facade, intricate windows, Rajput architecture and rich royal heritage.",

    about:
        "Hawa Mahal is one of Jaipur's most recognizable landmarks and was built in 1799 by Maharaja Sawai Pratap Singh. Designed by Lal Chand Ustad, the palace is famous for its five-storey facade containing numerous small windows and jharokhas decorated with intricate latticework. The structure was designed to allow royal women to observe everyday life and processions on the streets without being seen. Its unique architecture allows air to circulate through the many openings, giving the monument its famous name, Hawa Mahal or Palace of Winds.",

    location:
        "Badi Chaupar, Jaipur, Rajasthan",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Hours",

    entryFee:
        "Entry charges apply according to current monument ticket rates",

    howToReach: {

        flight:
            "Jaipur International Airport is the nearest airport and is approximately 13 km from Hawa Mahal.",

        train:
            "Jaipur Junction Railway Station is the major railway station and is well connected with major Indian cities.",

        bus:
            "Local and intercity buses connect Jaipur with Delhi, Ajmer, Jodhpur, Udaipur and other cities.",

        road:
            "Hawa Mahal is located in the old city of Jaipur and is easily accessible by road.",

        local:
            "Auto-rickshaws, e-rickshaws, taxis and app-based cab services are readily available in Jaipur."
    },

    nearbyPlaces: [
        "City Palace",
        "Jantar Mantar",
        "Johari Bazaar",
        "Albert Hall Museum",
        "Jal Mahal",
        "Amber Fort"
    ],

    travelTips: [
        "Visit early morning for softer light and better photographs.",
        "Wear comfortable footwear because the palace involves stairs and walking.",
        "Explore the surrounding old-city markets after visiting the monument.",
        "Carry water and sun protection during warmer months.",
        "Do not touch or damage the historic architecture.",
        "Check current opening hours and ticket prices before visiting.",
        "The monument can become crowded during weekends and tourist seasons."
    ]
},

            {
    name: "Amber Fort",

    category: "heritage",

    image: "images/places/Amber Fort.jpg",

    description:
        "A magnificent hilltop fort near Jaipur known for grand Rajput architecture, ornate palaces, courtyards, mirror work, gardens and panoramic views.",

    about:
        "Amber Fort, also known as Amer Fort, is one of Rajasthan's most impressive historic forts and is located on a hill overlooking Maota Lake. The fort was developed primarily under Raja Man Singh I and later rulers of Amber. Its architecture combines Rajput and Mughal influences and includes grand gateways, courtyards, royal chambers, gardens and the famous Sheesh Mahal decorated with intricate mirror work. The fort's elevated position provides spectacular views of the surrounding Aravalli hills and Maota Lake. Amber Fort forms part of Jaipur's UNESCO World Heritage Site group of hill forts of Rajasthan.",

    location:
        "Amer, Jaipur, Rajasthan",

    bestTime:
        "October - March",

    duration:
        "3 - 5 Hours",

    entryFee:
        "Entry charges apply; ticket rates may vary for Indian and foreign visitors",

    howToReach: {

        flight:
            "Jaipur International Airport is approximately 25 km from Amber Fort.",

        train:
            "Jaipur Junction Railway Station is the nearest major railway station.",

        bus:
            "Local buses connect Jaipur city with Amer and Amber Fort.",

        road:
            "Amber Fort is approximately 11 km from central Jaipur and is easily accessible by road.",

        local:
            "Taxis, auto-rickshaws, app-based cabs and local buses are available from Jaipur."
    },

    nearbyPlaces: [
        "Jaigarh Fort",
        "Nahargarh Fort",
        "Maota Lake",
        "Jal Mahal",
        "City Palace",
        "Hawa Mahal"
    ],

    travelTips: [
        "Start early to explore the fort comfortably and avoid the strongest afternoon heat.",
        "Wear comfortable shoes because the fort involves considerable walking and stairs.",
        "Carry water and sun protection.",
        "Explore the Sheesh Mahal and major courtyards with a guide for historical context.",
        "Avoid climbing restricted structures.",
        "Check current entry ticket and light-and-sound show timings before visiting.",
        "Avoid feeding or disturbing animals around tourist areas."
    ]
},
            {
    name: "Thar Desert",

    category: "adventure",

    image: "images/places/Thar Desert.jpg",

    description:
        "A vast golden desert landscape famous for sand dunes, camel safaris, desert camps, traditional Rajasthani culture, folk music and spectacular sunsets.",

    about:
        "The Thar Desert, also known as the Great Indian Desert, covers a large part of western Rajasthan and extends into neighbouring regions. Rajasthan's desert areas around Jaisalmer, particularly Sam Sand Dunes and Khuri, are popular for tourism and provide opportunities to experience desert landscapes and local culture. Visitors can enjoy camel safaris, jeep rides, dune experiences, traditional folk performances, desert camping and sunset views. The desert is also home to distinctive communities, traditional villages, handicrafts and colourful Rajasthani cultural traditions.",

    location:
        "Western Rajasthan, mainly around Jaisalmer and Barmer",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "No general desert entry fee; camel safaris, jeep rides, camps and other activities have separate charges",

    howToReach: {

        flight:
            "Jaisalmer Airport provides seasonal and limited air connectivity. Jodhpur Airport is another major option followed by road travel to Jaisalmer.",

        train:
            "Jaisalmer Railway Station is the main railway access point for the popular desert tourism areas around the city.",

        bus:
            "Regular buses connect Jaisalmer with Jodhpur, Jaipur and other cities of Rajasthan.",

        road:
            "Jaisalmer and its surrounding desert areas are accessible by road from Jodhpur and other Rajasthan destinations.",

        local:
            "Taxis, hired vehicles and organized tour operators provide transport to Sam Sand Dunes, Khuri and other desert areas."
    },

    nearbyPlaces: [
        "Sam Sand Dunes",
        "Khuri Sand Dunes",
        "Jaisalmer Fort",
        "Patwon Ki Haveli",
        "Gadisar Lake",
        "Kuldhara Village"
    ],

    travelTips: [
        "October to March is the most comfortable season for desert activities.",
        "Carry sunglasses, sunscreen, a hat and sufficient drinking water.",
        "Temperatures can fall significantly at night, so carry warm clothing.",
        "Wear comfortable closed footwear for walking on sand.",
        "Choose authorized operators for camel safaris and desert activities.",
        "Follow safety instructions during dune-bashing or jeep activities.",
        "Respect local villages, wildlife and desert ecosystems.",
        "Avoid littering and do not leave plastic waste in the desert."
    ]
},

            {
    name: "Pushkar",

    category: "religious",

    image: "images/places/Pushkar.jpg",

    description:
        "A sacred town in Rajasthan known for the Brahma Temple, holy Pushkar Lake, colorful ghats, spiritual atmosphere and the famous annual Pushkar Camel Fair.",

    about:
        "Pushkar is one of Rajasthan's most important pilgrimage towns and is located near Ajmer, surrounded by the Aravalli hills. The town is famous for Pushkar Lake, which is surrounded by numerous ghats and temples and is considered sacred in Hindu tradition. Pushkar is particularly known for the Brahma Temple, one of the few major temples dedicated to Lord Brahma. The town also hosts the internationally known Pushkar Camel Fair, which combines religious traditions, livestock trading, cultural performances, handicrafts and local celebrations. Pushkar's narrow streets, colourful markets and spiritual atmosphere make it a popular destination for cultural tourism.",

    location:
        "Pushkar, Ajmer District, Rajasthan",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "No general town entry fee; individual temples, attractions and festival activities may have separate charges",

    howToReach: {

        flight:
            "Kishangarh Airport near Ajmer is the nearest airport. Jaipur International Airport is another major option.",

        train:
            "Ajmer Junction Railway Station is the nearest major railway station, approximately 15 km from Pushkar.",

        bus:
            "Regular buses and shared vehicles connect Pushkar with Ajmer, Jaipur and other cities.",

        road:
            "Pushkar is well connected by road with Ajmer and Jaipur and can be reached through the Aravalli hills.",

        local:
            "Auto-rickshaws, taxis, e-rickshaws and hired vehicles are available for local sightseeing."
    },

    nearbyPlaces: [
        "Pushkar Lake",
        "Brahma Temple",
        "Savitri Temple",
        "Varaha Temple",
        "Ajmer Sharif Dargah",
        "Pushkar Camel Fair Grounds"
    ],

    travelTips: [
        "Dress modestly when visiting temples and religious areas.",
        "Remove footwear before entering temples where required.",
        "Respect local religious customs around Pushkar Lake and its ghats.",
        "Do not photograph people or religious ceremonies without permission.",
        "The town becomes extremely busy during the Pushkar Camel Fair.",
        "Book accommodation well in advance during festival season.",
        "Be cautious of unofficial guides and unsolicited religious services.",
        "Keep the ghats and surrounding areas clean."
    ]
}

        ]

    },


    /* =====================================================
       SIKKIM
    ===================================================== */

    "Sikkim": {

        region: "North-East India",

        description:
            "Discover Himalayan peaks, peaceful monasteries, beautiful lakes and spectacular mountain landscapes.",

        about:
            "Sikkim is a peaceful Himalayan state known for snow-capped mountains, monasteries, lakes and scenic valleys.",

        image:"images/hero/sikkim.jpg",

        places: "20+",

        cities: "5+",

        bestTime: "Mar - Jun",

        popularCities: [

            {
                name: "Gangtok",
                description:
                    "The capital city known for mountain views and monasteries.",
                     image: "images/Gangtok.jpg"
            },

            {
                name: "Pelling",
                description:
                    "A beautiful destination offering spectacular Himalayan views.",
                     image: "images/Pelling.jpg"
            },

            {
                name: "Lachung",
                description:
                    "A scenic mountain village in North Sikkim.",
                     image: "images/Lachung.jpg"
            },

            {
                name: "Namchi",
                description:
                    "A peaceful town surrounded by mountains and cultural attractions.",
                     image: "images/Namchi.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Tsomgo Lake",

    category: "nature",

    image: "images/places/Tsomgo Lake.jpg",

    description:
        "A spectacular high-altitude sacred lake surrounded by rugged Himalayan mountains, famous for its changing seasonal beauty, snow-covered landscapes and yak rides.",

    about:
        "Tsomgo Lake, also known as Changu Lake, is one of the most popular tourist attractions near Gangtok. Located at a high altitude in East Sikkim, the lake is surrounded by steep mountain terrain and receives water mainly from melting snow. During winter, the lake often freezes and the surrounding landscape becomes covered with snow, while in late spring and summer the area becomes greener with seasonal flowers. Tsomgo is considered sacred by the people of Sikkim and is associated with several local legends. Visitors can enjoy scenic views, yak rides and local food around the lake.",

    location:
        "East Sikkim, near Gangtok, Sikkim",

    bestTime:
        "May - October",

    duration:
        "1 Day",

    entryFee:
        "Special Protected Area Permit is required; vehicle and activity charges may apply",

    howToReach: {

        flight:
            "Pakyong Airport is the nearest airport. Bagdogra Airport in West Bengal is another major option followed by road travel to Gangtok.",

        train:
            "New Jalpaiguri Railway Station is the nearest major railway access point, followed by road travel to Gangtok.",

        bus:
            "Buses and shared vehicles connect Siliguri and nearby towns with Gangtok.",

        road:
            "Tsomgo Lake is approximately 35 - 40 km from Gangtok and is reached through the mountain road towards Nathula.",

        local:
            "Government-approved taxis and registered travel vehicles from Gangtok are commonly used to visit Tsomgo Lake."
    },

    nearbyPlaces: [
        "Nathula Pass",
        "Baba Harbhajan Singh Temple",
        "Kyongnosla Alpine Sanctuary",
        "Gangtok",
        "Tashi View Point"
    ],

    travelTips: [
        "A Protected Area Permit is required before visiting Tsomgo Lake.",
        "Carry a valid government-issued identity document.",
        "The altitude is high, so avoid strenuous physical activity.",
        "Carry warm clothes even during warmer months.",
        "Weather can change quickly in the mountains.",
        "Do not litter around the lake or disturb the natural environment.",
        "Follow local instructions regarding yak rides and other activities.",
        "Check road and permit conditions before travelling."
    ]
},

            {
    name: "Rumtek Monastery",

    category: "religious",

    image: "images/places/Rumtek Monastery.jpg",

    description:
        "One of Sikkim's most important Buddhist monasteries, known for Tibetan Buddhist architecture, sacred artworks, prayer halls and peaceful Himalayan surroundings.",

    about:
        "Rumtek Monastery, also known as the Dharma Chakra Centre, is one of the most significant Buddhist monasteries in Sikkim. Located on a hill overlooking Gangtok, the monastery belongs to the Karma Kagyu tradition of Tibetan Buddhism and is associated with the Gyalwa Karmapa. The monastery is known for its impressive Tibetan-inspired architecture, colourful murals, prayer halls, sacred Buddhist objects and peaceful surroundings. The journey to Rumtek passes through scenic Sikkimese villages, green hills and agricultural landscapes, making the destination a combination of spiritual and natural experiences.",

    location:
        "Rumtek, Gangtok District, Sikkim",

    bestTime:
        "October - May",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Entry charges may apply according to current monastery rules",

    howToReach: {

        flight:
            "Pakyong Airport is the nearest airport. Bagdogra Airport is another major option followed by road travel to Gangtok.",

        train:
            "New Jalpaiguri Railway Station is the nearest major railway station, followed by road travel to Gangtok and Rumtek.",

        bus:
            "Local buses and shared vehicles connect Gangtok with Rumtek and nearby areas.",

        road:
            "Rumtek Monastery is approximately 23 km from Gangtok and can be reached by road through scenic hill routes.",

        local:
            "Taxis and hired vehicles from Gangtok are convenient options for visiting the monastery."
    },

    nearbyPlaces: [
        "Nehru Botanical Garden",
        "Gangtok",
        "Tashi View Point",
        "Banjhakri Falls",
        "Ranka Monastery",
        "Enchey Monastery"
    ],

    travelTips: [
        "Dress modestly and respectfully inside the monastery.",
        "Maintain silence in prayer and meditation areas.",
        "Ask permission before photographing monks or religious ceremonies.",
        "Do not touch religious objects or murals.",
        "Wear comfortable footwear because the complex is located on hilly terrain.",
        "Check monastery opening hours before visiting.",
        "Respect Buddhist customs and local traditions."
    ]
},

            {
    name: "Nathula Pass",

    category: "adventure",

    image: "images/places/Nathula Pass.jpg",

    description:
        "A spectacular high-altitude mountain pass on the India-China border, famous for Himalayan landscapes, strategic importance, snow-covered mountains and scenic mountain roads.",

    about:
        "Nathula Pass is one of the most famous high-altitude destinations in Sikkim and lies on the historic route connecting India with Tibet. Located at around 4,300 metres above sea level, the pass offers dramatic views of the Himalayan landscape and the surrounding mountain ranges. The road to Nathula passes through Tsomgo Lake and other scenic high-altitude locations. Nathula has significant historical and strategic importance because it was part of the old trade route between India and Tibet. Today, it is a popular destination for visitors interested in mountain scenery, history and India's border region.",

    location:
        "East Sikkim, Sikkim",

    bestTime:
        "April - Mid June and October - November",

    duration:
        "1 Day",

    entryFee:
        "Protected Area Permit and vehicle permit are required; applicable charges may vary",

    howToReach: {

        flight:
            "Pakyong Airport is the nearest airport. Bagdogra Airport is another major airport option followed by road travel to Gangtok.",

        train:
            "New Jalpaiguri Railway Station is the nearest major railway station, followed by road travel to Gangtok.",

        bus:
            "Buses and shared vehicles connect Siliguri with Gangtok. Nathula itself is generally accessed through authorized tourist vehicles.",

        road:
            "Nathula Pass is approximately 54 - 56 km from Gangtok and the route passes through Tsomgo Lake.",

        local:
            "Visitors generally travel from Gangtok in permitted SUVs or registered tourist vehicles arranged through authorized travel agencies."
    },

    nearbyPlaces: [
        "Tsomgo Lake",
        "Baba Harbhajan Singh Temple",
        "Kyongnosla Alpine Sanctuary",
        "Kupup Lake",
        "Gangtok"
    ],

    travelTips: [
        "A Protected Area Permit is mandatory for eligible visitors.",
        "Nathula access is restricted and subject to current government and security regulations.",
        "Foreign tourists are not permitted beyond Tsomgo Lake.",
        "Carry valid identification and required permit documents.",
        "The altitude is very high, so avoid strenuous activity.",
        "Carry heavy warm clothing during colder months.",
        "Check weather, road conditions and permit availability before travelling.",
        "Do not photograph restricted military installations or security areas.",
        "Follow all instructions from security personnel."
    ]
},
           {
    name: "Pelling",

    category: "nature",

    image: "images/places/Pelling.jpg",

    description:
        "A scenic hill town in West Sikkim famous for spectacular Kanchenjunga views, monasteries, waterfalls, peaceful landscapes and mountain trekking.",

    about:
        "Pelling is one of the most popular tourist destinations in West Sikkim and is known for its spectacular views of Mount Kanchenjunga and the surrounding Himalayan ranges. The town is surrounded by forests, valleys and mountain landscapes and provides easy access to several important cultural and natural attractions. Pemayangtse Monastery and Sanga Choeling Monastery are among the major nearby attractions, while the ruins of Rabdentse offer an insight into Sikkim's historical past. Pelling is also popular for nature walks, trekking, waterfalls, birdwatching and panoramic mountain photography.",

    location:
        "Pelling, Gyalshing District, Sikkim",

    bestTime:
        "October - May",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general entry fee for Pelling; individual attractions may have separate charges",

    howToReach: {

        flight:
            "Pakyong Airport is the nearest airport. Bagdogra Airport is another major option followed by road travel through Sikkim.",

        train:
            "New Jalpaiguri Railway Station is the nearest major railway access point, followed by road travel to Pelling.",

        bus:
            "Shared taxis and buses connect Pelling with Gangtok, Siliguri, Namchi and other parts of Sikkim.",

        road:
            "Pelling is connected by scenic mountain roads with Gangtok, Gyalshing, Namchi and nearby towns.",

        local:
            "Taxis and hired vehicles are available for sightseeing around Pelling and nearby attractions."
    },

    nearbyPlaces: [
        "Pemayangtse Monastery",
        "Sanga Choeling Monastery",
        "Rabdentse Ruins",
        "Khecheopalri Lake",
        "Kanchenjunga Falls",
        "Yuksom"
    ],

    travelTips: [
        "October to May is generally suitable for mountain views and sightseeing.",
        "Visit viewpoints early in the morning for clearer Kanchenjunga views.",
        "Carry warm clothing because temperatures can drop considerably.",
        "Wear comfortable footwear for monastery visits and short treks.",
        "Keep a few extra hours for travelling because mountain roads can be slow.",
        "Check weather and road conditions before visiting remote attractions.",
        "Respect monastery rules and local customs.",
        "Avoid littering in the mountain environment."
    ]
}
        ]

    },


    /* =====================================================
       TAMIL NADU
    ===================================================== */

    "Tamil Nadu": {

        region: "South India",

        description:
            "Explore magnificent temples, ancient architecture, beautiful beaches and rich Tamil traditions.",

        about:
            "Tamil Nadu is famous for its magnificent temples, classical culture, ancient architecture, beaches and historic cities.",

        image:"images/hero/tamil-nadu.jpg",

        places: "40+",

        cities: "8+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Chennai",
                description:
                    "The capital city known for beaches, temples and cultural attractions.",
                     image: "images/Chennai.jpg"
            },

            {
                name: "Madurai",
                description:
                    "A historic city famous for the Meenakshi Temple.",
                     image: "images/Madurai.jpg"
            },

            {
                name: "Coimbatore",
                description:
                    "A major city surrounded by scenic landscapes.",
                     image: "images/Coimbatore.jpg"
            },

            {
                name: "Ooty",
                description:
                    "A popular hill station known for tea gardens and cool weather.",
                     image: "images/Ooty.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Meenakshi Temple",

    category: "religious",

    image: "images/places/Meenakshi Temple.jpg",

    description:
        "A magnificent historic temple in Madurai dedicated to Goddess Meenakshi and Lord Sundareswarar, famous for its towering gopurams, intricate sculptures and rich Dravidian architecture.",

    about:
        "Meenakshi Amman Temple is one of the most famous temples in Tamil Nadu and a major cultural landmark of Madurai. The present temple complex developed over several centuries and is renowned for its enormous gopurams covered with thousands of colourful sculptures depicting deities, mythical figures and stories from Hindu traditions. The temple is dedicated to Goddess Meenakshi, a form of Parvati, and Lord Sundareswarar, a form of Shiva. The vast complex contains numerous halls, shrines, sculptures and the historic Golden Lotus Tank. It is also an important centre of religious festivals and Tamil cultural traditions.",

    location:
        "Madurai, Tamil Nadu",

    bestTime:
        "October - March",

    duration:
        "2 - 4 Hours",

    entryFee:
        "General temple entry is free; special darshan and other services may have separate charges",

    howToReach: {

        flight:
            "Madurai International Airport is the nearest airport and is approximately 12 km from the temple.",

        train:
            "Madurai Junction Railway Station is the nearest major railway station and is well connected with major cities across India.",

        bus:
            "Regular buses connect Madurai with Chennai, Coimbatore, Bengaluru, Tiruchirappalli and other cities.",

        road:
            "Madurai is well connected by national highways with major cities of Tamil Nadu and neighbouring states.",

        local:
            "Auto-rickshaws, taxis, buses and app-based cab services are available throughout Madurai."
    },

    nearbyPlaces: [
        "Thirumalai Nayakkar Palace",
        "Gandhi Memorial Museum",
        "Vandiyur Mariamman Teppakulam",
        "Alagar Koyil",
        "Pazhamudircholai",
        "Madurai Market"
    ],

    travelTips: [
        "Dress modestly and follow temple dress regulations.",
        "Remove footwear before entering designated temple areas.",
        "Photography may be restricted in certain parts of the complex.",
        "Maintain silence and respect devotees during prayers.",
        "Visit early morning or evening to avoid extreme heat and large crowds.",
        "Keep valuables secure while exploring crowded areas.",
        "Check current temple timings and special darshan arrangements before visiting."
    ]
},
            {
    name: "Mahabalipuram",

    category: "heritage",

    image: "images/places/Mahabalipuram.jpg",

    description:
        "A historic coastal town famous for ancient rock-cut temples, monuments, sculptures and Shore Temple representing the remarkable Pallava architectural tradition.",

    about:
        "Mahabalipuram, also known as Mamallapuram, is a historic coastal town in Tamil Nadu and one of India's most important archaeological destinations. The town flourished as a major port and cultural centre under the Pallava dynasty. Its monuments include the famous Shore Temple, Pancha Rathas, Arjuna's Penance and several rock-cut caves and sculptures. The monuments are carved from granite and demonstrate the artistic and architectural achievements of the Pallava period. The Group of Monuments at Mahabalipuram is recognized as a UNESCO World Heritage Site and attracts visitors interested in history, architecture, sculpture and coastal landscapes.",

    location:
        "Mahabalipuram, Chengalpattu District, Tamil Nadu",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "Entry charges apply for protected monuments; ticket rates vary according to current rules",

    howToReach: {

        flight:
            "Chennai International Airport is the nearest major airport and is approximately 55 - 60 km from Mahabalipuram.",

        train:
            "Chengalpattu Railway Station is one of the nearest major railway access points, followed by road travel to Mahabalipuram.",

        bus:
            "Regular buses connect Mahabalipuram with Chennai, Chengalpattu and nearby towns.",

        road:
            "Mahabalipuram is connected to Chennai by the scenic East Coast Road and is easily accessible by road.",

        local:
            "Auto-rickshaws, taxis, rented vehicles and local transport are available for sightseeing."
    },

    nearbyPlaces: [
        "Shore Temple",
        "Pancha Rathas",
        "Arjuna's Penance",
        "Krishna's Butter Ball",
        "Mahabalipuram Beach",
        "Crocodile Bank"
    ],

    travelTips: [
        "Start sightseeing early because many monuments are located outdoors.",
        "Wear comfortable footwear for walking between monuments.",
        "Carry water, sunscreen and a hat during sunny weather.",
        "Do not climb, touch or damage protected monuments and sculptures.",
        "Consider hiring a local guide to understand the Pallava history.",
        "Visit Shore Temple around sunrise or sunset for beautiful coastal views.",
        "Check current monument timings and entry fees before visiting."
    ]
},

           {
    name: "Ooty",

    category: "nature",

    image: "images/places/Ooty.jpg",

    description:
        "A beautiful hill station in the Nilgiri Mountains known for tea gardens, cool climate, scenic valleys, botanical gardens and the historic Nilgiri Mountain Railway.",

    about:
        "Ooty, officially known as Udhagamandalam, is one of Tamil Nadu's most popular hill stations. Located in the Nilgiri Hills, the town is surrounded by tea plantations, eucalyptus forests, rolling mountains and picturesque valleys. Ooty is famous for Ooty Lake, Government Botanical Garden, Doddabetta Peak and the Nilgiri Mountain Railway, which is part of a UNESCO World Heritage Site. The cool climate, colonial-era character, scenic landscapes and tea estates make Ooty a popular destination for nature lovers, families and honeymoon travellers.",

    location:
        "Udhagamandalam, Nilgiris District, Tamil Nadu",

    bestTime:
        "October - June",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general entry fee for the town; individual attractions have separate entry charges",

    howToReach: {

        flight:
            "Coimbatore International Airport is the nearest major airport and is approximately 85 - 90 km from Ooty.",

        train:
            "Mettupalayam Railway Station is the main railway access point for the Nilgiri Mountain Railway connection to Ooty.",

        bus:
            "Regular buses connect Ooty with Coimbatore, Mysuru, Bengaluru and other nearby cities.",

        road:
            "Ooty is connected by scenic mountain roads with Coimbatore, Coonoor, Mettupalayam and Mysuru.",

        local:
            "Taxis, local buses, auto-rickshaws and hired tourist vehicles are available for sightseeing."
    },

    nearbyPlaces: [
        "Ooty Lake",
        "Doddabetta Peak",
        "Government Botanical Garden",
        "Rose Garden",
        "Coonoor",
        "Tea Estates",
        "Nilgiri Mountain Railway"
    ],

    travelTips: [
        "Carry warm clothing because temperatures can remain cool throughout the year.",
        "The mountain roads have many curves, so travel carefully.",
        "Book Nilgiri Mountain Railway tickets in advance during peak seasons.",
        "Visit tea gardens and local tea shops to experience Nilgiri tea culture.",
        "Carry rain protection because weather can change quickly in the hills.",
        "Wear comfortable shoes for walking and sightseeing.",
        "Avoid littering and help preserve the Nilgiri environment."
    ]
},

           {
    name: "Marina Beach",

    category: "nature",

    image: "images/places/Marina Beach.jpg",

    description:
        "One of India's most famous urban beaches, stretching along Chennai's coastline and known for its broad sandy shore, sunrise views, promenade and lively atmosphere.",

    about:
        "Marina Beach is one of the most iconic landmarks of Chennai and is located along the Bay of Bengal. The beach is famous for its exceptionally wide sandy shoreline, long promenade, sunrise views and vibrant atmosphere. Visitors can enjoy walking along the coast, watching the sunrise, exploring local food stalls and experiencing Chennai's coastal culture. Several important monuments, statues and historic buildings are located along the Marina promenade, making the area an important recreational and cultural space for the city. The beach is particularly lively during mornings and evenings.",

    location:
        "Chennai, Tamil Nadu",

    bestTime:
        "November - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "No entry fee",

    howToReach: {

        flight:
            "Chennai International Airport is the nearest airport and is well connected with major Indian and international cities.",

        train:
            "Chennai Central and Chennai Egmore are the major railway stations serving the city.",

        bus:
            "Chennai has an extensive city bus network with several routes connecting the Marina area.",

        road:
            "Marina Beach is centrally located and can be easily reached by road from different parts of Chennai.",

        local:
            "Metro, buses, auto-rickshaws, taxis and app-based cab services are available throughout Chennai."
    },

    nearbyPlaces: [
        "Fort St. George",
        "San Thome Basilica",
        "Kapaleeshwarar Temple",
        "Government Museum Chennai",
        "Mylapore",
        "Besant Nagar Beach"
    ],

    travelTips: [
        "Early morning is a good time for sunrise and a peaceful beach walk.",
        "Avoid entering the sea during rough weather or strong waves.",
        "Keep valuables secure in crowded areas.",
        "Carry drinking water and sun protection.",
        "Follow local safety instructions near the shoreline.",
        "Try local snacks from clean and hygienic vendors.",
        "Avoid littering and use designated waste bins.",
        "Be especially careful with children near the water."
    ]
}
        ]

    },


    /* =====================================================
       TELANGANA
    ===================================================== */

    "Telangana": {

        region: "South India",

        description:
            "Discover historic forts, magnificent monuments, temples and the vibrant city of Hyderabad.",

        about:
            "Telangana combines historic heritage with modern urban life. Hyderabad is famous for monuments, food, technology and cultural attractions.",

        image:"images/hero/telangana.jpg",

        places: "20+",

        cities: "5+",

        bestTime: "Oct - Feb",

        popularCities: [

            {
                name: "Hyderabad",
                description:
                    "The capital city famous for Charminar, food and historic landmarks.",
                    image: "images/Hyderabad.jpg"
            },

            {
                name: "Warangal",
                description:
                    "A historic city known for forts and ancient temples.",
                    image: "images/Warangal.jpg"
            },

            {
                name: "Nizamabad",
                description:
                    "A city surrounded by cultural and natural attractions.",
                    image: "images/Nizamabad.jpg"
            },

            {
                name: "Karimnagar",
                description:
                    "A growing city with historic and cultural significance.",
                    image: "images/Karimnagar.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Charminar",

    category: "heritage",

    image: "images/places/Charminar.jpg",

    description:
        "An iconic monument of Hyderabad famous for its four grand minarets, Indo-Islamic architecture, intricate stucco work and historic connection with the city.",

    about:
        "Charminar is one of Hyderabad's most recognizable landmarks and was built by Sultan Muhammad Quli Qutb Shah in 1591. The square monument features four towering minarets, large arches, decorative stucco work and a mosque on the upper floor. Its architecture combines Islamic and Persian influences with distinctive decorative elements. Charminar has played an important role in the historical development of Hyderabad and is surrounded by the lively Laad Bazaar and other traditional markets. The monument offers visitors an opportunity to experience Hyderabad's history, architecture and vibrant old-city culture.",

    location:
        "Hyderabad, Telangana",

    bestTime:
        "October - February",

    duration:
        "1 - 2 Hours",

    entryFee:
        "Entry charges may apply according to current monument ticket rates",

    howToReach: {

        flight:
            "Rajiv Gandhi International Airport is the nearest major airport and is well connected with major Indian cities.",

        train:
            "Hyderabad Deccan (Nampally) and other major railway stations provide railway access to Hyderabad.",

        bus:
            "TSRTC and other bus services connect Hyderabad with major cities of Telangana and neighbouring states.",

        road:
            "Charminar is located in the historic old city of Hyderabad and is easily accessible by road.",

        local:
            "Metro, buses, auto-rickshaws, taxis and app-based cab services are available in Hyderabad."
    },

    nearbyPlaces: [
        "Laad Bazaar",
        "Mecca Masjid",
        "Chowmahalla Palace",
        "Salar Jung Museum",
        "Nizam's Museum",
        "Golconda Fort"
    ],

    travelTips: [
        "Visit early morning or evening to avoid heavy crowds and heat.",
        "Wear comfortable footwear while exploring the surrounding markets.",
        "Respect the religious spaces within the monument.",
        "Keep valuables secure in crowded market areas.",
        "Explore Laad Bazaar for traditional bangles, jewellery and handicrafts.",
        "Check current monument timings and entry fees before visiting.",
        "Avoid littering around the historic old-city area."
    ]
},

           {
    name: "Golconda Fort",

    category: "heritage",

    image: "images/places/Golconda Fort.jpg",

    description:
        "A magnificent historic fortress in Hyderabad known for massive granite walls, grand gateways, palaces, acoustic engineering and panoramic views of the city.",

    about:
        "Golconda Fort is one of India's most impressive medieval fortress complexes and an important symbol of Hyderabad's history. The fort has origins dating back to the 12th century and was later expanded and strengthened by the Bahmani and Qutb Shahi rulers. It served as the principal capital of the Qutb Shahi dynasty from the 16th to the 17th century. The complex contains massive fortifications, gateways, royal halls, mosques, palaces, water systems and a hilltop pavilion. One of its most famous engineering features is its acoustic system, through which a clap near the entrance can be heard at the hilltop pavilion nearly a kilometre away.",

    location:
        "Hyderabad, Telangana",

    bestTime:
        "October - February",

    duration:
        "3 - 5 Hours",

    entryFee:
        "Entry charges apply according to current monument ticket rates",

    howToReach: {

        flight:
            "Rajiv Gandhi International Airport is the nearest major airport to Hyderabad.",

        train:
            "Hyderabad's major railway stations provide railway access from cities across India.",

        bus:
            "Local buses and intercity services connect different parts of Hyderabad with the Golconda area.",

        road:
            "Golconda Fort is located in western Hyderabad and is approximately 9 km from Hussain Sagar Lake.",

        local:
            "Taxis, auto-rickshaws, buses and app-based cab services are available from central Hyderabad."
    },

    nearbyPlaces: [
        "Qutb Shahi Tombs",
        "Taramati Baradari",
        "Naya Qila",
        "Hussain Sagar Lake",
        "Charminar",
        "Chowmahalla Palace"
    ],

    travelTips: [
        "Wear comfortable shoes because the fort requires considerable walking and climbing.",
        "Carry sufficient water, especially during summer.",
        "Visit early morning or late afternoon for more comfortable weather.",
        "Do not climb restricted structures or damage historic walls.",
        "Look for the famous acoustic point near Fateh Darwaza.",
        "Check current opening hours and light-and-sound show timings before visiting.",
        "Carry sun protection during warmer months."
    ]
},

           {
    name: "Ramappa Temple",

    category: "religious",

    image: "images/places/Ramappa Temple.jpg",

    description:
        "A magnificent 13th-century Kakatiya temple dedicated to Lord Shiva, famous for intricate stone carvings, detailed sculptures, elegant pillars and remarkable architectural engineering.",

    about:
        "Ramappa Temple, also known as Rudreshwara Temple, is located at Palampet in Telangana and is one of the finest examples of Kakatiya architecture. Built in the 13th century, the temple is dedicated to Lord Shiva and is surrounded by beautiful natural landscapes near Ramappa Lake. The temple is renowned for its highly detailed sculptures, ornate pillars, decorative motifs and remarkable engineering techniques. The monument is especially notable for its lightweight or 'floating' bricks used in parts of the roof structure. The temple was inscribed as a UNESCO World Heritage Site in 2021 and is an important destination for history, architecture and religious tourism.",

    location:
        "Palampet, Mulugu District, Telangana",

    bestTime:
        "October - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "Entry charges may apply according to current monument and tourism rules",

    howToReach: {

        flight:
            "Rajiv Gandhi International Airport in Hyderabad is the nearest major international airport. Warangal also provides access to the region by road.",

        train:
            "Warangal Railway Station is a major railway access point, followed by road travel towards Palampet.",

        bus:
            "Buses and shared vehicles connect Warangal and nearby towns with Palampet.",

        road:
            "Ramappa Temple is accessible by road from Warangal and other parts of Telangana.",

        local:
            "Taxis and hired vehicles are convenient for travelling from Warangal to Palampet and nearby attractions."
    },

    nearbyPlaces: [
        "Ramappa Lake",
        "Ramappa Cheruvu",
        "Warangal Fort",
        "Thousand Pillar Temple",
        "Pakhal Lake",
        "Bhadrakali Temple"
    ],

    travelTips: [
        "Dress respectfully because the temple remains an important religious site.",
        "Wear comfortable footwear for exploring the temple complex.",
        "Take time to observe the detailed stone sculptures and pillars.",
        "Do not touch or damage protected carvings.",
        "Maintain cleanliness around the heritage site.",
        "Visit in the morning or late afternoon for comfortable sightseeing.",
        "Consider visiting Ramappa Lake along with the temple.",
        "Check current monument timings and entry requirements before travelling."
    ]
},
            {
    name: "Hussain Sagar Lake",

    category: "nature",

    image: "images/places/Hussain Sagar Lake.jpg",

    description:
        "A historic artificial lake in the heart of Hyderabad, famous for its large Buddha statue, boating, scenic views and the popular Necklace Road waterfront.",

    about:
        "Hussain Sagar Lake is one of Hyderabad's most famous landmarks and is located between Hyderabad and Secunderabad. The lake was constructed in 1562 during the reign of Ibrahim Quli Qutb Shah and was originally developed to provide water for irrigation and other needs. Today, it is an important recreational and scenic destination in the city. A large statue of Lord Buddha stands on a rock in the middle of the lake and is one of its most recognizable attractions. Visitors can enjoy boating, waterfront walks and views of the surrounding city, parks and Necklace Road.",

    location:
        "Hyderabad, Telangana",

    bestTime:
        "October - February",

    duration:
        "2 - 4 Hours",

    entryFee:
        "No general lake entry fee; boating and other activities have separate charges",

    howToReach: {

        flight:
            "Rajiv Gandhi International Airport is the nearest major airport.",

        train:
            "Nampally and Secunderabad railway stations are convenient railway access points depending on the route.",

        bus:
            "TSRTC buses connect Hussain Sagar and Necklace Road with different parts of Hyderabad and Secunderabad.",

        road:
            "The lake is centrally located and is easily accessible by road from both Hyderabad and Secunderabad.",

        local:
            "Metro, buses, taxis, auto-rickshaws and app-based cab services are available around the lake."
    },

    nearbyPlaces: [
        "Buddha Statue",
        "Necklace Road",
        "Lumbini Park",
        "NTR Gardens",
        "Birla Mandir",
        "Sanjeevaiah Park"
    ],

    travelTips: [
        "Evening is a popular time for enjoying the lake and city lights.",
        "Boating availability and timings may change, so check locally before planning.",
        "Follow safety instructions while using boats or water activities.",
        "Avoid entering restricted areas around the lake.",
        "Carry light clothing and sun protection during the daytime.",
        "Keep the waterfront clean and avoid throwing waste into the lake.",
        "Combine the visit with Lumbini Park, Necklace Road or Birla Mandir."
    ]
}

        ]

    },


    /* =====================================================
       TRIPURA
    ===================================================== */

    "Tripura": {

        region: "North-East India",

        description:
            "Explore royal palaces, ancient temples, forests and peaceful landscapes of Tripura.",

        about:
            "Tripura is known for its royal heritage, temples, forests and peaceful natural surroundings.",

        image:"images/hero/tripura.jpg",

        places: "15+",

        cities: "4+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Agartala",
                description:
                    "The capital city and cultural center of Tripura.",
                    image: "images/Agartala.jpg"
            },

            {
                name: "Udaipur",
                description:
                    "A historic city known for temples and lakes.",
                    image: "images/Udaipur.jpg"
            },

            {
                name: "Dharmanagar",
                description:
                    "A scenic town surrounded by green landscapes.",
                    image: "images/Dharmanagar.jpg"
            },

            {
                name: "Kailashahar",
                description:
                    "A peaceful destination known for cultural attractions.",
                    image: "images/Kailashahar.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Ujjayanta Palace",

    category: "heritage",

    image: "images/places/Ujjayanta Palace.jpg",

    description:
        "A magnificent former royal palace in Agartala known for its grand domes, Mughal-style gardens, elegant interiors and rich royal heritage of Tripura.",

    about:
        "Ujjayanta Palace is one of the most important historical landmarks of Agartala. The palace was built by Maharaja Radha Kishore Manikya during 1899-1901 and served as the royal residence of the Manikya dynasty. The two-storey structure features three large domes, decorative tile floors, curved wooden ceilings, beautifully crafted doors and extensive Mughal-style gardens with pools and fountains. The palace complex provides an insight into the royal history, culture, art and traditions of Tripura. It has also been associated with the State Museum and cultural heritage of the state.",

    location:
        "Agartala, Tripura",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Hours",

    entryFee:
        "Entry charges may apply according to current museum and palace visitor rules",

    howToReach: {

        flight:
            "Maharaja Bir Bikram Airport, also known as Agartala Airport, is the nearest airport and is approximately 7 km from the palace.",

        train:
            "Agartala Railway Station is approximately 4 - 5 km from Ujjayanta Palace and connects the city with major railway routes.",

        bus:
            "Regular buses connect Agartala with major towns of Tripura and neighbouring states.",

        road:
            "The palace is located within central Agartala and is easily accessible by road.",

        local:
            "Auto-rickshaws, e-rickshaws, taxis and app-based transport are available throughout Agartala."
    },

    nearbyPlaces: [
        "Tripura State Museum",
        "Heritage Park",
        "Jagannath Temple",
        "Laxminarayan Temple",
        "Kunjaban Palace",
        "Rabindra Kanan"
    ],

    travelTips: [
        "Visit during the morning or late afternoon for comfortable sightseeing.",
        "Explore the palace gardens and surrounding architectural details.",
        "Follow museum rules regarding photography.",
        "Do not touch or damage historical objects and displays.",
        "Wear comfortable footwear for exploring the large palace complex.",
        "Check current museum timings and entry charges before visiting.",
        "Maintain cleanliness around the heritage site."
    ]
},

           {
    name: "Tripura Sundari Temple",

    category: "religious",

    image: "images/places/Tripura Sundari Temple.jpg",

    description:
        "One of the most revered Hindu temples of Tripura, dedicated to Goddess Tripura Sundari and traditionally regarded as one of the 51 Shakti Peethas.",

    about:
        "Tripura Sundari Temple, also known as Matabari Temple, is one of the most important pilgrimage destinations in Tripura. Located in Udaipur, the temple is dedicated to Goddess Tripura Sundari, a form of Goddess Shakti. According to Hindu tradition, the temple is regarded as one of the 51 Shakti Peethas. The temple has a distinctive architecture resembling a traditional Bengali hut with a crowned structure and is situated beside the sacred Kalyan Sagar lake. The annual Diwali festival attracts a large number of devotees and pilgrims, making the temple an important centre of religious and cultural activity.",

    location:
        "Udaipur, Gomati District, Tripura",

    bestTime:
        "October - March",

    duration:
        "2 - 4 Hours",

    entryFee:
        "No general temple entry fee",

    howToReach: {

        flight:
            "Maharaja Bir Bikram Airport in Agartala is the nearest major airport, followed by road travel to Udaipur.",

        train:
            "Udaipur Railway Station provides railway access to the temple town, while Agartala is another major railway option.",

        bus:
            "Regular buses and shared vehicles connect Udaipur with Agartala and other towns of Tripura.",

        road:
            "The temple is well connected by road from Agartala and other parts of Tripura.",

        local:
            "Auto-rickshaws, taxis and local vehicles are available in Udaipur for reaching the temple."
    },

    nearbyPlaces: [
        "Kalyan Sagar Lake",
        "Bhubaneswari Temple",
        "Gunabati Group of Temples",
        "Neermahal",
        "Udaipur Lake",
        "Tepania Eco Park"
    ],

    travelTips: [
        "Dress modestly while visiting the temple.",
        "Remove footwear before entering designated temple areas.",
        "Maintain silence and respect devotees during prayers.",
        "Follow temple rules regarding photography.",
        "Diwali is a major festival period and the temple can become extremely crowded.",
        "Keep the temple premises and Kalyan Sagar area clean.",
        "Respect local religious traditions and customs."
    ]
},

            {
    name: "Neermahal",

    category: "heritage",

    image: "images/places/Neermahal.jpg",

    description:
        "A spectacular royal water palace located in the middle of Rudrasagar Lake, famous for its elegant architecture, lake views, gardens and boating experience.",

    about:
        "Neermahal, meaning 'Water Palace', is a former royal palace located in the middle of Rudrasagar Lake near Melaghar. It was built for Maharaja Bir Bikram Kishore Manikya Bahadur and served as a royal summer residence. The palace combines Mughal and traditional Hindu architectural influences and contains royal chambers, courtyards, balconies, gardens and decorative elements. The palace is divided into different sections including the royal residential area and an eastern open-air theatre area used for cultural performances. Visitors can reach the palace by boat across Rudrasagar Lake, making the journey itself an important part of the experience.",

    location:
        "Melaghar, Sepahijala District, Tripura",

    bestTime:
        "October - March",

    duration:
        "3 - 5 Hours",

    entryFee:
        "Entry and boating charges may apply according to current tourism rates",

    howToReach: {

        flight:
            "Maharaja Bir Bikram Airport in Agartala is the nearest airport and is approximately 50 km from Neermahal.",

        train:
            "Agartala Railway Station is the nearest major railway access point, followed by road travel to Melaghar.",

        bus:
            "Buses and shared vehicles connect Agartala with Melaghar and surrounding towns.",

        road:
            "Neermahal is accessible by road from Agartala through Melaghar.",

        local:
            "Taxis and hired vehicles are convenient for reaching the Rudrasagar Lake boating point."
    },

    nearbyPlaces: [
        "Rudrasagar Lake",
        "Sepahijala Wildlife Sanctuary",
        "Kamalasagar Lake",
        "Kamalasagar Kali Temple",
        "Udaipur",
        "Tripura Sundari Temple"
    ],

    travelTips: [
        "Take a boat ride to experience the palace from Rudrasagar Lake.",
        "Check current boating timings and weather conditions before visiting.",
        "Carry sun protection and drinking water.",
        "Do not litter in the lake or palace surroundings.",
        "Avoid touching or damaging protected architectural elements.",
        "Visit during the morning or late afternoon for pleasant weather and photographs.",
        "The palace area can become busy during festivals and special events."
    ]
},

           {
    name: "Sepahijala Wildlife Sanctuary",

    category: "nature",

    image: "images/places/Sepahijala Wildlife Sanctuary.jpg",

    description:
        "A biodiversity-rich wildlife sanctuary near Agartala known for its forests, lakes, botanical gardens, birdlife, primates and famous clouded leopard enclosure.",

    about:
        "Sepahijala Wildlife Sanctuary is one of the most important wildlife destinations in Tripura and covers approximately 18.53 square kilometres. The sanctuary contains forests, an artificial lake, botanical gardens, a zoo area and a variety of wildlife habitats. It is particularly known for its clouded leopard enclosure and diverse population of birds and mammals. Several species of primates can be found in the sanctuary, including rhesus macaques, pig-tailed macaques and different langur species. The sanctuary also attracts migratory birds during winter and serves as a centre for wildlife education, conservation and research.",

    location:
        "Sepahijala District, Tripura",

    bestTime:
        "November - February",

    duration:
        "4 - 6 Hours",

    entryFee:
        "Entry, boating and activity charges may apply according to current sanctuary rules",

    howToReach: {

        flight:
            "Maharaja Bir Bikram Airport in Agartala is the nearest airport and is approximately 35 km from the sanctuary.",

        train:
            "Agartala Railway Station is the nearest major railway station and is approximately 21 km away.",

        bus:
            "Buses and small vehicles are available from Agartala towards Sepahijala Wildlife Sanctuary.",

        road:
            "The sanctuary is approximately 23 km from Agartala by road and is easily accessible by local transport.",

        local:
            "Taxis, hired vehicles and local buses are convenient options for visiting the sanctuary."
    },

    nearbyPlaces: [
        "Neermahal",
        "Rudrasagar Lake",
        "Kamalasagar Lake",
        "Kamalasagar Kali Temple",
        "Agartala",
        "Tepania Eco Park"
    ],

    travelTips: [
        "Visit during the morning when wildlife activity is generally better.",
        "Winter is a good season for birdwatching and pleasant weather.",
        "Carry binoculars if you are interested in birds and wildlife.",
        "Do not feed, tease or disturb animals.",
        "Maintain silence near animal enclosures and forest areas.",
        "Follow designated paths and sanctuary instructions.",
        "Do not litter inside the sanctuary.",
        "Carry drinking water and comfortable footwear.",
        "Check current sanctuary timings and activity availability before visiting."
    ]
}

        ]

    },


    /* =====================================================
       UTTAR PRADESH
    ===================================================== */

    "Uttar Pradesh": {

        region: "North India",

        description:
            "Discover the Taj Mahal, sacred cities, historic monuments and India's remarkable cultural heritage.",

        about:
            "Uttar Pradesh is one of India's most culturally and historically significant states. It is home to the Taj Mahal, sacred cities, ancient temples and major heritage sites.",

        image:"images/hero/uttar-pradesh.jpg",

        places: "50+",

        cities: "10+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Agra",
                description:
                    "A world-famous city known for the Taj Mahal.",
                    image: "images/Agra.jpg"
            },

            {
                name: "Varanasi",
                description:
                    "One of India's oldest living cities and a major spiritual destination.",
                    image: "images/Varanasi.jpg"
            },

            {
                name: "Lucknow",
                description:
                    "The capital city famous for Nawabi culture and architecture.",
                    image: "images/Lucknow.jpg"
            },

            {
                name: "Ayodhya",
                description:
                    "A major religious destination with deep cultural significance.",
                    image: "images/Ayodhya.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Taj Mahal",

    category: "heritage",

    image: "images/places/Taj Mahal.jpg",

    description:
        "An iconic ivory-white marble monument on the banks of the Yamuna River, famous for its magnificent Mughal architecture, gardens and timeless symbol of love.",

    about:
        "The Taj Mahal is one of India's most famous monuments and a UNESCO World Heritage Site. It was commissioned by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal and was completed in the 17th century. The monument is built primarily from white marble and is decorated with intricate carvings, geometric patterns and delicate inlay work using semi-precious stones. The main mausoleum is surrounded by a formal charbagh garden, reflecting pools, a mosque and a guest house. Its changing appearance under different lighting conditions makes it one of the world's most admired architectural landmarks.",

    location:
        "Agra, Uttar Pradesh",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Hours",

    entryFee:
        "Indian visitors: ₹50; additional ₹200 for main mausoleum. Foreign visitor charges are higher and may change according to current ASI/ADA rates.",

    howToReach: {

        flight:
            "Agra Airport (Kheria Airport) is approximately 13 km from the Taj Mahal. Delhi Airport is another major option followed by road or train travel to Agra.",

        train:
            "Agra Cantt Railway Station is approximately 6 km from the Taj Mahal. Agra Fort Railway Station is another convenient option.",

        bus:
            "Regular buses connect Agra with Delhi, Jaipur, Lucknow, Kanpur and other major cities.",

        road:
            "Agra is well connected by highways with Delhi, Jaipur, Lucknow and other cities of northern India.",

        local:
            "Auto-rickshaws, e-rickshaws, taxis, battery buses and app-based cab services are available in Agra."
    },

    nearbyPlaces: [
        "Agra Fort",
        "Mehtab Bagh",
        "Itmad-ud-Daulah",
        "Akbar's Tomb",
        "Fatehpur Sikri",
        "Agra Old City"
    ],

    travelTips: [
        "Visit early morning for pleasant weather and beautiful photographs.",
        "The Taj Mahal remains closed to visitors on Fridays.",
        "Large bags, food items and restricted objects are not permitted inside.",
        "Drone cameras are strictly prohibited around the monument.",
        "Photography is restricted inside the main mausoleum.",
        "Wear comfortable footwear because the complex requires considerable walking.",
        "Use designated parking and battery transport near the monument.",
        "Check current ticket prices and timings before visiting."
    ]
},

           {
    name: "Varanasi Ghats",

    category: "religious",

    image: "images/places/Varanasi Ghats.jpg",

    description:
        "A spectacular series of historic riverfront ghats along the Ganges, famous for spiritual rituals, evening Ganga Aarti, temples, boat rides and centuries-old cultural traditions.",

    about:
        "The Ghats of Varanasi are a defining feature of the ancient city and stretch along the western bank of the River Ganges. The city has around 88 ghats, each associated with different religious, cultural and historical traditions. Dashashwamedh Ghat is particularly famous for the evening Ganga Aarti, while Assi Ghat is popular for sunrise activities and cultural programmes. Manikarnika and Harishchandra Ghats are traditionally associated with cremation ceremonies. A sunrise or early-morning boat ride provides a unique view of the temples, palaces and colourful riverfront architecture. The ghats continue to be important centres of pilgrimage, prayer and everyday life.",

    location:
        "Varanasi, Uttar Pradesh",

    bestTime:
        "October - March",

    duration:
        "1 - 2 Days",

    entryFee:
        "No general entry fee for the ghats; boat rides and some activities have separate charges",

    howToReach: {

        flight:
            "Lal Bahadur Shastri International Airport is the nearest airport and provides connectivity with several major Indian cities.",

        train:
            "Varanasi Junction and Kashi Railway Station provide railway connectivity with major cities across India.",

        bus:
            "Regular buses connect Varanasi with Lucknow, Prayagraj, Gorakhpur, Patna and other cities.",

        road:
            "Varanasi is well connected by road with major cities of Uttar Pradesh and neighbouring states.",

        local:
            "Auto-rickshaws, e-rickshaws, taxis and local boats are commonly used for sightseeing around Varanasi."
    },

    nearbyPlaces: [
        "Kashi Vishwanath Temple",
        "Dashashwamedh Ghat",
        "Assi Ghat",
        "Manikarnika Ghat",
        "Sarnath",
        "Ramnagar Fort"
    ],

    travelTips: [
        "Take an early-morning boat ride for sunrise views over the Ganges.",
        "Attend the evening Ganga Aarti at Dashashwamedh Ghat.",
        "Dress respectfully near religious and cremation ghats.",
        "Do not photograph cremation ceremonies without permission.",
        "Keep valuables secure in crowded areas.",
        "Use authorized boat operators whenever possible.",
        "Avoid entering the river at unsafe locations or during strong currents.",
        "Keep the riverfront clean and do not throw waste into the Ganges."
    ]
},
           {
    name: "Agra Fort",

    category: "heritage",

    image: "images/places/Agra Fort.jpg",

    description:
        "A magnificent red sandstone Mughal fortress in Agra, famous for massive walls, royal palaces, courtyards, mosques and spectacular views of the Taj Mahal.",

    about:
        "Agra Fort is one of India's most important Mughal monuments and a UNESCO World Heritage Site. Emperor Akbar began rebuilding the fort in red sandstone from 1565, while later Mughal rulers, particularly Shah Jahan, added elegant marble palaces and decorative structures. The enormous walled complex extends for approximately 2.5 kilometres and contains important buildings including Jahangir Mahal, Khas Mahal, Diwan-i-Aam, Diwan-i-Khas, Sheesh Mahal and Moti Masjid. Musamman Burj provides a memorable view towards the Taj Mahal across the Yamuna River. The fort represents the political, military and architectural history of the Mughal Empire.",

    location:
        "Agra, Uttar Pradesh",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Hours",

    entryFee:
        "Indian visitors: ₹50; foreign visitors: ₹650, subject to current ASI/ADA rates",

    howToReach: {

        flight:
            "Agra Airport is the nearest airport. Delhi Airport is another major option followed by road or railway travel.",

        train:
            "Agra Cantt Railway Station is approximately 3 km from the fort, while Agra Fort Railway Station is located nearby.",

        bus:
            "Regular buses connect Agra with Delhi, Jaipur, Lucknow and other major cities.",

        road:
            "Agra is well connected by road with Delhi, Jaipur, Mathura, Lucknow and other northern cities.",

        local:
            "Auto-rickshaws, e-rickshaws, taxis and app-based cab services are available around Agra."
    },

    nearbyPlaces: [
        "Taj Mahal",
        "Itmad-ud-Daulah",
        "Mehtab Bagh",
        "Akbar's Tomb",
        "Fatehpur Sikri",
        "Agra Old City"
    ],

    travelTips: [
        "Wear comfortable footwear because the fort complex requires extensive walking.",
        "Visit early morning or late afternoon for more comfortable weather.",
        "Only designated sections are open to visitors because some areas are restricted.",
        "Follow monument security instructions.",
        "Do not touch or damage historic walls and carvings.",
        "Carry a valid identification document if required.",
        "Consider hiring an approved guide to understand the fort's history.",
        "Check current ticket prices and timings before visiting."
    ]
},

           {
    name: "Dudhwa National Park",

    category: "adventure",

    image: "images/places/Dudhwa National Park.jpg",

    description:
        "A spectacular Terai wildlife destination known for Bengal tigers, one-horned rhinoceroses, swamp deer, elephants, dense sal forests, grasslands and rich birdlife.",

    about:
        "Dudhwa National Park is one of the most important wildlife destinations in Uttar Pradesh and forms part of Dudhwa Tiger Reserve along with Kishanpur Wildlife Sanctuary and Katarniaghat Wildlife Sanctuary. Located near the Indo-Nepal border in Lakhimpur Kheri district, the park contains extensive sal forests, wetlands and moist grasslands characteristic of the Terai ecosystem. It is home to Bengal tigers, leopards, swamp deer, one-horned rhinoceroses, elephants, sambar, chital and many other species. The reserve also supports more than 450 resident and migratory bird species, making it an important destination for wildlife enthusiasts, photographers and birdwatchers.",

    location:
        "Lakhimpur Kheri, Uttar Pradesh",

    bestTime:
        "November - February",

    duration:
        "2 - 3 Days",

    entryFee:
        "Park entry, safari, vehicle and guide charges apply according to current forest department rules",

    howToReach: {

        flight:
            "Chaudhary Charan Singh International Airport in Lucknow is the nearest major airport, followed by road travel towards Palia and Dudhwa.",

        train:
            "Dudhwa and Palia Kalan provide railway access to the region, with further local travel required to reach the park areas.",

        bus:
            "Buses connect Palia Kalan and Lakhimpur Kheri with nearby cities and towns.",

        road:
            "Dudhwa National Park is accessible by road through Palia Kalan and other designated entry routes.",

        local:
            "Registered safari vehicles, taxis and hired vehicles are used for reaching and exploring the park."
    },

    nearbyPlaces: [
        "Kishanpur Wildlife Sanctuary",
        "Katarniaghat Wildlife Sanctuary",
        "Palia Kalan",
        "Dudhwa Tiger Reserve",
        "Suheli River",
        "Tharu Villages"
    ],

    travelTips: [
        "Obtain the required park permit before entering the reserve.",
        "Follow the instructions of forest officials and registered guides.",
        "Do not expect guaranteed wildlife sightings because animals move freely in their natural habitat.",
        "Maintain silence during safari drives.",
        "Never feed, tease or approach wild animals.",
        "Walking and trekking are not permitted inside the tiger reserve.",
        "Do not drive inside the reserve after sunset.",
        "Avoid bright clothing and prefer natural, muted colours.",
        "Carry binoculars and a camera for wildlife and birdwatching.",
        "Do not litter; carry non-biodegradable waste back outside the park."
    ]
}

        ]

    },


    /* =====================================================
       UTTARAKHAND
    ===================================================== */

    "Uttarakhand": {

        region: "North India",

        description:
            "Explore majestic Himalayas, sacred temples, rivers, valleys and peaceful hill destinations.",

        about:
            "Uttarakhand is known for the Himalayas, sacred pilgrimage sites, rivers, forests and beautiful hill stations. It is a major destination for spirituality, nature and adventure.",

        image:"images/hero/uttarakhand.jpg",

        places: "30+",

        cities: "7+",

        bestTime: "Mar - Jun",

        popularCities: [

            {
                name: "Dehradun",
                description:
                    "The capital city located in the Doon Valley.",
                    image: "images/Dehradun.jpg"
            },

            {
                name: "Nainital",
                description:
                    "A famous hill station known for its beautiful lake.",
                    image: "images/Nainital.jpg"
            },

            {
                name: "Rishikesh",
                description:
                    "A spiritual and adventure destination on the Ganges.",
                    image: "images/Rishikesh.jpg"
            },

            {
                name: "Haridwar",
                description:
                    "A major Hindu pilgrimage destination.",
                    image: "images/Haridwar.jpg"
            }

        ],

        touristPlaces: [

           {
    name: "Kedarnath",

    category: "religious",

    image: "images/places/Kedarnath.jpg",

    description:
        "A sacred Himalayan pilgrimage destination famous for the ancient Kedarnath Temple, breathtaking mountain scenery, spiritual atmosphere and challenging trekking route.",

    about:
        "Kedarnath is one of India's most revered pilgrimage destinations and is located in the Garhwal Himalayas at an altitude of approximately 3,580 metres. The destination is centered around the ancient Kedarnath Temple dedicated to Lord Shiva. The temple is one of the twelve Jyotirlingas and forms an important part of the Char Dham pilgrimage circuit. Surrounded by Kedarnath Peak, Kedar Dome and other Himalayan mountains, the region offers a unique combination of spirituality and natural beauty. The traditional route to Kedarnath involves a mountain trek from Gaurikund.",

    location:
        "Kedarnath, Rudraprayag District, Uttarakhand",

    bestTime:
        "May - October",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general temple entry fee; pilgrimage registration, transportation and other service charges may apply",

    howToReach: {

        flight:
            "Jolly Grant Airport in Dehradun is the nearest major airport. Helicopter services may also operate from designated helipads subject to weather and government regulations.",

        train:
            "Rishikesh Railway Station is one of the nearest major railway stations, followed by road travel towards Gaurikund.",

        bus:
            "Buses and shared vehicles connect Rishikesh, Haridwar and other Uttarakhand towns with Sonprayag and Gaurikund.",

        road:
            "Gaurikund is the roadhead for the Kedarnath pilgrimage. From Gaurikund, visitors continue towards Kedarnath by trek or approved transport services.",

        local:
            "Ponies, palkis and other authorized pilgrimage services may be available on the trekking route, subject to current regulations."
    },

    nearbyPlaces: [
        "Kedarnath Temple",
        "Bhairavnath Temple",
        "Gandhi Sarovar",
        "Vasuki Tal",
        "Sonprayag",
        "Gaurikund",
        "Kedarnath Wildlife Sanctuary"
    ],

    travelTips: [
        "Complete the required pilgrimage registration before travelling.",
        "Carry warm clothes because temperatures can drop significantly.",
        "The altitude is very high, so allow your body time to adjust.",
        "Carry essential medicines and a basic first-aid kit.",
        "Wear sturdy trekking shoes with good grip.",
        "Check weather and road conditions before starting the journey.",
        "Follow official trekking timings and instructions.",
        "Avoid littering and respect the Himalayan environment.",
        "Do not undertake the trek if weather or health conditions make it unsafe."
    ]
},
            {
    name: "Nainital Lake",

    category: "nature",

    image: "images/places/Nainital Lake.jpg",

    description:
        "A beautiful crescent-shaped Himalayan lake surrounded by seven hills, famous for boating, scenic views, peaceful surroundings and the charming town of Nainital.",

    about:
        "Naini Lake is the heart of Nainital and one of the most popular natural attractions in Uttarakhand. The crescent-shaped freshwater lake is surrounded by the hills of the Kumaon Himalayas and forms the centre of the town's tourism activities. Visitors can enjoy rowing boats, paddle boats, yachting and peaceful walks along the lakefront. The lake is especially beautiful during sunrise, sunset and the evening hours when the surrounding hills and lights are reflected in its waters. Nainital's Mall Road, markets and Naina Devi Temple are located close to the lake.",

    location:
        "Nainital, Uttarakhand",

    bestTime:
        "March - June and October - December",

    duration:
        "2 - 4 Hours",

    entryFee:
        "No general lake entry fee; boating and water activities have separate charges",

    howToReach: {

        flight:
            "Pantnagar Airport is the nearest airport and is approximately 70 km from Nainital.",

        train:
            "Kathgodam Railway Station is the nearest major railway station and is approximately 34 km from Nainital.",

        bus:
            "Regular buses connect Nainital with Haldwani, Kathgodam, Delhi, Almora and other cities.",

        road:
            "Nainital is well connected by road with Haldwani, Kathgodam, Almora and other parts of Uttarakhand.",

        local:
            "Taxis, local buses, e-rickshaws and walking routes are commonly used around Nainital."
    },

    nearbyPlaces: [
        "Naina Devi Temple",
        "Mall Road",
        "Naina Peak",
        "Snow View Point",
        "Eco Cave Gardens",
        "The Flats"
    ],

    travelTips: [
        "Morning and evening are ideal for enjoying the lake views.",
        "Book boating activities through authorized counters or operators.",
        "Wear comfortable footwear for walking around the lake and Mall Road.",
        "Carry warm clothing during winter months.",
        "Avoid throwing plastic or waste into the lake.",
        "Be careful around the water, especially with children.",
        "Weekends and holidays can be very crowded.",
        "Check current boating timings and charges before visiting."
    ]
},

            {
    name: "Rishikesh",

    category: "adventure",

    image: "images/places/Rishikesh.jpg",

    description:
        "A famous spiritual and adventure destination on the banks of the Ganga, known for yoga, meditation, temples, suspension bridges, river rafting and Himalayan experiences.",

    about:
        "Rishikesh is one of Uttarakhand's most popular destinations and is situated along the banks of the River Ganga. The city is internationally known as a centre for yoga, meditation and spiritual learning. At the same time, Rishikesh has developed into a major adventure tourism destination offering white-water rafting, trekking, camping, bungee jumping and other outdoor activities. Triveni Ghat is famous for its evening Ganga Aarti, while Ram Jhula and Lakshman Jhula are iconic landmarks associated with the city's riverfront. Rishikesh also serves as an important gateway to several Himalayan pilgrimage and trekking destinations.",

    location:
        "Rishikesh, Dehradun District, Uttarakhand",

    bestTime:
        "September - June",

    duration:
        "2 - 3 Days",

    entryFee:
        "No general city entry fee; rafting, bungee jumping, camping and other activities have separate charges",

    howToReach: {

        flight:
            "Jolly Grant Airport in Dehradun is the nearest airport and is approximately 20 - 25 km from Rishikesh.",

        train:
            "Rishikesh Railway Station provides railway access, while Haridwar Railway Station is another major railway option nearby.",

        bus:
            "Regular buses connect Rishikesh with Delhi, Haridwar, Dehradun and other cities of North India.",

        road:
            "Rishikesh is well connected by road with Haridwar, Dehradun, Delhi and other destinations in Uttarakhand.",

        local:
            "Auto-rickshaws, e-rickshaws, taxis, buses and rental vehicles are available for local travel."
    },

    nearbyPlaces: [
        "Triveni Ghat",
        "Ram Jhula",
        "Lakshman Jhula",
        "Neelkanth Mahadev Temple",
        "Beatles Ashram",
        "Rajaji National Park"
    ],

    travelTips: [
        "Choose registered operators for river rafting and adventure activities.",
        "Follow safety instructions during rafting and other outdoor activities.",
        "Wear comfortable clothes and suitable footwear.",
        "Respect the spiritual atmosphere around temples and ashrams.",
        "Avoid entering the river at unsafe locations.",
        "Attend the evening Ganga Aarti at Triveni Ghat.",
        "Keep the Ganga and surrounding areas clean.",
        "Check weather and river conditions before planning adventure activities."
    ]
},
           {
    name: "Valley of Flowers",

    category: "nature",

    image: "images/places/Valley Of Flowers.jpg",

    description:
        "A breathtaking Himalayan national park famous for colourful alpine flowers, green meadows, waterfalls, rare wildlife and spectacular mountain landscapes.",

    about:
        "Valley of Flowers National Park is one of Uttarakhand's most spectacular natural destinations and a UNESCO World Heritage Site. Located in Chamoli district at an altitude of around 3,600 metres, the valley is surrounded by the Himalayan ranges and is famous for its colourful alpine meadows. More than 600 species of flowering plants have been recorded in the region, including orchids, poppies, primulas, marigolds, daisies and anemones. The trek through the valley passes forests, streams and waterfalls and provides opportunities to observe Himalayan flora and wildlife. The valley forms part of the Nanda Devi Biosphere Reserve.",

    location:
        "Chamoli District, Uttarakhand",

    bestTime:
        "July - September",

    duration:
        "3 - 5 Days",

    entryFee:
        "National Park entry and trekking charges apply according to current forest department rules",

    howToReach: {

        flight:
            "Jolly Grant Airport in Dehradun is the nearest major airport, followed by road travel towards Govindghat.",

        train:
            "Rishikesh and Haridwar are the nearest major railway access points, followed by road travel towards Govindghat.",

        bus:
            "Buses and shared vehicles connect Rishikesh, Haridwar and Joshimath with Govindghat.",

        road:
            "Govindghat is the main road access point. From there, visitors travel towards Pulna and continue the trek to Ghangaria and the Valley of Flowers.",

        local:
            "Local taxis and shared vehicles are available on the Govindghat–Ghangaria route. The final approach to the valley requires trekking."
    },

    nearbyPlaces: [
        "Ghangaria",
        "Hemkund Sahib",
        "Nanda Devi National Park",
        "Govindghat",
        "Badrinath",
        "Joshimath"
    ],

    travelTips: [
        "Carry proper trekking shoes with strong grip.",
        "The valley is at high altitude, so prepare physically before travelling.",
        "Carry rain protection because weather can change quickly.",
        "July to September is generally the best period for the famous flower bloom.",
        "Follow all national park rules and designated trekking routes.",
        "Do not pick flowers or damage plants.",
        "Do not litter anywhere along the trekking route.",
        "Carry sufficient drinking water and essential medicines.",
        "Check current opening dates, permits and weather conditions before travelling."
    ]
}
        ]

    },


    /* =====================================================
       WEST BENGAL
    ===================================================== */

    "West Bengal": {

        region: "East India",

        description:
            "Experience Kolkata's heritage, Himalayan landscapes, beautiful beaches and rich Bengali culture.",

        about:
            "West Bengal offers a diverse combination of cultural heritage, Himalayan landscapes, forests, beaches and historic cities.",

        image:"images/hero/west-bengal.jpg",

        places: "30+",

        cities: "7+",

        bestTime: "Oct - Mar",

        popularCities: [

            {
                name: "Kolkata",
                description:
                    "The cultural capital of India known for literature, art and heritage.",
                     image: "images/Kolkata.jpg"
            },

            {
                name: "Darjeeling",
                description:
                    "A famous Himalayan hill station known for tea gardens and mountain views.",
                     image: "images/Darjeeling.jpg"
            },

            {
                name: "Siliguri",
                description:
                    "A gateway to the Himalayan and northeastern regions.",
                     image: "images/Siliguri.jpg"
            },

            {
                name: "Digha",
                description:
                    "A popular coastal destination known for its beach.",
                     image: "images/Digha.jpg"
            }

        ],

        touristPlaces: [

            {
    name: "Victoria Memorial",

    category: "heritage",

    image: "images/places/Victoria Memorial.jpg",

    description:
        "A magnificent white-marble monument in Kolkata known for its grand architecture, historic galleries, beautiful gardens and extensive collection of art and historical objects.",

    about:
        "Victoria Memorial is one of Kolkata's most iconic landmarks and an important monument of India's colonial history. The memorial was conceived by Lord Curzon after the death of Queen Victoria and was built between 1906 and 1921. Designed primarily in an Italian Renaissance style with Oriental architectural influences, the building is surrounded by extensive gardens. Its museum contains paintings, manuscripts, photographs, sculptures and other objects connected with the history of India and the British period. The monument and its galleries provide visitors with an opportunity to explore Kolkata's architectural, cultural and historical heritage.",

    location:
        "Kolkata, West Bengal",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Hours",

    entryFee:
        "Entry charges may vary for the museum and gardens according to current visitor rules",

    howToReach: {

        flight:
            "Netaji Subhas Chandra Bose International Airport is the nearest major airport and provides connectivity with major Indian and international cities.",

        train:
            "Howrah and Sealdah railway stations are the major railway gateways to Kolkata.",

        bus:
            "Kolkata has an extensive bus network connecting the Victoria Memorial area with different parts of the city.",

        road:
            "The memorial is located near the Maidan and is easily accessible by road from central Kolkata.",

        local:
            "Metro, buses, taxis, auto-rickshaws and app-based cab services are available throughout Kolkata."
    },

    nearbyPlaces: [
        "Indian Museum",
        "St. Paul's Cathedral",
        "Maidan",
        "Birla Planetarium",
        "Fort William",
        "Kolkata Race Course"
    ],

    travelTips: [
        "Visit in the morning or late afternoon for comfortable sightseeing.",
        "Allow enough time to explore both the gardens and museum galleries.",
        "Follow museum rules regarding photography.",
        "Do not touch historical objects or artworks.",
        "Wear comfortable footwear because the complex and gardens require walking.",
        "Check current museum timings and ticket rates before visiting.",
        "Keep the gardens and monument premises clean."
    ]
},

            {
    name: "Darjeeling",

    category: "nature",

    image: "images/places/Darjeeling.jpg",

    description:
        "A scenic Himalayan hill station famous for tea gardens, Kanchenjunga views, colonial heritage, monasteries and the historic Darjeeling Himalayan Railway.",

    about:
        "Darjeeling is one of India's most famous Himalayan hill stations and a major tourist destination in West Bengal. Located in the eastern Himalayas, the town is surrounded by tea plantations, forests and spectacular mountain landscapes. On clear days, visitors can enjoy views of Mount Kanchenjunga from several viewpoints. Darjeeling is also famous for its world-renowned tea, colourful markets, Buddhist monasteries and the Darjeeling Himalayan Railway, popularly known as the Toy Train. The railway is part of the Mountain Railways of India UNESCO World Heritage Site. The combination of Himalayan scenery, colonial architecture and local culture makes Darjeeling a popular destination throughout the year.",

    location:
        "Darjeeling, West Bengal",

    bestTime:
        "March - May and October - December",

    duration:
        "3 - 4 Days",

    entryFee:
        "No general entry fee for the town; individual attractions and activities may have separate charges",

    howToReach: {

        flight:
            "Bagdogra Airport is the nearest major airport and is approximately 70 km from Darjeeling.",

        train:
            "New Jalpaiguri Railway Station is the main railway access point. The historic Darjeeling Himalayan Railway also connects the region with New Jalpaiguri.",

        bus:
            "Buses and shared vehicles connect Darjeeling with Siliguri, Kurseong and other nearby towns.",

        road:
            "Darjeeling is connected by mountain roads with Siliguri, Kurseong, Kalimpong and other Himalayan destinations.",

        local:
            "Shared taxis, local taxis and hired vehicles are commonly used for sightseeing around Darjeeling."
    },

    nearbyPlaces: [
        "Tiger Hill",
        "Batasia Loop",
        "Darjeeling Himalayan Railway",
        "Peace Pagoda",
        "Padmaja Naidu Himalayan Zoological Park",
        "Tea Gardens",
        "Ghoom Monastery"
    ],

    travelTips: [
        "Carry warm clothing because temperatures can change quickly.",
        "Visit Tiger Hill early in the morning for sunrise and mountain views.",
        "Book Toy Train tickets in advance during peak season.",
        "Carry comfortable shoes for exploring hilly areas.",
        "Weather can affect Kanchenjunga visibility, so plan accordingly.",
        "Try authentic Darjeeling tea from local tea shops.",
        "Drive carefully on mountain roads.",
        "Avoid littering and help protect the fragile Himalayan environment."
    ]
},
            {
    name: "Sundarbans",

    category: "adventure",

    image: "images/places/Sundarbans.jpg",

    description:
        "A vast mangrove ecosystem famous for Royal Bengal Tigers, tidal waterways, rich biodiversity, boat safaris and spectacular delta landscapes.",

    about:
        "The Sundarbans is one of the world's most remarkable mangrove ecosystems and occupies the Ganges-Brahmaputra-Meghna delta across India and Bangladesh. The Indian Sundarbans in West Bengal is famous for its extensive mangrove forests, tidal rivers, creeks and islands. It is the natural habitat of the Royal Bengal Tiger and supports numerous other species including spotted deer, fishing cats, crocodiles, water monitors, dolphins and a wide variety of birds. The Sundarbans National Park was declared a UNESCO World Heritage Site and forms part of the Sundarbans Tiger Reserve and Biosphere Reserve. Boat safaris are the primary way to explore the waterways and wildlife of the region.",

    location:
        "South 24 Parganas, West Bengal",

    bestTime:
        "November - February",

    duration:
        "2 - 3 Days",

    entryFee:
        "Park entry, boat safari, guide and permit charges apply according to current forest and tourism rules",

    howToReach: {

        flight:
            "Netaji Subhas Chandra Bose International Airport in Kolkata is the nearest major airport.",

        train:
            "Canning Railway Station is the main railway access point from Kolkata, followed by road travel towards Godhkhali.",

        bus:
            "Buses and shared vehicles connect Kolkata and Canning with Godhkhali and other gateway locations.",

        road:
            "Road travel is available from Kolkata towards Canning, Sonakhali, Namkhana, Raidighi and other Sundarbans gateways.",

        local:
            "Boats and authorized launch services are the primary means of exploring the waterways and islands."
    },

    nearbyPlaces: [
        "Sajnekhali Wildlife Sanctuary",
        "Sudhanyakhali Watch Tower",
        "Dobanki Canopy Walk",
        "Netidhopani",
        "Gosaba",
        "Sajnekhali Bird Sanctuary"
    ],

    travelTips: [
        "Always use authorized boats and registered guides.",
        "Carry binoculars for birdwatching and wildlife observation.",
        "Wild animals live in their natural habitat, so sightings are never guaranteed.",
        "Follow forest department instructions during boat safaris.",
        "Do not feed or disturb wildlife.",
        "Avoid loud noises during safari.",
        "Carry mosquito repellent, sunscreen and comfortable clothing.",
        "Keep all plastic and non-biodegradable waste with you until proper disposal.",
        "Check tide, weather and park entry conditions before travelling."
    ]
},

            {
    name: "Dakshineswar Kali Temple",

    category: "religious",

    image: "images/places/Dakshineswar Kali Temple.jpg",

    description:
        "A revered Hindu temple on the eastern bank of the Hooghly River, famous for its Navaratna architecture, Goddess Kali shrine and association with Ramakrishna Paramahamsa.",

    about:
        "Dakshineswar Kali Temple is one of the most important religious landmarks of Kolkata. The temple was built by Rani Rashmoni in 1855 and is dedicated to Goddess Bhavatarini, a form of Goddess Kali. The main temple follows the traditional Bengali Navaratna or nine-spired architectural style and is surrounded by a large courtyard containing several smaller shrines. The temple is especially famous for its association with Sri Ramakrishna Paramahamsa, who served as a priest here and spent an important part of his spiritual life at Dakshineswar. Located beside the Hooghly River, the temple complex is an important pilgrimage and cultural destination.",

    location:
        "Dakshineswar, Kolkata, West Bengal",

    bestTime:
        "October - March",

    duration:
        "2 - 3 Hours",

    entryFee:
        "No general temple entry fee",

    howToReach: {

        flight:
            "Netaji Subhas Chandra Bose International Airport is the nearest airport and is well connected with Kolkata.",

        train:
            "Dakshineswar Railway Station provides direct railway access from different parts of Kolkata.",

        bus:
            "Regular buses connect Dakshineswar with central Kolkata and areas across the Hooghly River.",

        road:
            "Dakshineswar is well connected by road through Vivekananda Setu and Nivedita Setu.",

        local:
            "Metro, local trains, buses, taxis and auto-rickshaws are available for reaching the temple."
    },

    nearbyPlaces: [
        "Belur Math",
        "Adyapeath Temple",
        "Hooghly River",
        "Bally Bridge",
        "Victoria Memorial",
        "Howrah"
    ],

    travelTips: [
        "Dress modestly and respectfully inside the temple complex.",
        "Remove footwear before entering designated temple areas.",
        "Photography is prohibited inside the sanctum.",
        "Follow the darshan queue and temple security instructions.",
        "Avoid carrying large bags or restricted items near the sanctum.",
        "Visit early morning or evening for a more peaceful experience.",
        "Festival days can be extremely crowded.",
        "Check current darshan timings before visiting."
    ]
}

        ]

    }

};
/* =========================================================
   STATE DETAILS PAGE
========================================================= */

const statePage =
    document.querySelector(".state-details-hero");

if (statePage) {

    const urlParams =
        new URLSearchParams(window.location.search);

    const selectedState =
        urlParams.get("state");

    console.log("Selected State:", selectedState);

    if (selectedState) {

        loadStateDetails(selectedState);

    } else {

        console.log("No state selected in URL");

    }

}

/* =========================================================
    GENERATE POPULAR CITIES
========================================================= */

function generateCities(cities) {

    const citiesGrid =
        document.getElementById("citiesGrid");

    if (!citiesGrid) {
        console.error("citiesGrid element not found!");
        return;
    }

    /* Clear old cities */
    citiesGrid.innerHTML = "";

    /* No cities */
    if (!cities || cities.length === 0) {

        citiesGrid.innerHTML = `
            <p class="no-data-message">
                No popular cities available.
            </p>
        `;

        return;
    }

    /* Generate city cards */
    cities.forEach((city, index) => {

        const cityCard =
            document.createElement("article");

        cityCard.className =
            "city-card";

        cityCard.style.animationDelay =
            `${index * 0.1}s`;

        cityCard.innerHTML = `

            <div class="city-card-icon">
                🏙️
            </div>

            <div class="city-card-content">

                <h3>
                    ${city.name}
                </h3>

                <p>
                    ${city.description}
                </p>

                <a
                    href="city-details.html?city=${encodeURIComponent(city.name)}"
                    class="city-explore-link"
                >
                    Explore City
                    <span>→</span>
                </a>

            </div>

        `;

        citiesGrid.appendChild(cityCard);

    });

}


/* =========================================================
    GENERATE TOURIST PLACES
========================================================= */

function generateTouristPlaces(places) {

    const placesGrid =
        document.getElementById("placesGrid");

    if (!placesGrid) {
        console.error("placesGrid element not found!");
        return;
    }

    /* Clear old places */
    placesGrid.innerHTML = "";

    /* No tourist places */
    if (!places || places.length === 0) {

        placesGrid.innerHTML = `
            <p class="no-data-message">
                No tourist places available.
            </p>
        `;

        return;
    }

    /* Generate tourist place cards */
    places.forEach((place, index) => {

        const placeCard =
            document.createElement("article");

        placeCard.className =
            "place-card";

        placeCard.dataset.category =
            place.category;

        placeCard.style.animationDelay =
            `${index * 0.1}s`;

        placeCard.innerHTML = `

            <div class="place-card-icon">

                ${
                    place.category === "heritage"
                        ? "🏛️"
                        : place.category === "nature"
                        ? "🌿"
                        : place.category === "adventure"
                        ? "🏔️"
                        : place.category === "religious"
                        ? "🛕"
                        : "📍"
                }

            </div>

            <div class="place-card-content">

                <span class="place-category">
                    ${place.category}
                </span>

                <h3>
                    ${place.name}
                </h3>

                <p>
                    ${place.description}
                </p>

                <a
                    href="place-details.html?place=${encodeURIComponent(place.name)}"
                    class="place-explore-link"
                >
                    Explore Place
                    <span>→</span>
                </a>

            </div>

        `;

        placesGrid.appendChild(placeCard);

    });

}


/* =========================================================
   LOAD STATE DETAILS
========================================================= */

function loadStateDetails(stateName) {

    const state =
        stateDetailsData[stateName];

    console.log("State Data:", state);


    /* State not found */

    if (!state) {

        console.error(
            "State data not found for:",
            stateName
        );

        return;

    }

/* =========================================================
   LOAD POPULAR CITIES
========================================================= */

function loadPopularCities(state) {

    const citiesGrid =
        document.getElementById("citiesGrid");

    if (!citiesGrid) {
        return;
    }


    /* Clear old content */

    citiesGrid.innerHTML = "";


    /* Check data */

    if (
        !state ||
        !state.popularCities ||
        state.popularCities.length === 0
    ) {

        citiesGrid.innerHTML = `
            <div class="no-results">
                <p>No popular cities available.</p>
            </div>
        `;

        return;
    }


    /* Generate city cards */

    state.popularCities.forEach(city => {

        const cityCard = document.createElement("div");

        cityCard.className = "city-card";


        cityCard.innerHTML = `

            <div class="city-card-icon">
                🏙️
            </div>

            <h3>
                ${city.name}
            </h3>

            <p>
                ${city.description}
            </p>

        `;


        citiesGrid.appendChild(cityCard);

    });

}


/* =========================================================
   LOAD TOURIST PLACES
========================================================= */

function loadTouristPlaces(state) {

    const placesGrid =
        document.getElementById("placesGrid");

    if (!placesGrid) {
        return;
    }


    /* Clear old content */

    placesGrid.innerHTML = "";


    /* Check data */

    if (
        !state ||
        !state.touristPlaces ||
        state.touristPlaces.length === 0
    ) {

        placesGrid.innerHTML = `
            <div class="no-results">
                <p>No tourist places available.</p>
            </div>
        `;

        return;
    }


    /* Generate place cards */

    state.touristPlaces.forEach(place => {

        const placeCard =
            document.createElement("div");

        placeCard.className =
            "place-card";


        /* Select icon according to category */

        let icon = "📍";


        if (place.category === "heritage") {

            icon = "🏛️";

        }
        else if (place.category === "nature") {

            icon = "🌿";

        }
        else if (place.category === "adventure") {

            icon = "🏔️";

        }
        else if (place.category === "religious") {

            icon = "🛕";

        }


        placeCard.innerHTML = `

            <div class="place-card-icon">
                ${icon}
            </div>

            <span class="place-category">
                ${place.category}
            </span>

            <h3>
                ${place.name}
            </h3>

            <p>
                ${place.description}
            </p>

        `;


        placesGrid.appendChild(placeCard);

    });

}


/* =========================================================
   TOURIST PLACE FILTER
========================================================= */

function setupPlaceFilters(state) {

    const filterButtons =
        document.querySelectorAll(".place-filter");

    const placesGrid =
        document.getElementById("placesGrid");


    if (!filterButtons.length || !placesGrid) {
        return;
    }


    filterButtons.forEach(button => {

        button.addEventListener("click", function () {


            /* Remove active class */

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            /* Add active class */

            this.classList.add("active");


            /* Selected category */

            const selectedCategory =
                this.dataset.category;


            /* Filter places */

            let filteredPlaces =
                state.touristPlaces;


            if (selectedCategory !== "all") {

                filteredPlaces =
                    state.touristPlaces.filter(place => {

                        return place.category ===
                            selectedCategory;

                    });

            }


            /* Display filtered cards */

            displayFilteredPlaces(
                filteredPlaces
            );

        });

    });

}


/* =========================================================
   DISPLAY FILTERED PLACES
========================================================= */

function displayFilteredPlaces(places) {

    const placesGrid =
        document.getElementById("placesGrid");


    if (!placesGrid) {
        return;
    }


    placesGrid.innerHTML = "";


    /* No results */

    if (!places || places.length === 0) {

        placesGrid.innerHTML = `

            <div class="no-results">

                <div style="font-size: 40px;">
                    🔍
                </div>

                <p>
                    No tourist places found.
                </p>

            </div>

        `;

        return;
    }


    /* Generate filtered cards */

    places.forEach(place => {

        const placeCard =
            document.createElement("div");

        placeCard.className =
            "place-card";


        let icon = "📍";


        if (place.category === "heritage") {

            icon = "🏛️";

        }
        else if (place.category === "nature") {

            icon = "🌿";

        }
        else if (place.category === "adventure") {

            icon = "🏔️";

        }
        else if (place.category === "religious") {

            icon = "🛕";

        }


        placeCard.innerHTML = `

            <div class="place-card-icon">
                ${icon}
            </div>

            <span class="place-category">
                ${place.category}
            </span>

            <h3>
                ${place.name}
            </h3>

            <p>
                ${place.description}
            </p>

        `;


        placesGrid.appendChild(placeCard);

    });

}


    /* =====================================================
       HERO
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
        /* =====================================================
        DYNAMIC HERO BACKGROUND
        ===================================================== */

const stateHero =
    document.getElementById("stateDetailsHero");

if (stateHero) {

    stateHero.style.backgroundImage =
        `url("${state.image}")`;
        stateHero.style.backgroundSize = "cover";
stateHero.style.backgroundPosition = "center";

}

    const aboutStateName =
        document.getElementById("aboutStateName");

    const stateAbout =
        document.getElementById("stateAbout");


    if (stateImage) {

        stateImage.src =
            state.image;

        stateImage.alt =
            stateName + " tourism";

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
       SECTION STATE NAMES
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



    /* =====================================================
       GENERATE CITIES
    ===================================================== */

    if (state.popularCities) {

        generateCities(
            state.popularCities
        );

    }


    /* =====================================================
       GENERATE TOURIST PLACES
    ===================================================== */

    if (state.touristPlaces) {

        generateTouristPlaces(
            state.touristPlaces
        );

    }

}

/* =========================================================
    DATA CHECK
========================================================= */

console.log(
    "State Details Data Loaded Successfully!"
);

console.log(
    `Detailed States Available: ${
        Object.keys(stateDetailsData).length
    }`
);


/* =========================================================
    STATE SEARCH
========================================================= */

if (stateSearch) {

    stateSearch.addEventListener(
        "input",
        () => {

            const searchValue =
                stateSearch.value
                    .trim()
                    .toLowerCase();


            /* Clear Button */

            if (clearStateSearch) {

                if (searchValue !== "") {

                    clearStateSearch.style.display =
                        "flex";

                } else {

                    clearStateSearch.style.display =
                        "none";

                }

            }


            /* Filter States */

            const filteredStates =
                statesData.filter(
                    state => {

                        return state.name
                            .toLowerCase()
                            .includes(
                                searchValue
                            );

                    }
                );


            /* Display Filtered States */

            displayStates(
                filteredStates
            );

        }
    );

}


/* =========================================================
   23. CLEAR STATE SEARCH
========================================================= */

if (clearStateSearch) {

    clearStateSearch.addEventListener(
        "click",
        () => {

            if (stateSearch) {

                stateSearch.value = "";

                stateSearch.focus();

            }


            clearStateSearch.style.display =
                "none";


            displayStates(
                statesData
            );

        }
    );

}


/* =========================================================
   24. CONSOLE SUCCESS MESSAGE
========================================================= */

console.log(
    "TravelBharat JavaScript Loaded Successfully!"
);

console.log(
    `Total States Loaded: ${statesData.length}`
);

/* =========================================================
   STATE DETAILS PAGE NAVIGATION
========================================================= */

document.addEventListener("click", (event) => {

    const stateLink =
        event.target.closest(".state-link");

    if (!stateLink) {
        return;
    }

    event.preventDefault();

    const stateName =
        stateLink.dataset.state;

    if (!stateName) {
        console.error("State name not found!");
        return;
    }

    window.location.href =
        `state-details.html?state=${encodeURIComponent(stateName)}`;

});

/* =========================================================
   DYNAMIC CITY DETAILS
========================================================= */

function getCityDetails(cityName) {

    for (const stateName in stateDetailsData) {

        const state = stateDetailsData[stateName];

        if (!state.popularCities) {
            continue;
        }

        const city = state.popularCities.find(
            city => city.name.toLowerCase() === cityName.toLowerCase()
        );

        if (city) {

            return {

                name: city.name,

                state: stateName,

                tagline: city.description,

                description:
                    city.description,

                image:
                   city.image || state.image,

                location:
                    `${city.name}, ${stateName}, India`,

                bestTime:
                    state.bestTime,

                famousFor:
                    city.description,

                attractions:
                    state.touristPlaces || []

            };
        }
    }

    return null;
}
/* =========================================================
   LOAD CITY DETAILS PAGE
========================================================= */

function loadCityDetailsPage() {

    const cityPageContent =
        document.getElementById("cityPageContent");

    if (!cityPageContent) {
        return;
    }


    /* Get city name from URL */

    const urlParams =
        new URLSearchParams(window.location.search);

    const cityName =
        urlParams.get("city");


    /* City name missing */

    if (!cityName) {

        cityPageContent.innerHTML = `
            <div class="error-message">

                <h1>
                    City Not Found
                </h1>

                <p>
                    Please select a city from the
                    Popular Cities section.
                </p>

            </div>
        `;

        return;
    }


    /* Find city data */

    const city =
    getCityDetails(cityName);

    /* City data doesn't exist */

    if (!city) {

        cityPageContent.innerHTML = `
            <div class="error-message">

                <h1>
                    ${cityName}
                </h1>

                <p>
                    Information for this city
                    is currently unavailable.
                </p>

            </div>
        `;

        return;
    }


    /* Update browser title */

    document.title =
        `${cityName} - Travel Bharat`;


    /* Generate complete page */

    cityPageContent.innerHTML = `

        <div class="city-hero-card">


            <!-- CITY IMAGE -->

           <img
                class="city-hero-image"
                src="${city.image}"
                alt="${cityName}, ${city.state}"
                style="
                    width: 100%;
                    height: 600px;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                "
            >


            <div class="city-content">


                <!-- STATE -->

                <span class="city-state">
                    ${city.state}
                </span>


                <!-- CITY NAME -->

                <h1>
                    ${cityName}
                </h1>


                <!-- TAGLINE -->

                <p class="city-intro">
                    ${city.tagline}
                </p>


                <!-- BASIC INFORMATION -->

                <div class="city-info-grid">


                    <div class="city-info-box">

                        <h3>
                            📍 Location
                        </h3>

                        <p>
                            ${city.location}
                        </p>

                    </div>


                    <div class="city-info-box">

                        <h3>
                            🌤️ Best Time
                        </h3>

                        <p>
                            ${city.bestTime}
                        </p>

                    </div>


                    <div class="city-info-box">

                        <h3>
                            🏔️ Famous For
                        </h3>

                        <p>
                            ${city.famousFor}
                        </p>

                    </div>


                </div>


                <!-- ABOUT CITY -->

                <section class="city-section">

                    <h2>
                        About ${cityName}
                    </h2>

                    <p>
                        ${city.description}
                    </p>

                </section>


                <!-- ATTRACTIONS -->

                <section class="city-section">

                    <h2>
                        Places to Visit in ${cityName}
                    </h2>


                    <div class="attractions-grid">

                        ${city.attractions.map(
                            attraction => `

                            <div class="attraction-card">

                                <h3>
                                    📍 ${attraction.name}
                                </h3>

                                <p>
                                    ${attraction.description}
                                </p>

                            </div>

                        `
                        ).join("")}

                    </div>

                </section>


                <!-- EXPERIENCE -->

                <section class="city-section">

                    <h2>
                        Things to Experience
                    </h2>

                    <p>
                        Explore the beautiful surroundings,
                        discover local culture, visit famous
                        attractions and enjoy memorable
                        experiences in ${cityName}.
                    </p>

                </section>


            </div>

        </div>

    `;
}


/* Run only on city-details.html */

document.addEventListener(
    "DOMContentLoaded",
    loadCityDetailsPage
);
/*==================================================
    INTERACTIVE CONTACT FORM
==================================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("contactName");
        const email = document.getElementById("contactEmail");
        const phone = document.getElementById("contactPhone");
        const destination = document.getElementById("destination");
        const travelType = document.getElementById("travelType");
        const message = document.getElementById("contactMessage");

        const successMessage = document.getElementById("contactSuccess");

        let isValid = true;


        /*------------------------------------------
            Clear Previous Errors
        ------------------------------------------*/

        document.querySelectorAll(".form-error").forEach(function (error) {
            error.textContent = "";
        });

        document.querySelectorAll(".input-error").forEach(function (input) {
            input.classList.remove("input-error");
        });


        /*------------------------------------------
            Name Validation
        ------------------------------------------*/

        if (name.value.trim() === "") {

            document.getElementById("nameError").textContent =
                "Please enter your name.";

            name.classList.add("input-error");

            isValid = false;
        }


        /*------------------------------------------
            Email Validation
        ------------------------------------------*/

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            document.getElementById("emailError").textContent =
                "Please enter your email.";

            email.classList.add("input-error");

            isValid = false;

        } else if (!emailPattern.test(email.value.trim())) {

            document.getElementById("emailError").textContent =
                "Please enter a valid email address.";

            email.classList.add("input-error");

            isValid = false;
        }


        /*------------------------------------------
            Phone Validation
        ------------------------------------------*/

        const phonePattern = /^[0-9]{10}$/;

        const cleanPhone = phone.value.replace(/\D/g, "");

        if (phone.value.trim() === "") {

            document.getElementById("phoneError").textContent =
                "Please enter your phone number.";

            phone.classList.add("input-error");

            isValid = false;

        } else if (!phonePattern.test(cleanPhone)) {

            document.getElementById("phoneError").textContent =
                "Please enter a valid 10-digit phone number.";

            phone.classList.add("input-error");

            isValid = false;
        }


        /*------------------------------------------
            Destination Validation
        ------------------------------------------*/

        if (destination.value === "") {

            document.getElementById("destinationError").textContent =
                "Please select a destination.";

            destination.classList.add("input-error");

            isValid = false;
        }


        /*------------------------------------------
            Travel Type Validation
        ------------------------------------------*/

        if (travelType.value === "") {

            document.getElementById("travelTypeError").textContent =
                "Please select your travel type.";

            travelType.classList.add("input-error");

            isValid = false;
        }


        /*------------------------------------------
            Message Validation
        ------------------------------------------*/

        if (message.value.trim() === "") {

            document.getElementById("messageError").textContent =
                "Please enter your message.";

            message.classList.add("input-error");

            isValid = false;

        } else if (message.value.trim().length < 10) {

            document.getElementById("messageError").textContent =
                "Message should contain at least 10 characters.";

            message.classList.add("input-error");

            isValid = false;
        }


        /*------------------------------------------
            If Form Is Valid
        ------------------------------------------*/

        if (isValid) {

            successMessage.style.display = "block";

            // Reset form
            contactForm.reset();


            // Remove any remaining error styling
            document.querySelectorAll(".input-error").forEach(function (input) {
                input.classList.remove("input-error");
            });


            // Hide success message after 5 seconds
            setTimeout(function () {

                successMessage.style.display = "none";

            }, 5000);
        }

    });


    /*------------------------------------------
        Remove Error When User Starts Typing
    ------------------------------------------*/

    const fields = [
        {
            input: "contactName",
            error: "nameError"
        },
        {
            input: "contactEmail",
            error: "emailError"
        },
        {
            input: "contactPhone",
            error: "phoneError"
        },
        {
            input: "destination",
            error: "destinationError"
        },
        {
            input: "travelType",
            error: "travelTypeError"
        },
        {
            input: "contactMessage",
            error: "messageError"
        }
    ];


    fields.forEach(function (field) {

        const input = document.getElementById(field.input);
        const error = document.getElementById(field.error);

        if (input) {

            input.addEventListener("input", function () {

                input.classList.remove("input-error");
                error.textContent = "";

            });

            input.addEventListener("change", function () {

                input.classList.remove("input-error");
                error.textContent = "";

            });
        }

    });

}
// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    // Show button when user scrolls down
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    // Scroll smoothly to top
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
/* =========================================================
   PLACE DETAILS PAGE
========================================================= */

const placeDetailsContainer =
    document.getElementById("placeDetails");


if (placeDetailsContainer) {

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const selectedPlace =
        urlParams.get("place");


    if (selectedPlace) {

        loadPlaceDetails(selectedPlace);

    } else {

        placeDetailsContainer.innerHTML = `
            <div class="place-not-found">
                <h2>Place not selected</h2>
                <p>Please select a tourist place to explore.</p>
            </div>
        `;

    }

}


/* =========================================================
   FIND PLACE FROM ALL STATES
========================================================= */

function findTouristPlace(placeName) {

    for (const stateName in stateDetailsData) {

        const state =
            stateDetailsData[stateName];

        if (!state.touristPlaces) {
            continue;
        }


        const place =
            state.touristPlaces.find(
                item =>
                    item.name.toLowerCase() ===
                    placeName.toLowerCase()
            );


        if (place) {

            return {
                place: place,
                state: stateName,
                stateData: state
            };

        }

    }

    return null;

}


/* =========================================================
   LOAD PLACE DETAILS
========================================================= */

function loadPlaceDetails(placeName) {

    const result =
        findTouristPlace(placeName);


    if (!result) {

        placeDetailsContainer.innerHTML = `

            <section class="place-error">

                <h1>Place Not Found</h1>

                <p>
                    Sorry, we couldn't find information
                    about this destination.
                </p>

                <a href="index.html">
                    ← Back to Travel Bharat
                </a>

            </section>

        `;

        return;

    }


    const place =
        result.place;

    const stateName =
        result.state;

    const stateData =
        result.stateData;


    placeDetailsContainer.innerHTML = `

        <!-- =================================================
             HERO IMAGE
        ================================================== -->

        <section class="place-details-hero">

            <img
                src="${place.image || stateData.image}"
                alt="${place.name}"
                class="place-details-image"
            >

            <div class="place-hero-overlay">

                <span class="place-category">
                    ${place.category || "Tourist Place"}
                </span>

                <h1>
                    ${place.name}
                </h1>

                <p>
                    📍 ${stateName}, India
                </p>

            </div>

        </section>


        <!-- =================================================
             MAIN INFORMATION
        ================================================== -->

        <section class="place-information">

            <div class="place-main-content">

                <span class="place-section-label">
                    EXPLORE DESTINATION
                </span>

                <h2>
                    About ${place.name}
                </h2>

                <p class="place-description">
                    ${place.about || place.description}
                </p>


                <!-- INFORMATION CARDS -->

                <div class="place-info-grid">

                    <div class="place-info-box">

                        <span>📍</span>

                        <div>
                            <small>Location</small>
                            <strong>
                                ${place.location || stateName}
                            </strong>
                        </div>

                    </div>


                    <div class="place-info-box">

                        <span>🌤️</span>

                        <div>
                            <small>Best Time</small>
                            <strong>
                                ${place.bestTime || stateData.bestTime || "Check before travelling"}
                            </strong>
                        </div>

                    </div>


                    <div class="place-info-box">

                        <span>⏱️</span>

                        <div>
                            <small>Recommended Duration</small>
                            <strong>
                                ${place.duration || "1–2 Days"}
                            </strong>
                        </div>

                    </div>


                    <div class="place-info-box">

                        <span>💰</span>

                        <div>
                            <small>Entry / Ticket</small>
                            <strong>
                                ${place.entryFee || "Check official information"}
                            </strong>
                        </div>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 HOW TO REACH
            ================================================== -->

            <div class="how-to-reach">

                <span class="place-section-label">
                    TRAVEL INFORMATION
                </span>

                <h2>
                    How to Reach ${place.name}
                </h2>


                <div class="transport-grid">


                    <div class="transport-card">

                        <div class="transport-icon">
                            ✈️
                        </div>

                        <h3>
                            By Flight
                        </h3>

                        <p>
                            ${
                                place.howToReach?.flight ||
                                "Check the nearest airport and available flights."
                            }
                        </p>

                    </div>


                    <div class="transport-card">

                        <div class="transport-icon">
                            🚆
                        </div>

                        <h3>
                            By Train
                        </h3>

                        <p>
                            ${
                                place.howToReach?.train ||
                                "Check the nearest railway station and train availability."
                            }
                        </p>

                    </div>


                    <div class="transport-card">

                        <div class="transport-icon">
                            🚌
                        </div>

                        <h3>
                            By Bus
                        </h3>

                        <p>
                            ${
                                place.howToReach?.bus ||
                                "Buses may be available from nearby major cities."
                            }
                        </p>

                    </div>


                    <div class="transport-card">

                        <div class="transport-icon">
                            🚗
                        </div>

                        <h3>
                            By Road
                        </h3>

                        <p>
                            ${
                                place.howToReach?.road ||
                                "The destination can be reached by road from nearby cities."
                            }
                        </p>

                    </div>


                    <div class="transport-card">

                        <div class="transport-icon">
                            🚕
                        </div>

                        <h3>
                            Local Transport
                        </h3>

                        <p>
                            ${
                                place.howToReach?.local ||
                                "Local taxis, buses or other transport options may be available."
                            }
                        </p>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 NEARBY PLACES
            ================================================== -->

            <div class="nearby-places">

                <span class="place-section-label">
                    NEARBY
                </span>

                <h2>
                    Places You Can Also Visit
                </h2>

                <div class="nearby-list">

                    ${
                        place.nearbyPlaces
                        ?
                        place.nearbyPlaces
                            .map(
                                item =>
                                    `<span>📍 ${item}</span>`
                            )
                            .join("")
                        :
                        `<span>Nearby destinations will be added soon.</span>`
                    }

                </div>

            </div>


            <!-- =================================================
                 TRAVEL TIPS
            ================================================== -->

            <div class="travel-tips">

                <span class="place-section-label">
                    TRAVEL TIPS
                </span>

                <h2>
                    Things to Know Before You Go
                </h2>

                <ul>

                    ${
                        place.travelTips
                        ?
                        place.travelTips
                            .map(
                                tip =>
                                    `<li>✓ ${tip}</li>`
                            )
                            .join("")
                        :
                        `
                            <li>✓ Check the weather before travelling.</li>
                            <li>✓ Carry comfortable clothes and footwear.</li>
                            <li>✓ Keep your important documents with you.</li>
                            <li>✓ Check local travel conditions before starting your journey.</li>
                        `
                    }

                </ul>

            </div>


            <!-- =================================================
                 BACK BUTTON
            ================================================== -->

            <div class="place-back">

                <a href="javascript:history.back()">
                    ← Back to Tourist Places
                </a>

            </div>

        </section>

    `;

}

/* =========================================================
   CATEGORY CONFIG
========================================================= */

const categoryExplorerConfig = {

    heritage: {
        name: "Heritage",
        icon: "🏛️",
        description:
            "Explore forts, palaces, monuments, caves, museums and historic destinations."
    },

    nature: {
        name: "Nature",
        icon: "🌿",
        description:
            "Discover waterfalls, mountains, forests, valleys, rivers and scenic landscapes."
    },

    religious: {
        name: "Religious",
        icon: "🛕",
        description:
            "Discover temples, monasteries, gurudwaras and spiritual destinations."
    },

    adventure: {
        name: "Adventure",
        icon: "🏔️",
        description:
            "Experience trekking, mountain passes, wildlife, deserts and exciting outdoor destinations."
    }

};


/* =========================================================
   ELEMENTS
========================================================= */

const categoryExplorer =
    document.getElementById("categoryExplorer");

const categoryStatesGrid =
    document.getElementById("categoryStatesGrid");

const categoryCitiesGrid =
    document.getElementById("categoryCitiesGrid");

const categoryPlacesGrid =
    document.getElementById("categoryPlacesGrid");

const categoryCitiesSection =
    document.getElementById("categoryCitiesSection");

const categoryPlacesSection =
    document.getElementById("categoryPlacesSection");

const selectedCategoryTitle =
    document.getElementById("selectedCategoryTitle");

const selectedCategoryIcon =
    document.getElementById("selectedCategoryIcon");

const selectedCategoryDescription =
    document.getElementById(
        "selectedCategoryDescription"
    );

const categoryStateCount =
    document.getElementById("categoryStateCount");

const categoryCityCount =
    document.getElementById("categoryCityCount");

const categoryPlaceCount =
    document.getElementById("categoryPlaceCount");

const selectedStateTitle =
    document.getElementById("selectedStateTitle");

const selectedCityTitle =
    document.getElementById("selectedCityTitle");

const backToStates =
    document.getElementById("backToStates");

const backToCities =
    document.getElementById("backToCities");


/* =========================================================
   CURRENT SELECTION
========================================================= */

let selectedCategory = null;

let selectedState = null;

let selectedCity = null;


/* =========================================================
   GET ALL TOURIST PLACES
========================================================= */

function getAllCategoryPlaces(category) {

    const allPlaces = [];

    for (
        const stateName in stateDetailsData
    ) {

        const state =
            stateDetailsData[stateName];

        if (
            !state ||
            !state.touristPlaces
        ) {
            continue;
        }


        state.touristPlaces.forEach(
            place => {

                if (
                    place.category &&
                    place.category.toLowerCase() ===
                    category
                ) {

                    allPlaces.push({

                        ...place,

                        stateName: stateName

                    });

                }

            }
        );

    }

    return allPlaces;
}


/* =========================================================
   FIND CITY FROM PLACE
========================================================= */

function findPlaceCity(
    place,
    stateName
) {

    const state =
        stateDetailsData[stateName];

    if (!state) {
        return "Other";
    }


    /*
       First try popular city names.
    */

    if (state.popularCities) {

        const location =
            (
                place.location ||
                ""
            ).toLowerCase();


        const matchingCity =
            state.popularCities.find(
                city => {

                    return location.includes(
                        city.name.toLowerCase()
                    );

                }
            );


        if (matchingCity) {

            return matchingCity.name;

        }

    }


    if (place.location) {

        const parts =
            place.location
                .split(",")
                .map(item => item.trim())
                .filter(Boolean);


        if (parts.length >= 2) {

            return parts[
                parts.length - 2
            ];

        }

    }


    return "Other";

}


/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategoryExplorer(
    category
) {

    const config =
        categoryExplorerConfig[
            category
        ];

    if (!config) {
        return;
    }
        /* =====================================================
       CHECK CATEGORY EXPLORER ELEMENTS
    ===================================================== */

    if (
        !categoryExplorer ||
        !categoryStatesGrid ||
        !categoryCitiesGrid ||
        !categoryPlacesGrid ||
        !categoryCitiesSection ||
        !categoryPlacesSection ||
        !selectedCategoryIcon ||
        !selectedCategoryTitle ||
        !selectedCategoryDescription ||
        !categoryStateCount ||
        !categoryCityCount ||
        !categoryPlaceCount
    ) {

        console.warn(
            "Category Explorer elements are missing on this page."
        );

        return;
    }


    selectedCategory =
        category;

    selectedState =
        null;

    selectedCity =
        null;
        

    /* =====================================================
   Update heading
===================================================== */

if (selectedCategoryIcon) {
    selectedCategoryIcon.textContent =
        config.icon;
}

if (selectedCategoryTitle) {
    selectedCategoryTitle.textContent =
        config.name;
}

if (selectedCategoryDescription) {
    selectedCategoryDescription.textContent =
        config.description;
}

    /*
       Get category places
    */

    const places =
        getAllCategoryPlaces(
            category
        );


    /*
       Group by state
    */

    const stateMap = {};


    places.forEach(place => {

        if (
            !stateMap[
                place.stateName
            ]
        ) {

            stateMap[
                place.stateName
            ] = [];

        }

        stateMap[
            place.stateName
        ].push(place);

    });


    /* 
   Show state count 
*/

const states = 
    Object.keys(stateMap);

if (categoryStateCount) {

    categoryStateCount.textContent = 
        `${states.length} ${ 
            states.length === 1 
                ? "State" 
                : "States" 
        }`;

}

    /*
       Generate state cards
    */

    categoryStatesGrid.innerHTML =
        "";


    states.forEach(
        stateName => {

            const stateCard =
                document.createElement(
                    "article"
                );

            stateCard.className =
                "destination-state-card";


            const stateData =
                stateDetailsData[
                    stateName
                ];


            const stateImage =
                stateData?.image ||
                "images/default-state.jpg";


            const statePlaces =
                stateMap[
                    stateName
                ];


            stateCard.innerHTML = `

                <div class="destination-state-image">

                    <img
                        src="${stateImage}"
                        alt="${stateName}"
                        loading="lazy"
                    >

                    <span class="destination-state-icon">
                        📍
                    </span>

                </div>


                <div class="destination-state-content">

                    <h4>
                        ${stateName}
                    </h4>

                    <div class="destination-state-meta">

                        <span>
                            ${statePlaces.length}
                            ${
                                statePlaces.length === 1
                                    ? "Place"
                                    : "Places"
                            }
                        </span>

                    </div>

                    <button
                        type="button"
                        class="destination-view-btn"
                        data-state="${stateName}"
                    >

                        View Cities

                        <span>→</span>

                    </button>

                </div>

            `;


            categoryStatesGrid.appendChild(
                stateCard
            );

        }
    );


    /*
       Hide city/place sections
    */

    categoryCitiesSection
        .classList.add(
            "category-hidden"
        );

    categoryPlacesSection
        .classList.add(
            "category-hidden"
        );


    /*
       Show explorer
    */

    categoryExplorer
        .classList.add(
            "category-explorer-active"
        );


    /*
       Scroll to explorer
    */

    setTimeout(() => {

        categoryExplorer.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================================
   STATE CLICK
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".destination-view-btn"
            );


        if (!button) {
            return;
        }


        const stateName =
            button.dataset.state;


        if (!stateName) {
            return;
        }


        openStateCities(
            stateName
        );

    }
);


/* =========================================================
   OPEN STATE CITIES
========================================================= */

function openStateCities(
    stateName
) {

    selectedState =
        stateName;

    selectedCity =
        null;


    /*
       Get category places
    */

    const places =
        getAllCategoryPlaces(
            selectedCategory
        );


    /*
       Only selected state
    */

    const statePlaces =
        places.filter(
            place =>
                place.stateName ===
                stateName
        );


    /*
       Group places by city
    */

    const cityMap = {};


    statePlaces.forEach(
        place => {

            const city =
                findPlaceCity(
                    place,
                    stateName
                );


            if (
                !cityMap[city]
            ) {

                cityMap[city] = [];

            }


            cityMap[city].push(
                place
            );

        }
    );


    const cities =
        Object.keys(cityMap);


    /*
       Heading
    */

    selectedStateTitle.textContent =
        `${stateName} Cities`;


    categoryCityCount.textContent =
        `${cities.length} ${
            cities.length === 1
                ? "City"
                : "Cities"
        }`;


    /*
       Clear
    */

    categoryCitiesGrid.innerHTML =
        "";


    /*
       Generate city cards
    */

    cities.forEach(
        cityName => {

            const cityCard =
                document.createElement(
                    "article"
                );


            cityCard.className =
                "destination-city-card";


            /*
               Find city image
            */

            const stateData =
                stateDetailsData[
                    stateName
                ];


            let cityImage =
                stateData?.image ||
                "images/default-city.jpg";


            if (
                stateData &&
                stateData.popularCities
            ) {

                const cityData =
                    stateData.popularCities.find(
                        city =>
                            city.name
                                .toLowerCase() ===
                            cityName
                                .toLowerCase()
                    );


                if (
                    cityData &&
                    cityData.image
                ) {

                    cityImage =
                        cityData.image;

                }

            }


            const cityPlaces =
                cityMap[
                    cityName
                ];


            cityCard.innerHTML = `

                <div class="destination-city-image">

                    <img
                        src="${cityImage}"
                        alt="${cityName}"
                        loading="lazy"
                    >

                </div>


                <div class="destination-city-content">

                    <span class="destination-city-label">
                        CITY
                    </span>

                    <h4>
                        ${cityName}
                    </h4>

                    <p>
                        ${cityPlaces.length}
                        ${
                            cityPlaces.length === 1
                                ? "place"
                                : "places"
                        }
                        in ${selectedCategory}
                    </p>

                    <button
                        type="button"
                        class="destination-city-btn"
                        data-city="${cityName}"
                    >

                        View Places

                        <span>→</span>

                    </button>

                </div>

            `;


            categoryCitiesGrid.appendChild(
                cityCard
            );

        }
    );


    /*
       Show cities
    */

    categoryCitiesSection
        .classList.remove(
            "category-hidden"
        );


    /*
       Hide places
    */

    categoryPlacesSection
        .classList.add(
            "category-hidden"
        );


    /*
       Scroll
    */

    setTimeout(() => {

        categoryCitiesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================================
   CITY CLICK
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest(
                ".destination-city-btn"
            );


        if (!button) {
            return;
        }


        const cityName =
            button.dataset.city;


        if (!cityName) {
            return;
        }


        openCityPlaces(
            cityName
        );

    }
);


/* =========================================================
   OPEN CITY PLACES
========================================================= */

function openCityPlaces(
    cityName
) {

    selectedCity =
        cityName;


    /*
       Get category places
    */

    const places =
        getAllCategoryPlaces(
            selectedCategory
        );


    /*
       Filter state
       and city
    */

    const cityPlaces =
        places.filter(
            place => {

                const placeCity =
                    findPlaceCity(
                        place,
                        selectedState
                    );

                return (
                    place.stateName ===
                        selectedState &&

                    placeCity.toLowerCase() ===
                        cityName.toLowerCase()
                );

            }
        );


    /*
       Heading
    */

    selectedCityTitle.textContent =
        `${cityName}, ${selectedState}`;


    categoryPlaceCount.textContent =
        `${cityPlaces.length} ${
            cityPlaces.length === 1
                ? "Place"
                : "Places"
        }`;


    /*
       Clear old places
    */

    categoryPlacesGrid.innerHTML =
        "";


    /*
       Generate place cards
    */

    cityPlaces.forEach(
        place => {

            const placeCard =
                document.createElement(
                    "article"
                );


            placeCard.className =
                "destination-place-card";


            placeCard.innerHTML = `

                <div class="destination-place-image">

                    <img
                        src="${
                            place.image ||
                            "images/default-place.jpg"
                        }"
                        alt="${place.name}"
                        loading="lazy"
                    >

                    <span class="destination-place-category">
                        ${place.category}
                    </span>

                </div>


                <div class="destination-place-content">

                    <h4>
                        ${place.name}
                    </h4>


                    <div class="destination-place-location">

                        📍 ${place.location || selectedState}

                    </div>


                    <p>
                        ${
                            place.description ||
                            "Explore this beautiful destination."
                        }
                    </p>


                    <a
                        href="place-details.html?place=${encodeURIComponent(place.name)}"
                        class="destination-place-link"
                    >

                        Explore Place

                        <span>→</span>

                    </a>

                </div>

            `;


            categoryPlacesGrid.appendChild(
                placeCard
            );

        }
    );


    /*
       Show places
    */

    categoryPlacesSection
        .classList.remove(
            "category-hidden"
        );


    /*
       Scroll
    */

    setTimeout(() => {

        categoryPlacesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================================
   CATEGORY CARD CLICK
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const card =
            event.target.closest(
                ".interest-card"
            );


        if (!card) {
            return;
        }


        const category =
            card.dataset.category;


        if (!category) {
            return;
        }


        openCategoryExplorer(
            category
        );

    }
);


/* =========================================================
   BACK TO STATES
========================================================= */

if (backToStates) {

    backToStates.addEventListener(
        "click",
        function() {

            categoryCitiesSection
                .classList.add(
                    "category-hidden"
                );

            categoryPlacesSection
                .classList.add(
                    "category-hidden"
                );

            categoryStatesGrid.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}


/* =========================================================
   BACK TO CITIES
========================================================= */

if (backToCities) {

    backToCities.addEventListener(
        "click",
        function() {

            categoryPlacesSection
                .classList.add(
                    "category-hidden"
                );

            categoryCitiesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}

/* =========================================================
   CATEGORY INFORMATION
========================================================= */

const categoryExplorerInfo = {

    heritage: {

        title: "Heritage",

        icon: "🏛️",

        description:
            "Explore historic forts, palaces, monuments, caves, museums and heritage destinations across India."

    },


    nature: {

        title: "Nature",

        icon: "🌿",

        description:
            "Discover waterfalls, forests, mountains, valleys, lakes and beautiful natural landscapes across India."

    },


    religious: {

        title: "Religious",

        icon: "🛕",

        description:
            "Explore temples, mosques, churches, monasteries and important spiritual destinations across India."

    },


    adventure: {

        title: "Adventure",

        icon: "🏔️",

        description:
            "Discover trekking, mountains, rafting, camping and exciting adventure destinations across India."

    }

};


/* =========================================================
   GET CITY FROM LOCATION
========================================================= */

function getCategoryCity(
    location,
    stateName
) {

    if (!location) {

        return "—";

    }


    let text =
        String(location).trim();


    /*
       Remove state name if it appears
       at the end of location.
    */

    const statePattern =
        new RegExp(
            ",?\\s*" +
            stateName.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            ) +
            "\\s*$",
            "i"
        );


    text =
        text.replace(
            statePattern,
            ""
        ).trim();


    /*
       Remove trailing comma
    */

    text =
        text.replace(
            /,\s*$/,
            ""
        );


    const parts =
        text
            .split(",")
            .map(
                item =>
                    item.trim()
            )
            .filter(Boolean);


    /*
       Example:
       Amber, Jaipur
       => Jaipur
    */

    if (parts.length >= 2) {

        let city =
            parts[parts.length - 1];


        city =
            city.replace(
                /\s+District$/i,
                ""
            );


        return city;

    }


    if (parts.length === 1) {

        return parts[0];

    }


    return "—";

}


/* =========================================================
   CREATE ONE PLACE CARD
========================================================= */

function createCategoryPlaceCard(
    place,
    stateName,
    category,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "category-place-card";


    card.style.animationDelay =
        `${index * 0.06}s`;


    /* CATEGORY ICON */

    let categoryIcon =
        "📍";


    if (
        category === "heritage"
    ) {

        categoryIcon =
            "🏛️";

    }
    else if (
        category === "nature"
    ) {

        categoryIcon =
            "🌿";

    }
    else if (
        category === "religious"
    ) {

        categoryIcon =
            "🛕";

    }
    else if (
        category === "adventure"
    ) {

        categoryIcon =
            "🏔️";

    }


    /* CITY */

    const city =
        getCategoryCity(
            place.location,
            stateName
        );


    /* IMAGE */

    const image =
        place.image ||
        "images/placeholder.jpg";


    /* DESCRIPTION */

    const description =
        place.description ||
        "Discover this beautiful destination in India.";


    /* CARD HTML */

    card.innerHTML = `

        <div class="category-place-image">

            <img
                src="${image}"
                alt="${place.name || "Tourist Place"}"
                loading="lazy"
            >


            <span class="category-image-icon">
                ${categoryIcon}
            </span>

        </div>


        <div class="category-place-content">

            <span class="category-place-label">

                ${categoryIcon}
                ${category}

            </span>


            <h3>
                ${place.name || "Tourist Place"}
            </h3>


            <div class="category-location">


                <div class="category-location-item">

                    <span
                        class="category-location-label"
                    >
                        City
                    </span>

                    <span
                        class="category-location-value"
                    >
                        📍 ${city}
                    </span>

                </div>


                <div class="category-location-item">

                    <span
                        class="category-location-label"
                    >
                        State
                    </span>

                    <span
                        class="category-location-value"
                    >
                        🇮🇳 ${stateName}
                    </span>

                </div>


            </div>


            <p class="category-place-description">

                ${description}

            </p>


        </div>

    `;


    return card;

}


/* =========================================================
   GET ALL PLACES OF CATEGORY
========================================================= */

function getAllCategoryPlaces(
    selectedCategory
) {

    const results = [];

    if (
        typeof stateDetailsData ===
        "undefined"
    ) {

        console.error(
            "stateDetailsData is not available."
        );

        return results;

    }

    Object.keys(
        stateDetailsData
    ).forEach(
        stateName => {

            const state =
                stateDetailsData[
                    stateName
                ];


            if (
                !state ||
                !Array.isArray(
                    state.touristPlaces
                )
            ) {

                return;

            }

            state.touristPlaces.forEach(
                place => {

                    if (
                        !place
                    ) {

                        return;

                    }


                    const placeCategory =
                        String(
                            place.category ||
                            ""
                        ).toLowerCase();


                    if (
                        placeCategory ===
                        selectedCategory
                    ) {

                        results.push({

                            place:
                                place,

                            stateName:
                                stateName

                        });

                    }

                }
            );

        }
    );


    return results;

}


/* =========================================================
   SHOW CATEGORY
========================================================= */

function showCategory(
    selectedCategory
) {

    const explorer =
        document.getElementById(
            "categoryExplorer"
        );


    const grid =
        document.getElementById(
            "categoryPlacesGrid"
        );


    const title =
        document.getElementById(
            "selectedCategoryTitle"
        );


    const description =
        document.getElementById(
            "selectedCategoryDescription"
        );


    const icon =
        document.getElementById(
            "selectedCategoryIcon"
        );


    const count =
        document.getElementById(
            "categoryPlaceCount"
        );


    /*
       Safety check
    */

    if (
        !explorer ||
        !grid
    ) {

        console.error(
            "Category Explorer HTML is missing."
        );

        return;

    }


    /*
       Category information
    */

    const info =
        categoryExplorerInfo[
            selectedCategory
        ];


    if (!info) {

        console.error(
            "Category not found:",
            selectedCategory
        );

        return;

    }


    /*
       Update heading
    */

    if (title) {

        title.textContent =
            info.title;

    }


    if (description) {

        description.textContent =
            info.description;

    }


    if (icon) {

        icon.textContent =
            info.icon;

    }


    /*
       Get places
    */

    const results =
        getAllCategoryPlaces(
            selectedCategory
        );


    /*
       Clear previous cards
    */

    grid.innerHTML =
        "";


    /*
       Update count
    */

    if (count) {

        count.textContent =
            `${results.length} Places`;

    }


    /*
       No places
    */

    if (
        results.length === 0
    ) {

        grid.innerHTML = `

            <div
                class="category-no-results"
            >

                <div
                    class="category-no-results-icon"
                >
                    🔍
                </div>

                <h3>
                    No Places Found
                </h3>

                <p>
                    No destinations are available
                    in this category yet.
                </p>

            </div>

        `;

    }
    else {

        results.forEach(
            (item, index) => {

                const card =
                    createCategoryPlaceCard(
                        item.place,
                        item.stateName,
                        selectedCategory,
                        index
                    );


                grid.appendChild(
                    card
                );

            }
        );

    }

    explorer.style.display =
        "block";

    setTimeout(
        () => {

            explorer.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        },
        100
    );

}

/* =========================================================
   CATEGORY CARD CLICK
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const card =
            event.target.closest(
                ".interest-card"
            );


        if (!card) {

            return;

        }


        const category =
            card.dataset.category;


        if (!category) {

            return;

        }


        showCategory(
            category
        );

    }
);
/* =========================================================
   CATEGORY CARD TOGGLE
========================================================= */

let activeCategory = null;

document.addEventListener("click", function (event) {

    const card = event.target.closest(".interest-card");

    if (!card) {
        return;
    }

    const category = card.dataset.category;

    if (!category) {
        return;
    }


    if (activeCategory === category) {

        const explorer =
            document.getElementById("categoryExplorer");

        if (explorer) {

            explorer.style.display = "none";

        }

        activeCategory = null;

        document
            .querySelectorAll(".interest-card")
            .forEach(function (item) {

                item.classList.remove("category-active");

            });

        return;
    }


    activeCategory = category;


    /* Active card */

    document
        .querySelectorAll(".interest-card")
        .forEach(function (item) {

            item.classList.remove(
                "category-active"
            );

        });


    card.classList.add(
        "category-active"
    );


    /* Show selected category */

    showCategory(category);

});
