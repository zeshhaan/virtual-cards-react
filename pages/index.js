import Head from "next/head";
import Main from "../components/Main";

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
      <Main />
    </div>
  );
}
