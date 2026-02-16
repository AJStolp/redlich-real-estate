import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'brian-redlich',
  title: 'Brian Redlich',

  // Replace with your Sanity project ID and dataset
  projectId: 'lvtzddlq',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: 'http://localhost:5173',
      allowOrigins: ['http://localhost:*'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
