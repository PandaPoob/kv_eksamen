import { Box, Flex, Text, Link, AspectRatio } from "@chakra-ui/react"
import NextLink from "next/link";
import Image from "next/image";


export default function SelectedCatArticle({acf, id}){
    return (
      <NextLink href={`/adopter/adoptionskatte/${id}`} passHref>
        <Link variant={"clean"} display="grid">
          <Box
            position="relative"
            display={"grid"}
            gridTemplateRows="repeat(7, 1fr)"
            
          >
            <Image 
              gridrow={"span"} 
              src={acf.profil_billede} 
              alt={acf.navn} 
              layout="fill" 
              objectFit={"cover"} 
              transition="all 0.2s ease-in"
              _hover={{
                transform: "scale(1.5)",
              }}
            />
            <Flex zIndex={10} gridRow={"6/7"} width="8rem" justifyContent={"space-evenly"} padding={"8px"} bgColor={"brand.blueCta"} borderRadius="2px" color="brand.white" gap="1rem">
              <Text>{acf.navn}</Text>
              <Text>{acf.miljo}</Text>
            </Flex>
          </Box>
        </Link>
      </NextLink>
    );
}