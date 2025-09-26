const nextConfig = {
  // Ensure Next uses this repo as the workspace root for both dev (Turbopack) and build.
  // outputFileTracingRoot: __dirname,
  // Cast as any to avoid type mismatch; Next.js reads this at runtime.
  // turbopack: { root: __dirname },
  output: 'standalone',
  experimental: {
    ppr: 'incremental'
  }
};

module.exports = nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Ensure Next uses this repo as the workspace root for both dev (Turbopack) and build.
//   // outputFileTracingRoot: process.cwd(),
//   // Cast as any to avoid type mismatch; Next.js reads this at runtime.
//   // turbopack: { root: process.cwd() } as any,
//     output: "standalone",
//     experimental: {
//       ppr: "incremental"
//   }
// };

// export default nextConfig;