import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import { TitleBadge } from '@/widgets/TitleBadge/TitleBadge';

// Card component without image
export function ArticleCard({ slug, tag = 'Management', title, excerpt }) {
  return (
    <Card
      as={Link}
      href={`/blog/${slug}`}
      className="BlogCard d-block text-reset text-decoration-none"
    >
      <Card.Body>
        <div className="BlogCardBody">
          <span className="BlogBadge">{tag}</span>
          <Card.Title className="mb-2">{title}</Card.Title>
          <Card.Text className="text-muted mb-0">{excerpt}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

// Fetch published posts from API at build time (SSG)
export async function getStaticProps() {
  try {
    const res = await fetch('https://publish-core.onrender.com/posts/published?site=byggexp-next');
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
              <TitleBadge text="Our blog" />
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
          <div className="BlogRow">
            <div className="BlogColBox">
              {posts.length > 0 ? (
                posts.map(function renderPost(post) {
                  return (
                    <ArticleCard
                      key={post._id}
                      slug={post.slug}
                      tag={post.tag || 'Management'}
                      title={post.title}
                      excerpt={post.excerpt}
                    />
                  );
                })
              ) : (
                <p>Inga artiklar ännu.</p>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}