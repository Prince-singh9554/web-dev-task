document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category-select');
    const searchInput = document.getElementById('search-input');
  
    categorySelect.addEventListener('change', () => {
      const selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
      searchInput.placeholder = `Search in ${selectedCategory}...`;
    });
  });