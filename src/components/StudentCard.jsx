function StudentCard({StudentCard}){
    return(
        <div>
            <p>Imie: {StudentCard.name}</p>
            <p>Klasa: {StudentCard.class}</p>
            <p>Specjalizacja: {StudentCard.specialization}</p>
            <p>Wiek: {StudentCard.age}</p>
            <p>Aktywny: {String(StudentCard.active)}</p>
        </div>
    )
}

export default StudentCard