/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'images.unsplash.com',
    //         port: '',
    //         pathname: '/account123/**',
    //       },
    //     ],
    //   },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
