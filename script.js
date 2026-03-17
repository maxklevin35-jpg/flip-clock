function updateSegment(unit, value) {
  const top = document.getElementById(`${unit}-top`);
  const bottom = document.getElementById(`${unit}-bottom`);
  const flipTop = document.getElementById(`${unit}-flip-top`);
  const flipBottom = document.getElementById(`${unit}-flip-bottom`);

  if (!top || !bottom || !flipTop || !flipBottom) return;

  // Set current value
  top.textContent = value;
  bottom.textContent = value;

  // Prepare flip animation
  flipTop.textContent = value;
  flipBottom.textContent = value;

  // Trigger animation
  flipTop.parentElement.classList.remove("animate");
  void flipTop.offsetWidth; // force reflow
  flipTop.parentElement.classList.add("animate");
}

function updateClock() {
  const now = new Date();

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  updateSegment("hours", h);
  updateSegment("minutes", m);
  updateSegment("seconds", s);
}

updateClock();
setInterval(updateClock, 1000);
