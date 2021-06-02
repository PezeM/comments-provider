import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Table, Td, Th, Tr } from '@/components/Table';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import { DeleteSiteButton } from '@/components/DeleteSiteButton';

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
            <Td>
              <NextLink href="/site/[siteId]" as={`/site/${site.id}`} passHref>
                <Link fontWeight="medium">{site.name}</Link>
              </NextLink>
            </Td>
            <Td>
              <Link href={site.url} isExternal>
                {site.url}
              </Link>
            </Td>
            <Td>
              <NextLink href="/site/[siteId]" as={`/site/${site.id}`} passHref>
                <Link color="blue.500" fontWeight="medium">
                  Live feedback
                </Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
            <Td>
              <DeleteSiteButton siteId={site.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};
