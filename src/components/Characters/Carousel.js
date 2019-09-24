import React, { useEffect } from "react";
import { carouselCharactersAction } from "../../actions/APIsCharactersActions";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import CarouselCardCharacter from "./CarouselCardCharacter";
import Spin from "../Layout/Spin";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true
  };

  const dispatch = useDispatch();
  const newCarousel = () => dispatch(carouselCharactersAction());

  const loading = useSelector(state => state.apisCharacter.loading);
  const characters = useSelector(state => state.apisCharacter.characters);
  const error = useSelector(state => state.apisCharacter.error);

  useEffect(() => {
    newCarousel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          No se han podido cargar los datos
        </div>
      ) : loading ? (
        <Spin />
      ) : characters === [] ? null : (
        <Slider {...settings}>
          {characters.map((character, index) => (
            <CarouselCardCharacter key={index} character={character} />
          ))}
        </Slider>
      )}
    </>
  );
};

export default Carousel;
