function Technology({name,category,hours}) {
  function showTechnology(){
    console.log("Technologia: " + name);
    console.log("Kategoria: " + category);
    console.log("Liczba godzin: " + hours);
  }
  return (
    <section>
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours}</p>
    <button onClick={showTechnology}>
      Pokaż informacje
    </button>
    </section>
  );
}



export default Technology;