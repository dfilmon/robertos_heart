import React from 'react';

export default function Story() {
  return (
    <div id="story">
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:-mx-6 lg:flex lg:items-center">
            {/* <img
              class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            /> */}

            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/834592846?h=892736685d"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>

            <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p class="text-5xl font-semibold text-black-500 ">“</p>

              <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                A word from the Founder
              </h1>

              <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                “Without Love, there's no grief, Love continues to stay alive in
                our Hearts forever and never dies.”
              </p>

              <h3 class="mt-6 text-lg font-medium text-black-500">
                LaMona N. Marshall Brown
              </h3>
              <p class="text-gray-600 dark:text-gray-300">Founder & CEO</p>

              <div class="flex items-center justify-between mt-12 lg:justify-start"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
