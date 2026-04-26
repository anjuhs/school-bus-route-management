// Fake users
const users = {
  admin: { password: "admin123", role: "admin" },
  student: { password: "student123", role: "student" }
};

// Login function
function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (users[u] && users[u].password === p) {
    localStorage.setItem("role", users[u].role);

    if (users[u].role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "student.html";
    }
  } else {
    alert("Invalid login");
  }
}

// Load routes
function getRoutes() {
  return JSON.parse(localStorage.getItem("routes")) || [];
}

// Save routes
function saveRoutes(routes) {
  localStorage.setItem("routes", JSON.stringify(routes));
}

// Display routes
function displayRoutes() {
  const container = document.getElementById("routes");
  if (!container) return;

  const routes = getRoutes();
  container.innerHTML = "";

  routes.forEach(r => {
    container.innerHTML += `
      <div>
        <h3>${r.route}</h3>
        <p>${r.driver}</p>
        <p>${r.time}</p>
      </div>
    `;
  });
}

// Admin add
function addRoute() {
  const route = document.getElementById("route").value;
  const driver = document.getElementById("driver").value;
  const time = document.getElementById("time").value;

  const routes = getRoutes();
  routes.push({ route, driver, time });

  saveRoutes(routes);
  displayRoutes();
}

// Auto load
window.onload = displayRoutes;