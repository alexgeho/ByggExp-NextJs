import Head from 'next/head';

import { AdminLayout } from '../../../components/blog-admin/AdminLayout';
import { ArticleEditorForm } from '../../../components/blog-admin/ArticleEditorForm';

export default function NewArticlePage() {
  return (
    <>
      <Head>
        <title>New article | ByggExp Admin</title>
      </Head>
      <AdminLayout>
        <ArticleEditorForm />
      </AdminLayout>
    </>
  );
}
