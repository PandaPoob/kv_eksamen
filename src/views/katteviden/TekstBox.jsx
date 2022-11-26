import { Heading, Text } from "@chakra-ui/react";

function TekstBox({ info }) {
  return (
    <>
      {info.tekst_overskrift !== "" ? (
        <Heading as={"h2"} size="heading4" mb={"1.1rem"}>
          {info.tekst_overskrift}
        </Heading>
      ) : null}
      <Text maxW={"70ch"}>{info.brodtekst}</Text>
    </>
  );
}

export default TekstBox;
