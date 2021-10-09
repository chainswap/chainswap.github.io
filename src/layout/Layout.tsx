import Head from "next/head";
import classNames from "classnames";
import { CSSProperties, FC, ReactNode } from "react";

import styles from "./Layout.module.scss";
import { Header } from "../modules/header";
import { useWindowSize } from "../hooks/use-window-size";

type LayoutType = {
	children?: ReactNode;
	title?: string;
	description?: string;
	keywords?: string;
	className?: string;
	isBlack?: boolean;
};

export const Layout: FC<LayoutType> = ({
	children,
	className,
	title = "",
	description = "",
	keywords,
	isBlack,
}) => {
	const windowHeight = useWindowSize()[1];

	return (
		<div
			className={classNames(styles.component, className, isBlack && styles.isBlack)}
			style={
				{
					"--height": windowHeight ? `${windowHeight}px` : "var(--default-height)",
				} as CSSProperties
			}
		>
			<Head>
				<title>{title}</title>
				<meta name="Description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header className={styles.header} isBlack={isBlack} />
			<main className={styles.main}>{children}</main>
		</div>
	);
};
