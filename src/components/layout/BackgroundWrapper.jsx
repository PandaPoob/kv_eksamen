import React from 'react'
import { Box } from '@chakra-ui/react'
import bgimage from "../../../public/baggrund_stor.svg"

export default function BackgroundWrapper({children}) {
  return (
    <Box bgImage={bgimage} bgPos="center" bgSize={"cover"}>
        {children}
    </Box>
  )
}
