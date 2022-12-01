import React from 'react';
/* import { useMemo } from 'react';
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api" */
import { Box, Flex, Heading, Text, Link, Divider } from '@chakra-ui/react'
import styles from "./map.module.css"



export default function FindOS({data}){
    return (
        <Box></Box>
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