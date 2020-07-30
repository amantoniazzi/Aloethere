const BASE_URL = "https://localhost:3001";

function getPlants() {
  return fetch(BASE_URL + '/plants')
    .then(response => response.json())
}

function getMyPlants() {
  return fetch(BASE_URL + '/myplants')
    .then(response => response.json())
}

export default { getPlants, getMyPlants }