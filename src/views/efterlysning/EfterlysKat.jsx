import { Box, Heading, Text, Link } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import Head from "next/head";
import { useState } from "react";
import NextLink from "next/link";
import FormFlow from "./FormFlow";

function EfterlysKat() {
  const [authToken, setAuthToken] = useState("");

  function getAuth() {
    fetch(
      "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },

        body: JSON.stringify({
          username: "admin",
          password: "c8ofU7wAPfG$W&oC&STcAQ4g",
        }),
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (user) {
        setAuthToken(user.token);
        //localStorage.setItem("jwt", user.token);
      });
  }

  function postTest() {
    const data = JSON.stringify({
      title: "Cleo",
      status: "publish",
      fields: {
        navn: "Cleo",
      },
    });

    fetch(
      "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/wp/v2/posttests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: data,
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (post) {
        console.log(post);
      });
  }

  return (
    <PageLayout>
      <Head>
        <title>Efterlys din kat</title>
      </Head>
      <Box
        bg="brand.lightGrey"
        display={"grid"}
        justifyContent="center"
        py={"4rem"}
        px="1rem"
      >
        <Box pb={"4rem"}>
          <Heading as={"h1"} size={"heading2"}>
            Her kan du efterlyse din kat
          </Heading>
          <Text>
            Inden du efterlyser din kat er det en god idé at tjekke vores liste
            over fundne/fremlyste katte{" "}
            <NextLink href={`/indberetning/fremlyste-katte`} passHref>
              <Link variant={"inLink"}>her</Link>
            </NextLink>
          </Text>
        </Box>
        <FormFlow />
      </Box>
    </PageLayout>
  );
}

export default EfterlysKat;
