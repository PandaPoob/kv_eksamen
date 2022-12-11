import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  Checkbox,
  Text,
  Flex,
  DrawerFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import MobileFilterAccor from "../features/MobileFilterAccor";

function EFFilterDrawer({
  isOpen,
  onCloseComplete,
  onClose,
  landsdelOpt,
  konOpt,
  setLandsdelsfilter,
  setKon,
  setMaerket,
  setChippet,
  maerket,
  chippet,
}) {
  const [landsdelsfilterMobile, setLandsdelsfilterMobile] = useState("");
  const [konMobile, setKonMobile] = useState("");
  const [maerketMobile, setMaerketMobile] = useState(false);
  const [chippetMobile, setChippetMobile] = useState(false);

  function resetFilter() {
    setMaerket(false);
    setMaerketMobile(false);
    setChippet(false);
    setChippetMobile(false);
    setLandsdelsfilterMobile("");
    setLandsdelsfilter("");
    setKonMobile("");
    setKon("");
  }

  function onCancel() {
    setMaerketMobile(false);
    setChippetMobile(false);
    setLandsdelsfilterMobile("");
    setKonMobile("");
    onClose();
  }

  function submit() {
    setLandsdelsfilter(landsdelsfilterMobile);
    setMaerket(maerketMobile);
    setChippet(chippetMobile);
    setKon(konMobile);
    onClose();
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size={"full"}
      onCloseComplete={onCloseComplete}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          display={"flex"}
          alignItems={"center"}
          justifyContent="space-between"
          px={"1rem"}
          pt="3rem"
          pb={"0.5rem"}
          borderBottom={"1px solid #EEEEEE"}
        >
          <Button
            onClick={() => onCancel()}
            aria-label="Close filter"
            color={"brand.blue"}
            bg="none"
            px={0}
            fontWeight={"normal"}
            fontSize={"sm"}
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            alignSelf={"center"}
            gap={"1rem"}
          >
            <BsXLg size={24} />
          </Button>

          <Button
            onClick={() => resetFilter()}
            aria-label="Nulstil filter"
            color={"brand.blue"}
            fontWeight={"normal"}
            bg="none"
            px={0}
            fontSize={"sm"}
            _hover={{ bg: "none" }}
            _focus={{ bg: "none" }}
            alignSelf={"center"}
          >
            Nulstil
          </Button>
        </DrawerHeader>

        <DrawerBody p={0} bg={"brand.lightGrey"}>
          <Box display={"grid"} gap={"1rem"} mt={"4rem"} mb={"2rem"}>
            <Flex bg={"brand.white"}>
              <Checkbox
                iconSize="1rem"
                isChecked={maerketMobile}
                py="1.5rem"
                pr={"2.1rem"}
                pl={"1.5rem"}
                flexGrow={1}
                display={"flex"}
                flexDir={"row-reverse"}
                justifyContent={"space-between"}
                gap={"3.8rem"}
                colorScheme="blueKv"
                boxShadow={"none"}
                _focus={{ boxShadow: "none" }}
                _hover={{ boxShadow: "none" }}
                onChange={() => {
                  if (maerketMobile === false) {
                    setMaerketMobile(true);
                  } else {
                    setMaerketMobile(false);
                  }
                }}
              >
                <Text fontWeight={"medium"} fontSize={"smallH"}>
                  Er mærket
                </Text>
              </Checkbox>
            </Flex>
            <Flex bg={"brand.white"} mb="1rem">
              <Checkbox
                isChecked={chippetMobile}
                iconSize="1rem"
                py="1.5rem"
                pr={"2.1rem"}
                pl={"1.5rem"}
                flexGrow={1}
                display={"flex"}
                flexDir={"row-reverse"}
                justifyContent={"space-between"}
                gap={"3.8rem"}
                colorScheme="blueKv"
                boxShadow={"none"}
                _focus={{ boxShadow: "none" }}
                _hover={{ boxShadow: "none" }}
                onChange={() => {
                  if (chippetMobile === false) {
                    setChippetMobile(true);
                  } else {
                    setChippetMobile(false);
                  }
                }}
              >
                <Text fontWeight={"medium"} fontSize={"smallH"}>
                  Er chippet
                </Text>
              </Checkbox>
            </Flex>

            <MobileFilterAccor
              placeholder={"Landsdel"}
              options={landsdelOpt}
              setState={setLandsdelsfilterMobile}
              state={landsdelsfilterMobile}
            />

            <MobileFilterAccor
              placeholder={"Køn"}
              options={konOpt}
              setState={setKonMobile}
              state={konMobile}
            />
          </Box>
        </DrawerBody>
        <DrawerFooter display={"grid"} justifyContent={"normal"}>
          <Button variant="blueBtn" onClick={() => submit()}>
            Vis katte
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default EFFilterDrawer;
