const Router = require('express');
const router = Router();
const plantController = require('./controllers/plants');
const userPlantController = require('./controllers/userPlants');

router.get('/plants', plantController.getPlants);
router.post('/plants', plantController.postPlant);
router.get('/plants/search', plantController.searchPlants);

router.post('/myplants', userPlantController.postUserPlant);
router.get('/myplants', userPlantController.getUserPlants);
router.get('/myplants/:id', userPlantController.getUserPlant);
router.delete('/myplants/:id', userPlantController.deleteUserPlant);
router.put('/myplants/:id', userPlantController.editUserPlant);

module.exports = router;