import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Step1 from "../../components/efterlyst_fremlyst/formsteps/Step1";
import Step2 from "../../components/efterlyst_fremlyst/formsteps/Step2";
import Step3 from "../../components/efterlyst_fremlyst/formsteps/Step3";

function EfterlysFormFlow() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [step1State, setStep1State] = useState("");
  const [step2State, setStep2State] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [postLoading, setPostLoading] = useState(false);

  const onAuthCallback = () => {
    if (authToken) {
      setCurrentStepIndex(+1);
    } else {
      fetchAuth();
    }
  };

  async function fetchAuth() {
    const JSONdata = JSON.stringify({
      username: "admin",
      password: "c8ofU7wAPfG$W&oC&STcAQ4g",
    });

    const endpoint =
      "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/jwt-auth/v1/token";
    const header = {
      "Content-Type": "application/json",
      accept: "application/json",
    };

    const options = {
      method: "POST",
      body: JSONdata,
      headers: header,
    };

    const postResponse = await fetch(endpoint, options);

    const result = await postResponse.json();
    if (result.token === undefined) {
      alert("Desværre skete der en fejl");
    } else {
      setAuthToken(result.token);
      setCurrentStepIndex(currenStepIndex + 1);
    }
  }

  const onPostCallback = (values) => {
    //post image
    if (authToken) {
      uploadImg(values);
    } else {
      setPostLoading(false);
      alert("Noget gik galt");
    }
  };
  async function uploadImg(values) {
    const formData = new FormData();
    formData.append("file", step1State.file);

    const endpoint =
      "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/wp/v2/media";
    const header = {
      Authorization: `Bearer ${authToken}`,
      //Authorization: `Bearer ${"peee"}`,
    };

    const options = {
      method: "POST",
      body: formData,
      headers: header,
    };

    const postResponse = await fetch(endpoint, options);

    const result = await postResponse.json();
    if (result.id === undefined) {
      alert("Desværre skete der en fejl");
      setPostLoading(false);
    } else {
      setImgUrl(result);
      cleanedData(result, values);
    }
  }
  function cleanedData(result, values) {
    const split = step1State.dato.split("-");
    const cleanDate = split[2] + "/" + split[1] + "/" + split[0];

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const data = {
      title: capitalizeFirstLetter(step1State.catname),
      status: "publish",
      fields: {
        navn: capitalizeFirstLetter(step1State.catname),
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
          ID: result.id,
          id: result.id,
          url: result.source_url,
        },
        by: capitalizeFirstLetter(step1State.by),
        kontaktnavn: capitalizeFirstLetter(values.fullName),
        kontakt: {
          emailvalgt: values.emailValgt,
          email: values.email,
          tlfvalgt: values.tlfValgt,
          tlf: values.tlf,
          fbvalgt: values.fbValgt,
          fblink: values.fbLink,
          fbnavn: values.fbNavn,
        },
      },
    };

    postRequest(data);
  }

  async function postRequest(postData) {
    const JSONdata = JSON.stringify(postData);

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

    const postResponse = await fetch(endpoint, options);

    const result = await postResponse.json();
    if (result.id === undefined) {
      setPostLoading(false);
      alert("Desværre skete der en fejl");
    } else {
      setPostLoading(false);
      setCurrentStepIndex(currenStepIndex + 1);
      //console.log(result);
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
          setPostLoading={setPostLoading}
          postLoading={postLoading}
        />
      ),
    },
    {
      component: (
        <Step3
          setCurrentStepIndex={setCurrentStepIndex}
          setStep1State={setStep1State}
          setStep2State={setStep2State}
          setAuthToken={setAuthToken}
          setImgUrl={setImgUrl}
        />
      ),
    },
  ];

  return (
    <Box
      display={"grid"}
      maxWidth={"container.xxl"}
      gap={{ base: "2rem", xl: "4rem" }}
      gridTemplateColumns={{ lg: "1.5fr 1fr" }}
      mx={{ md: "6rem", lg: "auto" }}
      px={{ base: "1rem" }}
    >
      {steps[currenStepIndex].component}
    </Box>
  );
}

export default EfterlysFormFlow;
