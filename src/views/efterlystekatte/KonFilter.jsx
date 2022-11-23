import SelectDropdown from "../../components/features/SelectDropdown";

function LandsdelFilter({ setKon, konOpt }) {
  const onCallback = (value) => {
    setKon(value);
  };

  return <SelectDropdown options={konOpt} placeholder={"Køn"} onCallback={onCallback} />;
}

export default LandsdelFilter;
