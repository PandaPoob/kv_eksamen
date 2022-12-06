import { Box, Breadcrumb, BreadcrumbItem, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Step1 from "../../components/efterlyst+fremlyst/formsteps/Step1";
import Step2 from "../../components/efterlyst+fremlyst/formsteps/Step2";
import Step3 from "../../components/efterlyst+fremlyst/formsteps/Step3";

function FormFlow() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [step1State, setStep1State] = useState("");
  const [step2State, setStep2State] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  //console.log(step1State);
  //console.log(step2State);
  //console.log(imgUrl);

  const onAuthCallback = () => {
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
    setCurrentStepIndex(+1);
  };

  const onPostCallback = () => {
    //post image
    if (authToken) {
      uploadImg();
    } else {
      alert("Noget gik galt");
    }
  };
  async function uploadImg() {
    const formData = new FormData();
    formData.append("file", step1State.file);

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
        setImgUrl(post);
        postTest();
      });
  }

  async function postTest() {
    //clean up formdata
    const split = step1State.dato.split("-");
    const cleanDate = split[2] + "/" + split[1] + "/" + split[0];

    const data = {
      title: step1State.catname,
      status: "publish",
      fields: {
        navn: step1State.catname,
        kon: step1State.kon,
        beskrivelse: step1State.descrip,
        dato: cleanDate,
        postnummer: step1State.postnummer,
        landsdel: step1State.landsdel,
        oremaerket: step1State.oremaerket,
        oremaerkenr: step1State.oremaerkenr,
        chippet: step1State.chippet,
        chipnr: step1State.chipnummer,
        billede: {
          ID: imgUrl.id,
          id: imgUrl.id,
          url: imgUrl.source_url,
        },
        by: step1State.by,
        kontaktnavn: step2State.fullName,
        kontakt: {
          emailvalgt: step2State.emailValgt,
          email: step2State.email,
          tlfvalgt: step2State.tlfValgt,
          tlf: step2State.tlf,
          fbvalgt: step2State.fbValgt,
          fblink: step2State.fbLink,
          fbnavn: step2State.fbNavn,
        },
      },
    };
    console.log(data);

    //postData(data);
  }

  async function postData(data) {
    // post here
    const JSONdata = JSON.stringify(data);

    const endpoint =
      "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/wp/v2/efterlystekatte";
    const header = {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    };

    const options = {
      method: "POST",
      body: JSONdata,
      headers: header,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const postResponse = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await postResponse.json();
    if (result.Message === "An error has occurred.") {
      alert("unfortunately your order failed");
    } else {
      setCurrentStepIndex(currenStepIndex + 1);
      console.log(result);
    }
  }

  const steps = [
    {
      component: (
        <Step1
          setCurrentStepIndex={setCurrentStepIndex}
          setStep1State={setStep1State}
          step1State={step1State}
          onAuthCallback={onAuthCallback}
        />
      ),
    },
    {
      component: (
        <Step2
          setCurrentStepIndex={setCurrentStepIndex}
          setStep2State={setStep2State}
          step2State={step2State}
          onPostCallback={onPostCallback}
        />
      ),
    },
    {
      component: (
        <Step3
          currenStepIndex={currenStepIndex}
          setCurrentStepIndex={setCurrentStepIndex}
        />
      ),
    },
  ];

  return (
    <Box
      display={"grid"}
      maxWidth={"container.xxl"}
      gap={{ base: "2rem", xl: "6rem" }}
      gridTemplateColumns={{ lg: "1.2fr 1fr" }}
      mx={{ md: "6rem", lg: "auto" }}
      px={{ lg: "1rem" }}
    >
      {steps[currenStepIndex].component}
    </Box>
  );
}

export default FormFlow;
