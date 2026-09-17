function CourseCard(){

    const Course={
        name:"React",
        teacher:"Rafał Taraszka",
        hours:30,
        completed:false
    }
    
    return(
        <section>
            <h2 className="Tytul">{Course.name}</h2>
            <p>Nauczyciel: {Course.teacher}</p>
            <p>Czas trwania: {Course.hours*60}min</p>
            <p>Ukoczony: {String(Course.completed)}</p>
        </section>
    )
}

export default CourseCard