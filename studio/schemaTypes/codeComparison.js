import {defineType} from 'sanity'

export default defineType({
  name: 'codeComparison',
  title: 'Code Comparison',
  type: 'object',
  fields: [
    {
      name: 'left',
      title: 'Left Code',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'languageL',
      title: 'Left Language',
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
          {title: 'CSS', value: 'css'},
        ],
      },
      initialValue: 'go',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rigth',
      title: 'Right Code',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'languageR',
      title: 'Right Language',
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
          {title: 'CSS', value: 'css'},
        ],
      },
      initialValue: 'go',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      languageL: 'languageL',
      languageR: 'languageR',
    },
    prepare({languageL, languageR}) {
      return {
        title: 'Code Comparison',
        subtitle: `${languageL} ↔ ${languageR}`,
      }
    },
  },
})
