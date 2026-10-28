// =========================
// TOSHI BEANS MAIN SCRIPT
// =========================


// =========================
// UPDATE CART COUNT
// =========================

function updateCartCount() {

    const cart =
        JSON.parse(
            localStorage.getItem(
                "toshiBeansCart"
            )
        ) || [];


    let totalQuantity = 0;


    cart.forEach(item => {

        totalQuantity +=
            item.quantity;

    });


    const cartButtons =
        document.querySelectorAll(
            ".order-nav-btn"
        );


    cartButtons.forEach(button => {

        if (totalQuantity > 0) {

            button.textContent =
                "CART (" +
                totalQuantity +
                ")";

        }

        else {

            button.textContent =
                "CART";

        }

    });

}


// =========================
// RUN AFTER PAGE LOADS
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

    }
);


// =========================
// UPDATE WHEN STORAGE CHANGES
// =========================

window.addEventListener(
    "storage",
    function () {

        updateCartCount();

    }
);