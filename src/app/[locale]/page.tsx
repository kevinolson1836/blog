import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent, display } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="xl" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				alignItems='center'
				align="center"
				style={{justifyContent: "center"}}
				paddingX='48'
				gap="xl">

					{/* sub heading section */}
					<Flex
						direction="column"
						fillWidth maxWidth="s" gap="m" 
						paddingY='1'
						>
						<RevealFx translateY="4" >
							
							<Flex
									gap="8"
									alignItems="center"
									justifyContent="center"
									paddingBottom='32'
									style={{display: "inline-block"}}
									>
									{about.avatar.display && (
										<Avatar
											src={person.avatar}
											size="xl"/>
										)}
								</Flex>

							<Heading
								wrap="balance"
								variant="display-strong-l">
								{home.headline}
							</Heading>
						{/* </RevealFx> */}
						{/* <RevealFx translateY="8" delay={0.2}> */}
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-l">
								{home.subline}
							</Text>
						</RevealFx>

						<RevealFx translateY="12" delay={0.4}>
							{/* <Button
								data-border="rounded"
								href={`/${locale}/about`}
								variant="tertiary"
								suffixIcon="chevronRight"
								size="l"> */}
								{/* <Flex
									gap="8"
									alignItems="center"
									justifyContent="center">
									{about.avatar.display && (
										<Avatar
											src={person.avatar}
											size="xl"/>
										)}d
								</Flex> */}
							{/* </Button> */}
						</RevealFx>
					
					</Flex>

			</Flex>
			
			{/* under main heading */}
			<RevealFx translateY="16" delay={0.1}>
				<Projects range={[1,1]} locale={locale}/>
			</RevealFx>
			{routes['/blog'] && (
				<Flex fillWidth paddingX="20">
					<Posts range={[1,4]} columns="2" locale={locale}/>
				</Flex>
			)}
			<Projects range={[2]} locale={locale}/>
			{ newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Flex>
	);
}
