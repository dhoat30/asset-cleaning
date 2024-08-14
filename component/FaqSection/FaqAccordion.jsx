import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqAccordion({ faqDataArr }) {
  const accordion = faqDataArr.map((item, index) => {
    return (
      <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.description}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
  return <div>{accordion}</div>;
}
