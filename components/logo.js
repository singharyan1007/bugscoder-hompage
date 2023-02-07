import Link from 'next/link'
import Image from 'next/image'
import {Text,useColorModeValue,Lo }from '@chakra-ui/react'
import styled from '@emotion/styled'
import headphone from '../public/images/headphone.svg'
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 20px;
 
`
const Logo=()=>{
    return (
        (<Link href="/" scroll={false}>
            <LogoBox>
        <Image src={headphone} width={20} height={20}/>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Aryan Singh
        </Text>
      </LogoBox>
    </Link>)
    )
   
}

export default Logo

