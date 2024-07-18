import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="px-4 py-6">
      <Slider {...settings}>
        <div>
          <img src="/Assets/LocationLogo.png" alt="Image 1" />
        </div>
        <div>
          <img src="/Assets/PinkCallIcon.png" alt="Image 2" />
        </div>
        <div>
          <img src="/Assets/PinkStarMobile.png" alt="Image 1" />
        </div>
        <div>
          <img src="/Assets/SearchIcon.png" alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
