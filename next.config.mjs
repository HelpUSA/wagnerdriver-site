/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build_prod',   // novo diretório de saída (evita a pasta travada)
  cleanDistDir: false,     // não tentar apagar a pasta de saída
};

export default nextConfig;
