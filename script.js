let routes = [];

// Load routes
fetch("data/routes.json")
  .then(res => res.json())
  .then(data => {
    routes = data;
    displayRoutes();
  });

function displayRoutes() {
  const container = document.getElementById("routes");
  if (!container) return;

  container.innerHTML = "";

  routes.forEach(r => {
    container.innerHTML += `
      <div class="route">
        <h3>${r.route}</h3>
        <p>Driver: ${r.driver}</p>
        <p>Stops: ${r.stops.join(", ")}</p>
        <p>Time: ${r.time}</p>
      </div>
    `;
  });
}

// Admin add route
function addRoute() {
  const route = document.getElementById("route").value;
  const driver = document.getElementById("driver").value;
  const time = document.getElementById("time").value;

  const newRoute = {
    route,
    driver,
    stops: ["New Stop"],
    time
  };

  routes.push(newRoute);
  displayRoutes();
}