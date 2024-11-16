import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import React, { ReactNode } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { githubDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'highlight.js/styles/github-dark.css'; // Choose your preferred theme

// import "./highlight.css"

import { Heading, Flex, SmartImage, SmartLink, Text } from '@/once-ui/components';
import { HeadingLink } from '@/components';

import { TextProps } from '@/once-ui/interfaces';
import { SmartImageProps } from '@/once-ui/components/SmartImage';

// Define types for Table
type TableProps = {
    data: {
        headers: string[];
        rows: string[][];
    };
};

function Table({ data }: TableProps) {
    const headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

// Define types for CustomLink
type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
    if (href.startsWith('/')) {
        return (
            <SmartLink href={href} {...props}>
                {children}
            </SmartLink>
        );
    }

    if (href.startsWith('#')) {
        return <a href={href} {...props}>{children}</a>;
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
}

// Function to handle images
function createImage({ alt, src, ...props }: SmartImageProps & { src: string }) {
    if (!src) {
        console.error("SmartImage requires a valid 'src' property.");
        return null;
    }

    return (
        <SmartImage
            className="my-20"
            enlarge
            radius="m"
            aspectRatio="16 / 9"
            alt={alt}
            src={src}
            {...props}/>
    );
}

// Function to slugify headings
function slugify(str: string): string {
    return str
        .toString()
        .toLowerCase()
        .trim() // Remove whitespace from both ends of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

// Function to create headings
function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
    const CustomHeading = ({ children, ...props }: TextProps) => {
        const slug = slugify(children as string);
        return (
            <Heading variant="body-strong-xl">
                <HeadingLink
                    style={{ marginTop: 'var(--static-space-24)', marginBottom: 'var(--static-space-12)' }}
                    level={1}
                    id={slug}
                    {...props}>
                    {children}
                </HeadingLink>
            </Heading>
        );
    };
    CustomHeading.displayName = `Heading${level}`;
    return CustomHeading;
}

// Function to create paragraphs
function createParagraph({ children }: TextProps) {
    return (
        <Text style={{ lineHeight: '150%' }}
              variant="body-default-l"
              onBackground="neutral-medium"
              marginTop="8"
              marginBottom="12">
            {children}
        </Text>
    );
}

// Define the types for the 'code' component props
type CodeProps = {
    className?: string;
    children: ReactNode;
};

// Define the components with the code block handler
const components = {
    p: createParagraph as any,
    h1: createHeading(1) as any,
    h2: createHeading(2) as any,
    h3: createHeading(3) as any,
    h4: createHeading(4) as any,
    h5: createHeading(5) as any,
    h6: createHeading(6) as any,
    img: createImage as any,
    a: CustomLink as any,
    Table,
    code: ({ className, children }: CodeProps) => {
        const language = className?.replace('language-', '') || 'plaintext';
        return (
            <SyntaxHighlighter 
                language={language} 
                PreTag="pre"  // Set the tag type for <pre> 
                customStyle={{
                    backgroundColor: '#222',  // Dark grey background
                    color: '#fff',            // White text color
                    padding: '1em',
                    borderRadius: '8px',      // Optional: rounded corners
                }}>
                {children}
            </SyntaxHighlighter>
        );
    },
};

// Define the props for the CustomMDX component
type CustomMDXProps = MDXRemoteProps & {
    components?: typeof components;
};

// CustomMDX component for rendering MDX content
export function CustomMDX(props: CustomMDXProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
