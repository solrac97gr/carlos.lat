import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: () => true, // Disable uniqueness - allow same slug for different languages
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Spanish', value: 'es'},
          {title: 'English', value: 'en'},
        ],
        layout: 'radio',
      },
      initialValue: 'es',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Carlos García',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          {title: 'Go', value: 'Go'},
          {title: 'Rust', value: 'Rust'},
          {title: 'JavaScript', value: 'JavaScript'},
          {title: 'TypeScript', value: 'TypeScript'},
          {title: 'Docker', value: 'Docker'},
          {title: 'MongoDB', value: 'MongoDB'},
          {title: 'Web Development', value: 'Web Development'},
          {title: 'Backend', value: 'Backend'},
          {title: 'Frontend', value: 'Frontend'},
          {title: 'Architecture', value: 'Architecture'},
        ],
      },
      initialValue: 'Go',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Write your blog post with rich text editor and custom blocks',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
        {
          type: 'codeSnippet',
        },
        {
          type: 'blogLink',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Published', value: 'published'},
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      status: 'status',
      language: 'language',
    },
    prepare(selection) {
      const {title, author, status, language} = selection
      const statusEmoji = status === 'published' ? '✅' : '📝'
      const langFlag = language === 'es' ? '🇪🇸' : '🇬🇧'
      return {
        title: `${statusEmoji} ${langFlag} ${title}`,
        subtitle: `by ${author}`,
      }
    },
  },
})
