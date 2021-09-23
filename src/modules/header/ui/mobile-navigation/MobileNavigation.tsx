import type { CSSProperties, FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./MobileNavigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { NavLink } from "../../../../ui/button";
import { SOCIAL } from "../../../../const/const";
import { Envelop, GitHub, Medium, Telegram, Twitter } from "../../../../ui/icons/Icons";
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
	"contact@chainswap.co": <Envelop />,
};

export const MobileNavigation: FC<ComponentType> = ({ className, sideEffect }) => {
	const windowHeight = useWindowSize()[1];

	const keys = Object.keys(SOCIAL);

	return (
		<div
			className={classNames(className, styles.component)}
			style={{ "--window-height": `${windowHeight}px` } as CSSProperties}
		>
			<ul className={styles.list}>
				{keys.map((key, index) => {
					const lastItem = index === keys.length - 1;
					return (
						<li key={key} className={styles.item}>
							<NavLink
								className={classNames(styles.link, lastItem && styles.decoration)}
								href={SOCIAL[key]}
								iconBefore={ICONS[key]}
								variant="text"
								size="large"
								color="white"
							>
								{key}
							</NavLink>
						</li>
					);
				})}
			</ul>

			<a
				target="_blank"
				href="https://docs.chainswap.com/"
				rel="noreferrer"
				className={styles.docs}
			>
				Docs
			</a>

			{sideEffect}
		</div>
	);
};
