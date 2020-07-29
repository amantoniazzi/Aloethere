const BASE_URL = 'http://localhost:3001';

function getPlants() {
  return fetch(BASE_URL + '/plants').then((response) => response.json());
}

export default { getPlants };
