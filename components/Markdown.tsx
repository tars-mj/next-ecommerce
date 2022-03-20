import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import { MarkdownResult } from 'utils/types';
import { useRouter } from 'next/router';

export const Markdown = ({ children }: { children: MarkdownResult }) => {
  const router = useRouter();
  console.log(router);
  return (
    <MDXRemote
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }

          if (/^http/.test(href)) {
            return <a {...props} href={href} title="external link" rel="noopener noreferrer"></a>;
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
