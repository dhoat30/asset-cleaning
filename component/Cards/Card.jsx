import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import DarkButton from "../Button/DarkButton";
import OutlinedDarkButton from "../Button/OutlinedDarkButton";
export default function CardComponent({
  title,
  description,
  image,
  ctaLabel,
  ctaLink,
}) {
  return (
    <CardStyled
      sx={{
        width: "100%",
        background: "none",
        borderRadius: "16px",
        paddingBottom: "8px",
      }}
    >
      <div className="image-wrapper">
        <Image src={image?.url} alt={image?.alt ? image.alt : title} fill />
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      {ctaLink && (
        <CardActions className="button-wrapper">
          <Link href={ctaLink}>
            <OutlinedDarkButton>{ctaLabel}</OutlinedDarkButton>
          </Link>
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
  .button-wrapper {
    padding-left: 16px;
  }
`;
