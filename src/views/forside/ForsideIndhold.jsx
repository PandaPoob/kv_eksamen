import { Box } from "@chakra-ui/react"
import PageLayout from "../../components/layout/PageLayout";
import PageHead from "../../components/layout/PageHead";
import SplashHeader from "../../components/generics/SplashHeader";
import VoresArbejde from "./VoresArbejde";
import Banner from "./Banner";
import NyhedsSektion from "./NyhedsSektion";
import MaanedensKatte from "./MaanedensKatte";



export default function ForsideIndhold({sideData, katteData, nyhedsData}) {
  return (
    <PageLayout>
        <Box>
        <PageHead {...sideData} />
        <SplashHeader {...sideData} textPos="center" />
        <Banner/>
        <VoresArbejde />
        <NyhedsSektion nyhedsData={nyhedsData} />
        <MaanedensKatte katteData={katteData} />
      </Box>
    </PageLayout>
  )
}
