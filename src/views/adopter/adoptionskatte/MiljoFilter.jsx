import SelectDropdown from "../../../components/features/SelectDropdown";

function MiljoFilter({ setMiljoFilter }) {
  const options = [
    {
      value: "Indekat",
    },

    {
      value: "Udekat",
    },
  ];

  const onCallback = (value) => {
    setMiljoFilter(value);
  };

  return (
    <SelectDropdown
      options={options}
      placeholder={"Miljø"}
      onCallback={onCallback}
    />
  );
}

export default MiljoFilter;
