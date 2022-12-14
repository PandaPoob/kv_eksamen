import { Box, Flex, Heading, Divider, Icon } from "@chakra-ui/react";
import { BsEnvelope } from "react-icons/bs";


export default function Infoboks() {
  return (
    <Box
      bgColor={"brand.white"}
      borderRadius={"0.2rem"}
      boxShadow={"1px 2px 6px 1px #B8B8B8"}
      gridColumn={{ lg: "2" }}
      minW={{ base: "18.75rem", md: "16.75rem" }}
      maxW={{ base: "45rem", md: "23.1rem", lg: "40.6rem", xl: "43.75rem" }}
      height={{
        base: "20.6rem",
        md: "20.6rem",
        lg: "17,6rem",
        xl: "17.6rem",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      px={"2.1rem"}
      mt={{ base: "3rem", md: "0rem" }}
    >
      <Box as="section" pt={"2.1rem"} pb={"2.1rem"}>
        <Heading as={"h4"} size={"heading4"} mb={"1.1rem"}>
          Ønsker du at blive sponsor?
        </Heading>
        Kontakt fundraising manager Johan Bache hvis du vil tegne sponsorat
      </Box>
      <Divider />
      <Flex gap={"1rem"} py={"2.1rem"}>
        <Icon color="brand.redCta" w={8} h={8} as={BsEnvelope} />
        <Heading as="dd" size={"heading5"}>
          jb@kattens-vaern.dk
        </Heading>
      </Flex>
    </Box>
  );
}
