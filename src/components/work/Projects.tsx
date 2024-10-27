import { getPosts } from '@/app/utils';
import { Flex } from '@/once-ui/components';

import { ProjectCard } from '@/components';

interface ProjectsProps {
    range?: [number, number?];
    locale: string;
    name?: string;
}

// let key;
// let href;
// let images;
// let title;
// let description;
// let content;


export function Projects({ range, locale, name="" }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]);

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedProjects = range
        ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
        : sortedProjects;

    if(name == ""){
        return (
            <Flex
            fillWidth gap="l" marginBottom="40" paddingX="l"
            direction="column">
                {displayedProjects.map((post) => (
                   <ProjectCard
                        key={post.slug}
                        href={`work/${post.slug}`}
                        images={post.metadata.images}
                        title={post.metadata.title}
                        description={post.metadata.summary}
                        content={post.content}
                        avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
                ))}
            </Flex>
    
        );
    } else {
        sortedProjects.map( (post)=> {
            if (post.metadata.title == name){
                // key = post.slug
                // href = `work/${post.slug}`
                // images = post.metadata.images
                // title = post.metadata.title
                // description = post.metadata.summary
                // content = post.content
                // console.log("fubnbger")
            }
                return (
                    <Flex
                    fillWidth gap="l" marginBottom="40" paddingX="l"
                    direction="column"> help me
                           <ProjectCard
                                key={post.slug}
                                href={`work/${post.slug}`}
                                images={post.metadata.images}
                                title={post.metadata.title}
                                description={post.metadata.summary}
                                content={post.content}
                                avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
                    </Flex>
                    
                );
        });
    }
}