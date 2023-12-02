import React, {useEffect} from 'react';
import { Stack, Icon, createIcon, Text } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


const HeartOutlineIcon = createIcon({
  displayName: 'HeartOutlineIcon',
  viewBox: '0 0 24 24',
  path: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </g>
  ),
});

const Footer = () => {
  const location = useLocation();

  const linkStyles = {
    opacity: '0.5',
    fontWeight: '400',
  };

  const activeLinkStyles = {
    opacity: '1',
    fontWeight: '600',
  };

  const Links = [
    { to: "/", linkName: 'Home' },
    { to: "/about", linkName: 'About' },
    { to: "/work", linkName: 'Work' },
    { to: "/contact", linkName: 'Contact' },
  ];

  useEffect(() =>{
    Aos.init({
      duration: 1000
    })
  }, []);

  return (
    <Stack alignItems={'center'} p={'50px'} data-aos="fade-up">
      <Stack direction={'row'}>
        {Links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className='ff-inter'
            style={location.pathname === item.to ? activeLinkStyles : linkStyles}
          >
            {item.linkName}
          </NavLink>
        ))}
      </Stack>
      <Text align={'center'} fontWeight={'500'}>
        Developed with <Icon as={HeartOutlineIcon} boxSize={5} color={'red.400'} /><span span> by Himanshu </span>
      </Text>
    </Stack>
  );
};

export default Footer;
