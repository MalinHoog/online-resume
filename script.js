const filterButtons = document.querySelectorAll(".filter-button");
const timelineCards = document.querySelectorAll(".timeline-card");
const cardToggles = document.querySelectorAll(".card-toggle");
const skillButtons = document.querySelectorAll(".pill");
const skillItems = document.querySelectorAll(".skill-filter-item");

const scrollTopButton = document.querySelector("#scroll-top");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    timelineCards.forEach((card) => {
      // Split the space-separated categories so filtering matches whole tags only.
      const categories = (card.dataset.category || "").split(/\s+/).filter(Boolean);
      const showCard = selectedFilter === "all" || categories.includes(selectedFilter);
      card.classList.toggle("hidden", !showCard);
    });
  });
});

cardToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".timeline-card");
    const isOpen = card.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

skillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedGroup = button.dataset.skillGroup;

    skillButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    skillItems.forEach((item) => {
      const group = item.dataset.skillGroup;
      const showItem = selectedGroup === "all" || selectedGroup === group;
      item.classList.toggle("hidden", !showItem);
    });
  });
});


if (scrollTopButton) {
  window.addEventListener("scroll", () => {
    // Reveal the button only after the user has moved a bit down the page.
    const shouldShow = window.scrollY > 280;
    scrollTopButton.classList.toggle("visible", shouldShow);
  });

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

