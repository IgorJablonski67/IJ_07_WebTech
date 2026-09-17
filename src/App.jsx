import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Student from './components/Student.jsx'
import InfoBox from './components/InfoBox.jsx'
import Navigation from './components/Navigation.jsx'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import Technology from './components/Technology.jsx'
import CourseCard from './components/CourseCard.jsx'

function App() {

  const Technologie =[
    {
      id:0,
      name:"React",
      category:"Frontend"
    },
    {
      id:1,
      name:"Node.js",
      category:"Backend"
    },
    {
      id:2,
      name:"MySQL",
      category:"Database"
    }
  ]



  return (
    <div>
      <Header />
      <Navigation/>

      <main>

        <p>id: {Technologie[0].id}</p>
        <p>Nazwa: {Technologie[0].name}</p>
        <p>Kategoria: {Technologie[0].category}</p>

        <p>id: {Technologie[1].id}</p>
        <p>Nazwa: {Technologie[1].name}</p>
        <p>Kategoria: {Technologie[1].category}</p>

        <p>id: {Technologie[2].id}</p>
        <p>Nazwa: {Technologie[2].name}</p>
        <p>Kategoria: {Technologie[2].category}</p>

        <Technology />

        <CourseCard />

        <Student />
        
        <InfoBox />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;


