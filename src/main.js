import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { enableVisualEditing } from '@sanity/visual-editing'

createApp(App).mount('#app')

// No-op when not inside the Presentation tool iframe
enableVisualEditing()
