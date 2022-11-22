import SelectDropdown from "../../../components/features/SelectDropdown";

function AlderFilter({ setAlderFilter, alderOpt }) {
  const onCallback = (value) => {
    setAlderFilter(value);
  };

  return (
    <SelectDropdown
      options={alderOpt}
      placeholder={"Alder"}
      onCallback={onCallback}
    />
  );
}

export default AlderFilter;
