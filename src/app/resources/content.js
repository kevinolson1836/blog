import { InlineCode } from "@/once-ui/components";
// import { Certificate } from "crypto";
  
const person = {
    firstName: 'Kevin',
    lastName:  'Olson',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Tech enthusiast',
    avatar:    '/images/avatar-circle.png',
    location:  'America/Chicago',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about my current projcts and share some of my random thoughts.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:kevin.olson1836@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work.`,
    headline: <>Tech enthusiast by trade, and by hobby</>,
    subline: <>I'm Kevin, currently a Building Automation Systems Specialist with Siemens.<br/>After hours, I tinker with my own projects.</>,
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/kevin-olson-rju4oh'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <> Building Automation Specialist at Siemens with a passion for IT. Combing his expertise in smart controllers and building systems with a love for technology, managing home servers and developing creative tech projects.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Siemens',
                timeframe: 'Jul 2023 - Present',
                role: 'Building Automation Systems Specialist',
                achievements: [
                    <>Installation of Building Automation controllers resulting in improved building energy efficiency.</>,
                    <>As a mid level Specialist I resolved multiple low - mid level issues on a daily basis.</>,
                    <>Configured and maintained the Backend and Frontend for our deployed software on site.</>,
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Advocate Aurora Healthcare (AAH)',
                timeframe: 'June 2022 - August 2022',
                role: 'IT Support (Internship)',
                achievements: [
                    <>Installation of various pieces of software on Windows based systems</>,
                    <>Provided technical support for users</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Illinois State University',
                description: <>Earned a Batchlors of Science in Information Systems.</>,
                timeframe: "2020 - 2023"
            },
            {
                name: 'Certificates',
                description: <>Actively pursuing the A+ Certification.</>,
                timeframe: ""
            }
        ]
    },
    // certs: {
    //     display: true, // set to false to hide this section
    //     title: 'Certifications',
    //     certs: [
    //         {
    //             name: 'Certificates',
    //             description: <>Actively pursuing the A+ Certification.</>,
    //         }
    //     ]
    // },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Linux',
                description: <>Self hosting and daily driving Linux based systems on physical and virtual machines.</>,
                images: []
            },
            {
                title: 'Building Automation',
                description: <>Professionally working in Building Automation since 2023</>,
                images: []
            },
            {
                title: 'Docker',
                description: <>Running and maintaining high availability Docker containers for mission critical services.</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },  
            {
                title: 'Networking',
                description: <>Extensive work with Ethernet and MS/TP networks.</>,
                images: []
            },
            {
                title: 'Hardware',
                description: <>hands on experiences with computer Hardware.</>,
                images: []
            },
            {
                title: 'Scripting/Programming',
                description: <>Constantly tinkering with software and the limitless possibilities.</>,
                images: []
            },
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };