import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Heading,
  IconButton,
  FormControl,
  FormLabel,
  DrawerFooter,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { BsXLg } from "react-icons/bs";
import { useState, useEffect } from "react";
import url from "../../api/url";

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

  function findKommune(values) {
    //console.log("find kommune her", values.kommune);
    const kommune = [];
    kommuner.find((k) => {
      if (
        k.acf.kommune_navn.toLowerCase().includes(values.kommune.toLowerCase())
      ) {
        kommune.push(k);
      }
    });

    console.log(kommune);
    if (kommune.length === 0) {
      console.log("first");
      setError(true);
    } else {
      setError(false);
      setKommuneResult(kommune);
    }
  }
  //console.log(error);
  console.log("here", kommuneResult);
  /*  let searchedFilter = [];
 filteredArtists.filter((val) => {
   if (searchInput === "") {
     searchedFilter.push(val);
   } else if (val.name.toLowerCase().includes(searchInput.toLowerCase())) {
     searchedFilter.push(val);
   }
   return searchedFilter;
 });

 */
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
        <DrawerHeader display={"flex"} justifyContent="flex-end">
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

        <DrawerBody>
          <Heading as="h1" size={"heading2"}>
            Søg efter din kommune
          </Heading>
          <Formik
            initialValues={{ kommune: "" }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(false);
              findKommune(values);
            }}
          >
            {(props) => (
              <Form>
                <Flex justify={"flex-end"} alignItems="flex-end">
                  <Field name="kommune">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel>
                          Se din kommunes aftale med Kattens Værn ved at søge
                        </FormLabel>
                        <Input
                          autoComplete="off"
                          borderEndRadius="0"
                          _hover={{
                            boxShadow: "none",
                            borderColor: "brand.blue",
                          }}
                          _focus={{
                            boxShadow: "none",
                            borderColor: "brand.blue",
                          }}
                          {...field}
                          placeholder="F.eks. København"
                        />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    borderStartRadius="0"
                    bg="brand.blueCta"
                    fontSize="xs"
                    mt={4}
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

          {error ? <Text>Vi kunne desværre ikke finde din kommune</Text> : null}
          {kommuneResult !== "" ? (
            <>
              <Heading as={"h2"} size="heading4">
                {kommuneResult[0].acf.kommune_navn}
              </Heading>
              <Text> {kommuneResult[0].acf.aftale_status}</Text>
            </>
          ) : null}
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
