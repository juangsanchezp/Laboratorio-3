document.getElementById("formContacto").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error("Error en la petición");

    const json = await response.json();
    localStorage.setItem("formularioContacto", JSON.stringify(json));
    alert("Formulario enviado correctamente");
    this.reset();
  } catch (error) {
    alert("Ocurrió un error al enviar el formulario.");
    console.error(error);
  }
});
