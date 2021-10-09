import type { FC } from "react";
import styles from "./Navigation.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { NavLink } from "../../../../components/button";
import { SOCIAL } from "../../../../const/const";
import { Envelop, GitHub, Medium, Telegram, Twitter } from "../../../../components/icons/Icons";

export type LinkType = {
	link: string;
	links: Record<string, string>;
};

type NavigationType = {
	links?: Record<string, string | LinkType>;
};

type ComponentType = NavigationType & MaybeWithClassName;

const ICONS = {
	Github: <GitHub />,
	Twitter: <Twitter />,
	Telegram: <Telegram />,
	Medium: <Medium />,
	"contact@chainswap.com": <Envelop />,
};

export const Navigation: FC<ComponentType> = ({ className }) => {
	return (
		<div className={className}>
			<ul className={styles.list}>
				{Object.keys(SOCIAL).map((key) => {
					const subItem = SOCIAL[key];
					return (
						<li key={key} className={styles.item}>
							<NavLink className={styles.link} href={subItem} icon={ICONS[key]} size="large">
								{key}
							</NavLink>
						</li>
					);
				})}
				<span className={styles.divider}></span>
				<li>
					<a
						target="_blank"
						href="https://docs.chainswap.com/"
						rel="noreferrer"
						className={styles.docs}
					>
						Docs
					</a>
				</li>
			</ul>
		</div>
	);
};
