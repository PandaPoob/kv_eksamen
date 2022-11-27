import { Link, Box, Heading, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function LinkSection({ link }) {
  console.log(link);
  //tjek om ekstern eller intern link
  return (
    <Flex
      display={"grid"}
      justifyContent="center"
      alignContent={"center"}
      minH="8rem"
      px={"1rem"}
      mb={"4rem"}
      bg="lightyellow"
    >
      {link.eksternt_link ? (
        <Flex>
          <NextLink href={link.url} passHref>
            <Link variant={"exLink"} isExternal>
              {link.link_tekst ? (
                <Text textDecoration={"none"} as={"span"}>
                  {link.link_tekst}{" "}
                </Text>
              ) : null}
              {link.url_tekst}
            </Link>
          </NextLink>
        </Flex>
      ) : (
        <Flex gap={"0.2rem"}>
          <NextLink href={link.url} passHref>
            <Link variant={"inLink"}>
              {link.link_tekst ? (
                <Text fontWeight={"normal"} as={"span"}>
                  {link.link_tekst}{" "}
                </Text>
              ) : null}
              {link.url_tekst}
            </Link>
          </NextLink>
        </Flex>
      )}
    </Flex>
  );
}

export default LinkSection;
