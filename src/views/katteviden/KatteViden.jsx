import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import InfoArtikel from "../../components/articles/InfoArtikel";
import { Box } from "@chakra-ui/react";

function KatteViden({ data, sideData }) {
  return (
    <PageLayout>
      <PageHead {...sideData} />
      <SplashHeader {...sideData} />
      <Box display={"grid"} justifyContent="center" py={"4rem"}>
        <Box
          maxW={"container.xxl"}
          display="grid"
          gap={"2rem"}
          gridTemplateColumns={{
            md: "1fr 1fr",
            lbp: "1fr 1fr 1fr",
            xxl: "1fr 1fr 1fr 1fr",
          }}
        >
          {data.map((a) => {
            return <InfoArtikel key={a.id} {...a} />;
          })}
        </Box>
      </Box>
    </PageLayout>
  );
}

export default KatteViden;
