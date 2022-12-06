import { Box, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import PageLayout from "../../components/layout/PageLayout";
import Head from "next/head";
import { useState } from "react";
import NextLink from "next/link";
import FormFlow from "./FormFlow";

function EfterlysKat() {
  //const [imgTest, setImgTest] = useState("");
  //console.log("image:", imgTest);

  /*   function getAuth() {
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

  async function uploadImg() {
    const formData = new FormData();
    formData.append("file", imgTest);
    //formData = imgTest;

    fetch(
      "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/wp/v2/media",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (post) {
        console.log(post);
      });

    //postTest()
  }

  function postTest() {
    const data = JSON.stringify({
      title: "Jonas",
      status: "publish",
      featured_media: 304,

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
 */
  return (
    <PageLayout>
      <Head>
        <title>Efterlys din kat</title>
      </Head>
      <Flex
        bg="brand.lightGrey"
        py={"4rem"}
        flexDir="column"
        justifyContent={"center"}
      >
        {/* <input
          value={undefined}
          id="img"
          name="img"
          onChange={(event) => setImgTest(event.currentTarget.files[0])}
          type={"file"}
        ></input>

        <Button onClick={() => getAuth()}>get auth</Button>
        <Button onClick={() => uploadImg()}>post</Button> */}
        <Flex
          minH={"40vh"}
          flexDir="column"
          justifyContent={"center"}
          textAlign="center"
          mx={{ md: "6rem", lg: "auto" }}
        >
          <Heading as={"h1"} size={"heading2"} mb="1rem">
            Her kan du efterlyse din kat
          </Heading>
          <Text>
            Inden du efterlyser din kat er det en god idé at tjekke vores liste
            over fundne/fremlyste katte{" "}
            <NextLink href={`/indberetning/fremlyste-katte`} passHref>
              <Link variant={"inLink"}>her</Link>
            </NextLink>
          </Text>
        </Flex>
        <FormFlow />
      </Flex>
    </PageLayout>
  );
}

export default EfterlysKat;
