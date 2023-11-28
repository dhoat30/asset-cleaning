"use client";
import React from "react";
import HeroVideo from "@/component/Hero/HeroVideo";
import Hero from "@/component/Hero/Hero";
import HomeServiceCard from "../HomePage/HomeServiceCard";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import TestimonialSection from "@/component/TestimonialSection/TestimonialSection";
import WhyChooseUsSection from "@/component/WhyChooseUsSection/WhyChooseUsSection";
import USP from "@/component/USP/USP";
import BreakSection from "@/component/BreakSection/BreakSection";
export default function AboutUs({ data, testimonialData, whyChooseUsData }) {
  const heroData = {
    title: data.acf.hero_section.title,
    description: data?.acf.hero_section.description,
    desktopImage: data.acf.hero_section.images.desktop_image,
    mobileImage: data.acf.hero_section.images.mobile_image,
    cta: data.acf.hero_section.cta,
    videoID: data.acf.hero_section.video_id,
    videoFile: data.acf.hero_section.video_file,
  };
  const sectionBreakData = {
    title: data?.acf.section_break.title,
    description: data?.acf.section_break.description,
    placeholderImage: data?.acf.section_break.video_section.placeholder_image,
    video: data?.acf.section_break.video_section.video_file,
    cta: data?.acf.section_break.cta,
  };

  return (
    <>
      <Hero data={heroData} />
      <USP />
      <BreakSection data={sectionBreakData} />
      <TestimonialSection data={testimonialData.testimonial} />
      {whyChooseUsData.acf.hero_section?.title && (
        <WhyChooseUsSection
          data={whyChooseUsData.acf.why_choose_us_cards}
          title={whyChooseUsData.acf.hero_section.title}
          subtitle={whyChooseUsData.acf.hero_section.subtitle}
        />
      )}
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
