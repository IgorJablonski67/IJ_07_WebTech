function PhotoCard({ photo, download, resetDonwloads })
{
    return (
    <div className='col card m-3' key={photo.id}>
        <h2 className='card-title'>{photo.alt}</h2>
        <img className='card-img ' src={photo.fileName} alt={photo.alt} />
        <p className='card-text'>Pobrania: {photo.downloads}</p>
        <button type="button" class="btn btn-primary" onClick={() => download(photo.id)}>Pobierz</button>
        <button type="button" class="btn btn-warning" onClick={() => resetDonwloads(photo.id)}>Reset</button>
    </div>);
}

export default PhotoCard;