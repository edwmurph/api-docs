import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Markdown({ md }) {
  return (
    <ReactMarkdown
      remarkPlugins={[
        [remarkGfm, { tablePipeAlign: true }]
      ]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec( className || '' );
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={dark}
              language={match[1]}
              PreTag='div'
            >
              {String( children ).replace( /\n$/, '' )}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        }
      }}
    >
      {md}
    </ReactMarkdown>
  );
}
