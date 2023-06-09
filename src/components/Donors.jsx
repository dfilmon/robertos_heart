import React from 'react';
import './nav-style.css';

export default function Donors() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 mt-12">
        <div class="max-w-6xl px-6 py-10 lg:mx-10 md:mx-10">
          <p class="text-xl font-medium brandColorText ">Honoring our</p>

          <h1 class="mt-2  text-3xl lg:mb-52 md:mb-12  font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Recent Supporters
          </h1>

          <main class="relative mb-40 z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full subBrandColor -z-10 md:h-96 rounded-2xl "></div>

            <div class="mt-10 w-full p-6 subBrandColor md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly z-10  ">
              <img
                class=" lg:h-96 lg:absolute lg:bottom-0  lg:left-12 sm:rounded-2xl rounded-2xl sm:h-24 sm:w-24  md:mx-6  lg:rounded-2xl sm:rounded-2xl object-cover shadow-md  md:w-30 md:h-30  lg:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81r9Esnu0sw-XQrHHUs738-63hwl2SQT0COBqj-eK7jZRVH7Wy3U7loFpTuYD5xK-AhoF0vo-RYOTTy59X5oo5JWOQbD=w1960-h2440"
                alt="client photo"
              />

              <div class="mt-2 md:mx-6 lg:pl-96 sm:pl-2 sm:mt-7 sm:pr-12">
                <div>
                  <p class="text-3xl font-medium tracking-tight text-black">
                    Alliance Data
                  </p>
                </div>

                <p class="mt-4 text-lg leading-relaxed text-black md:text-xl">
                  {' '}
                  “Thank you Alliance Data for you recent donation to our
                  organization. Your support will help the victims of
                  gun-violence with healing and assistance.”
                </p>

                <div class="flex items-center justify-between mt-6 md:justify-start"></div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900 mt-12">
        <div class="max-w-6xl px-6 py-10 lg:mx-10 md:mx-10">
          <main class="relative mb-40 z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full subBrandColor -z-10 md:h-96 rounded-2xl "></div>

            <div class="w-full p-6 subBrandColor md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly z-10  ">
              <img
                class=" lg:h-96 lg:absolute lg:bottom-0  lg:left-12 sm:rounded-2xl rounded-2xl sm:h-24 sm:w-24  md:mx-6  lg:rounded-2xl sm:rounded-2xl object-cover shadow-md  md:w-30 md:h-30  lg:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oabp-d8i-pwYpsbO_JjXMOzISdTAOYkKBdUP2Cy1EdNid9iOfi5hmfbxXvLdRf4n9r4es2KvLm4h92BPJE9NbnwrL-=w1960-h2440"
                alt="client photo"
              />

              <div class="mt-2 md:mx-6 lg:pl-96 sm:pl-2 sm:mt-7 sm:pr-12">
                <div>
                  <p class="text-3xl font-medium tracking-tight text-black">
                    ABHC Autumn Behavioral Health Center
                  </p>
                </div>

                <p class="mt-4 text-lg leading-relaxed text-black md:text-xl">
                  {' '}
                  “Autumn Behavioral Health Center is an established mental
                  health counseling service, in partnership with Roberto’s Heart
                  to help you work through the emotional trauma of losing a
                  loved one to gun-violence..”
                </p>

                <div class="flex items-center justify-between mt-6 md:justify-start"></div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
