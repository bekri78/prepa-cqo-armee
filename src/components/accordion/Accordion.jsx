import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion style= {{ backgroundColor:' #161515fc'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Pourquoi cette application ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Cette application à pour but d'aider tout militaire de l'ecole de l'air souhaitant se préparer à l'examen du C.Q.O d'une façon interactive.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style= {{ backgroundColor:' #161515fc'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Comment cela fonctionne ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Le questionnaire  est basé sur 38 questions, elles sont piochées aléatoirement dans une large bande de données. La note final est convertie sur 20 et vous indiquera si vous avez suffisament 
            de connaissances pour la reussite du C.Q.O, la moyenne étant fixé à 12/20.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style= {{ backgroundColor:' #161515fc'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Pour qui est-t'elle destinée ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Tout personnel militaire ou civil souhaitant développer ses connaissances sur l'armée de l'air et de l'espace.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
