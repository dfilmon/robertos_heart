import React from 'react';
import './nav-style.css';

export default function Hero() {
  return (
    <div>
      <header class="bg-white dark:bg-gray-900 lg:mx-10 md:mx-10">
        <nav
          x-data="{ isOpen: false }"
          class="relative bg-white dark:bg-gray-900"
        >
          <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"></div>
        </nav>

        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-8xl lg:font-black mr-3">
                  Healing & Active Support After Gun Violence
                </h1>

                <p class="mt-4 text-gray-600 dark:text-gray-400 text-2xl font-bold">
                  {/* Support the African diaspora. */}
                </p>

                <button class="w-40 h-16 px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform rounded-md  hover:brandColor focus:outline-none focus:brandColor font-bold brandColor">
                  Services
                  {/* Services pushes down to a list of services with the Donate call to action */}
                </button>
              </div>
            </div>
            {/* //hands as image */}
            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                class="w-full h-full lg:max-w-3xl rounded-2xl"
                src="https://images.unsplash.com/photo-1577835789194-d5055027e26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGhhbmRzJTIwaG9sZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
