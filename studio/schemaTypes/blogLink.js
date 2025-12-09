import {defineType} from 'sanity'

export default defineType({
  name: 'blogLink',
  title: 'Blog Link',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    },
    {
      name: 'content',
      title: 'Link Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      content: 'content',
      url: 'url',
    },
    prepare({content, url}) {
      return {
        title: content,
        subtitle: url,
      }
    },
  },
})
