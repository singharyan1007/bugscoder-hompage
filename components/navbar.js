import Logo from './logo'
import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import {IoLogoGithub} from 'react-icons/io5';
import ThemeToggleButton from './theme-toggle-button';
import { forwardRef } from 'react';

const LinkItem=({href,path,children,target,...props})=>{
const active=path===href;
const inactiveColor=useColorModeValue('gray.800','whiteAlpha.900')
return (
 <Link as={NextLink}
 href={href}
 scroll={false}
 p={2}
 bg={active?'glassTeal':undefined}
 color={active?'#202023':inactiveColor}
 target={target}
 {...props}

 >{children}</Link>
)
}
// const MenuLink=forwardRef((props,ref)=>(
//     <Link ref={ref} as={MenuLink} {...props}/>
// ));

const Navbar=props=>{
    const {path}=props;

    return (
        <Box  position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        css={{ backdropFilter: 'blur(10px)' }}
        zIndex={2}
        {...props}
        >
            <Container  display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between">
                <Flex align={'center'} mr={5}>
                    <Heading as={'h1'} size='lg' letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
                <Stack 
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                >
                   <LinkItem href='/works' path={path}>Works</LinkItem>
                   <LinkItem href='/posts' path={path}>Posts</LinkItem> 
                   <LinkItem href='/about' path={path}>About Me</LinkItem>
                   {/* <LinkItem href='/uses' path={path}>Uses</LinkItem> */}
                   <LinkItem 
                   target="_blank"
                   href={"https://github.com/singharyan1007/bugscoder-hompage"}
                   path={path}
                   display='inline-flex'
                   alignItems='center'
                   style={{gap:4}}
                   pl={2}
                   ><IoLogoGithub/>Source Code</LinkItem>
                </Stack>

                {/* Theme toggle button can also be added */}
                <Box flex={1} align='right'>
                    <ThemeToggleButton/>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu  id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
               <NextLink href='/' passHref>
                <MenuItem as={Link}>Home</MenuItem>
               </NextLink>
               <NextLink href='/about'>
                <MenuItem as={Link}>About Me</MenuItem>
               </NextLink>
               <NextLink href='/works' passHref>
                <MenuItem as={Link}>Works</MenuItem>
               </NextLink>
              <NextLink href='/posts' passHref>
                <MenuItem as={Link}>Posts</MenuItem>
              </NextLink>
                <MenuItem as={Link} href='https://github.com/singharyan1007/bugscoder-hompage'>Source Code</MenuItem>
              
              </MenuList>
                    </Menu>
                  </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar