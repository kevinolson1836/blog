"use client";

import { AvatarGroup, Flex, Heading, RevealFx, SmartImage, SmartLink, Text } from "@/once-ui/components";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from 'next-intl';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
    href: string;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const t = useTranslations();

    let loopInterval; // To store the interval ID
    const [keep_looping, setkeep_looping] = useState(true);

    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    const loop = () => {
        // clearInterval(loopInterval);
        if (keep_looping == true){
            loopInterval = setTimeout(() => {
                setIsTransitioning(true);
                const nextIndex = (activeIndex + 1) % images.length;
                    setTimeout(() => {
                        setIsTransitioning(true);
                    }, 500);
                setActiveIndex(nextIndex);
                }, 7000);
        }
    };

    const handleImageClick = () => {
        setkeep_looping(false);
        if(images.length > 1) {
            setIsTransitioning(false);
            setTimeout(() => {
                const nextIndex = (activeIndex + 1) % images.length;
                setActiveIndex(nextIndex);
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }, 300);
        }
    };
    
    const handleControlClick = (index: number) => {
        setkeep_looping(false)
        console.log("should stop looping!")
        if (index !== activeIndex) {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex(index);
                setTimeout(() => {
                    setIsTransitioning(false);
                }, 630);
            }, 630);
        }
    };

    return (
        <Flex
            fillWidth gap="m"
            direction="column">
            <Flex 
            onClick={handleImageClick} 
            style={{justifyContent: "center"}}
            onLoad={loop}
            >
            <RevealFx
                    style={{
                        width: '100%',
                        alignContent: "center"
                    }}
                    delay={0}
                    trigger={isTransitioning}
                    speed="fast">
                        <Flex className={styles.padding} paddingY="24"></Flex>
                    <SmartImage
                        tabIndex={0}
                        radius="l"
                        alt={title}
                        aspectRatio="16 / 9"
                        src={images[activeIndex]}
                        style={{
                            border: '1px solid var(--neutral-alpha-weak)',
                            ...(images.length > 1 && {
                                cursor: 'pointer',
                            }),
                        }}/>
                </RevealFx>
            </Flex>
            {images.length > 1 && (
                <Flex
                    gap="4" paddingX="l"
                    fillWidth maxWidth={32}
                    justifyContent="center">
                    {images.map((_, index) => (
                        <Flex
                            key={index}
                            onClick={() => handleControlClick(index)}
                            style={{
                                background: activeIndex === index 
                                    ? 'var(--neutral-on-background-strong)' 
                                    : 'var(--neutral-alpha-medium)',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                            }}
                            fillWidth
                            height="4">
                        </Flex>
                    ))}
                </Flex>
            )}
            <Flex
                mobileDirection="column"
                fillWidth paddingX="l" paddingTop="xs" paddingBottom="m" gap="l">
                {title && (
                    <Flex
                        flex={5}>
                        <Heading
                            as="h2"
                            wrap="balance"
                            variant="display-strong-xs">
                            {title}
                        </Heading>
                    </Flex>
                )}
                {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
                    <Flex
                        flex={7} direction="column"
                        gap="s">
                        {avatars?.length > 0 && (
                            <AvatarGroup
                                avatars={avatars}
                                size="m"
                                reverseOrder/>
                        )}
                        {description?.trim() && (
                            <Text
                                wrap="balance"
                                variant="body-default-s"
                                onBackground="neutral-weak">
                                {description}
                            </Text>
                        )}
                        {content?.trim() && (
                            <SmartLink
                                suffixIcon="chevronRight"
                                style={{margin: '0', width: 'fit-content'}}
                                href={href}>
                                    <Text
                                        variant="body-default-s">
                                       {t("projectCard.label")}
                                    </Text>
                            </SmartLink>
                        )}
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};