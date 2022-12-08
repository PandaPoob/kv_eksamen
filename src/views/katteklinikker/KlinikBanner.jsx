import React from 'react'
import { Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import { ImDiamonds } from "react-icons/im";

export default function KlinikBanner({acf}) {
    
const a = acf.banner;
      //data = acf.kontaktoplysninger
      const bannerdata = a
      const bannerdataArr = Object.entries(bannerdata).map((e) => ({
        label: e[0],
        value: e[1]
      }));
    
      //remove empty entries (false)
      const cleanBannerdataArr = bannerdataArr.filter((b) => b.text !== false);

    
    
  return (
    <Box bg="brand.lightGrey" p="2rem" py={{base: "3rem", md: "4rem"}} display={"grid"} placeContent={"center"} >
        <List color="brand.darkGrey"display={"grid"} gridTemplateColumns={{base: "1fr", md: "1fr 1fr", lg:"repeat(3, 1fr)"}} gap="2rem" maxW={"container.xxl"}> 
            {cleanBannerdataArr.map((b)=>(
            <ListItem key={b.label} display={"flex"} alignItems="center" fontWeight={"semibold"}>
                 <ListIcon as={ImDiamonds} color="brand.redCta"/>
                 {b.value}
            </ListItem>
            ))}
        </List>
    </Box>
  )
}
