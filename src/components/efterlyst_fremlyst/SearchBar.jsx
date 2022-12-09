import React from "react";
import {
  Input,
  FormLabel,
  VisuallyHidden,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar({ searchInput, setSearchInput }) {
  return (
    <InputGroup
      border="1px solid"
      borderColor="brand.borderGrey"
      borderRadius={"0.2rem"}
      w={{ base: "100%", md: "400px", lg: "400px" }}
      _hover={{
        boxShadow: "0 0 0 1px #032C53",
      }}
      _focus={{
        boxShadow: "0 0 0 1px #032C53",
      }}
    >
      <FormLabel m={0}>
        <VisuallyHidden> Søg på chipnummer eller øremærke</VisuallyHidden>
        <Input
          variant={"clean"}
          placeholder="Søg på chipnr. eller øremærke..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <InputRightElement>
          <BsSearch color="brand.blue" />
        </InputRightElement>
      </FormLabel>
    </InputGroup>
  );
}
