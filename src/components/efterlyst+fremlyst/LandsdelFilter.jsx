import SelectDropdown from "../features/SelectDropdown";

function LandsdelFilter({ setLandsdelsfilter, landsdelOpt }) {
  const onCallback = (value) => {
    setLandsdelsfilter(value);
    console.log("check")
  };

  return <SelectDropdown options={landsdelOpt} placeholder={"Landsdel"} onCallback={onCallback} />;
}

export default LandsdelFilter;
