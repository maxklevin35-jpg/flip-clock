function updateClock() {

  const now = new Date();

  const h = String(now.getHours()).padStart(2,"0");
  const m = String(now.getMinutes()).padStart(2,"0");
  const s = String(now.getSeconds()).padStart(2,"0");

  const ids = [
    ["hours-top",h],["hours-bottom",h],
    ["minutes-top",m],["minutes-bottom",m],
    ["seconds-top",s],["seconds-bottom",s]
  ];

  ids.forEach(([id,val])=>{
    const el = document.getElementById(id);
    if(el) el.textContent = val;
  });

}

updateClock();
setInterval(updateClock,1000);
