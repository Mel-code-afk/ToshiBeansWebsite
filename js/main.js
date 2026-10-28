// =========================
// TOSHI BEANS MAIN SCRIPT
// =========================


// =========================
// ADD HEADER LOGO
// =========================

function setupHeaderLogo() {

    const brands =
        document.querySelectorAll(
            ".site-header .brand"
        );


    brands.forEach(brand => {

        if (
            brand.querySelector(
                ".header-logo-img"
            )
        ) {
            return;
        }


        brand.innerHTML = `

            <img
                src="images/logo.jpg"
                alt="Toshi Beans Logo"
                class="header-logo-img"
            >

            <span class="header-brand-text">
                TOSHI BEANS
            </span>

        `;

    });

}


// =========================
// MOBILE NAVIGATION
// =========================

function setupMobileNavigation() {

    const headers =
        document.querySelectorAll(
            ".site-header"
        );


    headers.forEach(header => {

        const container =
            header.querySelector(
                ".header-container"
            );


        const navigation =
            header.querySelector(
                ".main-nav"
            );


        if (
            !container ||
            !navigation
        ) {
            return;
        }


        if (
            container.querySelector(
                ".mobile-menu-toggle"
            )
        ) {
            return;
        }


        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "mobile-menu-toggle";


        button.setAttribute(
            "aria-label",
            "Open menu"
        );


        button.setAttribute(
            "aria-expanded",
            "false"
        );


        button.innerHTML = `

            <span></span>
            <span></span>
            <span></span>

        `;


        container.insertBefore(
            button,
            navigation
        );


        // OPEN / CLOSE
        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const opened =
                    header.classList.toggle(
                        "mobile-menu-open"
                    );


                button.setAttribute(
                    "aria-expanded",
                    opened
                        ? "true"
                        : "false"
                );


                button.setAttribute(
                    "aria-label",
                    opened
                        ? "Close menu"
                        : "Open menu"
                );

            }
        );


        // CLOSE AFTER CLICKING LINK
        navigation
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    function () {

                        closeMobileMenu(
                            header,
                            button
                        );

                    }
                );

            });


        // CLICK OUTSIDE MENU
        document.addEventListener(
            "click",
            function (event) {

                if (
                    !header.contains(
                        event.target
                    )
                ) {

                    closeMobileMenu(
                        header,
                        button
                    );

                }

            }
        );

    });


    // ESC KEY
    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                document
                    .querySelectorAll(
                        ".site-header"
                    )
                    .forEach(header => {

                        const button =
                            header.querySelector(
                                ".mobile-menu-toggle"
                            );


                        if (button) {

                            closeMobileMenu(
                                header,
                                button
                            );

                        }

                    });

            }

        }
    );

}


// =========================
// CLOSE MOBILE MENU
// =========================

function closeMobileMenu(
    header,
    button
) {

    header.classList.remove(
        "mobile-menu-open"
    );


    button.setAttribute(
        "aria-expanded",
        "false"
    );


    button.setAttribute(
        "aria-label",
        "Open menu"
    );

}


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
            Number(item.quantity) || 0;

    });


    const cartButtons =
        document.querySelectorAll(
            ".order-nav-btn"
        );


    cartButtons.forEach(button => {

        if (
            totalQuantity > 0
        ) {

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
// PAGE LOADED
// =========================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupHeaderLogo();

        setupMobileNavigation();

        updateCartCount();

    }
);


// =========================
// STORAGE CHANGES
// =========================

window.addEventListener(
    "storage",
    function () {

        updateCartCount();

    }
);


// =========================
// DESKTOP RESIZE
// =========================

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 700
        ) {

            document
                .querySelectorAll(
                    ".site-header"
                )
                .forEach(header => {

                    const button =
                        header.querySelector(
                            ".mobile-menu-toggle"
                        );


                    if (button) {

                        closeMobileMenu(
                            header,
                            button
                        );

                    }

                });

        }

    }
);