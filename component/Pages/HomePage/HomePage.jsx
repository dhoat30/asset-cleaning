"use client";
import React from "react";
import HeroVideo from "@/component/Hero/HeroVideo";
import Hero from "@/component/Hero/Hero";
import HomeServiceCard from "./HomeServiceCard";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import TestimonialSection from "@/component/TestimonialSection/TestimonialSection";
export default function HomePage({ data, testimonialData }) {
  console.log(testimonialData.testimonial);
  const heroData = {
    title: data.acf.hero_section.title,
    description: data?.acf.hero_section.description,
    desktopImage: data.acf.hero_section.images.desktop_image,
    mobileImage: data.acf.hero_section.images.mobile_image,
    cta: data.acf.hero_section.cta,
    videoID: data.acf.hero_section.video_id,
    videoFile: data.acf.hero_section.video_file,
  };
  const serviceCards = data.acf.services.map((item, index) => {
    return (
      <HomeServiceCard
        key={index}
        title={item.title}
        subtitle={item.subtitle}
        videoFile={item.video.video_file}
        placeholderImage={item.video.placeholder_image}
        cta1={item.cta_1}
        cta2={item.cta_2}
      />
    );
  });
  return (
    <>
      <HeroVideo data={heroData} />
      <ServiceCardsWrapper maxWidth="xl">{serviceCards}</ServiceCardsWrapper>
      <TestimonialSection data={testimonialData.testimonial} />
    </>
  );
}
const ServiceCardsWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 80px auto;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
