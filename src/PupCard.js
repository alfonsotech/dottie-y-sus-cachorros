import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const PuppyCard = ({ puppy }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <Slider {...settings}>
        {puppy.images.map((image, index) => (
          <div key={index}>
            <img
              className="horizontal"
              src={process.env.PUBLIC_URL + image}
              alt={`Puppy ${puppy.name} ${index}`}
              height="140"
              style={{ display: "block" }}
            />
          </div>
        ))}
      </Slider>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {puppy.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {puppy.description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Link to="/adopt" style={{ textDecoration: "none" }}>
          <Button style={{ backgroundColor: "#2196f3", color: "white" }}>
            Como Adoptar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PuppyCard;
