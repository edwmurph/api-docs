import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Markdown({ md }) {
  return (
    <ReactMarkdown
      className='markdown-body'
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec( className || '' );
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={oneLight}
              customStyle={{
                padding: 0,
                background: 'rgba(0,0,0,0)'
              }}
              language={match[1]}
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
