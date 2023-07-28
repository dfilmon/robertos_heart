import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Story from './components/Story';
import Partners from './components/Partners';
import Team from './components/Team';
import Volunteer from './components/Volunteer';
import Adrienne from './components/Adrienne';

import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Partners />
      <Services />
      <Volunteer />
      <Story />
      <Team />
    </div>
  );
}
