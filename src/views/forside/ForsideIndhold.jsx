import { Box } from "@chakra-ui/react"
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import VoresArbejde from "./VoresArbejde";
import Banner from "./Banner";
import NyhedsSektion from "./NyhedsSektion";
import MaanedensKatte from "./MaanedensKatte";
import HjaelpOversigt from "./HjaelpOversigt";



export default function ForsideIndhold({sideData, katteData, nyhedsData}) {
  return (
    <PageLayout>
        <Box>
        <PageHead {...sideData} />
        <SplashHeader {...sideData} textPos="center" imgPos="center top" height="80vh" />
        <Banner/>
        <VoresArbejde />
        <NyhedsSektion nyhedsData={nyhedsData} />
        <MaanedensKatte katteData={katteData} />
        <HjaelpOversigt/>
      </Box>
    </PageLayout>
  )
}
