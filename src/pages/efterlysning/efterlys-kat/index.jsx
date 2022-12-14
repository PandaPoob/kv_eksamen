//import EfterlysKat from "../../../views/efterlysning/EfterlysKat";
import dynamic from "next/dynamic";

const EfterlysKat = dynamic(() =>
  import("../../../views/efterlysning/EfterlysKat")
);

function EfterlysKatPage() {
  return <EfterlysKat />;
}

export default EfterlysKatPage;
