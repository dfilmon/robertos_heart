import React from 'react';
import './nav-style.css';
import LaMonaPhoto from './LaMona.jpg';

export default function Team() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 mt-40 mb-40">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Our Executive Team
          </h1>

          <p class="max-w-2xl mx-auto my-6 text-center white dark:white">
            We are a growing team committed to the legacy of Roberto A. Marshall
            through healing and assistance after gun-violence. Together we
            operate, a triage supportive action team of volunteers and paid
            staff to help you move from tragedy to triumph.
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <a href="mailto:robertosheart@gmail.com">
              <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
                <img
                  class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFGJ81peeBDB4hf6IeHfW32jVrPwnKRM_DKg0RL7QMRz00mKvDk3hCUPC8_sqP5QeF6fbDedFwzHUIr3tyJq_lJ_efmXyjL1hw=w2560-h1321"
                  alt=""
                />

                <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                  LaMona N. Marshall
                </h1>

                <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                  Founder & CEO
                </p>
              </div>
            </a>

            <a href="mailto:robertosheart@gmail.com">
              <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
                <img
                  class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oKwTg4GM8Uer6oLX9qRPuwJHcIrK60voV2Ddd1tqObolQyJUgWS9JRfbUe9Sx7wQyyLCkhyNEEX5hB66C52tBsBBzj3A=w2560-h1321"
                  alt=""
                />

                <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                  Lamar D. Peoples
                </h1>

                <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                  Director of Operations
                </p>
              </div>
            </a>

            <a href="mailto:robertosheart@gmail.com">
              <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group subBrandColor hover:subBrandColor dark:border-gray-700 dark:hover:border-transparent">
                <img
                  class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pgRv3snHlrtzCYbSO1ncGjfuxsq2dmgnJ1bF-bAP5ot8zOePnS62rJi3gZfvWcmMbonNhVQ4LHU4z6ph-VLiEd4k2crw=w2560-h1321"
                  alt=""
                />

                <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-black group-hover:text-black">
                  Devin D. Deal
                </h1>

                <p class="mt-2 text-black capitalize dark:black group-hover:text-black">
                  Board Chair
                </p>
              </div>
            </a>

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
