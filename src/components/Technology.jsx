function Technology({name,category,hours,image,onBlockClick}) {

  function przycisk(aha)
  {
    
    onBlockClick();
  }

  return (
    <section className="bloki" onClick={()=>przycisk(name)}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
    </section>
  );
}

export default Technology;