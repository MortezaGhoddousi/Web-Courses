window.onload = async () => {
    if (
        window.location.href ==
        "file:///C:/Users/pc1/Desktop/Web%20Course/Web31/Session%2020/client/index.html"
    ) {
        const response = await fetch("http://localhost:5000/api/products");

        const products = await response.json();

        const article = document.querySelector("#products-container");

        article.innerHTML = "";

        products.forEach((p) => {
            article.innerHTML =
                article.innerHTML +
                `
                <div class="product-card">
                    <img src=${p.image} alt="product_image" />
                        <div class="product-info">
                            <h2>${p.title}</h2>
    
                            <p class="description">
                                ${p.description}
                            </p>
    
                            <span class="category">${p.category}</span>
    
                            <p class="price">$${p.price}</p>
    
                            <p class="stock">Stock: ${p.stock}</p>
                        </div>
    
                </div>
                `;
        });
    } else {
        const form = document.querySelector("#create-product-form");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                title: form.children[0].children[1].value,
                price: form.children[1].children[1].value,
                category: form.children[2].children[1].value,
                image: form.children[3].children[1].value,
                description: form.children[4].children[1].value,
                stock: form.children[5].children[1].value,
            };

            if (
                data.title == "" ||
                data.price == "" ||
                data.category == "" ||
                data.image == "" ||
                data.description == "" ||
                data.stock == ""
            ) {
                alert("Data required!");
                return;
            }

            try {
                const response = await fetch(
                    "http://localhost:5000/api/products",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    },
                );

                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }

                const result = await response.json();
                console.log("Product created:", result);

                window.location.href = "file:///C:/Users/pc1/Desktop/Web%20Course/Web31/Session%2020/client/index.html";

            } catch (error) {
                console.error("Error sending product:", error);
            }
        });
    }
};
