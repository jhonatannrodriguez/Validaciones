document.addEventListener("DOMContentLoaded", function () {
  (function () {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();

  const labelCheck = document.getElementById("labelCheck");
  const check = document.getElementById("invalidCheck");
  const terminos = document.getElementById("terminos");
  const btnTerminos = document.getElementById("btnTerminos");
  const registro = document.getElementById("registro");
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const password = document.getElementById("password");

  registro.addEventListener("click", function () {
    // Validación de términos y condiciones
    if (!check.checked) {
      btnTerminos.classList.add("text-danger");
      terminos.innerHTML = `<p class="text-danger">Debe aceptar los términos de servicio</p>`;
    } else {
      btnTerminos.classList.remove("text-danger");
      terminos.innerHTML = "";
    }
  });

  password2.addEventListener("input", function () {
    // Validación de contraseñas
    if (password1.value !== password2.value) {
      password.innerHTML = `<p class="text-danger">Debe ser igual a "contraseña"</p>`;
    } else {
      password.innerHTML = "";
    }
  });

  check.addEventListener("input", function () {
    //casilla de verificación de términos y condiciones
    if (check.checked) {
      terminos.innerHTML = "";
      btnTerminos.classList.remove("text-danger");
      labelCheck.classList.remove("text-danger");
      labelCheck.classList.add("text-success");
    } else {
      btnTerminos.classList.add("text-danger");
      terminos.innerHTML = `<p class="text-danger">Debe aceptar los términos de servicio</p>`;
      labelCheck.classList.add("text-danger");
    }
  });
});
