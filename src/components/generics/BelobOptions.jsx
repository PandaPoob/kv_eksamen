import React from 'react'
import RadioCard from './RadioBelobCard'
import { VStack } from '@chakra-ui/react'
import { useRadioGroup } from '@chakra-ui/react'
import { Text, Flex, Box } from '@chakra-ui/react'
import { BsHeart } from 'react-icons/bs';

export default function BelobOptions({data, display, columns}) {


const belobmulighederArr = Object.entries(data).map((e) => ({
  id: e[0],
  opt: e[1],
}));

//remove empty entries (false)

let findOptions = belobmulighederArr.map(({opt, ...rest}) => {
    return opt;
})

let findBelob = findOptions.map(({belob, ...rest}) => {
    return belob;
})

let findVaerdi = findOptions.map(({vaerdi,...rest})=> {
    return vaerdi;
})
    const options = findBelob;


    const { getRootProps, getRadioProps } = useRadioGroup({
      name: `${data.belob} kr.`,
      label: `${data.vaerdi}`,
      defaultValue: `${data.belob} kr.`,
      onChange: console.log,
    })
  
    const group = getRootProps()
  
    return (
      <Box display={display} gridTemplateColumns={columns} gap="1rem" placeSelf={"center"} {...group}>
        {options.map((value, optindex) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio} >
                <Flex alignItems={"center"} gap="1rem">
                    <BsHeart size={25} color="#D43B4D"/>
                    <Box>   
                        <Text fontWeight={"bold"}>{value}</Text>
                        {findVaerdi.find((v, index)=> (
                            index === optindex ? <Text key={v.id}>{v.vaerdi}</Text> : null
                        ))}
                    </Box>
              </Flex>
            </RadioCard>
          )
        })}
      </Box>
    )
}
