import React from 'react';

export default function Services() {
  return (
    <div id="services">
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto mt-24">
          <div class="text-center">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Our Services
            </h1>
            {/* 
            1. Mort. / Off white
            2. Legal Ad / Orange
            3. Counceling Service / Purple */}

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
              We support the families and victims of gun-violence with a
              trauma-informed approach. Our community partnerships and staff
              will assist you with healing and assistance for as long as it
              takes.
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
                  A monetary donation toward mortuary care and ongoing
                  assistance with planning and arrangements.
                </p>

                <a href="mailto:robertosheart@gmail.com">
                  <button class="text-black w-50 font-semibold h-16 px-5 py-2 mt-6 text-sm tracking-wider uppercase duration-300 transform rounded-md focus:outline-none subBrandColor ">
                    Access Services
                    {/* Services pushes down to a list of services with the Donate call to action */}
                  </button>
                </a>
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
                  Provide experience-based counsel to help you navigate all
                  legal matters, tailored to your needs.
                </p>

                <a href="mailto:robertosheart@gmail.com">
                  <button class="text-black w-50 font-semibold h-16 px-5 py-2 mt-6 text-sm tracking-wider uppercase duration-300 transform rounded-md focus:outline-none subBrandColor ">
                    Access Services
                    {/* Services pushes down to a list of services with the Donate call to action */}
                  </button>
                </a>
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
                  One-on-one & group counseling provided by trained
                  professionals to assist with your healing journey.
                </p>

                <a href="mailto:robertosheart@gmail.com">
                  <button class="text-black w-50 font-semibold h-16 px-5 py-2 mt-6 text-sm tracking-wider uppercase duration-300 transform rounded-md focus:outline-none subBrandColor ">
                    Access Services
                    {/* Services pushes down to a list of services with the Donate call to action */}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
