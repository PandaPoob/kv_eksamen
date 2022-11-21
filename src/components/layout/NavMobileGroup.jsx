import NextLink from "next/link";
import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function NavMobileGroup({ titel, subTitel, onClose }) {
  return (
    <AccordionItem>
      <AccordionButton py={"1.5rem"}>
        <Box flex="1" textAlign="left" fontWeight={"semibold"} fontSize={"sm"}>
          {titel}
        </Box>
        <AccordionIcon as={BsChevronDown} color="brand.blue" w={8} h={8} />
      </AccordionButton>

      <AccordionPanel pb={"2rem"} fontSize={"1.2rem"}>
        <List variant="clean" display={"grid"} gap="1rem" pl={"1rem"}>
          {subTitel.map((li) => (
            <ListItem variant="clean" key={li.navn}>
              <NextLink href={li.link} passHref>
                <Link variant={"clean"} onClick={onClose}>
                  {li.navn}
                </Link>
              </NextLink>
            </ListItem>
          ))}
        </List>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default NavMobileGroup;
