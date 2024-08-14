import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Container } from "@mui/material";
import Link from "next/link";
import useActiveSection from "@/hooks/useActiveSection";
function SubNav({ dataArr }) {
  //section id array for useActiveSection hook
  const sectionIDArr = dataArr.map((item) => {
    return item.acf_fc_layout;
  });
  //get active section
  const activeSection = useActiveSection(sectionIDArr);
  useEffect(() => {
    handleChange(null, sectionIDArr.indexOf(activeSection));
  }, [activeSection]);

  const [showSubnav, setShowSubnav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowSubnav(true);
      } else {
        setShowSubnav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tab = dataArr.map((item, index) => {
    return (
      <Tab
        key={index}
        label={item.acf_fc_layout.replace(/_/g, " ")}
        component="a"
        href={`#${item.acf_fc_layout}`}
      />
    );
  });

  return (
    <>
      {showSubnav && (
        <Section>
          <Container className="wrapper" maxWidth="xl" component="div">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              {tab}
            </Tabs>
            <Link className="cta-link" href="/book-appointment" target="_blank">
              <Button size="sm" variant="contained">
                BOOK APPOINTMENT
              </Button>
            </Link>
          </Container>
        </Section>
      )}
    </>
  );
}

export default SubNav;
const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--light-on-primary-container, #0d2000);
  z-index: 1101;
  @media (max-width: 1200px) {
    top: 40px;
  }
  @media (max-width: 720px) {
    .cta-link {
      display: none;
    }
  }
  .wrapper {
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .MuiButtonBase-root {
    color: var(--material-theme-ref-neutral-neutral-99, #fdfcf5);
  }
  .Mui-selected {
    color: #80c342;
  }
  button {
    color: var(--dark-on-primary, #1b3700) !important;
  }
`;
