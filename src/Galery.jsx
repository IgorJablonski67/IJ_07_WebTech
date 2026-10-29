function Galery({photo})
{
     const filteredPhotos = photos.filter((photo) => {
    return (
    (photo.category === 1 && showFlowers) ||
    (photo.category === 2 && showAnimals) ||
    (photo.category === 3 && showCars)
     )})
     
    return(
        <>
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
        </>
    )
}