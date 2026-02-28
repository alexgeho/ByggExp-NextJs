import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { marked } from 'marked';

// Fetch all slugs at build time for static generation
export async function getStaticPaths() {
  try {
    const res = await fetch(
      'https://publish-core.onrender.com/posts/published?site=byggexp-next'
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
    const res = await fetch(`https://publish-core.onrender.com/posts/${params.slug}?site=byggexp-next`);
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
      <section className="ArticleHero HemPageDark">
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

      <section className="HemPageLightArticle">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
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