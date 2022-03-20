import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export const ReconfigReactMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
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
      }}>
      {children}
    </ReactMarkdown>
  );
};
