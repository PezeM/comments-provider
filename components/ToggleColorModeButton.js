import { IconButton, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ToggleColorModeButton = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const text = useColorModeValue('dark', 'light');
  const switchText = `Switch to ${text} mode`;

  return (
    <Tooltip label={switchText} aria-label={switchText}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={switchText}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </Tooltip>
  );
};
