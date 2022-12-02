import React from 'react'
import { Box } from '@chakra-ui/react'
import Options from './Options'

export default function Doner({data}) {

  return (
    <Box>
        {data.map((optList) => (
            <Options key={optList.id} data={optList.acf}/>
        ))}
        
    </Box>
  )
}
