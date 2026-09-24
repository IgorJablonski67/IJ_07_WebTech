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
import StudentCard from './components/StudentCard.jsx'

function App() {

  const Technologie =[
    {
      id:0,
      name:"React",
      category:"Frontend",
      hours: 30
    },
    {
      id:1,
      name:"Node.js",
      category:"Backend",
      hours: 10
    },
    {
      id:2,
      name:"MySQL",
      category:"Database",
      hours: 36
    }
  ]

  const studentCards = [
    {
      name:"Igor Jabłoński",
      class:"4P",
      specialization:"Technik Programista",
      age:18,
      active:true
    },
    {
      name:"Maciek Borek",
      class:"3I",
      specialization:"Technik Informatyk",
      age:16,
      active:true
    },
    {
      name:"Tomasz Perła",
      class:"5P",
      specialization:"Technik Programista",
      age:19,
      active:false
    }
  ]


  return (
    <div>
      <Header />
      <Navigation/>

      <main>

        
        <Technology name={Technologie[0].name} category={Technologie[0].category} hours={Technologie[0].hours} />
        <Technology name={Technologie[1].name} category={Technologie[1].category} hours={Technologie[1].hours} />
        <Technology name={Technologie[2].name} category={Technologie[2].category} hours={Technologie[2].hours} />

    
        <StudentCard StudentCard={studentCards[0]}/>
        <StudentCard StudentCard={studentCards[1]}/>
        <StudentCard StudentCard={studentCards[2]}/>
        
        <InfoBox />
        <CourseCard />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;


