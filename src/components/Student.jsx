

function Student({id,name,clas,age,specialization}){
    return(
        <section>
           <h2>{name}</h2>
            <p>Klasa: {clas}</p>
            <p>Specjalizacja: {specialization}</p>
            <p>Wiek: {age}</p>
        </section>
    );
}

export default Student;