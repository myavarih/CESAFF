const inputFields = document.querySelectorAll(".input-field");

inputFields.forEach((field) => {
  field.addEventListener("focus", () => {
    field.classList.add("blinking-cursor");
  });
  field.addEventListener("blur", () => {
    field.classList.remove("blinking-cursor");
  });
});
