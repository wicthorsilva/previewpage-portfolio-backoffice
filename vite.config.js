// @ts-check
import reactPlugin from 'vite-plugin-react'

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  base: "/previewpage-portfolio-backoffice-react-router",
  plugins: [reactPlugin]
}

export default config
