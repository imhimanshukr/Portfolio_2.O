import React from 'react';
import {
  Flex,
  Box,
  Spacer,
  Avatar,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { FaBars, FaHome, FaUser, FaBriefcase, FaEnvelope, FaFileDownload   } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { colorMode } = useColorMode();
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const linkStyles = {
    opacity: '0.5',
    fontWeight: '400',
    color: colorMode === 'dark' ? 'white' : 'black',
    padding: '8px',
    borderRadius: '4px',
    transition: 'opacity 0.3s',
    _hover: {
      opacity: '1',
    },
  };

  const activeLinkStyles = {
    ...linkStyles,
    opacity: '1',
    fontWeight: '600',
  };

  const Links = [
    {
      to: '/',
      linkName: 'Home',
      icon: <FaHome />,
    },
    {
      to: '/about',
      linkName: 'About',
      icon: <FaUser />,
    },
    {
      to: '/work',
      linkName: 'Work',
      icon: <FaBriefcase />,
    },
    {
      to: '/contact',
      linkName: 'Contact',
      icon: <FaEnvelope />,
    },
  ];

  const drawerStyles = {
    width: '150px',
    bg: colorMode === 'dark' ? 'gray.800' : 'white',
  };

  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleNavLinkClick = () => {
    onClose();
  };

  return (
    <Flex align="center" py={4} mt={'2'}>
      <Flex justifyContent={'space-between'} w={'50%'}>
        <Avatar name="Himanshu" bg={'white'} />
        <Spacer />
        {!isMobile && (
          <Box
            style={{
              width: '60%',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {Links.map(item => (
              <NavLink
                to={item.to}
                className="ff-inter"
                style={
                  location.pathname === item.to ? activeLinkStyles : linkStyles
                }
              >
                {item.linkName}
              </NavLink>
            ))}
          </Box>
        )}
      </Flex>
      <Spacer />
      {isMobile && (
        <Box>
          <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <FaBars />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
            size={'150px'}
          >
            <DrawerOverlay />
            <DrawerContent style={drawerStyles}>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack spacing={0} align="flex-start" mt={'30px'}>
                  {Links.map(item => (
                    <NavLink
                      to={item.to}
                      className="ff-inter fs-20"
                      style={
                        location.pathname === item.to
                          ? activeLinkStyles
                          : linkStyles
                      }
                      onClick={handleNavLinkClick}
                    >
                      <HStack>
                      <span>{item.icon}</span> 
                      <span>{item.linkName}</span>
                      </HStack>
                    </NavLink>
                  ))}
                      <Box
              className={`cvBtn ${
                colorMode === 'dark' ? 'darkBtn' : 'lightBtn'
              }`}
            >
              Download CV
            </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      )}
                  <Box
              className={`cvBtn ${
                colorMode === 'dark' ? 'darkBtn' : 'lightBtn'
              }`}
            >
              Download CV
            </Box>
            <FaFileDownload  />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Navbar;
