// Initialize Leaflet map with a dark tile layer once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Default view coordinates centered on Vancouver, BC
  const initialCoords = [49.2827, -123.1207];
  const map = L.map('map', {
    zoomControl: true,
    attributionControl: true,
  }).setView(initialCoords, 12);

  // Dark-themed tile layer from CartoDB (free and does not require API keys)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  // Grab references to the filter elements
  const searchButton = document.getElementById('searchButton');
  const radiusInput = document.getElementById('radius');
  const dateInput = document.getElementById('date');
  const keywordInput = document.getElementById('keyword');
  const addressInput = document.getElementById('address');

  // Basic event listener for the search button
  searchButton.addEventListener('click', () => {
    // Extract values from inputs. These elements are HTMLInputElements, but explicit
    // casting is unnecessary in plain JavaScript.
    const radius = radiusInput.value;
    const date = dateInput.value;
    const keyword = keywordInput.value;
    const address = addressInput.value;

    // For now, just log the values. Later this should trigger filtering and map updates.
    console.log({ radius, date, keyword, address });

    // TODO: Implement geocoding and filtering logic here to update the map
  });
});