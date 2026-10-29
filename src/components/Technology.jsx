import { useState } from 'react'

function Technology({name,category,hours,image,onBlockClick}) {
  const [likes, setLikes] = useState(0);
  const [isLearning, setIsLearning] = useState(false);


  return (
    <section className='card'>
      <div className='card-body'>
      <h3 className='card-title'>{name}</h3>
      {/* <img src={image} alt={name} /> */}
      <p className="card-text">Kategoria: {category}</p>
      <p className="card-text">Liczba godzin: {hours}</p>
      <p className="card-text">Polubienia: {likes}</p>
      <button className='btn btn-primary' onClick={() => setLikes(likes + 1)}>
        Lubię
      </button>
      <button className='btn btn-danger' onClick={() => setLikes(0)}>
        Reset
      </button>
      <p>{isLearning ? "Uczę się":"Jeszcze nie uczę się"}</p>
        <button type="button" className='active btn' onClick={()=>{setIsLearning(!isLearning)}}>Zmień</button>
        </div>
    </section>
  );
}

export default Technology;