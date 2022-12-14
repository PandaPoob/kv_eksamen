import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function KTSectionOne({ acf }) {
  return (
    <Box display={"grid"} gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: "2rem", lg: "4rem" }} maxW={{md: "70ch" ,lg: "container.xl"}} m="auto" px="1rem" py={{ base: "3rem", md: "6rem" }}>
      <Box>
        <Heading as="h2" size="heading3" mb="1rem">
          Gratis advokathjælp
        </Heading>
        <Text>
          Hos Kattens Værn gør vi det så let som muligt for dig at betænke os i dit testamente, hvis du ønsker det. Du kan uforpligtende og helt gratis kontakte vores advokat Karen Wung-Sung hos ADVODAN på telefonnummer{" "}
          <b>70 30 10 06</b> eller ved sende en mail til <b>kaws@advodan.com.</b>. Betænker du Kattens Værn i dit testamente, kan det faktisk også være sådan, at dine arvinger ikke får mindre ud af din arv.
        </Text>
      </Box>
      <Box position="relative" minH={"22rem"} width="100%" maxW={{md: "70ch"}}>
        <Image src={acf.img1} alt="Advokathjælp" layout="fill" objectFit="cover" />
      </Box>
    </Box>
  );
}
