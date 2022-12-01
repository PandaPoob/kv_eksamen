import React from 'react';
/* import { useMemo } from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api" */
import { Box, Flex, Heading, Text, Link, Divider } from '@chakra-ui/react'
import Image from 'next/image';



export default function FindOs({data}){
    return (
        <Box as="article" bg={"brand.white"} boxShadow="md" borderRadius="0.3rem" width="22rem" height={"auto"} >
            <Box display={"grid"} gap="1rem" p="2rem">
                <Heading as="h4" size="heading4">{data.overskrift}</Heading>
                <Text>{data.adresse}</Text>
            </Box> 
            <Box width="100%" height={"12rem"} position="relative">
                <Image src={data.mapbillede} alt="maps" layout='fill' objectFit='cover'/>
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