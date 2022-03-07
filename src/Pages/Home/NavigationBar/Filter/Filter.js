import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Filter.css";
import Button from "@mui/material/Button";
const Filter = ({ setFilter }) => {
  console.log(setFilter);
  // const [filter, setFilter] = useState("");
  const getFilter = (category) => {
    // console.log(category);
    setFilter(category);
  };
  const settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // initialSlide: 2,
        },
      },
    ],
  };

  let categories = [
    "Action",
    "Adventure",
    "Puzzle",
    "Arcade",
    "War",
    "Sports",
    "Simulation",
    "Strategy",
    "Fantasy",
    "SciFi",
    "Horror",
    "RPG",
  ];
  return (
    <div className="filter-parent" style={{ width: "70vw" }}>
      <Slider {...settings} style={{}}>
        {categories.map((category) => (
          <div className="slider-parent">
            {" "}
            <Button
              className="filter-button"
              onClick={() => getFilter(category)}
              sx={{
                color: "#fff",
                border: 2,
                borderRadius: 16,

                fontSize: "8px",
                px: 5,
              }}
            >
              {category}
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Filter;
