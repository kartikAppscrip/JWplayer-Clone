import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../Css/Banner.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "15px", zIndex: "1" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "15px", zIndex: "1" }}
      onClick={onClick}
    />
  );
}

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  useEffect(() => {
    axios
      .get(`${props.baseUrl}${props.playlistId}`)
      .then((response) => setData(response.data.playlist))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Slider {...settings} style={{ margin: "10px 0", padding: "10px 0" }}>
        {data?.map((item, index) => {
          return (
            <div>
              <div className="slickDiv m-2 imageTransition container">
                <img
                  src={item.image}
                  alt="error"
                  className="image img-fluid w-100 rounded"
                />
                <h3 className="bottom-left">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
