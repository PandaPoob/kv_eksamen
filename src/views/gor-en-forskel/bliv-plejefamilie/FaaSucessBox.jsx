import React from "react";
import { IoPawOutline } from "react-icons/io5";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";

export default function FaaSucessBox() {
  const textArr = [
    "Du kan selv fragte katten/kattene til og fra internatet",
    "Plejekattene skal kunne holdes inde i hele plejeperioden",
    "Du kan bringe katten til og fra dyrlægekontrol",
    "Eventuelle andre kæledyr i hjemmet skal være vaccinerede",
  ];

  return (
    <Box
      bg="brand.lightGrey"
      p={{ base: "2rem", lg: "3rem" }}
      borderRadius={"0.3rem"}
      boxShadow="md"
    >
      <Heading as="h2" size="heading3">
        Få success som plejefamilie
      </Heading>
      <Heading as="h4" size="heading5" mt="2rem">
        Kan du nikke ja til følgende punkter?
      </Heading>
      <List paddingBlock={"1rem"} display="grid" gap="1rem">
        {textArr.map((t, i) => (
          <ListItem key={i} display="flex" alignItems={"center"}>
            <ListIcon fontSize={25} as={IoPawOutline} color="brand.redCta" />
            {t}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
