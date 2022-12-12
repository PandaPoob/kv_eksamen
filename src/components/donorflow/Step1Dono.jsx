import { Box, Heading, Text } from "@chakra-ui/react";

import SplashHeader from "../generics/SplashHeader";
import SMSogMobile from "../../views/gor-en-forskel/doner/SMSogMobile";
import DonoBelobForm from "../forms/DonoBelobForm";

function Step1Dono({
  data,
  sideData,
  step1Belob,
  setStep1Belob,
  onBelobCallback,
}) {
  const belobmulighederArr = Object.entries(data).map((e) => ({
    id: e[0],
    opt: e[1],
  }));

  //remove empty entries (false)
  let findOptions = belobmulighederArr.map(({ opt, ...rest }) => {
    return opt;
  });

  let findBelob = findOptions.map(({ belob, ...rest }) => {
    return belob;
  });

  let findVaerdi = findOptions.map(({ vaerdi, ...rest }) => {
    return vaerdi;
  });
  const options = findBelob;

  return (
    <>
      <SplashHeader textPos="center" imgMobPos={"30%"} {...sideData} />
      <Box
        display={"grid"}
        placeContent="center"
        px="1rem"
        py={{ base: "2rem", lg: "6rem" }}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={{ base: "1fr", lg: "1.5fr 1fr" }}
          gridTemplateRows={{ lg: "1fr 1fr" }}
          gap="2rem"
          maxW="container.xl"
        >
          <SMSogMobile />
          <Box
            display={"grid"}
            gridRow={{ lg: "1/3" }}
            bg="brand.white"
            boxShadow={"1px 2px 6px 1px #B8B8B8"}
            p={{ base: "1rem", lg: "2rem" }}
            gap="1rem"
          >
            <Heading as="h2" size="heading3" ml="1rem" mb="1rem">
              Doner med betalingskort
            </Heading>
            {data.map((optList) => (
              <DonoBelobForm
                step1Belob={step1Belob}
                display={"grid"}
                columns={"1fr"}
                key={optList.id}
                data={optList.acf}
                setStep1Belob={setStep1Belob}
                onBelobCallback={onBelobCallback}
              />
            ))}
          </Box>
          <Text
            gridColumn={"1/2"}
            m="auto"
            placeSelf={"end"}
            as={"i"}
            fontSize="smaller"
          >
            *Hvis du ønsker at donere/støtte for mere end 17.000,- ialt årligt
            kontakt vores administration om mere information om skat og fradrag.
          </Text>
        </Box>
      </Box>
    </>
  );
}
export default Step1Dono;
