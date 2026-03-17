function updateUnit(unit, value) {
  const current = document.getElementById(unit);
  const ghost = document.getElementById(`${unit}-ghost`);
  const wrap = document.getElementById(`${unit}-wrap`);

  if (!current || !ghost || !wrap) return;

  if (current.textContent === value) return;

  // old value goes to ghost
  ghost.textContent = current.textContent;

  // new value
  current.textContent = value;

  // restart animation
  wrap.classList.remove("animating");
  void wrap.offsetWidth;
  wrap.classList.add("animating");
}

function updateClock() {
  const now = new Date();

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  updateUnit("hours", h);
  updateUnit("minutes", m);
  updateUnit("seconds", s);
}

updateClock();
setInterval(updateClock, 1000);
