import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Link from 'next/link';

export const Markdown = ({
  children
}: {
  children: MDXRemoteSerializeResult<Record<string, unknown>>;
}) => {
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
