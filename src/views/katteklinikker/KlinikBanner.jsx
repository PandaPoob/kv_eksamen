import React from 'react'
import { Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import { ImDiamonds } from "react-icons/im";

export default function KlinikBanner({acf}) {
    const a = acf.banner;
  return (
    <Box bg="brand.lightGrey" p="2rem" display={"grid"} placeContent={"center"} >
        <List color="brand.darkGrey"display={"grid"} gridTemplateColumns={{base: "1fr", md: "1fr 1fr", lg:"repeat(3, 1fr)"}} gap="2rem" maxW={"container.xxl"}> 
            <ListItem display={"flex"} alignItems="center">
                <ListIcon as={ImDiamonds} color="brand.redCta"/>
                {a.list_item}
            </ListItem>
            <ListItem display={"flex"} alignItems="center">
                <ListIcon as={ImDiamonds} color="brand.redCta"/>
                {a.list_item_2}
            </ListItem>
            <ListItem display={"flex"} alignItems="center">
                <ListIcon as={ImDiamonds} color="brand.redCta"/>
                {a.list_item_3}
            </ListItem>
            <ListItem display={"flex"} alignItems="center">
                <ListIcon as={ImDiamonds} color="brand.redCta"/>
                {a.list_item_4}
            </ListItem>
            <ListItem display={"flex"} alignItems="center">
                <ListIcon as={ImDiamonds} color="brand.redCta"/>
                {a.list_item_5}
            </ListItem>
            <ListItem display={"flex"} alignItems="center">
                <ListIcon as={ImDiamonds} color="brand.redCta"/>
                {a.list_item_6}
            </ListItem>
        </List>
    </Box>
  )
}
