import React from 'react'
import { Input } from '@chakra-ui/react'

export default function SearchBar({searchInput, setSearchInput}) {
  return (
    <Input w={{base: "230px", md: "400px", lg: "400px"}} fontSize="xs" placeholder='Søg på chipnr. eller øremærke...' value={searchInput} onChange={(event) => setSearchInput(event.target.value)}/>
    
  )
}
