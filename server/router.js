const Router = require("express");
const router = Router();
const plantController = require("./controllers/plants");
const userPlantController = require("./controllers/userPlants");
const subscriptionHandler = require("./subscriptionHandler");

router.get("api/plants", plantController.getPlants);
router.post("api/plants", plantController.postPlant);
router.put("api/plants/:id", plantController.editPlant);
router.get("api/plants/search", plantController.searchPlants);
router.get("api/plants/filter", plantController.filterPlants);

router.post("api/myplants", userPlantController.postUserPlant);
router.get("api/myplants", userPlantController.getUserPlants);
router.get("api/myplants/:id", userPlantController.getUserPlant);
router.delete("api/myplants/:id", userPlantController.deleteUserPlant);
router.put("api/myplants", userPlantController.editUserPlant);

router.post(
  "api/subscription",
  subscriptionHandler.handlePushNotificationSubscription
);
router.get("api/subscription/:id", subscriptionHandler.sendPushNotification);

router.get("*", (req, res) => {
  res.sendFile("../client/build/index.html");
});

module.exports = router;
