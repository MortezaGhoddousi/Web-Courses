var homepageData = [
    {
        id: 0,
        image: "./assets/images/137-112760.jpg",
        alt: "Aerocano coffee",
        title: "The Aerocano has arrived",
        content: `Our smoothest, airiest espresso drink yet. Be one of the
                    first to try the all-new Aerocano in original or caramel.
                    Iced only.`,
        isLeft: true,
    },
    {
        id: 1,
        image: "./assets/images/137-112943.jpg",
        alt: "Mini Pies",
        title: "Fall classics made mini",
        content: `Introducing Mini Pies. Available in three seasonal flavors:
                    Pumpkin, Pecan and Apple Crumble. Mix and match or enjoy
                    them all.`,
        isLeft: false,
    },
    {
        id: 2,
        image: "./assets/images/137-112873.jpg",
        alt: "Fall drinks",
        title: "Fall is here. Cue the hits.",
        content: `The fall menu is live, with all your favorites and a few
                    delicious surprises. Pumpkin, pecan, banana bread and
                    chaider, here we come.`,
        isLeft: true,
    },
    {
        id: 3,
        image: "./assets/images/137-112979.webp",
        alt: "Coffee cup",
        title: "Free refills and fall vibes",
        content: `Enjoy your drink in the café and get refills of hot or iced
                    brewed coffee or tea on us.*`,
        isLeft: false,
    },
];

var body = document.querySelector("body");

var i = 0;
while (i < 4) {
    // if (homepageData[i].isLeft) {
    //     var section = `
    //                 <section class="refills-section">
    //                     <div class="refills-text">
    //                         <h2 class="refills-title">${homepageData[i].title}</h2>
    //                         <p class="refills-description">
    //                             ${homepageData[i].content}
    //                         </p>
    //                         <a href="#" class="refills-btn">Order now</a>
    //                     </div>
    //                     <div class="refills-image">
    //                         <img src=${homepageData[i].image} alt=${homepageData[i].alt} />
    //                     </div>
    //                 </section>
    //             `;
    // } else {
    //     var section = `
    //                 <section class="refills-section">
    //                     <div class="refills-image">
    //                         <img src=${homepageData[i].image} alt=${homepageData[i].alt} />
    //                     </div>
    //                     <div class="refills-text">
    //                         <h2 class="refills-title">${homepageData[i].title}</h2>
    //                         <p class="refills-description">
    //                             ${homepageData[i].content}
    //                         </p>
    //                         <a href="#" class="refills-btn">Order now</a>
    //                     </div>
    //                 </section>
    //             `;
    // }

    var imageDiv = `
        <div class="refills-image">
            <img src=${homepageData[i].image} alt=${homepageData[i].alt} />
        </div>
        `;

    var contentDiv = `
        <div class="refills-text">
            <h2 class="refills-title">${homepageData[i].title}</h2>
            <p class="refills-description">
                ${homepageData[i].content}
            </p>
            <a href="#" class="refills-btn">Order now</a>
        </div>
        `;

    // if (homepageData[i].isLeft) {
    //     var section = `
    //     <section class="refills-section">
    //         ${imageDiv + contentDiv};
    //     </section>
    //     `;
    // } else {
    //     var section = `
    //     <section class="refills-section">
    //         ${contentDiv + imageDiv};
    //     </section>
    //     `;
    // }

    var section = homepageData[i].isLeft
        ? `
        <section class="refills-section">
            ${imageDiv + contentDiv};
        </section>
        `
        : `
        <section class="refills-section">
            ${contentDiv + imageDiv};
        </section>
        `;

    body.innerHTML += section;
    i++;
}
