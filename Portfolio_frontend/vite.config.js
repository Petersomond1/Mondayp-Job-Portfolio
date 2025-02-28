// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { viteStaticCopy } from 'vite-plugin-static-copy'

// export default defineConfig({
//   plugins: [
//     react(),
//     viteStaticCopy({
//       targets: [
//         { src: 'package.json', dest: '' },
//         { src: 'src/index.css', dest: 'assets' }
//       ]
//     })
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/picturepax.jpg', dest: 'assets' },
        { src: 'src/assets/pix.jpg', dest: 'assets' }
      ]
    })
  ],
})
