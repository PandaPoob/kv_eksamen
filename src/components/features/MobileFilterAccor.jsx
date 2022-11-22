import {
  Icon,
  Accordion,
  Button,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Divider,
} from "@chakra-ui/react";
import { BsCheck2, BsChevronDown } from "react-icons/bs";

function MobileFilterAccor({ placeholder, options, setState, state }) {
  return (
    <Accordion allowToggle bg={"brand.white"}>
      <AccordionItem>
        <AccordionButton py={"1.5rem"} px={"2rem"} _hover={{ bg: "none" }}>
          <Box
            flex="1"
            textAlign="left"
            fontWeight={"medium"}
            fontSize={"smallH"}
            textDecor={state !== "" ? "underline" : "none"}
          >
            {placeholder}
          </Box>
          <AccordionIcon as={BsChevronDown} color="brand.blue" w={6} h={6} />
        </AccordionButton>

        <AccordionPanel fontSize={"1.2rem"} display={"grid"} p={0}>
          {options.map((o) => {
            return (
              <Box key={o.value}>
                <Divider orientation="horizontal" />
                <Button
                  onClick={() => setState(o.value)}
                  variant={"mobileFilterBtn"}
                >
                  {o.value}
                  <Icon
                    opacity={state === o.value ? "1" : "0"}
                    transition={"0.2s ease-in-out"}
                    color="brand.redCta"
                    w={8}
                    h={8}
                    as={BsCheck2}
                  />
                </Button>
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default MobileFilterAccor;
