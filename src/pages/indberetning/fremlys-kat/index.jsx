//import FremlysKat from "../../../views/indberetning/FremlysKat";

import dynamic from "next/dynamic";
const FremlysKat = dynamic(() =>
  import("../../../views/indberetning/FremlysKat")
);

function FremlysKatPage() {
  return <FremlysKat />;
}

export default FremlysKatPage;
