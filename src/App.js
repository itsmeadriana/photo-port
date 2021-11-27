import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

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
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
        <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </>
      ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
