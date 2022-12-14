import { Box, Flex, Link, Icon, Heading } from "@chakra-ui/react";
import NewsArticle from "../../components/articles/NewsArticle";
import url from "../../api/url";
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import NextLink from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
export default function Nyheder({ nyhedsData, sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
      <Box py="3rem" display={"grid"} placeContent="center" gap="1rem">
        <Heading as="h3" size="heading4" textAlign={"center"}>
          Find os på sociale medier
        </Heading>
        <Flex alignItems="center" placeSelf={"center"}>
          <NextLink
            href={"https://www.facebook.com/KattensVaern"}
            passHref
            prefetch={false}
          >
            <Link isExternal justifyContent={"center"} alignItems="center">
              <Icon
                display={"flex"}
                justifyContent={"center"}
                alignItems="center"
                color="brand.darkGrey"
                w={9}
                h={9}
                as={AiOutlineFacebook}
              />
            </Link>
          </NextLink>
          <NextLink
            href={"https://www.instagram.com/kattensvaern/"}
            passHref
            prefetch={false}
          >
            <Link
              isExternal
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
              mr="4px"
            >
              <Icon
                display={"flex"}
                justifyContent={"center"}
                alignItems="center"
                color="brand.darkGrey"
                w={10}
                h={10}
                as={AiOutlineInstagram}
              />
            </Link>
          </NextLink>
          <NextLink
            href={"https://www.tiktok.com/@kattensvaern"}
            passHref
            prefetch={false}
          >
            <Link
              isExternal
              borderRadius={"0.2rem"}
              border={"2px solid black"}
              px="0.2rem"
              py="0.2rem"
              mr="4px"
            >
              <Icon
                display={"flex"}
                justifyContent={"center"}
                alignItems="center"
                color="brand.darkGrey"
                w={5}
                h={5}
                as={FaTiktok}
              />
            </Link>
          </NextLink>
          <NextLink
            href={"https://www.youtube.com/KattensVaern"}
            passHref
            prefetch={false}
          >
            <Link
              isExternal
              display={"flex"}
              justifyContent={"center"}
              alignItems="center"
            >
              <Icon
                display={"flex"}
                justifyContent={"center"}
                alignItems="center"
                color="brand.darkGrey"
                w={10}
                h={10}
                as={AiOutlineYoutube}
              />
            </Link>
          </NextLink>
        </Flex>
      </Box>

      <Box bg="brand.lightGrey" py={{ base: "3rem", md: "6rem" }} px="1rem">
        <Flex justify={"center"} flexWrap="wrap" gap="1rem">
          {nyhedsData.map((artikel, i) => (
            <NewsArticle key={artikel.id} id={artikel.id} {...artikel} />
          ))}
        </Flex>
      </Box>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${url}nyhedsartikler`);
  const nyhedsData = await res.json();
  const res2 = await fetch(`${url}indholdsider/1748`);
  const sideData = await res2.json();

  return {
    props: {
      nyhedsData: nyhedsData,
      sideData: sideData,
    },
  };
}
