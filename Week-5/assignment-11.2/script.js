function displayWindowProperties() {
  console.log(navigator.userAgent);
  console.log(screen.width, screen.height);
  console.log(location.href, location.pathname);
  console.log(localStorage);
  console.log(sessionStorage);

  localStorage.setItem("name", "Abdullah");
  localStorage.getItem("name");
  sessionStorage.setItem("city", "Bengaluru");
  sessionStorage.getItem("city");

  console.log(localStorage);
  console.log(sessionStorage);
}

displayWindowProperties();
