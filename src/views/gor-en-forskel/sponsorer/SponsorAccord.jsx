import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ImDiamonds } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";

export default function SponsorAccord() {
  return (
    <Box
      borderRadius={"0.2rem"}
      boxShadow={"1px 2px 6px 1px #B8B8B8"}
      gridColumn={{ lg: "1" }}
      bg="brand.white"
    >
      <Accordion
        allowMultiple
        minW={{
          base: "18.75rem",
          md: "20rem",
          lg: "40rem",
          xl: "45rem",
        }}
        maxW={{
          base: "45rem",
          md: "30rem",
          lg: "40rem",
          xl: "45rem",
        }}
      >
        <Heading as="h2" size="heading4">
          <Box flex="1" textAlign="left" p={"2.1rem"}>
            Niveauer af virksomhedssponsorater
          </Box>
        </Heading>

        <AccordionItem>
          <AccordionButton
            size="heading4"
            fontWeight={"400"}
            px={{ base: "1.1rem", lg: "2.1rem" }}
            py={"1.25rem"}
          >
            <Box
              flex="1"
              textAlign="left"
              as="h2"
              fontSize="sm"
              fontWeight={"400"}
            >
              Guldsponsorer
            </Box>

            <AccordionIcon as={BsChevronDown} w={6} h={6} />
          </AccordionButton>

          <AccordionPanel
            px={{ base: "1.1rem", lg: "2.1rem" }}
            pt={"1rem"}
            pb={{ base: "1.1rem", lg: "2.1rem" }}
          >
            Ved at støtte Kattens Værn med et Guldsponsorat yder du en
            uvurdérlig hjælp i vores arbejde med at hjælpe de vildtlevende og
            hjemløse katte i hele Danmark. <br /> <br />
            Et Guldsponsorat starter ved 25.000 kr. og kan indeholde:
            <br />
            <Box m={"1rem"}>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Din virksomheds logo på Kattens Værns hjemmeside
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Elektronisk støttebanner tilsendt til brug på hjemmeside og i{" "}
                  mailsignatur
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Fysisk sponsorbevis tilsendt, til at hænge på væggen{" "}
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Din virksomheds logo på sponsorvæg eller på et katteværelse{" "}
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Sponsorbanner i et nyhedsbrev{" "}
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  En annonce i medlemsbladet Kattens Venner
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Et facebookopslag
                </ListItem>
              </List>
            </Box>
            Mulighed for rabat ved tilkøb af værelsesskilt, skilt på sponsorvæg
            og annoncer i medlemsbladet Kattens Venner
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            size="heading4"
            fontWeight={"400"}
            px={{ base: "1.1rem", lg: "2.1rem" }}
            py={"1.25rem"}
          >
            <Box
              flex="1"
              textAlign="left"
              as="h2"
              fontSize="sm"
              fontWeight={"400"}
            >
              Sølvsponsorer
            </Box>

            <AccordionIcon as={BsChevronDown} w={6} h={6} />
          </AccordionButton>

          <AccordionPanel
            px={{ base: "1.1rem", lg: "2.1rem" }}
            pt={"1rem"}
            pb={{ base: "1.1rem", lg: "2.1rem" }}
          >
            Når du støtter de hjemløse katte med et Sølvsponsorat, gør du en
            markant forskel for foreningens arbejde.
            <br /> <br />
            Et Sølvsponsorat starter ved 15.000 kr. og indeholder som minimum:
            <br />
            <Box m={"1rem"}>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Din virksomheds logo på Kattens Værns hjemmeside
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Elektronisk støttebanner tilsendt til brug på hjemmeside og i
                  mailsignatur{" "}
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Fysisk sponsorbevis tilsendt, til at hænge på væggen{" "}
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Mulighed for at få dit virksomhedslogo på sponsorvæg eller på
                  katteværelse hos Kattens Værn{" "}
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Mulighed for sponsorbanner i et af vores nyhedsbreve{" "}
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Mulighed for rabat ved tilkøb af værelsesskilt, skilt på
                  sponsorvæg og annoncer i medlemsbladet Kattens Venner
                </ListItem>
              </List>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            size="heading4"
            fontWeight={"400"}
            px={{ base: "1.1rem", lg: "2.1rem" }}
            py={"1.25rem"}
          >
            <Box
              flex="1"
              textAlign="left"
              as="h2"
              fontSize="sm"
              fontWeight={"400"}
            >
              Bronzesponsorer
            </Box>

            <AccordionIcon as={BsChevronDown} w={6} h={6} />
          </AccordionButton>

          <AccordionPanel
            px={{ base: "1.1rem", lg: "2.1rem" }}
            pt={"1rem"}
            pb={{ base: "1.1rem", lg: "2.1rem" }}
          >
            Når du støtter med et Bronzesponsorat, gør du en stor forskel for de
            vildtlevende og hjemløse katte i Danmark.
            <br /> <br />
            Et Bronzesponsorat starter ved 5.000 kr. og indeholder som minimum:
            <br />
            <Box m={"1rem"}>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Din virksomheds logo på Kattens Værns hjemmeside
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Elektronisk støttebanner tilsendt til brug på hjemmeside og i
                  mailsignatur{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Fysisk sponsorbevis tilsendt, til at hænge på væggen{" "}
                </ListItem>

                <ListItem display="flex">
                  <ListIcon as={ImDiamonds} color="brand.redCta" />
                  Mulighed for rabat ved tilkøb af værelsesskilt, skilt på
                  sponsorvæg og annoncer i medlemsbladet Kattens Venner{" "}
                </ListItem>
              </List>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            size="heading4"
            fontWeight={"400"}
            px={{ base: "1.1rem", lg: "2.1rem" }}
            py={"1.25rem"}
          >
            <Box
              flex="1"
              textAlign="left"
              as="h2"
              fontSize="sm"
              fontWeight={"400"}
            >
              Potesponsorer
            </Box>

            <AccordionIcon as={BsChevronDown} w={6} h={6} />
          </AccordionButton>

          <AccordionPanel
            px={{ base: "1.1rem", lg: "2.1rem" }}
            pt={"1rem"}
            pb={{ base: "1.1rem", lg: "2.1rem" }}
          >
            Som potesponsor hos Kattens Værn, kan din virksomhed støtte kattene
            og være med til at sikre, at de får en ny chance i livet. Din
            virksomhed vil blive synlig her på siden med navn på virksomheden og
            link. Du vil få tilsendt en elektronisk støttebanner der fortæller,
            at din virksomhed støtter Kattens Værn. Den kan bruges på hjemmeside
            og i mailsignatur.
            <br /> <br />
            Pris for potesponsorat gældende 1 år: 2.500 kr.
            <br /> <br />
            Husk at potesponsoratet kan fratrækkes som markedsføringsudgift.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
