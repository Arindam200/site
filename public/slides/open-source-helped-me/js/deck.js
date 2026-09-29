(() => {
  const stage = document.querySelector(".stage");
  const slides = [...document.querySelectorAll(".slide")];
  const bar = document.querySelector(".hud .bar");
  const counter = document.querySelector(".counter");
  const overview = document.querySelector(".overview");
  const list = overview.querySelector("ol");
  let i = 0;

  function fit() {
    const s = Math.min(innerWidth / 1920, innerHeight / 1080);
    stage.style.transform = `scale(${s})`;
  }

  function go(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach((el, k) => el.classList.toggle("active", k === i));
    bar.style.width = ((i + 1) / slides.length) * 100 + "%";
    counter.textContent = `${i + 1} / ${slides.length}`;
    history.replaceState(null, "", "#" + (i + 1));
    list.querySelectorAll("li").forEach((li, k) => li.classList.toggle("cur", k === i));
  }

  slides.forEach((el, k) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${String(k + 1).padStart(2, "0")}</span>${el.dataset.title || "Slide " + (k + 1)}`;
    li.onclick = () => { overview.classList.remove("open"); go(k); };
    list.appendChild(li);
  });

  addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (["ArrowRight", "ArrowDown", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); go(i + 1); }
    else if (["ArrowLeft", "ArrowUp", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); go(i - 1); }
    else if (k === "Home") go(0);
    else if (k === "End") go(slides.length - 1);
    else if (k === "f" || k === "F") { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.(); }
    else if (k === "o" || k === "O" || k === "Escape") overview.classList.toggle("open", k !== "Escape" && !overview.classList.contains("open"));
  });

  document.querySelector(".zone.l").onclick = () => go(i - 1);
  document.querySelector(".zone.r").onclick = () => go(i + 1);

  let x0 = null;
  addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  addEventListener("resize", fit);
  addEventListener("hashchange", () => go((parseInt(location.hash.slice(1), 10) || 1) - 1));
  fit();
  go((parseInt(location.hash.slice(1), 10) || 1) - 1);
})();
