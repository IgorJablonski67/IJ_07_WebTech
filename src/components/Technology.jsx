import { useState } from 'react'

function Technology({name,category,hours,image,onBlockClick}) {
  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);


  return (
    <section>
      <h3>{name}</h3>
      {/* <img src={image} alt={name} /> */}
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
      <p>Polubienia: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>
        Lubię
      </button>
      <button onClick={() => setLikes(0)}>
        Reset
      </button>
      <p>{isLearning ? "Uczę się":"Jeszcze nie uczę się"}</p>
        <button onClick={()=>{setIsLearning(!isLearning)}}>Zmień</button>
    </section>
  );
}

export default Technology;