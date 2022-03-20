import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import { MarkdownResult } from 'utils/types';

export const Markdown = ({ children }: { children: MarkdownResult }) => {
  return (
    <MDXRemote
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }

          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        }
      }}
      {...children}
    />
  );
};
