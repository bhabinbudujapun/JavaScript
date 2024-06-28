document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formData");
  const inputData = document.getElementById("textInput");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (inputData.value === "") {
      alert("Could you please, type some data");
    } else {
      const qrImg = document.getElementById("qrImg");
      const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData.value}`;
      qrImg.src = URL;
    }
  });
});
