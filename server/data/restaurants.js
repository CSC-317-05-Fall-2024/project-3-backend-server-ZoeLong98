// Fill this in
let restaurantData = [
  {
    id: 0,
    name: "Aura Lounge & Jazz Bar",
    phone: "+86 21 2020 1717",
    address: "No.8 Century Avenue 52/F",
    photo: "images/aura-lounge-night-view.jpg",
  },
  {
    id: 1,
    name: "ROOF",
    phone: "+86 21 5368 9537",
    address: "199 East Nanjing Road 29/F",
    photo: "images/roof.jpg",
  },
  {
    id: 2,
    name: "YONE",
    phone: "+86 21 5368 9531",
    address: "1199 Nanjing Road East, 27F",
    photo: "images/yone.jpg",
  },
];

let lastId = restaurantData.length;

const getNextId = () => {
  lastId += 1;
  return lastId;
};

// Get a list of restaurants
const getRestaurants = () => {
  return restaurantData;
};

// Get a restaurant by id
const getRestaurant = (id) => {
  return restaurantData.find((restaurant) => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (newRestaurant) => {
  const id = getNextId();
  const restaurant = { id, ...newRestaurant };
  restaurantData.push(restaurant);
  return restaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
  restaurantData = restaurantData.filter((restaurant) => restaurant.id !== id);
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant };
