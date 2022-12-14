import { Link, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

function LinkSection({ link }) {
  return (
    <Flex
      display={"grid"}
      justifyContent="center"
      alignContent={"center"}
      minH="8rem"
      px={"1rem"}
      mb={"4rem"}
      bg="brand.lightGrey"
    >
      {link.eksternt_link ? (
        <Text>
          {link.link_tekst ? <Text as={"span"}>{link.link_tekst} </Text> : null}
          <NextLink href={link.url} passHref prefetch={false}>
            <Link variant={"exLink"} isExternal>
              {link.url_tekst}
            </Link>
          </NextLink>
        </Text>
      ) : (
        <Text>
          {link.link_tekst ? <Text as={"span"}>{link.link_tekst} </Text> : null}
          <NextLink href={link.url} passHref prefetch={false}>
            <Link variant={"inLink"}>{link.url_tekst}</Link>
          </NextLink>
        </Text>
      )}
    </Flex>
  );
}

export default LinkSection;
