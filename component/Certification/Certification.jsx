import React from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
export default function Certification({ data }) {
  const certificates = data.cards.map((card, index) => {
    console.log("card", card);
    return (
      <div
        key={index}
        className="card image-wrapper"
        style={{
          paddingBottom: `${
            (card.certificate_frame.height / card.certificate_frame.width) * 100
          }%`,
        }}
      >
        <Image
          src={card.certificate_frame.url}
          alt={card.certificate_frame.alt}
          fill
        />
      </div>
    );
  });
  return (
    <Section id="certificates">
      <Container maxWidth="lg">
        <div className="title-wrapper">
          <Typography variant="h2" align="center" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            {data.description}
          </Typography>
        </div>
        <div className="cards-wrapper">{certificates}</div>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
    .image-wrapper {
      position: relative;
      width: 100%;
    }
  }
`;
