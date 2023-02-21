import React from 'react';

export default function Mission() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto mb-64 mt-24">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Our Services
            </h1>
            {/* 
            1. Mort. / Off white
            2. Legal Ad / Orange
            3. Counceling Service / Purple */}

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              veritatis sint autem nesciunt, laudantium quia tempore delect
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1522752622479-65eefd320386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  Mortuary Assistance
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Request Service
                </button>
              </div>
            </div>

            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2866&q=80"
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  Legal Advocacy
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <p class="mt-3 text-sm text-blue-500">Request Service</p>
              </div>
            </div>

            <div>
              <img
                class="relative z-10 object-cover w-full rounded-md h-96"
                src="https://images.unsplash.com/photo-1573495804664-b1c0849525af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt=""
              />

              <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                <a
                  href="#"
                  class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                >
                  Counseling Services
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  veritatis sint autem nesciunt, laudantium quia tempore delect
                </p>

                <p class="mt-3 text-sm text-blue-500">Request Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
