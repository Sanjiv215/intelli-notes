

const searchItems = [
    { name: "HTML", link: "sem1.html" },
    { name: "CSS", link: "sem1.html" },
    { name: "JavaScript", link: "sem1.html" },
    { name: "Python", link: "sem1.html#python-section" },
    { name: "Maths", link: "sem1.html" },
    { name: "Personality Development", link: "sem1.html" },
    { name: "Yoga", link: "sem1.html" },
    { name: "UHV", link: "sem1.html" },
    { name: "EVS", link: "sem1.html" }
];


// ---------- Search Logic -------------

const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    suggestionsBox.innerHTML = "";

    if (query === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    const filtered = searchItems.filter(item =>
        item.name.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    suggestionsBox.style.display = "block";

    filtered.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent = result.name;

        // click event → open page
        div.addEventListener("click", () => {
            window.location.href = result.link;
        });

        suggestionsBox.appendChild(div);
    });
});


// hide dropdown when clicking outside
document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target)) {
        suggestionsBox.style.display = "none";
    }
});
