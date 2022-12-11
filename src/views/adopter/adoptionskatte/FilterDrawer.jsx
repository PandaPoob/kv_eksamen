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
import MobileFilterAccor from "../../../components/features/MobileFilterAccor";

function FilterDrawer({
  isOpen,
  onCloseComplete,
  onClose,
  miljoOpt,
  internatOpt,
  alderOpt,
  setInternatFilter,
  setKanMedAndre,
  setMiljoFilter,
  setAlderFilter,
  kanMedAndre,
}) {
  const [kanMedAndreMobile, setKanMedAndreMobile] = useState(false);
  const [internatMobileFilter, setInternatMobileFilter] = useState("");
  const [miljoMobileFilter, setMiljoMobileFilter] = useState("");
  const [alderMobileFilter, setAlderMobileFilter] = useState("");

  function resetFilter() {
    setKanMedAndre(false);
    setKanMedAndreMobile(false);
    setInternatMobileFilter("");
    setMiljoMobileFilter("");
    setAlderMobileFilter("");
    setInternatFilter("");
    setMiljoFilter("");
    setAlderFilter("");
  }

  function onCancel() {
    setKanMedAndreMobile(false);
    setInternatMobileFilter("");
    setMiljoMobileFilter("");
    setAlderMobileFilter("");
    onClose();
  }

  function submit() {
    setInternatFilter(internatMobileFilter);
    setKanMedAndre(kanMedAndreMobile);
    setMiljoFilter(miljoMobileFilter);
    setAlderFilter(alderMobileFilter);
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
            <Flex bg={"brand.white"} mb="1rem">
              <Checkbox
                isChecked={kanMedAndreMobile}
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
                  if (kanMedAndreMobile === false) {
                    setKanMedAndreMobile(true);
                  } else {
                    setKanMedAndreMobile(false);
                  }
                }}
              >
                <Text fontWeight={"medium"} fontSize={"smallH"}>
                  Kan med andre katte
                </Text>
              </Checkbox>
            </Flex>

            <MobileFilterAccor
              placeholder={"Internat"}
              options={internatOpt}
              setState={setInternatMobileFilter}
              state={internatMobileFilter}
            />

            <MobileFilterAccor
              placeholder={"Miljø"}
              options={miljoOpt}
              setState={setMiljoMobileFilter}
              state={miljoMobileFilter}
            />

            <MobileFilterAccor
              placeholder={"Alder"}
              options={alderOpt}
              setState={setAlderMobileFilter}
              state={alderMobileFilter}
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

export default FilterDrawer;
