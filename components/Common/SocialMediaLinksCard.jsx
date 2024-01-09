// components/SocialMediaLinksCard.js

import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinksCard = () => {
    return (
        <Box
            p={4}
            shadow="lg"
            borderWidth="2px"
            borderRadius="xl"
            overflow="hidden"
            bg="gray.100"
        >
            <Flex justify="center" align="center" mb={4}>
                <IconButton
                    as="a"
                    href="#"
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    mr={4}
                    style={{ fontSize: '2rem' }}
                    p={4}
                    rounded="full"
                    color="twitter.500"
                    _hover={{ bg: 'twitter.100' }}
                />
                <IconButton
                    as="a"
                    href="#"
                    aria-label="Instagram"
                    icon={<FaInstagram />}
                    mr={4}
                    style={{ fontSize: '2rem' }}
                    p={4}
                    rounded="full"
                    color="pink.500"
                    _hover={{ bg: 'pink.100' }}
                />
                <IconButton
                    as="a"
                    href="#"
                    aria-label="Facebook"
                    icon={<FaFacebook />}
                    mr={4}
                    style={{ fontSize: '2rem' }}
                    p={4}
                    rounded="full"
                    color="facebook.500"
                    _hover={{ bg: 'facebook.100' }}
                />
                <IconButton
                    as="a"
                    href="#"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    style={{ fontSize: '2rem' }}
                    p={4}
                    rounded="full"
                    color="linkedin.500"
                    _hover={{ bg: 'linkedin.100' }}
                />
            </Flex>
            <Text textAlign="center" fontSize="md" color="gray.600">
                Follow Us for the latest updates and more!
            </Text>
        </Box>
    );
};

export default SocialMediaLinksCard;
