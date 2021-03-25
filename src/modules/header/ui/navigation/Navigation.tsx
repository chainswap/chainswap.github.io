import type { FC } from "react";
import classNames from "classnames";
import styles from "./Navigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { NavLink, Button } from "../../../../ui/button";
import { CONTACT, SOCIAL, WHITEPAPER } from "../../../../const/const";
import { Arrow, GitHub, Medium, Telegram, Twitter } from "../../../../ui/icons/Icons";

export type LinkType = {
	link: string;
	links: Record<string, string>;
};

type NavigationType = {
	links?: Record<string, string | LinkType>;
};

type ComponentType = NavigationType & MaybeWithClassName;

const HEADER_LINKS = {
	Whitepaper: WHITEPAPER,
	Social: SOCIAL,
	"contact@chainswap.co": CONTACT,
};

const ICONS = {
	Github: <GitHub />,
	Twitter: <Twitter />,
	Telegram: <Telegram />,
	Medium: <Medium />,
};

const settings = {
	variant: "text" as "text",
	size: "small" as "small",
	color: "white" as "white",
};

export const Navigation: FC<ComponentType> = ({ className, links = HEADER_LINKS }) => {
	const keys = Object.keys(links);
	return (
		<div className={className}>
			<ul className={styles.list}>
				{keys.map((key, index) => {
					const item = links[key];
					const hasDropdown = typeof item !== "string";
					const href = typeof item !== "string" ? undefined : item;
					const subLinks = typeof item !== "string" ? item : undefined;
					return (
						<li key={key} className={styles.item}>
							{href !== undefined ? (
								<NavLink
									className={classNames(
										styles.link,
										index === keys.length - 1 && styles.decoration
									)}
									href={href}
									{...settings}
								>
									{key}
								</NavLink>
							) : (
								<Button
									className={styles.link}
									iconAfter={<Arrow className={styles.arrow} />}
									{...settings}
								>
									{key}
								</Button>
							)}
							{hasDropdown && subLinks && (
								<div className={styles.dropdown}>
									<ul className={styles.subList}>
										{Object.keys(subLinks).map((subKey) => {
											const subItem = subLinks[subKey];
											return (
												<li key={subKey} className={styles.subItem}>
													<NavLink className={styles.subLink} href={subItem} size="small">
														<span className={styles.icon}>{ICONS[subKey]}</span>
														{subKey}
													</NavLink>
												</li>
											);
										})}
									</ul>
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
