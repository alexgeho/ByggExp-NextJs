import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

// Card component — same as old ArticleCard but with Next.js Link
export function ArticleCard({ slug, tag = 'Management', title, excerpt }) {
  return (
    <Card
      as={Link}
      href={`/blog/${slug}`}
      className="BlogCard d-block text-reset text-decoration-none"
    >
      <Row className="g-0 align-items-center">
        <Col md="auto">
          <div className="BlogThumb">
            <img src="/post-cover.jpg" alt={title} />
          </div>
        </Col>
        <Col>
          <Card.Body>
            <div className="BlogCardBody">
              <span className="BlogBadge">{tag}</span>
              <Card.Title className="mb-2">{title}</Card.Title>
              <Card.Text className="text-muted mb-0">{excerpt}</Card.Text>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

// Fetch published posts from API at build time (SSG)
export async function getStaticProps() {
  try {
    const res = await fetch('https://publish-core.onrender.com/posts/published');
    const posts = await res.json();
    return { props: { posts }, revalidate: 60 };
  } catch {
    return { props: { posts: [] }, revalidate: 60 };
  }
}

// Blog page
export default function BlogPage({ posts }) {
  return (
    <>
      <section className="BlogHero HemPageDark">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <span className="TitleBadge">Our blog</span>
              <h1 className="BlogTitle">Useful articles</h1>
              <p className="BlogSubtitle">
                Tips, insights, and practical advice for builders and project managers who want
                less paperwork, smoother communication, and more clarity on site.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="BlogBody HemPageLight">
        <Container>
          <div className="g-4 BlogRow">
            <Col className="w-100 BlogColBox">
              {posts.length > 0 ? (
                posts.map(post => (
                  <ArticleCard
                    key={post._id}
                    slug={post.slug}
                    tag={post.tag || 'Management'}
                    title={post.title}
                    excerpt={post.excerpt}
                  />
                ))
              ) : (
                <p>Inga artiklar ännu.</p>
              )}
            </Col>
          </div>
        </Container>
      </section>
    </>
  );
}