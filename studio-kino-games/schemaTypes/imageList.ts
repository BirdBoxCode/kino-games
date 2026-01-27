import { defineField, defineType } from 'sanity'

export const imageListType = defineType({
  name: 'imageList',
  title: 'Image List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'List Title',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})
