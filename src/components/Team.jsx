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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group brandColor hover:brandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">
                arthur melo
              </h1>

              <p class="mt-2 text-white capitalize dark:white group-hover:text-white">
                design director
              </p>

              <button>Let's Connect</button>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group brandColor hover:brandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">
                Amelia. Anderson
              </h1>

              <p class="mt-2 text-white capitalize dark:white group-hover:text-white">
                Lead Developer
              </p>

              <button>Let's Connect</button>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group brandColor hover:brandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">
                Olivia Wathan
              </h1>

              <p class="mt-2 text-white capitalize dark:white group-hover:text-white">
                Lead designer
              </p>

              <button>Let's Connect</button>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group brandColor hover:brandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">
                John Doe
              </h1>

              <p class="mt-2 text-white capitalize dark:white group-hover:text-white">
                Full stack developer
              </p>

              <button>Let's Connect</button>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group brandColor hover:brandColor dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-white capitalize dark:text-white group-hover:text-white">
                Volunteer
              </h1>

              <p class="mt-2 text-white capitalize dark:white group-hover:text-white">
                Full stack developer
              </p>

              <button>Let's Connect</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
