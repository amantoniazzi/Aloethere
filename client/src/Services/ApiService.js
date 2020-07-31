const BASE_URL = "https://localhost:3001";

function getPlants() {
  return fetch(BASE_URL + '/plants')
    .then(response => response.json())
}

function getMyPlants() {
  return fetch(BASE_URL + '/myplants')
    .then(response => response.json())
}

function postMyPlant(data) {
  console.log(data)
  return fetch(BASE_URL + '/myplants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
}

function getFilterPlants(type, light, water, humidity, airPurifying) {
  return fetch(`${BASE_URL}/plants/filter/?type=${type}&light=${light}&water=${water}&humidity=${humidity}&airPurifying=${airPurifying}`)
    .then(response => response.json())
}

export default { getPlants, getMyPlants, postMyPlant, getFilterPlants }