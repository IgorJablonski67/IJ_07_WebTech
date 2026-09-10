import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Igor Jabłoński",
    technologiesCount: 3
  };

  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};

const student = {
  name: "Igor",
  surname: "Jabłoński",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "React",
  teacher: "Rafał Taraszka",
  hours: 30,
  completed: false
};

  return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <p>{technology.name}</p>

      <p>Kategoria: {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>

      <p>uczeń: {student.name} {student.surname}</p>

      <p>Klasa: {student.className}</p>

      <p>Specjalizacja: {student.specialization}</p>

      <section className='Course'>
        <h2>Nazwa kursu: {course.name}</h2>

        <p>Nauczyciel: {course.teacher}</p>

        <p>Liczba godzin {course.hours}</p>

        <p>Ukonczone: {String(course.completed)}</p>
      </section>
      
    </div>
  );
}

export default App;


