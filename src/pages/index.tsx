import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/sv",
    // Permanent so the root's link equity consolidates on /sv.
    permanent: true,
  },
});

export default function IndexPage() {
  return null;
}
