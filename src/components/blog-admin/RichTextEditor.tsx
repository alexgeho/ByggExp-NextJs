import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

type RichTextEditorProps = ComponentProps<typeof ReactQuill>;

export function RichTextEditor(props: RichTextEditorProps) {
  return <ReactQuill theme="snow" {...props} />;
}
