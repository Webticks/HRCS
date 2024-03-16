  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // output: "export",
    images: {
      unoptimized: true,
    },

    // Define custom routing rules for export
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/contact': { page: '/contact' },
        '/compliance-audits': { page: '/compliance-audits' },
        '/fire-log-compliance': { page: '/fire-log-compliance' },
        '/certification-compliance': { page: '/certification-compliance' },
        '/inspection-services': { page: '/inspection-services' },
        '/risk-management': { page: '/risk-management' },
        '/safety-dashboard': { page: '/safety-dashboard' },
        '/sop': { page: '/sop' },
      };
    },
  };

  module.exports = nextConfig;
