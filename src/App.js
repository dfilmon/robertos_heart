import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Mission from './components/Mission';
import AboutUs from './components/AboutUs';
import Donors from './components/Donors';
import Team from './components/Team';
import Volunteer from './components/Volunteer';
import Adrienne from './components/Adrienne';

import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Donors />
      <Mission />
      <Volunteer />
      <AboutUs />
      <Team />
    </div>
  );
}
