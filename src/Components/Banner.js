import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
function Banner(props) {
  const [data, setData] = useState(null);
  const settings = {
    // className: "center",
    // centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // centerPadding: "60px",
    slidesToShow: 1.667,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios
      .get(`${props.baseUrl}${props.playlistId}`)
      .then((response) => setData(response.data.playlist))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, index) => {
          return (
            <div>
            <div className="slickDiv m-2">
              <img
                src={item.image}
                alt="error"
                className="img-fluid w-100 rounded"
              />
              <h3>{item.title}</h3>
              </div>
              </div>
          )
        })}
      </Slider>
    </div>
  );
}

export default Banner;
