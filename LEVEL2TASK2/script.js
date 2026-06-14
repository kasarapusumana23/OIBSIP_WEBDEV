window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll(
        ".biography, .achievements, .quote-section"
    );

    sections.forEach(section => {

        const position =
            section.getBoundingClientRect().top;

        const screen =
            window.innerHeight;

        if (position < screen - 100) {

            section.style.opacity = "1";
            section.style.transform =
                "translateY(0)";
        }

    });

});