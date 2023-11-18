import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import CarouselArrows from "../CarouselArrows/CarouselArrows";
import { useRef } from "react";
var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  draggable: true,
  infinite: true,
};
export default function TestimonialCarousel({ dataArr }) {
  // slider arrow functionality
  const sliderRef = useRef(null);
  if (!dataArr.length) return null;

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  // slider arrow functionality ends
  const carousel = dataArr.map((item, index) => {
    return (
      <div className="card" key={index}>
        <Typography variant="subtitle1" component="h5" className="title">
          {item.testimonial}
        </Typography>
        <Typography variant="h6" component="h4" className="name">
          {item.client_name}
        </Typography>
        <Typography variant="body1" component="h6" className="name">
          {item.organization}
        </Typography>
      </div>
    );
  });
  return (
    <Section>
      <CarouselArrows next={next} previous={previous} />
      <Slider ref={sliderRef} {...settings}>
        {carousel}
      </Slider>
    </Section>
  );
}

const Section = styled.section`
  h4 {
    margin-top: 24px;
    color: var(--material-theme-sys-light-on-surface-variant, #44483e);
  }
  .slick-dots {
    text-align: right;
  }
`;
