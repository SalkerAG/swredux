import React from "react";
import Slider from "react-slick";
import CarouselCardFilms from "./CarouselCardFilms";

const FilmListLocalStorage = ({ films }) => {
  if (Object.keys(films).length === 0) return null;
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

  console.log("ES IGUAL A 1??", Object.keys(films).length);

  return (
    <>
      <Slider {...settings}>
        {films.map((film, index) => (
          <CarouselCardFilms key={index} film={film} />
        ))}
      </Slider>
    </>
  );
};

export default FilmListLocalStorage;
