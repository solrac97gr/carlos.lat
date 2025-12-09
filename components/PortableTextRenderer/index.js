import { PortableText } from '@portabletext/react'
import { CodeSnippet } from '../CodeSnipet'
import { BlogLink } from '../BlogLink'
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from '../../lib/sanity'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

export const PortableTextRenderer = ({ content }) => {
  const components = {
    types: {
      codeSnippet: ({ value }) => (
        <CodeSnippet
          language={value.language}
          code={value.code}
          route={value.route}
          noHeaders={value.noHeaders}
          output={value.output}
        />
      ),
      blogLink: ({ value }) => (
        <BlogLink url={value.url} content={value.content} />
      ),
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ' '}
            style={{
              width: '100%',
              borderRadius: '8px',
              margin: '2rem 0',
            }}
          />
        )
      },
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
      code: ({ children }) => <code>{children}</code>,
    },
    block: {
      h1: ({ children }) => <h1>{children}</h1>,
      h2: ({ children }) => <h2>{children}</h2>,
      h3: ({ children }) => <h3>{children}</h3>,
      h4: ({ children }) => <h4>{children}</h4>,
      normal: ({ children }) => <p>{children}</p>,
      blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    },
    list: {
      bullet: ({ children }) => <ul>{children}</ul>,
      number: ({ children }) => <ol>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
  }

  return <PortableText value={content} components={components} />
}
