const fs = require("fs");

let users = require("../data/users.json");

export const usersRepo = {
  getAll,
  getById,
  create,
};

function getAll() {
  return users;
}

function getById(id) {
  return users.find((x) => x.id.toString() === id.toString());
}

function create({ name, budget_name, value, card_type }) {
  const user = { name, budget_name, available_to_spend: { value }, card_type };
  console.log(user);

  user.limit = user.available_to_spend.value;
  user.owner_id = "1";
  user.status = "active";
  user.spent = {
    value: 0,
    currency: "SGD",
  };
  user.available_to_spend.currency = "SGD";

  // generate new user id
  user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;

  // set date created and updated
  user.dateCreated = new Date().toISOString();
  const days = 28;
  const date = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  const options = { month: "short", day: "numeric" };
  user.expiry = date.toLocaleDateString("en", options);

  // add and save user
  users.push(user);
  saveData();
}

// private helper functions

function saveData() {
  fs.writeFileSync("data/users.json", JSON.stringify(users, null, 4));
}
