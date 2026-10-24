document.addEventListener("DOMContentLoaded", () => {
    // 1. INGREIDIENT TAB SWITCHER
    const tabButtons = document.querySelectorAll(".tab-btn");
    const ingredientName = document.querySelector(".ingredient-name");
    const ingredientDes = document.querySelector(".ingredient-description");

    const ingredientData = {
        vitaminc: {
            name: "Vitamin C (L-Ascorbic Acid)",
            description: "A potent antioxidant that brightens skin tone, reduces dark spots, and stimulates collagen production for a firm, youthful complexion."
        },
        hyaluronic: {
            name: "Hyaluronic Acid",
            description: "Deeply hydrates by drawing up to 1,000 times its weight in water into the skin, plumping fine lines and leaving a supple glow."
        },
        collagen: {
            name: "Hydrolyzed Collagen",
            description: "Restores skin elasticity, smooths rough texture, and works synergistically with Vitamin C to strengthen skin structure."
        }
    };

    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            tabButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const ingredientKey = btn.dataset.ingredient;
            if (ingredientData[ingredientKey]) {
                ingredientName.textContent = ingredientData[ingredientKey].name;
                ingredientDes.textContent = ingredientData[ingredientKey].description;
            }
        });
    });

    // FAQ ACCORDION

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((button) => {
        button.addEventListener("click", () => {
            const faqItem = button.parentElement;
            const isOpen = faqItem.classList.contains("active");

            document.querySelectorAll(".faq-item").forEach((item) => {
                item.classList.remove("active");
            });

            if (!isOpen) {
                faqItem.classList.add("active");
            }
        });
    });
});