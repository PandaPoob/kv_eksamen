import SelectDropdown from "../../../components/features/SelectDropdown";

function MiljoFilter({ setMiljoFilter, miljoOpt }) {
  const onCallback = (value) => {
    setMiljoFilter(value);
  };

  return (
    <SelectDropdown
      options={miljoOpt}
      placeholder={"Miljø"}
      onCallback={onCallback}
    />
  );
}

export default MiljoFilter;
