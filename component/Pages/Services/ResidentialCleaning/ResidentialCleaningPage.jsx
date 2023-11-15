"use client";
import BenefitsSection from "@/component/BenefitsSection/BenefitsSection";
import BreakSection from "@/component/BreakSection/BreakSection";
import CheckListSection from "@/component/CheckListSection/CheckListSection";
import BookAppointmentForm from "@/component/Forms/BookAppointmentForm/BookAppointmentForm";
import Hero from "@/component/Hero/Hero";
import CircleProcess from "@/component/Process/CircleProcess";
import WhyChooseUsSection from "@/component/WhyChooseUsSection/WhyChooseUsSection";
import React from "react";

export default function ResidentialCleaningPage({ data, whyChooseUsData }) {
  const heroData = {
    title: data.acf.hero_section.title,
    description: data.acf.hero_section.description,
    desktopImage: data.acf.hero_section?.images.desktop_image,
    mobileImage: data.acf.hero_section?.images.mobile_image,
    cta: data.acf.hero_section.cta,
    videoID: data.acf.hero_section.video_id,
  };

  const sectionBreakData = {
    title: data.acf.section_break.title,
    description: data.acf.section_break.description,
    placeholderImage: data.acf.section_break.video_section.placeholder_image,
    video: data.acf.section_break.video_section.video_file,
    cta: data.acf.section_break.cta,
  };

  const layoutSection = data.acf.flexible_content.map((item, index) => {
    if (item.acf_fc_layout === "benefits_of_cleaning") {
      return (
        <BenefitsSection
          key={index}
          title={item.title_section.title}
          subtitle={item.title_section.subtitle}
          benefitCardsArray={item.cards}
        />
      );
    } else if (item.acf_fc_layout === "cleaning_checklist") {
      return (
        <CheckListSection
          key={index}
          title={item.title_section.title}
          subtitle={item.title_section.subtitle}
          checklistsArray={item.cards}
          cta={item.title_section.cta}
        />
      );
    }
  });

  return (
    <>
      <Hero data={heroData} />
      <BookAppointmentForm />
      <BreakSection data={sectionBreakData} />
      {layoutSection}
      <WhyChooseUsSection
        data={whyChooseUsData.acf.why_choose_us_cards}
        title={whyChooseUsData.acf.hero_section.title}
        subtitle={whyChooseUsData.acf.hero_section.subtitle}
      />
    </>
  );
}
