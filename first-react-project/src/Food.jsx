function Food(){
    
    const fooda = "Fried Chicken";
    const foodb = "Pizza";
    const foodc = "Burger";
    const foodd = "Pasta";
    
    return(
        <div>
            <ul>
                <li>{fooda}</li>
                <li>{foodb}</li>
                <li>{foodc}</li>
                <li>{foodd}</li>
            </ul>
        </div>
    );
}

export default Food;