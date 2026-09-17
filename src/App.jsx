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

function App() {

  return (
    <div>
      <Header />
      <Navigation/>

      <main>
        <Technology />

        <Student />
        
        <InfoBox />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;


