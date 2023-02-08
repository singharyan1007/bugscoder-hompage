import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  Button,
  List,
  ListItem,
  Link
} from '@chakra-ui/react'
import { BioSection,BioYear } from '../components/bio'
// import Image from "next/image"
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
const Page = () => {
  return (
    <Layout>

    
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
            A 21 year old engineering undergrad trying to learn about web and computers in public. Also ocassionally writes poetries and short stories and is too lazy to write about tech.
            </Paragraph>

            <Box align={'center'} my={4}>
            <NextLink href='/works'>
              <Button rightIcon={<ChevronRightIcon/>} colorScheme='purple'>My Personal Projects</Button>
            </NextLink>

            </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as={'h3'} variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Gorakhpur (U.P), India.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed high-school from Kota, Rajasthan.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Bachelors in Engineering in the field of Electronics and Communication Engineering @ Sir M Visvesvaraya Institute of Technology, Bengaluru, Karnataka, India.
        </BioSection>
      </Section>

      <Section delay={0.4}>
        <Heading as={'h3'} variant='section-title'>
        I ♥
        </Heading>
        <Paragraph>Art, Music, Poetry, {' '}
        <Link href='https://singharyan1007.blogspot.com/'>
        Short Stories
        </Link>
            ,Photography, Robots,
            <Link href='https://kitsu.io/'>Anime</Link>
             </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          On the Web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/singharyan1007' target='_blank'>
              <Button variant={'ghost'} colorScheme='purple' leftIcon={<IoLogoGithub/>}>@singharyan1007</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://twitter.com/singharyan1007" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitter />}
              >
                @singharyan1007
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://instagram.com/singharyan1007" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                @singharyan1007
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
    </Layout>
  )
}
export default Page
