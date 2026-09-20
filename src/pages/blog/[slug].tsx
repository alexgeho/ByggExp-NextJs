import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type BlogArticleRedirectProps = {
  slug: string;
};

export const getServerSideProps: GetServerSideProps<
  BlogArticleRedirectProps
> = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination: `/sv/blog/${encodeURIComponent(slug)}`,
      permanent: true,
    },
  };
};

export default function BlogArticleRedirectPage(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return null;
}
