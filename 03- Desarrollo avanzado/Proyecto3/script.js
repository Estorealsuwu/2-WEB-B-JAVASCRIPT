const API_URL = "https://rickandmortyapi.com/api/character";
const container = document.getElementById("data-container");

function mostrarPersonajes(personajes) {
  container.innerHTML = "";

  personajes.forEach(personaje => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}">
      <h3>${personaje.name}</h3>
      <p>${personaje.species}</p>
    `;

    container.appendChild(card);
  });
}

async function obtenerConFetch() {
  try {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error("Error al obtener datos");
    }

    const data = await respuesta.json();

    mostrarPersonajes(data.results);

  } catch (error) {
    container.innerHTML = `<p>${error.message}</p>`;
  }
}

async function obtenerConAxios() {
  try {
    const respuesta = await axios.get(API_URL);

    mostrarPersonajes(respuesta.data.results);

  } catch (error) {
    container.innerHTML = `<p>Error al obtener datos</p>`;
  }
}

document
  .getElementById("fetch-btn")
  .addEventListener("click", obtenerConFetch);

document
  .getElementById("axios-btn")
  .addEventListener("click", obtenerConAxios);