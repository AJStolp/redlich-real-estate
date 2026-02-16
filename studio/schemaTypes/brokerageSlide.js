export default {
  name: 'brokerageSlide',
  title: 'Brokerage Slide',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Slide Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
    },
  ],
  preview: {
    select: {title: 'title', media: 'image'},
  },
}
