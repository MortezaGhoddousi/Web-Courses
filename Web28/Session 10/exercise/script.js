var div = document.querySelector(".forth div:nth-child(2)");
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
    div.innerHTML += `
    <main>
        <img src=${i} alt="image" />
        <span>+</span>
    </main>
    `;
});

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
