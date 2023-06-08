import React from 'react';
import './nav-style.css';

export default function Team() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 mt-40 mb-40">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Executive Team
          </h1>

          <p class="max-w-2xl mx-auto my-6 text-center white dark:white">
          We are a growing team committed to the legacy of Roberto A. Marshall through healing an assistance after gun-violence. Together we operate, a triage supportive action team of volunteers and paid staff to help you move from tragedy to triumph.
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                LaMona N. Marshall
              </h1>

              <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                Founder & CEO
              </p>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                Lamar D. Peoples
              </h1>

              <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                Director of Operations
              </p>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                Devin D. Dill
              </h1>

              <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                Board Chair
              </p>
            </div>

            {/* <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                John Doe
              </h1>

              <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                Full stack developer
              </p>
            </div> */}

            {/* <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                Volunteer
              </h1>

              <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                Full stack developer
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
