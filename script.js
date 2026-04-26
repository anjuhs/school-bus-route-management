function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Simple role logic
  if (user === "admin" && pass === "admin123") {
    window.location.href = "admin.html";
  } else if (user === "student" && pass === "student123") {
    window.location.href = "student.html";
  } else {
    alert("Invalid login");
  }
}

// Sample data
let routes = [
  {
    route: "Route A",
    driver: "John",
    time: "8:00 AM"
  },
  {
    route: "Route B",
    driver: "Mike",
    time: "8:30 AM"
  }
];

// Display routes
function displayRoutes() {
  const container = document.getElementById("routes");
  if (!container) return;

  container.innerHTML = "";

  routes.forEach(r => {
    container.innerHTML += `
      <div class="route">
        <h3>${r.route}</h3>
        <p>Driver: ${r.driver}</p>
        <p>Time: ${r.time}</p>
      </div>
    `;
  });
}

// Add route (admin)
function addRoute() {
  const route = document.getElementById("route").value;
  const driver = document.getElementById("driver").value;
  const time = document.getElementById("time").value;

  routes.push({ route, driver, time });
  displayRoutes();
}