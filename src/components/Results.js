import React from 'react';

const Results = ({ productDetail: { productName }, productDetail: { description } }) => {
    return <div className="searchWrapper">
        <h2>{productName}</h2>
        <h3>{description}</h3>
    </div>
}

export default Results;