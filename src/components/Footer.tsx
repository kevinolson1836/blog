"use client";

import { renderContent } from "@/app/resources";
import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-RYLPF4LQNV";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const t = useTranslations();
    const { person, social } = renderContent(t);

    useEffect(() => {
        // Google Analytics
        ReactGA.initialize(TRACKING_ID);
        let rawLocation = window.location.pathname;
        const parsedLocation = rawLocation.replace(/\//g, '');
        ReactGA.send({ hitType: "pageview", page: parsedLocation });
        console.log(parsedLocation);

    const script = document.createElement("script");
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.defer = true;
    script.setAttribute("data-cf-beacon", '{"token": "ac87948dfd534a6ab0b6279f70dc03d8"}');
    document.body.appendChild(script);

    console.log("Cloudflare Analytics script added");

    }, []);

    return (
        <Flex as="footer" position="relative" fillWidth padding="8" justifyContent="center">
            <Flex
                fillWidth maxWidth="m" paddingY="8" paddingX="16"
                justifyContent="space-between" alignItems="center"
            >
                <Text variant="body-default-s" onBackground="neutral-strong">
                    <Text onBackground="neutral-weak">© {currentYear} /</Text>
                    <Text paddingX="4">{person.name}</Text>
                    <Text onBackground="neutral-weak">
                        / Build your portfolio with 
                        <SmartLink style={{ marginLeft: '-0.125rem' }} href="https://once-ui.com/templates/magic-portfolio">
                            Once UI
                        </SmartLink>
                    </Text>
                </Text>
                <Flex gap="16">
                    {social.map((item) => (
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                size="s"
                                variant="ghost"
                            />
                        )
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};
