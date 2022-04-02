import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState({});
    const { strArea, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strMealThumb, strInstructions, strMeal } = details;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data.meals[0]);
            })
    }, [id]);



    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h1>This is details</h1>

            <div className="details">
                <img src={strMealThumb} alt="" />
                <div className="meal-info">
                    <p className="text-center fs-3 fw-bold meal-name">{strMeal}</p>
                    <p className='info'><span className="description">Description:</span> {strInstructions}</p>
                    <p>Area:{strArea}</p>
                    <p>Ingredients</p>
                    <ul className='info'>
                        <li>{strIngredient1}</li>
                        <li>{strIngredient2}</li>
                        <li>{strIngredient3}</li>
                        <li>{strIngredient4}</li>
                        <li>{strIngredient5}</li>
                        <li>{strIngredient6}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;