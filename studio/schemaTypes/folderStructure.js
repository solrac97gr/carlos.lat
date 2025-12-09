import {defineType} from 'sanity'

export default defineType({
  name: 'folderStructure',
  title: 'Folder Structure',
  type: 'object',
  fields: [
    {
      name: 'tree',
      title: 'Folder Tree',
      type: 'array',
      of: [{type: 'folderEntity'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'repo',
      title: 'Repository URL (optional)',
      type: 'string',
      description: 'GitHub repository URL for fork button',
    },
  ],
  preview: {
    select: {
      tree: 'tree',
    },
    prepare({tree}) {
      const count = tree?.length || 0
      return {
        title: 'Folder Structure',
        subtitle: `${count} root items`,
      }
    },
  },
})
