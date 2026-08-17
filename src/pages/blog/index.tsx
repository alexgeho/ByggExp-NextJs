import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/sv/blog',
    permanent: false,
  },
});

export default function BlogRedirectPage() {
  return null;
}
