"use client";

import { renderContent } from "@/app/resources";
import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components"
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";  // <-- Import useEffect from 
// import { person, social } from '@/app/resources'
import ReactGA from "react-ga4";
const TRACKING_ID = "G-RYLPF4LQNV";


export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const t = useTranslations();
    const { person, social } = renderContent(t);

    useEffect(() => {
          ReactGA.initialize(TRACKING_ID);
          let rawLocation = window.location.pathname
          const parsedLocation = rawLocation.replace(/\//g, ''); // removes all '/'
          ReactGA.send({ hitType: "pageview", page: parsedLocation});
          console.log(parsedLocation);
       }, []);

    return (
        
        <Flex
            as="footer"
            position="relative"
            fillWidth padding="8"
            justifyContent="center">

          
            <Flex
                fillWidth maxWidth="m" paddingY="8" paddingX="16"
                justifyContent="space-between" alignItems="center">
                <Text
                    variant="body-default-s"
                    onBackground="neutral-strong">
                    <Text
                        onBackground="neutral-weak">
                        © {currentYear} /
                    </Text>
                    <Text paddingX="4">
                        {person.name}
                    </Text>
                    <Text onBackground="neutral-weak">
                        {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
                        / Build your portfolio with <SmartLink style={{marginLeft: '-0.125rem'}} href="https://once-ui.com/templates/magic-portfolio">Once UI</SmartLink>
                    </Text>
                </Text>
                <Flex
                    gap="16">
                    {social.map((item) => (
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                size="s"
                                variant="ghost"/>
                        )
                    ))}
                </Flex>
                
            </Flex>
            
        </Flex>
    )
}
