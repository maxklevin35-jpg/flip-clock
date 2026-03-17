function animate(el, value) {
  if (el.textContent === value) return;

  el.classList.add("change");

  setTimeout(() => {
    el.textContent = value;
    el.classList.remove("change");
  }, 150);
}

function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;

  h = String(h).padStart(2, "0");
  m = String(m).padStart(2, "0");
  s = String(s).padStart(2, "0");

  animate(document.getElementById("hours"), h);
  animate(document.getElementById("minutes"), m);
  animate(document.getElementById("seconds"), s);

  document.getElementById("ampm").textContent = ampm;
}

updateClock();
setInterval(updateClock, 1000);
