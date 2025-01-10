import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

// Apply the MDX plugin
const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {},
});

// Apply the Next Intl plugin
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    typescript: {
        // Allow build even if there are type errors
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['github.com'], // Allow images from GitHub
    },
};

// Wrap the MDX plugin inside the Next Intl plugin
export default withNextIntl(withMDX(nextConfig));