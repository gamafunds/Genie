// Signup
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("genieUser", JSON.stringify({ name, email, password }));
  window.location.href = "dashboard.html";
}

// Login
function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("genieUser"));

  if (user && user.email === email && user.password === password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

// Load user
function loadUser() {
  const user = JSON.parse(localStorage.getItem("genieUser"));
  if (user) {
    document.getElementById("welcomeUser").innerText = "Welcome, " + user.name;
  }
}

// Logout
function logout() {
  window.location.href = "index.html";
}

// Place Order (Email)
function placeOrder() {
  emailjs.init("YOUR_PUBLIC_KEY");

  const user = JSON.parse(localStorage.getItem("genieUser"));
  const order = document.getElementById("orderDetails").value;

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: user.name,
    from_email: user.email,
    message: order
  }).then(function() {
    document.getElementById("successMsg").innerText = "Order placed successfully! We will contact you soon.";
  }, function(error) {
    alert("Failed to send order.");
  });
}
