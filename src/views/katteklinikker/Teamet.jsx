import React from 'react'
import { Box, Flex, Text, Heading, Link, Icon, Divider } from '@chakra-ui/react'
import PersonArticle from '../../components/articles/PersonArticle';

function Teamet({by, MedarbejdData}) {
    
    let teamet = MedarbejdData.filter((m)=>{
        return m.acf.katteklinik === by;
    })
   

    let arraychecker = () => {
        if (teamet.length === 0) return false;
        else return true;
    }

  return (
    <>
    {arraychecker() ? 
        <Box bg="brand.darkGrey" px="1rem" py={{base: "3rem", lg: "6rem"}} display="grid" gap="2rem" >
            <Heading color="brand.white" as="h2" size="heading2" textAlign={"center"}>Teamet</Heading>
            <Flex  justifyContent={"center"} gap="1rem" flexWrap="wrap" >
            {teamet.map((tm) => (
                <PersonArticle boxshadow={"0"} key={tm.id} {...tm}/>
            ))}
            </Flex>
        </Box>
        :
        <></>}
    </>
   
  )
}


export default Teamet;