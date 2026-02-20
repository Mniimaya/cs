import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "styles")], // или includePaths, см. ниже
    additionalData: `
@use "variables" as *;
@use "mixins" as mixins;
`,
  },

  // Прокси для API запросов в продакшене
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*",
      },
    ];
  },

  // Дополнительные настройки для продакшена
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Сжатие ответов
  compress: true,

  // Заголовки безопасности
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
