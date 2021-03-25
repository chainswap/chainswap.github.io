import type { CSSProperties, FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./MobileNavigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { Button, NavLink } from "../../../../ui/button";
import { CONTACT, SOCIAL, WHITEPAPER } from "../../../../const/const";
import { GitHub, Medium, Telegram, Twitter } from "../../../../ui/icons/Icons";
import React from "react";
import { useWindowSize } from "../../../../hooks/use-window-size";

export type LinkType = {
	link: string;
	links: Record<string, string>;
};

type NavigationType = {
	sideEffect?: ReactNode;
};

type ComponentType = NavigationType & MaybeWithClassName;

const ICONS = {
	Github: <GitHub />,
	Twitter: <Twitter />,
	Telegram: <Telegram />,
	Medium: <Medium />,
};

const settings = {
	variant: "text" as "text",
	size: "large" as "large",
	color: "white" as "white",
};

export const MobileNavigation: FC<ComponentType> = ({ className, sideEffect }) => {
	const windowHeight = useWindowSize()[1];

	return (
		<div
			className={classNames(className, styles.component)}
			style={{ "--window-height": `${windowHeight}px` } as CSSProperties}
		>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NavLink className={styles.link} href={WHITEPAPER} {...settings}>
						Whitepaper
					</NavLink>
				</li>
				{Object.keys(SOCIAL).map((key) => {
					return (
						<li key={key} className={styles.item}>
							<NavLink
								className={styles.link}
								href={SOCIAL[key]}
								iconBefore={ICONS[key]}
								{...settings}
							>
								{key}
							</NavLink>
						</li>
					);
				})}
				<NavLink
					className={classNames(styles.link, styles.decoration)}
					href={CONTACT}
					{...settings}
				>
					contact@chainswap.co
				</NavLink>
			</ul>
			{sideEffect}
		</div>
	);
};
