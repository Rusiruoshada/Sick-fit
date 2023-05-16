import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (loading) return 'Loading...';
  if (error) return <DisplayError error={error} />;
  const { count } = data._allProductsMeta;
  return (
    <PaginationStyles>
      <Head>
        <title>Sick Fits - page {page} of ___</title>
      </Head>
      <Link href="/product">&larr; Prev</Link>
      <p>Page __ of __ </p>
      <p>{count} Items Total</p>
      <Link href="/product">&rarr; Next</Link>
    </PaginationStyles>
  );
}
