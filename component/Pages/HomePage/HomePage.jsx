"use client";
import HeroVideo from "@/component/Hero/HeroVideo";
import React from "react";

export default function HomePage({ data }) {
  const heroData = {
    title: data?.acf.hero_section.title,
    description: data?.acf.hero_section.description,
    desktopImage: data?.acf.hero_section?.images.desktop_image,
    mobileImage: data?.acf.hero_section?.images.mobile_image,
    cta: data?.acf.hero_section.cta,
    videoID: data?.acf.hero_section.video_id,
    videoFile: data?.acf.hero_section.video_file,
  };
  console.log(data);
  return <>{heroData.title && <HeroVideo data={heroData} />}</>;
}
