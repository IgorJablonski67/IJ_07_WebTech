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
import Book from './components/Book.jsx'
import Product from './components/Product.jsx'


function App() {

   const [counter,setCounter] = useState(0);
   const [active, setActive] = useState(false);
   const [visible, setVisible] = useState(true);

    const technologies = [
    { id: 1, name: "React", category: "Frontend", hours: 30, image: "react.webp" },
    { id: 2, name: "Node.js", category: "Backend", hours: 40, image: "nodejs.webp" },
    { id: 3, name: "MySQL", category: "Baza danych", hours: 20, image: "mysql.webp" },
    { id: 4, name: "Express", category: "Backend", hours: 25, image: "express.webp" },
    { id: 5, name: "MongoDB", category: "Baza danych", hours: 30, image: "mongodb.webp" },
    { id: 6, name: "Bootstrap", category: "Frontend", hours: 15, image: "bootstrap.webp" },
    { id: 7, name: "CSS", category: "Frontend", hours: 20, image: "css.webp" },
    { id: 8, name: "HTML", category: "Frontend", hours: 10, image: "html.webp" },
    { id: 9, name: "PHP", category: "Backend", hours: 35, image: "php.webp" }
  ];
  const Technologie =[
    {
      id:1,
      name:"React",
      category:"Frontend",
      hours: 30
    },
    {
      id:2,
      name:"Node.js",
      category:"Backend",
      hours: 10
    },
    {
      id:3,
      name:"MySQL",
      category:"Database",
      hours: 36
    },
    {
      id: 4,
      name: "Express",
      category: "Backend",
      hours: 25
      },
      {
      id: 5,
      name: "MongoDB",
      category: "Baza danych",
      hours: 20
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

    const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
    ];

    const products=[
      {
        name:"Laptop",
        price:3000
      },
      {
        name:"Komputer",
        price:5000
      },
      {
        name:"Monitor",
        price:1200
      },
      {
        name:"Klawiatura",
        price:300
      },
      {
        name:"Mysz",
        price:120
      }
    ] 


  function selectProduct(name) {
  console.log("Wybrany produkt: " + name);
}
 
   return (
    <div>
      <Header />
      <Navigation/>

      
      <main>
        <p>Licznik: {counter}</p>
        <button onClick={()=>{setCounter(counter+1)}}>Dodaj 1</button>
        <button onClick={()=>{setCounter(counter-1)}}>Usun 1</button>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
        <button onClick={()=>{setCounter(counter+5)}}>Dodaj 5</button>
        <button onClick={()=>{setCounter(counter-5)}}>Usun 5</button>
        <button onClick={()=>{setCounter(100)}}>Ustaw 100</button>
        <p>{active ? "Aktywny":"Nieaktywny"}</p>
        <button onClick={()=>{setActive(!active)}}>Zmień</button>
        <p className={visible?"":"notvisible"}>tekst</p>
        <button onClick={()=>{setVisible(!v)}}>Przelacz widoczność</button>

       
      
      {Technologie.map((technologia)=>(
         <Technology 
         key={technologia.id}
         name={technologia.name}  
         category={technologia.category}  
         hours={technologia.hours}  
         />
      ))}

    
{/*     
      {Students.map((student)=>(
          <Student
          key={student.id}
          name={student.name} 
          clas={student.class} 
          age={student.age} 
          specialization={student.specialization} 
          />
      ))}
        
      {books.map((book)=>(
         */}

      {
        products.map((product)=>(
          <Product
            name={product.name}
            price={product.price}
            onSelect={selectProduct}
            >
          </Product>
        ))
      }
      {/* {books.map((book)=>(
        <Book
          title={book.title}
          author={book.author}
        />
      ))}

      {books.map((book)=>{
        return(<Book
          title={book.title}
          author={book.author}
        />)
      })}
      })} */}

    
      {/* <ul>
        {samochody.map((samochod)=>(
          <li>{samochod.marka}</li>
        ))}
      </ul>
      </ul> */}

      </main>
      <Footer />
    </div>

      

  );
}


export default App;


