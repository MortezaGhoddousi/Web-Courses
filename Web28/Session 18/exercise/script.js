var div4 = document.querySelector(".forth div:nth-child(2)");
var div5 = document.querySelector(".fifth div:nth-child(2)");

var images = [
    "./gallery/gallery-01@2x.jpg",
    "./gallery/gallery-02@2x.jpg",
    "./gallery/gallery-03@2x.jpg",
    "./gallery/gallery-04@2x.jpg",
    "./gallery/gallery-05@2x.jpg",
    "./gallery/gallery-06@2x.jpg",
    "./gallery/gallery-07@2x.jpg",
    "./gallery/gallery-08@2x.jpg",
];

images.forEach((i) => {
    div4.innerHTML += `
    <main>
        <img src=${i} alt="image" />
        <span>+</span>
    </main>
    `;
});

var main4 = document.querySelectorAll(".forth div:nth-child(2) main");
var newWindow = document.querySelector(".forth > aside");
window.counter = 0;
main4.forEach((m, i) => {
    m.addEventListener("click", (e) => {
        counter = i;
        if (counter == 0) {
            icons[1].removeEventListener("click", subtrack);
        }
        if (counter >= images.length - 1) {
            icons[0].removeEventListener("click", add);
        }
        newWindow.className = "active";
        newWindow.childNodes[1].src = images[i];
    });
});

var icons = document.querySelectorAll(".forth > aside i");

icons[2].addEventListener("click", () => {
    newWindow.className = "";
});

const add = () => {
    counter++;
    if (counter > 0) {
        icons[1].addEventListener("click", subtrack);
    }
    if (counter >= images.length - 1) {
        icons[0].removeEventListener("click", add);
    }
    newWindow.childNodes[1].src = `${images[counter]}`;
};

const subtrack = () => {
    counter--;
    if (counter < images.length - 1) {
        icons[0].addEventListener("click", add);
    }
    if (counter == 0) {
        icons[1].removeEventListener("click", subtrack);
    }
    newWindow.childNodes[1].src = `${images[counter]}`;
};

icons[0].addEventListener("click", add);

icons[1].addEventListener("click", subtrack);

var data = [
    {
        image: "./avatars/user-01.jpg",
        h3: "John Rockefeller",
        span: "Cleveland, Ohio",
        p: `
            Molestiae incidunt consequatur quis ipsa autem nam sit
            enim magni. Voluptas tempore rem. Explicabo a quaerat
            sint autem dolore ducimus ut consequatur neque. Nisi
            dolores quaerat fuga rem nihil nostrum. Laudantium quia
            consequatur molestias.
        `,
    },
    {
        image: "./avatars/user-02.jpg",
        h3: "Andrew Carnegie",
        span: "Pittsburgh, Pennsylvania",
        p: `
            Excepturi nam cupiditate culpa doloremque deleniti
            repellat. Veniam quos repellat voluptas animi adipisci.
            Nisi eaque consequatur. Voluptatem dignissimos ut
            ducimus accusantium perspiciatis. Quasi voluptas eius
            distinctio. Atque eos maxime.
        `,
    },
    {
        image: "./avatars/user-03.jpg",
        h3: "John Morgan",
        span: "New York City",
        p: `
            Repellat dignissimos libero. Qui sed at corrupti
            expedita voluptas odit. Nihil ea quia nesciunt. Ducimus
            aut sed ipsam. Autem eaque officia cum exercitationem
            sunt voluptatum accusamus. Quasi voluptas eius
            distinctio. Voluptatem dignissimos ut.
        `,
    },
];

data.forEach((aside) => {
    div5.innerHTML += `
        <aside>
            <img src=${aside.image} alt="avatar-image" />
            <h3>${aside.h3}</h3>
            <span>${aside.span}</span>
            <p>${aside.p}</p>
        </aside>
    `;
});

var data3 = [
    [
        {
            h2: "Lounge Elegance Espresso",
            p: "Rich and full-bodied, our signature espresso blend with notes of dark chocolate and toasted nuts.",
            span: "$3.50",
        },
        {
            h2: "Velvet Mocha Delight",
            p: "Silky mocha infused with a hint of vanilla, crowned with velvety whipped cream.",
            span: "$4.25",
        },
        {
            h2: "Caramel Macchiato Symphony",
            p: "A harmonious blend of espresso, steamed milk, and caramel drizzle.",
            span: "$4.00",
        },
        {
            h2: "Hazelnut Heaven Latte",
            p: "Creamy latte with the nutty goodness of hazelnut syrup.",
            span: "$4.50",
        },
        {
            h2: "French Vanilla Cappuccino",
            p: "Classic cappuccino with a touch of French vanilla sweetness.",
            span: "$4.25",
        },
    ],
    [
        {
            h2: "Buttery Croissants",
            p: "Flaky and buttery croissants baked to perfection.",
            span: "$2.50",
        },
        {
            h2: "Flaky Almond Danishes",
            p: "Delicate pastries filled with almond paste and sliced almonds.",
            span: "$3.00",
        },
        {
            h2: "Blueberry Streusel Muffins",
            p: "Moist muffins bursting with blueberries and a crumbly streusel top.",
            span: "$2.75",
        },
        {
            h2: "Chocolate-Filled Scones",
            p: "Tender scones with a surprise chocolate center.",
            span: "$3.25",
        },
        {
            h2: "Raspberry Cream Cheese Danish",
            p: "Sweet and tangy raspberry filling in a cream cheese danish.",
            span: "$3.25",
        },
    ],
    [
        {
            h2: "Artisanal Dark Chocolate Truffles",
            p: "Luxurious dark chocolate truffles dusted with cocoa powder.",
            span: "$2.75",
        },
        {
            h2: "Handcrafted Praline Bonbons",
            p: "Praline-filled bonbons topped with a caramelized nut.",
            span: "$3.00",
        },
        {
            h2: "Pistachio and Sea Salt Toffee",
            p: "Crunchy toffee coated in pistachios and sea salt.",
            span: "$4.00",
        },
        {
            h2: "Raspberry White Chocolate Bark",
            p: "Creamy white chocolate with swirls of raspberry and a sprinkle of almonds.",
            span: "$3.50",
        },
        {
            h2: "Salted Caramel Brownie Bites",
            p: "Fudgy brownie bites with a caramel drizzle and a touch of sea salt.",
            span: "$2.50",
        },
    ],
];
var li3 = document.querySelectorAll(".third div:first-child ul li");
var ul3 = document.querySelector(".third div:last-child ul");

data3[0].forEach((element) => {
    ul3.innerHTML += `   <li>
                <h2>${element.h2}</h2>
                <p>${element.p}</p>
                <span>${element.span}</span>
            </li>
        `;
});

li3.forEach((li, ind) => {
    li.addEventListener("click", (e) => {
        li3.forEach((l) => {
            l.className = "";
        });
        li3[ind].className = "active";
        ul3.innerHTML = "";

        data3[ind].forEach((element) => {
            ul3.innerHTML += `   <li>
                    <h2>${element.h2}</h2>
                    <p>${element.p}</p>
                    <span>${element.span}</span>
                </li>
            `;
        });
    });
});

var inputs = document.querySelectorAll(".fifth div:last-child aside input");

inputs[1].addEventListener("click", (e) => {
    e.preventDefault();
    if (inputs[0].value != "") {
        var data = {
            email: inputs[0].value,
        };
        console.log(data);
        inputs[0].value = "";
    }
});

document.querySelector(".btn").addEventListener("click", () => {
    console.log(window.scrollY);
    var sy = window.scrollY;
    var inter = setInterval(() => {
        window.scrollTo(0, sy);
        sy -= 30;
        if (sy <= 0) {
            clearInterval(inter);
        }
    }, 1);
});
