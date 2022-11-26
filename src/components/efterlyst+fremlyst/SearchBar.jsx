import React from 'react'
import { Input } from '@chakra-ui/react'

export default function SearchBar({searchInput, setSearchInput}) {
  return (
    <Input maxW={{base: "200px", lg: "400px"}} fontSize="xs" placeholder='Søg efter by...' value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
    
  )
}
