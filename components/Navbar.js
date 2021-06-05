import React from 'react';
import { Button, Flex, Link, Tooltip, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LogoIcon } from '@/styles/icons';
import { ToggleColorModeButton } from '@/components/ToggleColorModeButton';
import { useNavbarColor } from '@/styles/hooks/useNavbarColor';
import {useLogoIconColor} from "@/styles/hooks/useLogoIconColor";

export const Navbar = () => {
  const homePageTooltip = 'Go to home page';
  const navbarBg = useNavbarColor();
  const buttonBg = useColorModeValue('gray.900', 'whiteAlpha.200');
  const buttonHoverBg = useColorModeValue('gray.700', 'whiteAlpha.300');
  const buttonActiveBg = useColorModeValue('gray.800', 'whiteAlpha.100');
  const buttonColor = useColorModeValue('white', 'gray.100');

  return (
    <Flex backgroundColor={navbarBg} w="full">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={[4, 8]}
        pb={[4, 8]}
        maxW="1000px"
        margin="0 auto"
        w="full"
        px={8}
        h="60px"
      >
        <Flex align="center">
          <NextLink href="/" passHref>
            <Tooltip openDelay={500} label={homePageTooltip} aria-label={homePageTooltip}>
              <Link>
                <LogoIcon color={useLogoIconColor()} boxSize={6} />
              </Link>
            </Tooltip>
          </NextLink>
        </Flex>

        <Flex justifyContent="center" alignItems="center">
          <ToggleColorModeButton mr={[2, 4]} />
          <NextLink href="/pricing" passHref>
            <Link mr={4} fontWeight="medium">
              Pricing
            </Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button
              backgroundColor={buttonBg}
              color={buttonColor}
              h="32px"
              fontWeight="medium"
              _hover={{ bg: buttonHoverBg }}
              _active={{
                bg: buttonActiveBg,
                transform: 'scale(0.95)',
              }}
            >
              Login
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
