// ===== Configuración (editar aquí) =====
// Fecha de lanzamiento en hora de Madrid. Invierno = +01:00, verano = +02:00.
// TODO: confirmar fecha y hora definitivas del lanzamiento.
const LAUNCH_DATE = new Date('2027-01-10T00:00:00+01:00');
const LAUNCHED_TEXT = 'Ya está aquí';
// =======================================

(function () {
  var box = document.getElementById('countdown');
  var title = document.getElementById('titular');
  if (!box) return;
  var els = {
    d: box.querySelector('[data-u="d"]'), h: box.querySelector('[data-u="h"]'),
    m: box.querySelector('[data-u="m"]'), s: box.querySelector('[data-u="s"]')
  };
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var timer;
  function tick() {
    var left = LAUNCH_DATE.getTime() - Date.now();
    if (isNaN(left) || left <= 0) {
      clearInterval(timer);
      var p = document.createElement('p');
      p.className = 'launched';
      p.textContent = LAUNCHED_TEXT;
      box.replaceWith(p);
      if (title) title.hidden = true;
      return;
    }
    var s = Math.floor(left / 1000);
    els.d.textContent = Math.floor(s / 86400);
    els.h.textContent = pad(Math.floor(s % 86400 / 3600));
    els.m.textContent = pad(Math.floor(s % 3600 / 60));
    els.s.textContent = pad(s % 60);
  }
  tick();
  timer = setInterval(tick, 1000);
})();
