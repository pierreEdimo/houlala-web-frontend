const path = require('path');


/** @type {import('next').NextConfig} */


const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'upload.houlala.store'
        ]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
});
module.exports = nextConfig;
