import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function SplashHeader({
  acf,
  h1mobsize = "heading1",
  imgMobPos = "center",
  imgWebPos = "center",
  textPos = "left",
  height = "70vh",
}) {
  const buttonChecker = () => {
    if (acf.buttonurl === "") {
      return false;
    } else {
      return true;
    }
  };
  const overtekstChecker = () => {
    if (acf.overtekst === "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Box
      position="relative"
      display={"grid"}
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="repeat(3, 1fr)"
      height={height}
      width={"100vw"}
      overflow="hidden"
      backgroundImage={acf.splashbillede}
      bgPosition={{ base: imgMobPos, lg: imgWebPos }}
      bgSize="cover"
    >
      <Box
        position="absolute"
        top={"0"}
        width="100%"
        height={"100%"}
        bgColor="brand.darkGrey"
        opacity={"50%"}
      ></Box>
      <Flex
        gridRow="2/3"
        gridColumn={{ base: "1/3", lg: "2/3" }}
        zIndex={"1"}
        align={"left"}
        justifyContent="center"
        direction={"column"}
        color="brand.white"
        gap="1rem"
        py={"2rem"}
        px={{ base: "1rem", md: "4rem" }}
        textAlign={textPos}
      >
        {overtekstChecker() && (
          <Heading as={"h1"} size="sm" px={"5px"}>
            {acf.overtekst}
          </Heading>
        )}
        <Heading as={"h1"} size={{ base: h1mobsize, lg: "heading1" }}>
          {acf.overskrift}
        </Heading>
        <Text>
          {acf.undertekst}
          {acf.headinglink.length > 0 ? (
            <NextLink as="span" href={acf.headinglink} passHref>
              <Link variant={"inLink"}>{acf.linknavn}</Link>
            </NextLink>
          ) : (
            <></>
          )}
        </Text>
        {buttonChecker() && (
          <NextLink href={acf.buttonurl} passHref>
            <Link
              maxW={"10rem"}
              alignSelf={textPos}
              justifyContent="center"
              variant={"blueBtn"}
            >
              {acf.buttontekst}
            </Link>
          </NextLink>
        )}
      </Flex>
    </Box>
  );
}

export default SplashHeader;
