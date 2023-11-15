import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Image from "next/image";
export default function CardComponent({ title, description, image, cta }) {
  return (
    <CardStyled sx={{ width: "100%", background: "none" }}>
      <div className="image-wrapper">
        <Image src={image.url} alt={title} fill />
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
      {cta && (
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      )}
    </CardStyled>
  );
}

const CardStyled = styled(Card)`
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 280px;
    img {
      object-fit: cover;
    }
  }
`;
