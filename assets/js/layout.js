(async function () {
  async function inject(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    el.innerHTML = await res.text();
  }

  // Inject header + footer
  await inject("siteHeader", "/partials/header.html");
  await inject("siteFooter", "/partials/footer.html");

  // Set year (footer)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mark active nav link based on current path
  const path = location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".nav-link").forEach((a) => {
    const href = (a.getAttribute("href") || "").replace(/\/+$/, "") || "/";
    if (href === path) a.classList.add("is-active");
  });

  // Hamburger behavior (works after injection)
  const wrap = document.getElementById("navWrap");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("siteNav");
  if (!wrap || !toggle || !nav) return;

  function setOpen(open) {
    wrap.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!wrap.classList.contains("is-open"));
  });

  // Click outside closes when pinned open
  document.addEventListener("click", (e) => {
    if (!wrap.classList.contains("is-open")) return;
    if (!wrap.contains(e.target)) setOpen(false);
  });

  // Esc closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Close after selecting a link on small screens
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 1100px)").matches) setOpen(false);
    });
  });
})();
