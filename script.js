document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Hamburger Navigation
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    if (hamburger && navbar) {
        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
            hamburger.classList.toggle("toggle");
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("active");
            });
        });
    }

    // 2. Sticky Header Shadow on Scroll
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
        }
    });

    // 3. Destination Category Filtering
    const filterButtons = document.querySelectorAll(".filter-btn");
    const destinationCards = document.querySelectorAll(".destination-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            destinationCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // 4. Travel Search Form Validation & Interaction
    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const destination = document.getElementById("searchDestination").value.trim();
            const date = document.getElementById("searchDate").value;
            const travelers = document.getElementById("searchTravelers").value;
            const category = document.getElementById("searchCategory").value;

            if (!destination || !date) {
                showModal("Search Alert", "Please fill in all search fields to discover your trip.");
                return;
            }

            showModal("Search Results", `Exploring matching packages for "${destination}" on ${date} for ${travelers} traveler(s) under category "${category}". (Frontend Demo)`);
        });
    }

    // 5. Modal Demo Popup Functionality
    const modal = document.getElementById("demoModal");
    const modalClose = document.getElementById("modalClose");
    const modalActionBtn = document.getElementById("modalActionBtn");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    function showModal(title, message) {
        if (modalTitle) modalTitle.textContent = title;
        if (modalText) modalText.textContent = message;
        if (modal) modal.classList.add("active");
    }

    function closeModal() {
        if (modal) modal.classList.remove("active");
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalActionBtn) modalActionBtn.addEventListener("click", closeModal);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // 6. Interactive Demo Buttons (Book Now, Login, Explore, View Details)
    const loginBtn = document.getElementById("loginBtn");
    const bookNowBtn = document.getElementById("bookNowBtn");
    const exploreOffersBtn = document.getElementById("exploreOffersBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            showModal("Login Demonstration", "User authentication is disabled in this frontend portfolio project.");
        });
    }

    if (bookNowBtn) {
        bookNowBtn.addEventListener("click", () => {
            showModal("Booking Demonstration", "You clicked 'Book Now'. This is a frontend demo with no live backend payment gateway.");
        });
    }

    if (exploreOffersBtn) {
        exploreOffersBtn.addEventListener("click", () => {
            showModal("Special Offers", "Seasonal promotions applied: Enjoy up to 20% off on all featured domestic and international travel packages!");
        });
    }

    // Destination card Explore buttons
    document.querySelectorAll(".explore-dest-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const dest = btn.getAttribute("data-destination");
            showModal(`Destination: ${dest}`, `Discovering curated experiences, tourist spots, and travel guides for ${dest}.`);
        });
    });

    // Package View Details and Book buttons
    document.querySelectorAll(".view-details-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const pkg = btn.getAttribute("data-package");
            showModal(`Package Details: ${pkg}`, `Viewing comprehensive day-by-day itinerary, inclusions, and hotel stay details for ${pkg}.`);
        });
    });

    document.querySelectorAll(".book-package-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const pkg = btn.getAttribute("data-package");
            showModal(`Book Package: ${pkg}`, `Initiating reservation demo for ${pkg}. Enjoy your hassle-free booking preview!`);
        });
    });

    document.querySelectorAll(".category-explore-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-category");
            showModal(`Travel Category: ${cat}`, `Filtering top recommended tours for ${cat}.`);
        });
    });

    // 7. Newsletter Email Validation
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterEmail = document.getElementById("newsletterEmail");
    const newsletterMessage = document.getElementById("newsletterMessage");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = newsletterEmail.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                newsletterMessage.textContent = "Please enter a valid email address.";
                newsletterMessage.className = "newsletter-msg error";
                return;
            }

            newsletterMessage.textContent = "Thank you for subscribing to Travelora inspiration!";
            newsletterMessage.className = "newsletter-msg success";
            newsletterEmail.value = "";

            setTimeout(() => {
                newsletterMessage.textContent = "";
            }, 5000);
        });
    }

    // 8. Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});