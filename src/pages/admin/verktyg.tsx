import Head from 'next/head';

import { AdminLayout } from '../../components/blog-admin/AdminLayout';
import { VERKTYG_GROUPS, VERKTYG_TOTAL } from '../../content/verktyg-list';

export default function AdminVerktygPage() {
  return (
    <>
      <Head>
        <title>Verktyg | ByggExp Admin</title>
      </Head>
      <AdminLayout>
        <main className="blog-admin-main">
          <div className="blog-admin-toolbar">
            <div>
              <h1>Verktyg</h1>
              <p>
                {VERKTYG_TOTAL} verktyg · kodbaserade sidor (sv), redigeras i koden
                – ej i CMS
              </p>
            </div>
          </div>

          <p className="blog-admin-note">
            Dessa gratisverktyg ligger under <code>/sv/verktyg/*</code> och är inte
            artiklar i CMS. Listan är endast för överblick – för att ändra innehåll
            behövs en kodändring.
          </p>

          <div className="blog-admin-verktyg">
            {VERKTYG_GROUPS.map((group) => (
              <section key={group.title} className="blog-admin-verktyg-group">
                <h2>
                  {group.title}
                  <span className="blog-admin-tab-count">{group.items.length}</span>
                </h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <a
                        href={`/sv/verktyg/${item.slug}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <strong>{item.label}</strong>
                        <span>/sv/verktyg/{item.slug}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </main>
      </AdminLayout>
    </>
  );
}
