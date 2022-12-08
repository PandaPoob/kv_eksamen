import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Step1 from "../../components/efterlyst_fremlyst/formsteps/Step1";
import Step2 from "../../components/efterlyst_fremlyst/formsteps/Step2";
import Step3 from "../../components/efterlyst_fremlyst/formsteps/Step3";

function FremlysFormFlow() {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);
  const [step1State, setStep1State] = useState("");
  const [step2State, setStep2State] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [imgUrl, setImgUrl] = useState("");

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
      });
    setCurrentStepIndex(+1);
  };

  const onPostCallback = (values) => {
    //post image
    if (authToken) {
      uploadImg(values);
    } else {
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
    };

    const options = {
      method: "POST",
      body: formData,
      headers: header,
    };

    const postResponse = await fetch(endpoint, options);

    const result = await postResponse.json();
    if (result.Message === "An error has occurred.") {
      alert("unfortunately your order failed");
    } else {
      setImgUrl(result);
      cleanedData(result, values);
    }
  }
  function cleanedData(result, values) {
    const split = step1State.dato.split("-");
    const cleanDate = split[2] + "/" + split[1] + "/" + split[0];

    const data = {
      title: values.fullName,
      status: "publish",
      fields: {
        farve: step1State.farve,
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
        by: step1State.by,
        kontaktnavn: values.fullName,
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
    console.log(postData);

    const JSONdata = JSON.stringify(postData);

    const endpoint =
      "https://www.pandapoob.com/kea/17_finalexam/kv_database/wp-json/wp/v2/fremlystekatte";
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
    if (result.Message === "An error has occurred.") {
      alert("Desværre skete der en fejl");
    } else {
      setCurrentStepIndex(currenStepIndex + 1);
      console.log(result);
    }
  }

  const steps = [
    {
      component: (
        <Step1
          fremlysning={"fremlysning"}
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
          setCurrentStepIndex={setCurrentStepIndex}
          setStep1State={setStep1State}
          setStep2State={setStep2State}
          setAuthToken={setAuthToken}
          setImgUrl={setImgUrl}
          fremlysning={"fremlysning"}
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

export default FremlysFormFlow;
