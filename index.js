// Event to Wait for the document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("search-input");
  const resultsSection = document.getElementById("results-section");

  searchButton.addEventListener("click", function () {
    const pokemonName = searchInput.value.toLowerCase().trim();
    if (pokemonName) {
      fetchPokemon(pokemonName);
    } else {
      alert("Please enter a Pokemon name");
    }
  });
  // Adding a keydown event listener to trigger search on pressing 'Enter'
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const pokemonName = searchInput.value.toLowerCase();
      if (pokemonName) {
        fetchPokemon(pokemonName);
      } else {
        alert("Please enter a Pokemon Name");
      }
    }
  });
  // Asynchronous function to fetch Pokemon data from the PokeAPI
  async function fetchPokemon(pokemonName) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      displayResults(data);
    } catch (error) {
      alert(error.message);
    }
    // Function to display the fetched Pokemon data in the results section
  }
  function displayResults(pokemon) {
    resultsSection.innerHTML = ""; // Clear previous results
    const pokemonCard = document.createElement("div");
    pokemonCard.innerHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
      <p>Height: ${pokemon.height}</p>
      <p>Weight: ${pokemon.weight}</p>
      <button class="like-button">Like</button>
  `;
    // Set the inner HTML of the div to display Pokemon details and a 'Like' button
    resultsSection.appendChild(pokemonCard);
    const likeButton = pokemonCard.querySelector(".like-button");
    likeButton.addEventListener("click", () => {
      alert(`You liked ${pokemon.name}!`);
      likeButton.style.backgroundColor = "red"; //Change the button's background color to red after liking
    });
  }
});
