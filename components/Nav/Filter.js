import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

export default function Filter() {
  return (
    <div className="md:flex md:items-center md:justify-between mt-6">
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
                              props="onClick"
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
                              props="onClick"
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
  );
}
