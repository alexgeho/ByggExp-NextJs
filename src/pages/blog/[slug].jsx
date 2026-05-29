import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { marked } from 'marked';
import styles from './Article.module.css';
import { PUBLISH_API_URL, PUBLISH_SITE_ID } from '@/lib/config';

// Fetch all slugs at build time for static generation
export async function getStaticPaths() {
  try {
    const res = await fetch(
      `${PUBLISH_API_URL}/posts/published?site=${PUBLISH_SITE_ID}`,
    );

    const posts = await res.json();

    const paths = posts.map(function (post) {
      return { params: { slug: post.slug } };
    });

    return { paths, fallback: 'blocking' };
  } catch {
    return { paths: [], fallback: 'blocking' };
  }
}

// Fetch single post by slug
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${PUBLISH_API_URL}/posts/${params.slug}?site=${PUBLISH_SITE_ID}`,
    );
    const post = await res.json();
    return { props: { post }, revalidate: 60 };
  } catch {
    return { notFound: true };
  }
}

// Article page
export default function ArticlePage({ post }) {
  if (!post) return <p>Not found</p>;

  const html = marked(post.content);


  return (
    <>
      <section className={`${styles.articleHero} HemPageDark`}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <span className="TitleBadge">{post.tag || 'Management'}</span>
              <h1 className="ArticleTitle">{post.title}</h1>
              <p className="ArticleMeta">{post.date}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${styles.articleBody} HemPageLightArticle`}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className={styles.content}>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Col>
          </Row>
        </Container>
      </section>

      <p style={{ padding: '20px' }}>
        <Link href="/blog">← Back to blog</Link>
      </p>
    </>
  );
}