import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
        name: 'commercial',
        description:
        "Photos of grocery stores, food trucks, and other commercial products"
    },
    {name: 'portraits', description: "Portraits of people in my life"},
    {name: 'food', description: "Delicious delicacies"},
    {
        name: 'landscapes',
        description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[2]);

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory = {currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
