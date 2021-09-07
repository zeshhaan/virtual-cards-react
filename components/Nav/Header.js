import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../services";

import toast, { Toaster } from "react-hot-toast";

const sucessNotify = () => toast.success("Card Added!");
const errorNotify = () => toast.error("Error");

const Header = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => console.log(data);
  // function onSubmit(data) {
  //   // display form data on success
  //   alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  //   return false;
  // }

  function onSubmit(data) {
    return createUser(data);
  }

  function createUser(data) {
    console.table(data);
    return userService
      .create(data)
      .then(() => {
        sucessNotify();
        router.push(".");
        closeModal();
        reset();
      })
      .catch(errorNotify);
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-5">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Virtual Cards
        </h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block ml-3">
          <>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center px-4 py-2 rounded-sm shadow-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              + Virtual Card
            </button>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Create your card
                      </Dialog.Title>
                      <form onSubmit={handleSubmit(onSubmit)} id="hook-form">
                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Card Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="bill"
                              {...register("name", { required: true })}
                              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                            />
                          </div>
                          {errors.name?.type === "required" && (
                            <p className="text-red-500">
                              Card Name is required
                            </p>
                          )}
                        </div>
                        <div className="max-w-lg mt-6 sm:mt-5 space-y-6 sm:space-y-2">
                          <div className="mt-4 flex gap-4">
                            <div className="flex flex-col">
                              <label
                                htmlFor="card_type"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Card Type
                              </label>
                              <select
                                defaultValue="card_type"
                                name="card_type"
                                className="w-full border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
                                defaultValue="burner"
                                {...register("card_type", { required: true })}
                              >
                                <option>Burner</option>
                                <option>Subscription</option>
                              </select>
                            </div>
                            {errors.card_type?.type === "required" && (
                              <p className="text-red-500">
                                Card Type is required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-2">
                          <label
                            htmlFor="budget_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Budget Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="budget_name"
                              id="budget_name"
                              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                              placeholder="Software Subscription"
                              {...register("budget_name", { required: true })}
                            />
                          </div>
                          {errors.budget_name?.type === "required" && (
                            <p className="text-red-500">
                              Budget Name is required
                            </p>
                          )}
                        </div>
                        <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-2">
                          <label
                            htmlFor="value"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Amount to Add
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">
                                SGD
                              </span>
                            </div>
                            <input
                              type="text"
                              name="value"
                              id="value"
                              className=" block w-full pl-12 pr-12 sm:text-sm border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                              placeholder="0.00"
                              aria-describedby="price-currency"
                              {...register("value", {
                                required: true,
                                min: 10,
                              })}
                            />
                          </div>
                          {errors.value?.type === "required" && (
                            <p className="text-red-500">
                              Enter an Amount to add
                            </p>
                          )}
                        </div>
                      </form>

                      <div className="mt-4 flex gap-2">
                        <button
                          type="submit"
                          form="hook-form"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                          Add Card
                        </button>

                        <button
                          type="button"
                          onClick={() => reset()}
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </>
        </span>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Header;
