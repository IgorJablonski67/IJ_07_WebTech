function Product({name,price,onSelect}){
    function showProduct()
    {
        console.log("Wybrano produkt: " + name)
    }
    return(
        <>
            <p>Produkt: {name}</p>
            <p>cena: {price}</p>
            <button onClick={()=>onSelect(name)}>
                Pokaż produkt
            </button>
        </>
    )
}


export default Product