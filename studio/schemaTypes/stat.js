import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'stat',
  title: 'Stat',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'value', subtitle: 'label'},
  },
})
