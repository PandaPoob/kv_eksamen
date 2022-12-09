import { Select } from "@chakra-ui/react";
import { BsCheck2, BsChevronDown } from "react-icons/bs";
function SelectDropdown({ onCallback, placeholder, options }) {
  return (
    <Select
      minW={"8rem"}
      fontSize={"xs"}
      maxW={"10rem"}
      bg="brand.white"
      _hover={{ cursor: "pointer" }}
      focusBorderColor="blueKv"
      colorScheme={"blueKv"}
      icon={<BsChevronDown />}
      iconColor="brand.blue"
      iconSize="1rem"
      color={"brand.blue"}
      placeholder={placeholder}
      onChange={(event) => onCallback(event.target.value)}
    >
      {options.map((o) => {
        return (
          <option key={o.value} value={o.value}>
            {o.value}
          </option>
        );
      })}
    </Select>
  );
}

export default SelectDropdown;
