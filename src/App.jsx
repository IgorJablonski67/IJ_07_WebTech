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
import PhotoCard from './components/PhotoCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [counter, setCounter] = useState(0);
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
  const Technologie = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      hours: 30
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      hours: 10
    },
    {
      id: 3,
      name: "MySQL",
      category: "Database",
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
      id: 0,
      name: "Igor Jabłoński",
      class: "4P",
      specialization: "Technik Programista",
      age: 18
    },
    {
      id: 1,
      name: "Maciek Borek",
      class: "3I",
      specialization: "Technik Informatyk",
      age: 16
    },
    {
      id: 2,
      name: "Tomasz Perła",
      class: "5P",
      specialization: "Technik Programista",
      age: 19
    }
  ]

  const samochody = [
    {
      marka: "ford"
    },
    {
      marka: "Honda"
    },
    {
      marka: "Jeep"
    },
    {
      marka: "Renault"
    }
    ,
    {
      marka: "Mercedes"
    }
  ]

  const books = [
    { id: 1, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 2, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "Lalka", author: "Bolesław Prus" }
  ];

  const products = [
    {
      name: "Laptop",
      price: 3000
    },
    {
      name: "Komputer",
      price: 5000
    },
    {
      name: "Monitor",
      price: 1200
    },
    {
      name: "Klawiatura",
      price: 300
    },
    {
      name: "Mysz",
      price: 120
    }
  ]



  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");


  const filteredTechnologies = technologies.filter((technologia) => {
    return selectedCategory === "Wszystkie" ||
      technologia.category === selectedCategory;
  });

 

  function download(id) {
    setPhotos((previousPhotos) =>
      previousPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, downloads: photo.downloads + 1 };
        }
        return photo;
      })
    );
  }
  function resetDonwloads(id) {
    setPhotos((previousPhotos) =>
      previousPhotos.map((photo) => {
        if (photo.id === id) {
          return { ...photo, downloads: 0 };
        }
        return photo;
      }))
  }
  const [showDiscription, setShowDiscription] = useState(false);
  const [showDiscription2, setShowDiscription2] = useState(false);

  const [showFlowers, setShowFlowers] = useState(true);
  const [showAnimals, setShowAnimals] = useState(true);
  const [showCars, setShowCars] = useState(true);

   const [photos, setPhotos] = useState([
    { id: 10, alt: "Mak",category:1, downloads: 35, fileName: "mak.jpg" },
    { id: 20, alt: "Bukiet",category:1, downloads: 43, fileName: "bukiet.jpg" },
    { id: 30, alt: "Dalmatyńczyk",category:2, downloads: 2, fileName: "dalmantynczyk.jpg" },
    { id: 31, alt: "Róża", downloads: 67,category:1, fileName: "roza.jpg" },
    { id: 32, alt: "Auto Czerwone", downloads: 67,category:3, fileName: "autoczerwone.jpg" }
  ]);


  const filteredPhotos = photos.filter((photo) => {
  return (
    (photo.category === 1 && showFlowers) ||
    (photo.category === 2 && showAnimals) ||
    (photo.category === 3 && showCars)
  );
  });
  return (
    <div>
      <Header />
      <Navigation />

      <div className='form-check form-swich'>
        <input type="checkbox" id="show-discription" checked={showDiscription} className='form-check-input' onChange={(event) => (setShowDiscription(event.target.checked))} />
        <label for="show-discription" className='form-check-label' >widoczność opisu</label>
        <p>Opis {showDiscription ? "Włączony" : "Wyłączony"}</p>
        {showDiscription && <p>aha aha opis</p>}
      </div>

      <div className='form-check form-switch'>
        <input type="checkbox" role="switch" id="show-discription2" checked={showDiscription2} className='form-check-input' onChange={(event) => (setShowDiscription2(event.target.checked))} />
        <label for="show-discription2" className='form-check-label' >widoczność opisu</label>
        <p>Opis {showDiscription2 ? "Włączony" : "Wyłączony"}</p>
        {showDiscription2 && <p>aha aha opis</p>}
      </div>
      <h1>Galeria</h1>
      
      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flowers"
          checked={showFlowers}
          onChange={(event) => setShowFlowers(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="flowers">
          Kwiaty
        </label>
      </div>

      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="animals"
          checked={showAnimals}
          onChange={(event) => setShowAnimals(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="animals">
          Zwiezata
        </label>
      </div>

      <div className="form-check form-switch form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="cars"
          checked={showCars}
          onChange={(event) => setShowCars(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="cars">
          Auta
        </label>
      </div> 
      <div className='container text-center'>
          <div className='row'>
          
            {filteredPhotos.map((photo) => (
              <PhotoCard
              photo={photo}
              download = {download}
              resetDonwloads = {resetDonwloads}
              />
              
            ))}
          </div>
        </div>

      <div className='container text-center'>
        <div className='row'>
          <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem ex officia voluptatibus porro possimus velit amet, numquam sit iusto, sapiente voluptatem esse pariatur animi est quisquam vitae optio consequatur deleniti sint doloribus? Minima, nostrum cumque? Sint quod asperiores at, provident eaque nihil quibusdam commodi. Dolore voluptatem numquam et eaque?</div>
          <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem ex officia voluptatibus porro possimus velit amet, numquam sit iusto, sapiente voluptatem esse pariatur animi est quisquam vitae optio consequatur deleniti sint doloribus? Minima, nostrum cumque? Sint quod asperiores at, provident eaque nihil quibusdam commodi. Dolore voluptatem numquam et eaque?</div>
          <div className='col'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati iusto quaerat optio nisi ullam amet laudantium totam molestiae nulla voluptas consequatur maxime assumenda, nostrum consectetur labore omnis error reiciendis perspiciatis, cum odio quidem! Quibusdam corporis nulla minima quia nemo cupiditate voluptates, qui tempora dolores harum minus inventore maxime consequuntur.</div>
        </div>
        <div className='row'>
          <div className="col-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem ex officia voluptatibus porro possimus velit amet, numquam sit iusto, sapiente voluptatem esse pariatur animi est quisquam vitae optio consequatur deleniti sint doloribus? Minima, nostrum cumque? Sint quod asperiores at, provident eaque nihil quibusdam commodi. Dolore voluptatem numquam et eaque?</div>
          <div className='col-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati iusto quaerat optio nisi ullam amet laudantium totam molestiae nulla voluptas consequatur maxime assumenda, nostrum consectetur labore omnis error reiciendis perspiciatis, cum odio quidem! Quibusdam corporis nulla minima quia nemo cupiditate voluptates, qui tempora dolores harum minus inventore maxime consequuntur.</div>
        </div>
        <div className='row'>
          <div className='col-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero sint consequuntur ea, qui recusandae, adipisci quia officiis quod ipsam illum fuga delectus, eos iusto. Natus molestias laboriosam quisquam odio, pariatur id earum recusandae ipsam voluptates placeat quibusdam nemo eligendi modi voluptatibus sit inventore sint cumque aperiam dignissimos in voluptatem.</div>
          <div className='col-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vero sint consequuntur ea, qui recusandae, adipisci quia officiis quod ipsam illum fuga delectus, eos iusto. Natus molestias laboriosam quisquam odio, pariatur id earum recusandae ipsam voluptates placeat quibusdam nemo eligendi modi voluptatibus sit inventore sint cumque aperiam dignissimos in voluptatem.</div>
        </div>
        <div className='row'>
          <div className='col-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem vitae animi quis natus temporibus iste quisquam in corrupti nihil voluptate explicabo qui soluta dolor, eaque aperiam, eveniet debitis quibusdam maxime quidem? Vel in blanditiis quaerat alias error doloribus minima. Neque, voluptatem dolor! Officiis vitae pariatur praesentium ea iure quibusdam!</div>
          <div className='col-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem vitae animi quis natus temporibus iste quisquam in corrupti nihil voluptate explicabo qui soluta dolor, eaque aperiam, eveniet debitis quibusdam maxime quidem? Vel in blanditiis quaerat alias error doloribus minima. Neque, voluptatem dolor! Officiis vitae pariatur praesentium ea iure quibusdam!</div>
          <div className='col-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem vitae animi quis natus temporibus iste quisquam in corrupti nihil voluptate explicabo qui soluta dolor, eaque aperiam, eveniet debitis quibusdam maxime quidem? Vel in blanditiis quaerat alias error doloribus minima. Neque, voluptatem dolor! Officiis vitae pariatur praesentium ea iure quibusdam!</div>
          <div className='col-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem vitae animi quis natus temporibus iste quisquam in corrupti nihil voluptate explicabo qui soluta dolor, eaque aperiam, eveniet debitis quibusdam maxime quidem? Vel in blanditiis quaerat alias error doloribus minima. Neque, voluptatem dolor! Officiis vitae pariatur praesentium ea iure quibusdam!</div>
        </div>
      </div>

      <main>
        {/* <p>Licznik: {counter}</p>
        <button onClick={()=>{setCounter(counter+1)}}>Dodaj 1</button>
        <button onClick={()=>{setCounter(counter-1)}}>Usun 1</button>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
        <button onClick={()=>{setCounter(counter+5)}}>Dodaj 5</button>
        <button onClick={()=>{setCounter(counter-5)}}>Usun 5</button>
        <button onClick={()=>{setCounter(100)}}>Ustaw 100</button>
        <p>{active ? "Aktywny":"Nieaktywny"}</p>
        <button onClick={()=>{setActive(!active)}}>Zmień</button>
        <p className={visible?"":"notvisible"}>tekst</p>
        <button onClick={()=>{setVisible(!v)}}>Przelacz widoczność</button> */}
        

           

      
        <div className='container'>
          <div className='row'>
            <button className='col btn active m-3' onClick={() => setSelectedCategory("Wszystkie")}>
              Wszystkie
            </button>
            <button className='col btn active m-3' onClick={() => setSelectedCategory("Frontend")}>
              Frontend
            </button>
            <button className='col btn active m-3' onClick={() => setSelectedCategory("Backend")}>
              Backend
            </button>
            <button className='col btn active m-3' onClick={() => setSelectedCategory("Baza danych")}>
              Baza danych
            </button>
          </div>
        </div>
        <div className="container text-center">
          <div className='row'>
            {filteredTechnologies.map((technology) => (
              <div className="col-4 mb-2 mt-2">
                <Technology
                  key={technology.id}
                  name={technology.name}
                  category={technology.category}
                  hours={technology.hours}
                  image={technology.image}
                />
              </div>
            ))}
          </div>
        </div>

        {/* {Technologie.map((technologia)=>(
         <Technology 
         key={technologia.id}
         name={technologia.name}  
         category={technologia.category}  
         hours={technologia.hours}  
         />
      ))} */}


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

        {/* {
        products.map((product)=>(
          <Product
            name={product.name}
            price={product.price}
            onSelect={selectProduct}
            >
          </Product>
        ))
      } */}
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


