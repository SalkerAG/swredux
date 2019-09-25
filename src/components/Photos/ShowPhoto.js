import React, {useEffect} from 'react';
import {newPhotosAction} from "../../actions/APIsPhotosActions"
import { useDispatch, useSelector } from "react-redux";
import ShowImgPhoto from "./ShowImgPhoto"
import Spin from "../Layout/Spin";


const ShowPhoto = ({character}) => {

    const dispatch = useDispatch();
    const photosCharacter = (name) => dispatch(newPhotosAction(name))
    const photos = useSelector(state => state.apisPhoto.photos)
    const loading = useSelector(state => state.apisPhoto.loading)

    useEffect(() => {
        photosCharacter(character.name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        {Object.keys(photos).length === 0 ? 
            null : (
                loading ?
                    <Spin /> : (
                        photos.map((photo, index) => (
                        <ShowImgPhoto photo={photo} key={index}/>
                        ))
                    )
            )    
    
        }
        
        </>
    );
};

export default ShowPhoto;
