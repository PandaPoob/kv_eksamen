import { Select } from "@chakra-ui/react";

function SelectDropdown({ onCallback, placeholder, options }) {
  return (
    <Select
      fontSize={"xs"}
      maxW={"10rem"}
      _hover={{ cursor: "pointer" }}
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
