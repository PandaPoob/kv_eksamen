import { Link, Box, Heading, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function LinkSection({ link }) {
  console.log(link);
  //tjek om ekstern eller intern link
  return (
    <Flex display={"grid"} justifyContent="center" mb={"4rem"}>
      {link.eksternt_link ? (
        <Flex gap={"0.2rem"}>
          {link.link_tekst ? <Text>{link.link_tekst} </Text> : null}
          <NextLink href={link.url} passHref>
            <Link variant={"exLink"} isExternal>
              {link.url_tekst}
            </Link>
          </NextLink>
        </Flex>
      ) : (
        <Flex gap={"0.2rem"}>
          {link.link_tekst ? <Text>{link.link_tekst} </Text> : null}
          <NextLink href={link.url} passHref>
            <Link variant={"inLink"}>{link.url_tekst}</Link>
          </NextLink>
        </Flex>
      )}
    </Flex>
  );
}

export default LinkSection;
