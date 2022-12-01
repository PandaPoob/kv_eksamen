import React from 'react';
/* import { useMemo } from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api" */
import { Box, Flex, Heading, Text, Link, Divider } from '@chakra-ui/react'
import Image from 'next/image';



export default function FindOS({data}){
    return (
        <Box position="relative" as="article" bg={"brand.white"} boxShadow="md" p={"2rem"} borderRadius="0.3rem">
           <Box display={"grid"} gap="1rem" pb={"1rem"}>
                <Heading>{data.overskrift}</Heading>
                <Text>{data.brodtekst}</Text>
            </Box> 
            <Box>
                <Image src={data.mapsbillede} alt="maps" width="100%" height={"50%"}/>
            </Box>
        </Box>
    )
}


/* export default function FindOs() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })
    if (!isLoaded) return <Box>Loading...</Box>
  return (
    <Box>
        <Map/>
    </Box>
  )
}
export function Map() {
    const center = useMemo(()=> ({lat: 44, lng: -80}), [])
    return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={styles.map}> 
        <MarkerF position={center}/>
    </GoogleMap>
    )
}
 */