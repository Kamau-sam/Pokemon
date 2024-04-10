document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const resultsSection = document.getElementById('results-section');

  searchButton.addEventListener('click', function() {
      const pokemonName = searchInput.value.toLowerCase().trim();
      if (pokemonName) {
          fetchPokemon(pokemonName);
      } else {
          alert('Please enter a Pokemon name');
      }
  });

  async function fetchPokemon(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        alert(error.message);
    }
}