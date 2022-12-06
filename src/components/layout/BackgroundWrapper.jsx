import React from 'react'
import { Box } from '@chakra-ui/react'

export default function BackgroundWrapper({children}) {
  return (
    <Box bgImage={"/baggrund_stor.svg"} bgPos="center" bgSize={"cover"} bgAttachment="fixed">
        {children}
    </Box>
  )
}
