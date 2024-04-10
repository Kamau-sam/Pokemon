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