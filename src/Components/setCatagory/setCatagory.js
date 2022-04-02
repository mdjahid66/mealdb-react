import React from 'react';

const SetCatagory = ({ catagory }) => {
    const { strCategoryDescription, strCategory, strCategoryThumb } = catagory;
    return (
        <div>
            <div>
                <img src={strCategoryThumb} alt="" />
                <p>{strCategory}</p>
                <p>{strCategoryDescription}</p>
            </div>
        </div>
    );
};

export default SetCatagory;