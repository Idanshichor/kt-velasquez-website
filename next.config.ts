import type { NextConfig } from "next";

// Security headers applied to every route. None of these change page visuals.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    // Permanent (308) apex → www redirect. 308 preserves method and tells
    // search engines to consolidate ranking signals to the www version.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ktvelasquez.com" }],
        destination: "https://www.ktvelasquez.com/:path*",
        permanent: true,
      },
      // Old ?lang=en links (the toggle used to be a query string) go to the real English URL.
      { source: "/", has: [{ type: "query", key: "lang", value: "en" }], destination: "/en", permanent: true },
      ...["/sobre-mi", "/servicios", "/podcast", "/privacidad"].map((path) => ({
        source: path,
        has: [{ type: "query" as const, key: "lang", value: "en" }],
        destination: `/en${path}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
