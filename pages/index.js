import Head from "next/head";
import { Fragment } from "react";

const tabs = [
  { name: "Your", href: "#", current: false },
  { name: "All", href: "#", current: true },
  { name: "Blocked", href: "#", current: false },
];

const cards = [
  {
    name: "Mixmax",
    budget_name: "Software subscription",
    owner_id: 1,
    spent: {
      value: 100,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9 feb",
    limit: 100,
    status: "active",
  },
  {
    name: "Quickbooks",
    budget_name: "Software subscription",
    owner_id: 2,
    spent: {
      value: 100,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "9 feb",
    limit: 100,
    status: "active",
  },
  {
    name: "Motion",
    budget_name: "Software subscription",
    owner_id: 3,
    spent: {
      value: 100,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9 feb",
    limit: 100,
    status: "active",
  },
  {
    name: "Pandadoc",
    budget_name: "Software subscription",
    owner_id: 4,
    spent: {
      value: 100,
      currency: "SGD",
    },
    available_to_spend: {
      value: 1000,
      currency: "SGD",
    },
    card_type: "burner",
    expiry: "9 feb",
    limit: 100,
    status: "active",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-poppins">
      <div className="lg:flex lg:items-center lg:justify-between mb-5">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Virtual Cards
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 rounded-sm shadow-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              + Virtual Card
            </button>
          </span>
        </div>
      </div>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-pink-500 text-pink-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-10 md:gap-20"
      >
        {cards.map((card) => (
          <li
            key={card.owner_id}
            className="col-span-1 bg-white rounded-sm shadow-md divide-y divide-gray-200"
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
                <div className="flex flex-col items-center justify-between">
                  <img
                    className="w-10 h-10 bg-pink-50 rounded-full flex-shrink-0 shadow-md p-2"
                    src={`${
                      card.card_type === "burner"
                        ? "/burner.svg"
                        : "subscription.svg"
                    }`}
                    alt=""
                  />
                  <p className="my-1 mb-2 text-gray-500 text-sm truncate capitalize">
                    {card.card_type === "burner"
                      ? `Expires: ${card.expiry}`
                      : ""}
                  </p>
                </div>
              </div>
              <div className="w-full mt-4">
                <div className="p-2 rounded-full bg-gray-100 shadow-sm mb-4"></div>
                <div className="flex gap-2 flex-col">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="inline-block h-3 w-3 rounded-full ring-2 ring-white bg-pink-500 mr-2" />
                      <p className="text-sm">Spent</p>
                    </div>
                    <div>125 SGD</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="inline-block h-3 w-3 rounded-full ring-2 ring-white bg-green-500 mr-2" />
                      <p className="text-sm">Available to Spend</p>
                    </div>
                    <div>125 SGD</div>
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
