import { Box, Text, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

function FooterGroup({ titel, subTitel }) {
  return (
    <Box>
      <Text
        mb={"1rem"}
        fontWeight={"bold"}
        color={"brand.white"}
        fontSize="smallH"
      >
        {titel}
      </Text>
      <List variant={"clean"}>
        {subTitel.map((li) => {
          return (
            <ListItem
              key={li.navn}
              color="brand.white"
              mb={"0.8rem"}
              display="flex"
            >
              <NextLink href={li.link} passHref prefetch={false}>
                <Link variant={"clean"}>{li.navn}</Link>
              </NextLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default FooterGroup;
