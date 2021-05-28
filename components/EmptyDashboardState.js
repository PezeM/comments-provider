import React from 'react';
import { DashboardContainer } from '@/components/DashboardContainer';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

export const EmptyDashboardState = () => {
    return (
        <DashboardContainer>
            <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
                <Heading size={'md'}>You haven't added any sites.</Heading>
                <Text>Start, by adding site</Text>
                <Button>Add first site</Button>
            </Box>
        </DashboardContainer>
    );
};
