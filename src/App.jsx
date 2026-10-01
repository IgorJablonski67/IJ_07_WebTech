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

    const Students = [
    {
      id:0,
      name:"Igor Jabłoński",
      class:"4P",
      specialization:"Technik Programista",
      age:18
    },
    {
      id:1,
      name:"Maciek Borek",
      class:"3I",
      specialization:"Technik Informatyk",
      age:16
    },
    {
      id:2,
      name:"Tomasz Perła",
      class:"5P",
      specialization:"Technik Programista",
      age:19
    }
    ]

    const samochody =[
      {
        marka:"ford"
      },
      {
        marka:"Honda"
      },
      {
        marka:"Jeep"
      },
      {
        marka:"Renault"
      }
      ,
      {
        marka:"Mercedes"
      }
    ]


  return (
    <div>
      <Header />
      <Navigation/>

      <main>

        
      {Technologie.map((technologia)=>(
         <Technology 
         key={technologia.id}
         name={technologia.name}  
         category={technologia.category}  
         hours={technologia.hours}  
         />
      ))}
      
    
      {Students.map((student)=>(
          <Student
          key={student.id}
          name={student.name} 
          clas={student.class} 
          age={student.age} 
          specialization={student.specialization} 
          />
      ))}
        
      <ul>
        {samochody.map((samochod)=>(
          <li>{samochod.marka}</li>
        ))}
      </ul>
        
      </main>
      <Footer />
    </div>
  );
}

export default App;


