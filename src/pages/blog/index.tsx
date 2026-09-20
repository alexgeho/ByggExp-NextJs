import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/sv/blog',
    permanent: true,
  },
});

export default function BlogRedirectPage() {
  return null;
}
