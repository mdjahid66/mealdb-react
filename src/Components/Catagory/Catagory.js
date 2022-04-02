import React, { useEffect, useState } from 'react';
import SetCatagory from '../setCatagory/setCatagory';

const Catagory = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => setCatagories(data.categories));
    }, [])
    return (
        <div>
            {
                catagories.map(catagory => <SetCatagory key={catagory.idCategory} catagory={catagory}></SetCatagory>)
            }
        </div>
    );
};

export default Catagory;