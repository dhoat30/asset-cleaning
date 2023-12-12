"use client";
import BenefitsSection from "@/component/BenefitsSection/BenefitsSection";
import BreakSection from "@/component/BreakSection/BreakSection";
import CheckListSection from "@/component/CheckListSection/CheckListSection";
import BookAppointmentForm from "@/component/Forms/BookAppointmentForm/BookAppointmentForm";
import Hero from "@/component/Hero/Hero";
import CircleProcess from "@/component/Process/CircleProcess";
import ServiceExplanation from "@/component/ServiceExplanation/ServiceExplanation";
import WhoIsThisFor from "@/component/WhoIsThisFor/WhoIsThisFor";
import WhyChooseUsSection from "@/component/WhyChooseUsSection/WhyChooseUsSection";
import styled from "@emotion/styled";
import React from "react";
import { Container } from "@mui/material";
import GetQuoteForm from "@/component/Forms/GetQuoteForm/GetQuoteForm";
import SubNav from "@/component/Header/SubNav/SubNav";
export default function ResidentialSingleServicePage({
  data,
  whyChooseUsData,
}) {
  const heroData = {
    title: data?.acf.hero_section.title,
    description: data?.acf.hero_section.description,
    desktopImage: data?.acf.hero_section?.images.desktop_image,
    mobileImage: data?.acf.hero_section?.images.mobile_image,
    cta: data?.acf.hero_section.cta,
    videoID: data?.acf.hero_section.video_id,
  };

  const sectionBreakData = {
    title: data?.acf.section_break.title,
    description: data?.acf.section_break.description,
    placeholderImage: data?.acf.section_break.video_section.placeholder_image,
    video: data?.acf.section_break.video_section.video_file,
    cta: data?.acf.section_break.cta,
  };
  const subNavDataArr = data?.acf.flexible_content;

  const layoutSection = data?.acf?.flexible_content
    ? data.acf.flexible_content.map((item, index) => {
        if (item.acf_fc_layout === "cleaning_process") {
          return (
            <CircleProcess
              key={index}
              title={item.title_section.title}
              subtitle={item.title_section.subtitle}
              cardsArray={item.cards}
              sectionID={item.acf_fc_layout}
            />
          );
        } else if (item.acf_fc_layout === "benefits_of_cleaning") {
          return (
            <BenefitsSection
              key={index}
              title={item.title_section.title}
              subtitle={item.title_section.subtitle}
              benefitCardsArray={item.cards}
              sectionID={item.acf_fc_layout}
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
              sectionID={item.acf_fc_layout}
            />
          );
        } else if (item.acf_fc_layout === "cleaning_service_explanation") {
          return (
            <ServiceExplanation
              key={index}
              title={item.title_section.title}
              subtitle={item.title_section.subtitle}
              description={item.title_section.description}
              cardsArray={item.cards}
              cta={item.title_section.cta}
              sectionID={item.acf_fc_layout}
            />
          );
        } else if (item.acf_fc_layout === "who_is_this_service_for") {
          return (
            <WhoIsThisFor
              key={index}
              title={item.title_section.title}
              subtitle={item.title_section.subtitle}
              cardsArray={item.cards}
              cta={item.title_section.cta}
              sectionID={item.acf_fc_layout}
            />
          );
        }
      })
    : null;

  return (
    <>
      <SubNav dataArr={subNavDataArr} />
      {heroData.title && <Hero data={heroData} />}
      <FormWrapper maxWidth="md">
        <GetQuoteForm showTitle={true} />
      </FormWrapper>

      {data?.acf.section_break.title && (
        <BreakSection data={sectionBreakData} />
      )}

      {layoutSection}

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
const FormWrapper = styled(Container)`
  position: relative;
  top: -56px;
  @media (max-width: 600px) {
    top: 32px;
  }
`;
