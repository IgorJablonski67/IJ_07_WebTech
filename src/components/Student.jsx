

function Student(){
    
    const imie ="Igor";
    const nazwisko="Jabłoński";
    const klasa="4P";
    const specjalizacja = "Programista";
    
    return(
        <div>
            <h1>
                Zadanie samodzielne 1
            </h1>
            <p>Imie i Nazwisko: {imie} {nazwisko}</p>
            <p>Klasa: {klasa}</p>
            <p>Specjalizacja: {specjalizacja}</p>
        </div>
    );
}

export default Student;