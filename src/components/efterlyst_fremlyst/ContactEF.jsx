import { Box, Heading, Flex, Divider, Icon, Link } from "@chakra-ui/react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import NextLink from "next/link";

function ContactEF({ kontaktData }) {
  const { emailvalgt, email, tlfvalgt, tlf, fbvalgt, fblink, fbnavn } =
    kontaktData;

  return (
    <Box
      pt={"1rem"}
      display={{ lg: "grid" }}
      gridTemplateColumns={{ lg: "1.4fr 1fr" }}
    >
      <Box>
        {tlfvalgt === true ? (
          <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
            <Flex as="dt" alignItems={"center"}>
              <Icon
                color="brand.redCta"
                w={{ base: 6, md: 8 }}
                h={{ base: 6, md: 8 }}
                as={BsTelephone}
              />
            </Flex>

            <Heading as="dd" size={{ base: "heading6", md: "heading5" }}>
              {tlf}
            </Heading>
          </Flex>
        ) : (
          <></>
        )}
        {emailvalgt === true ? (
          <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
            <Flex as="dt" alignItems={"center"}>
              <Icon
                color="brand.redCta"
                w={{ base: 6, md: 8 }}
                h={{ base: 6, md: 8 }}
                as={BsEnvelope}
              />
            </Flex>
            <Heading as="dd" size={{ base: "heading6", md: "heading5" }}>
              {email}
            </Heading>
          </Flex>
        ) : (
          <></>
        )}
        {fbvalgt === true ? (
          <NextLink href={fblink} passHref prefetch={false}>
            <Link variant={"clean"} isExternal>
              <Flex as={"dl"} mb="1rem" alignItems={"center"} gap="0.5rem">
                <Flex as="dt" alignItems={"center"}>
                  <Icon
                    color="brand.redCta"
                    w={{ base: 6, md: 8 }}
                    h={{ base: 6, md: 8 }}
                    as={AiOutlineFacebook}
                  />
                </Flex>
                <Heading as="dd" size={{ base: "heading6", md: "heading5" }}>
                  {fbnavn}
                </Heading>
              </Flex>
            </Link>
          </NextLink>
        ) : (
          <></>
        )}
      </Box>

      <Divider
        display={{ base: "block", lg: "none" }}
        orientation="horizontal"
        mb="1rem"
      />
    </Box>
  );
}

export default ContactEF;
