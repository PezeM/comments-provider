import React from 'react';
import { Box, Link} from '@chakra-ui/react';
import { Table, Td, Th, Tr } from '@/components/Table';
import { format, parseISO } from 'date-fns';

export const SiteTable = ({ sites }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map(site => (
          <Box as="tr" key={site.id}>
            <Td fontWeight={'medium'}>{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <Link>Live feedback</Link>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};
