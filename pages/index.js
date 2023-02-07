import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
// import Image from "next/image"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius={'lg'}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p="3"
        mb={6}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a full-stack developer based in India!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant="page-title">
            Aryan Singh
          </Heading>
          <p>Bugscoder (Student / Poet / Developer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image src="/images/aryan_singh.png" alt="Aryan Singh" />
          </Box>
        </Box>
      </Box>
      {/* About section */}
      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>About</Heading>
        <Paragraph>
            A 21 year old engineering undergrad trying to learn about web and computers in public. Also ocasionally writes poetries and short stories and is too lazy to write about tech.
            </Paragraph>
      </Section>
    </Container>
  )
}
export default Page
