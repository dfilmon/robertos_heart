import React from 'react';

export default function Team() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 ">
        <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div>
            <img
              width="75%"
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
              alt=""
            />
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Think about Volunteering
            </h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400 w-7/12">
              We greatly appreciate your interest in volunteering! If you are
              enthusiastic about making a positive impact and lending a helping
              hand, we encourage you to get in touch with us via email at
              volunteer@robertosheart.org Our team is always looking for
              dedicated individuals like yourself who are eager to contribute
              their time and skills to our cause.
            </p>

            <div class="flex items-center mt-6 gap-x-3">
              <a href="mailto:robertosheart@gmail.com">
                <button class="text-black w-50 font-semibold h-16 px-5 py-2 mt-6 text-sm tracking-wider uppercase duration-300 transform rounded-md focus:outline-none subBrandColor ">
                  Volunteer
                  {/* Services pushes down to a list of services with the Donate call to action */}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
