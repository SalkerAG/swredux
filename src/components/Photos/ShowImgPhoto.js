import React from 'react';

const ShowImgPhoto = ({photo}) => {
    return (
        <>
        <div className="card photoImg">
            <img className="card-img-top photoImgCard" src={photo.largeImageURL} alt={photo.largeImageURL}/>
        </div>
        </>
    );
};

export default ShowImgPhoto;