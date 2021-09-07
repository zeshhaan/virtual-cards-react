import React, { useState, Fragment } from "react";
import Filter from "../components/Nav/Filter";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Home() {
  // get cards from db
  let cards = require("../data/users.json");
  const filtered = cards.filter((card) => card.card_type !== "burner");
  console.log(filtered);
  const [checkedType, setCheckedType] = useState(cards);
  const handleClick = () => setCheckedType(!checked);

  const search = cards.filter((card) => card.card_type !== "burner");
  const [name, setName] = useState("");
  const [foundCards, setFoundCards] = useState(cards);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = cards.filter((card) => {
        return card.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundCards(results);
    } else {
      setFoundCards(cards);
      // If the text field is empty, show all cards
    }

    setName(keyword);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      {/* filter and search components */}

      <div className="flex justify-between items-center  mt-6">
        {/* search */}
        <div>
          <div className="relative flex items-center ">
            <input
              type="text"
              name="search"
              id="search"
              onChange={filter}
              value={name}
              className="shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
        {/* filter */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="w-full max-w-sm px-4 ">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-gray-500 hover:text-gray-700`}
                  >
                    <span>Filter</span>
                    <ChevronDownIcon
                      className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-8 bg-white p-7 ">
                          <div>
                            <div className="relative flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="burner"
                                  aria-describedby="burner-description"
                                  name="burner"
                                  type="checkbox"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  onClick={handleClick}
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="burner"
                                  className="font-medium text-gray-700"
                                >
                                  Burner Card
                                </label>
                                <p
                                  id="burner-description"
                                  className="text-gray-500"
                                >
                                  Filter cards which is of type burner
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="relative flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="subscription"
                                  aria-describedby="subscription-description"
                                  name="subscription"
                                  type="checkbox"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  onClick={handleClick}
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="subscription"
                                  className="font-medium text-gray-700"
                                >
                                  Subscription Card
                                </label>
                                <p
                                  id="subscription-description"
                                  className="text-gray-500"
                                >
                                  Filter cards which is of type subscription
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
      {/* card components */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-4 md:gap-20"
      >
        {foundCards && foundCards.length > 0
          ? foundCards.map((card) => (
              <li
                key={card.id}
                className="col-span-1 bg-white rounded-sm border border-gray-100 shadow-sm divide-y divide-gray-200"
              >
                <div className="p-6 gap-2">
                  <div className="w-full flex items-center justify-between ">
                    <div className="flex-1 truncate">
                      <h3 className="text-gray-900 text-xl font-medium truncate">
                        {card.name}
                      </h3>
                      <p className="my-1 mb-2 text-gray-500 text-sm truncate capitalize">
                        {card.budget_name}
                      </p>
                      <span className="flex-shrink-0 inline-block px-3 py-0.2 text-gray-500 text-xs font-medium rounded-md border-2 border-gray-300 uppercase">
                        {card.card_type}
                      </span>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <img
                        className="w-10 h-10 bg-pink-50 rounded-full flex-shrink-0 shadow-md p-2"
                        src={`${
                          card.card_type == "subscription"
                            ? "/burner.svg"
                            : "/subscription.svg"
                        }`}
                        alt={card.card_type}
                      />
                      <p className="mt-4 text-gray-500 text-sm truncate capitalize">
                        {card.card_type === "burner"
                          ? `Expires: ${card.expiry}`
                          : `${new Date().toLocaleString("default", {
                              month: "long",
                            })} Limit: ${card.available_to_spend.value} ${
                              card.available_to_spend.currency
                            }`}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <div className="flex rounded-full bg-gray-100 shadow-sm mb-4 overflow-hidden">
                      <div
                        className="bg-pink-500 h-4"
                        style={{
                          flexGrow: `${
                            card.spent.value === 0
                              ? 0
                              : `calc(${card.spent.value}/${
                                  card.spent.value +
                                  card.available_to_spend.value
                                })`
                          }`,
                        }}
                      ></div>
                      <div
                        className="bg-green-500 h-4"
                        style={{
                          flexGrow: `${
                            card.available_to_spend.value === 0
                              ? 0
                              : `calc(${card.available_to_spend.value}/${
                                  card.spent.value +
                                  card.available_to_spend.value
                                })`
                          }`,
                        }}
                      ></div>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full ring-2 ring-white bg-pink-500 mr-2" />
                          <p className="text-sm">Spent</p>
                        </div>
                        <div>
                          {card.spent.value} {card.spent.currency}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full ring-2 ring-white bg-green-500 mr-2" />
                          <p className="text-sm">Available to Spend</p>
                        </div>
                        <div>
                          {card.available_to_spend.value}{" "}
                          {card.available_to_spend.currency}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          : cards.map((card) => (
              <li
                key={card.id}
                className="col-span-1 bg-white rounded-sm border border-gray-100 shadow-sm divide-y divide-gray-200"
              >
                <div className="p-6 gap-2">
                  <div className="w-full flex items-center justify-between ">
                    <div className="flex-1 truncate">
                      <h3 className="text-gray-900 text-xl font-medium truncate">
                        {card.name}
                      </h3>
                      <p className="my-1 mb-2 text-gray-500 text-sm truncate capitalize">
                        {card.budget_name}
                      </p>
                      <span className="flex-shrink-0 inline-block px-3 py-0.2 text-gray-500 text-xs font-medium rounded-md border-2 border-gray-300 uppercase">
                        {card.card_type}
                      </span>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <img
                        className="w-10 h-10 bg-pink-50 rounded-full flex-shrink-0 shadow-md p-2"
                        src={`${
                          card.card_type == "subscription"
                            ? "/burner.svg"
                            : "/subscription.svg"
                        }`}
                        alt={card.card_type}
                      />
                      <p className="mt-4 text-gray-500 text-sm truncate capitalize">
                        {card.card_type === "burner"
                          ? `Expires: ${card.expiry}`
                          : `${new Date().toLocaleString("default", {
                              month: "long",
                            })} Limit: ${card.available_to_spend.value} ${
                              card.available_to_spend.currency
                            }`}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-4">
                    <div className="flex rounded-full bg-gray-100 shadow-sm mb-4 overflow-hidden">
                      <div
                        className="bg-pink-500 h-4"
                        style={{
                          flexGrow: `${
                            card.spent.value === 0
                              ? 0
                              : `calc(${card.spent.value}/${
                                  card.spent.value +
                                  card.available_to_spend.value
                                })`
                          }`,
                        }}
                      ></div>
                      <div
                        className="bg-green-500 h-4"
                        style={{
                          flexGrow: `${
                            card.available_to_spend.value === 0
                              ? 0
                              : `calc(${card.available_to_spend.value}/${
                                  card.spent.value +
                                  card.available_to_spend.value
                                })`
                          }`,
                        }}
                      ></div>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full ring-2 ring-white bg-pink-500 mr-2" />
                          <p className="text-sm">Spent</p>
                        </div>
                        <div>
                          {card.spent.value} {card.spent.currency}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <span className="inline-block h-3 w-3 rounded-full ring-2 ring-white bg-green-500 mr-2" />
                          <p className="text-sm">Available to Spend</p>
                        </div>
                        <div>
                          {card.available_to_spend.value}{" "}
                          {card.available_to_spend.currency}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}
