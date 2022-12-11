import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Heading,
  IconButton,
  DrawerFooter,
  Flex,
  Text,
  Box,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { BsXLg, BsCheckCircle, BsXCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import url from "../../api/url";
import * as Yup from "yup";
import { InputControl } from "formik-chakra-ui";
import { motion } from "framer-motion";
import NoResultsMsg from "../generics/NoResultsMsg";

function FindKommune({ isOpen, onCloseComplete, onClose }) {
  const [kommuner, setKommuner] = useState([]);
  const [kommuneResult, setKommuneResult] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getKommuner() {
      const res = await fetch(`${url}kommuneaftaler?per_page`);
      const data = await res.json();
      setKommuner(data);
    }
    getKommuner();
  }, []);

  const validationSchema = Yup.object({
    kommune: Yup.string().required("*Skriv venligst noget i feltet"),
  });

  function findKommune(values) {
    const kommune = [];
    kommuner.find((k) => {
      if (
        k.acf.kommune_navn.toLowerCase().includes(values.kommune.toLowerCase())
      ) {
        kommune.push(k);
      }
    });

    if (kommune.length === 0) {
      setError(true);

      setKommuneResult("");
    } else {
      setError(false);
      setKommuneResult(kommune);
    }
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      onCloseComplete={onCloseComplete}
      size={{ base: "full", lg: "lg" }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          display={"flex"}
          justifyContent="flex-end"
          pb="0"
          pr="1rem"
          pt="1rem"
        >
          <IconButton
            onClick={() => onClose()}
            colorScheme="blue"
            aria-label="Close"
            bg="none"
            color={"brand.blue"}
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            icon={<BsXLg size={24} />}
          />
        </DrawerHeader>

        <DrawerBody px={{ base: "1rem", md: "4rem" }} py="0">
          <Heading as="h1" size={"heading2"} mb="2rem" fontSize="xl">
            Søg efter din kommune
          </Heading>
          <Formik
            initialValues={{ kommune: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);

              findKommune(values);
            }}
          >
            {(props) => (
              <Form>
                <Flex justify={"flex-end"} alignItems="center">
                  <InputControl
                    minH="6rem"
                    name="kommune"
                    label="  Find din kommunes aftale med Kattens Værn"
                    inputProps={{
                      autoComplete: "off",
                      borderEndRadius: "0",
                      placeholder: "F.eks. København",
                      _hover: {
                        boxShadow: "none",
                        borderColor: "brand.blue",
                      },
                      _focus: {
                        boxShadow: "none",
                        borderColor: "brand.blue",
                      },
                    }}
                    mt={4}
                    mb={2}
                  />

                  <Button
                    borderStartRadius="0"
                    bg="brand.blueCta"
                    fontSize="xs"
                    mt={{ base: "3.8rem", drawer: "0.8rem" }}
                    colorScheme="teal"
                    _hover={{ transform: "scale(1)", bg: "brand.blue" }}
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Søg
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>

          {error ? (
            <Box
              as={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <NoResultsMsg
                msg={
                  "Vi kunne desværre ikke finde en kommune der matchede din søgning"
                }
              />
            </Box>
          ) : null}
          {kommuneResult !== "" &&
            (kommuneResult[0].acf.kv_ikke_i_omrade ? (
              <Box
                as={motion.div}
                key={kommuneResult[0].id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Box display="grid">
                  <Divider
                    mb="2rem"
                    orientation="horizontal"
                    bg="brand.blue"
                    borderColor="transparent"
                  />
                  <Heading as={"h2"} size="heading4" mb="1rem">
                    <Text as="span" fontWeight="normal">
                      {" "}
                      Katten befinder sig på
                    </Text>{" "}
                    {kommuneResult[0].acf.kommune_navn}
                  </Heading>{" "}
                  <Text> {kommuneResult[0].acf.aftale_status}</Text>{" "}
                </Box>
              </Box>
            ) : (
              <Box
                as={motion.div}
                key={kommuneResult[0].id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Box display="grid">
                  <Divider
                    mb="2rem"
                    orientation="horizontal"
                    bg="brand.blue"
                    borderColor="transparent"
                  />
                  <Heading as={"h2"} size="heading4" mb="0.5rem">
                    <Text as="span" fontWeight="normal">
                      Katten befinder sig i
                    </Text>{" "}
                    {kommuneResult[0].acf.kommune_navn}
                  </Heading>
                  <Flex alignItems="center" gap="0.5rem">
                    {kommuneResult[0].acf.har_aftale ? (
                      <>
                        <Text fontWeight="bold">Kommunen betaler</Text>
                        <Icon
                          as={BsCheckCircle}
                          h="1.5rem"
                          w="1.5rem"
                          color="green"
                        />
                      </>
                    ) : (
                      <>
                        <Text fontWeight="bold">Kommunen betaler ikke</Text>{" "}
                        <Icon
                          as={BsXCircle}
                          h="1.5rem"
                          w="1.5rem"
                          color="brand.errorMsg"
                        />
                      </>
                    )}
                  </Flex>
                  <Text mt="2rem"> {kommuneResult[0].acf.aftale_status}</Text>
                  <Text mt="1rem" mb="0.4rem">
                    Kontakt:
                  </Text>
                  <Text>
                    {kommuneResult[0].acf.kontaktnavn} <br />
                    <Text as="span">{kommuneResult[0].acf.kontakt}</Text>
                  </Text>
                  {kommuneResult[0].acf.kontakt_kv && (
                    <Box>
                      <Text mt="1rem" mb="0.4rem">
                        Tidsrum:
                      </Text>
                      <Text>{kommuneResult[0].acf.kvs_tlftid.tid_1}</Text>
                      <Text>{kommuneResult[0].acf.kvs_tlftid.tid_2}</Text>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
        </DrawerBody>

        <DrawerFooter display={"grid"} justifyContent={"normal"}>
          <Button variant="blueBtn" onClick={() => onClose()}>
            Gå tilbage
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default FindKommune;
