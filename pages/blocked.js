import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  const cards = [
    {
      name: "Mixmax",
      budget_name: "Software subscription",
      owner_id: 1,
      id: 1,
      spent: {
        value: 0,
        currency: "SGD",
      },
      available_to_spend: {
        value: 9,
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
      id: 2,
      spent: {
        value: 5,
        currency: "SGD",
      },
      available_to_spend: {
        value: 1,
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
      id: 3,
      spent: {
        value: 0,
        currency: "SGD",
      },
      available_to_spend: {
        value: 15,
        currency: "SGD",
      },
      card_type: "subscription",
      expiry: "9 feb",
      limit: 100,
      status: "active",
    },
    {
      name: "Pandadoc",
      budget_name: "Software subscription",
      owner_id: 4,
      id: 4,
      spent: {
        value: 148,
        currency: "SGD",
      },
      available_to_spend: {
        value: 30,
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
  return (
    <Nav>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-10 md:gap-20"
      >
        {cards.map((card) => (
          <li
            key={card.owner_id}
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
                      card.card_type === "burner"
                        ? "/burner.svg"
                        : "subscription.svg"
                    }`}
                    alt=""
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
                              card.spent.value + card.available_to_spend.value
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
                              card.spent.value + card.available_to_spend.value
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
    </Nav>
  );
}
