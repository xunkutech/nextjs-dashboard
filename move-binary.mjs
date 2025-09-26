import { execSync } from 'child_process';
import fs from 'fs';

const extension = process.platform === 'win32' ? '.exe' : '';

const rustInfo = execSync('rustc -vV');
const targetTriple = /host: (\S+)/g.exec(rustInfo)[1];

if (!targetTriple) {
  console.error('Failed to determine platform target triple');
}

Bun.build({
  entrypoints: ['.next/standalone/server.js'],
  compile: true,
  minify: true,
  target: 'bun',
  resources: ['.next/standalone/**/*', 'public/**', 'node_modules/**'],
  outdir: './out',
   external: [
    // 排除可能有问题的原生依赖
    "@vercel/turbopack-ecmascript-runtime",
    "react-server-dom-webpack", 
    "react-dom/server",
    "critters",
    "react-server-dom-turbopack",
    "sass",
    "webpack",
    "next/dist/build/webpack/plugins/terser-webpack-plugin/src",
    "@opentelemetry/api",
    "../../../../pages/*"
  ]
})

// fs.renameSync(
//   `src-tauri/binaries/app${extension}`,
//   `src-tauri/binaries/app-${targetTriple}${extension}`
// );