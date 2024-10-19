import express from "express";
import {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  deleteRestaurant,
} from "../data/restaurants.js";

const router = express.Router();

// Add routes here
router.post("/restaurants", (req, res) => {
  const newRestaurant = req.body;
  try {
    createRestaurant(newRestaurant);
    res.status(200).send({ message: "Restaurant created" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: "Failed to create restaurant" });
  }
});

router.delete("/restaurants/:id", (req, res) => {
  const id = parseInt(req.params.id);
  try {
    deleteRestaurant(id);
    res.status(200).send({ message: "Restaurant deleted" });
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: "Failed to delete restaurant" });
  }
});

export { router as backendRouter };
