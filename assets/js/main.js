(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const searchInput = document.querySelector("#post-search");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const posts = [...document.querySelectorAll("[data-post]")];
  const emptyState = document.querySelector("#empty-state");
  const progress = document.querySelector(".reading-progress");
  let currentFilter = "all";

  const storeTheme = (theme) => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      return null;
    }
    return theme;
  };

  const syncTheme = () => {
    if (!themeButton) return;
    const isDark = root.dataset.theme === "dark";
    themeButton.setAttribute("aria-pressed", String(isDark));
  };

  const normalize = (value) => value.trim().toLowerCase();

  const applyFilters = () => {
    if (!posts.length) return;
    const query = normalize(searchInput?.value || "");
    let visibleCount = 0;

    posts.forEach((post) => {
      const tags = post.dataset.tags || "";
      const title = post.dataset.title || "";
      const text = normalize(`${title} ${tags} ${post.textContent || ""}`);
      const matchesFilter = currentFilter === "all" || tags.includes(currentFilter);
      const matchesSearch = query.length === 0 || text.includes(query);
      const isVisible = matchesFilter && matchesSearch;

      post.hidden = !isVisible;
      visibleCount += isVisible ? 1 : 0;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  };

  const updateProgress = () => {
    if (!progress) return;
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = height > 0 ? Math.min(scrollTop / height, 1) : 0;
    progress.style.width = `${ratio * 100}%`;
  };

  themeButton?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    storeTheme(nextTheme);
    syncTheme();
  });

  searchInput?.addEventListener("input", applyFilters);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter || "all";
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      applyFilters();
    });
  });

  window.addEventListener("scroll", updateProgress, { passive: true });
  syncTheme();
  applyFilters();
  updateProgress();
})();
