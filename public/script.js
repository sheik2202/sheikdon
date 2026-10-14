const clock = document.getElementById("clock");

function tick() {
  clock.textContent = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}
tick();
setInterval(tick, 500);
