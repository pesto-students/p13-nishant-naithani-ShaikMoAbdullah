function showAlert(alertId, alertWindow) {
  alertWindow.style.display = "block";
  const bootstrapAlert = document.querySelector("#" + alertId);
  const collapse = new bootstrap.Collapse(bootstrapAlert);
  collapse.show();
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
const alertWindow = document.getElementById("alert-window");
alertWindow.style.display = "none";
modalYesBtn.addEventListener("click", function () {
  const sendBtn = document.querySelector("#send-message-btn");
  sendBtn.style.display = "none";
  showAlert("conf-alert", alertWindow);
});
