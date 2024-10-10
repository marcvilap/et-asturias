import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	devToolbar: { enabled: false },
	integrations: [tailwind({ applyBaseStyles: false })],
})
