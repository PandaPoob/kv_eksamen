import SelectDropdown from "../../../components/features/SelectDropdown";

function AlderFilter({ setAlderFilter }) {
  const options = [
    {
      value: "Killing",
    },

    {
      value: "Ungkat",
    },

    {
      value: "Voksen",
    },

    {
      value: "Senior",
    },
  ];

  const onCallback = (value) => {
    setAlderFilter(value);
  };

  return (
    <SelectDropdown
      options={options}
      placeholder={"Alder"}
      onCallback={onCallback}
    />
  );
}

export default AlderFilter;
