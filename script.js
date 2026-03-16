function pad(n) { return String(n).padStart(2, '0'); }

function to12(h24) {
  const h = h24 % 12;
  return pad(h === 0 ? 12 : h);
}

function getUnit(name) {
  return {
    wrap:  document.querySelector(`#${name} .digit-wrap`),
    digit: document.getElementById(`${name}-digit`),
    ghost: document.getElementById(`${name}-ghost`),
  };
}

const units = {
  hours:   getUnit('hours'),
  minutes: getUnit('minutes'),
  seconds: getUnit('seconds'),
};

const ampmEl = document.getElementById('ampm');
const prev = { hours: null, minutes: null, seconds: null };

function animate(unit, newVal) {
  const { wrap, digit, ghost } = unit;

  // Ghost takes the current value (will glitch out)
  ghost.textContent = digit.textContent;
  // Active digit gets the new value (will glitch in)
  digit.textContent = newVal;

  wrap.classList.remove('animating');
  void wrap.offsetWidth; // reflow
  wrap.classList.add('animating');

  setTimeout(() => wrap.classList.remove('animating'), 520);
}

function tick() {
  const now  = new Date();
  const h24  = now.getHours();
  const h    = to12(h24);
  const m    = pad(now.getMinutes());
  const s    = pad(now.getSeconds());
  const ampm = h24 < 12 ? 'AM' : 'PM';

  if (h !== prev.hours)   { animate(units.hours,   h); prev.hours   = h; }
  if (m !== prev.minutes) { animate(units.minutes, m); prev.minutes = m; }
  if (s !== prev.seconds) { animate(units.seconds, s); prev.seconds = s; }

  ampmEl.textContent = ampm;
}

// Init — no animation
(function init() {
  const now = new Date();
  const h24 = now.getHours();
  const vals = [to12(h24), pad(now.getMinutes()), pad(now.getSeconds())];
  ['hours', 'minutes', 'seconds'].forEach((name, i) => {
    units[name].digit.textContent = vals[i];
    units[name].ghost.textContent = vals[i];
    prev[name] = vals[i];
  });
  ampmEl.textContent = h24 < 12 ? 'AM' : 'PM';
})();

setInterval(tick, 1000);
