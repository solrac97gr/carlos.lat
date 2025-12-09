import {defineType} from 'sanity'

export default defineType({
  name: 'folderEntity',
  title: 'Folder Entity',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'File', value: 'file'},
          {title: 'Folder', value: 'folder'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content (for folders)',
      type: 'array',
      of: [{type: 'folderEntity'}],
      hidden: ({parent}) => parent?.type === 'file',
    },
  ],
  preview: {
    select: {
      name: 'name',
      type: 'type',
      content: 'content',
    },
    prepare({name, type, content}) {
      const icon = type === 'folder' ? '📁' : '📄'
      const children = type === 'folder' && content ? ` (${content.length} items)` : ''
      return {
        title: `${icon} ${name}${children}`,
      }
    },
  },
})
