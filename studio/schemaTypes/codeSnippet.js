import {defineType} from 'sanity'

export default defineType({
  name: 'codeSnippet',
  title: 'Code Snippet',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Go', value: 'go'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Rust', value: 'rust'},
          {title: 'Bash', value: 'bash'},
          {title: 'JSON', value: 'json'},
          {title: 'YAML', value: 'yaml'},
          {title: 'Docker', value: 'docker'},
          {title: 'Makefile', value: 'makefile'},
          {title: 'CSS', value: 'css'},
          {title: 'TOML', value: 'toml'},
        ],
      },
      initialValue: 'go',
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 15,
    },
    {
      name: 'route',
      title: 'Route (optional)',
      type: 'string',
      description: 'File path shown in the header (default: ~)',
    },
    {
      name: 'output',
      title: 'Console Output (optional)',
      type: 'text',
      rows: 5,
    },
  ],
  preview: {
    select: {
      language: 'language',
      code: 'code',
    },
    prepare({language, code}) {
      const preview = code ? code.substring(0, 50) + '...' : 'Empty code block'
      return {
        title: `${language.toUpperCase()} Code`,
        subtitle: preview,
      }
    },
  },
})
