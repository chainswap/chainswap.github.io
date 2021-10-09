import classNames from "classnames";
import type { FC } from "react";
import { MaybeWithClassName, WithChildren } from "../../helper/react/types";

import styles from "./Typography.module.scss";
import colorStyles from "../styles/Color.module.scss";
import sizeStyles from "../styles/Size.module.scss";
import weightStyles from "../styles/Weight.module.scss";
import { ColorType, FontSizeType, WeightType } from "../types";
import { getColorClassName } from "../utils/get-color-class-name";
import { getSizeClassName } from "../utils/get-size-class-name";
import { getWeightClassName } from "../utils/get-weight-class-name";

export type TypographyType = {
	Component: Exclude<keyof JSX.IntrinsicElements, "button" | "a">;
	variant: "primary" | "secondary";
	color?: ColorType;
	size?: FontSizeType;
	weight?: WeightType;
	lighten?: 100 | 40;
} & WithChildren &
	MaybeWithClassName;

export const Typography: FC<TypographyType> = ({
	Component,
	className,
	variant,
	weight = "regular",
	color = "white",
	size = 22,
	lighten = 100,
	children,
	...props
}) => (
	<Component
		className={classNames(
			className,
			styles.component,
			//
			styles[variant],
			//
			getSizeClassName(size, sizeStyles),
			//
			getWeightClassName(weight, weightStyles),
			//
			getColorClassName(color, colorStyles),
			//
			styles[`lighten-${lighten}`]
		)}
		color={color}
		{...props}
	>
		{children}
	</Component>
);

export type HeadingComponentType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingType = Omit<TypographyType, "size" | "Component" | "weight" | "variant"> & {
	Component?: HeadingComponentType;
};

export const Heading1: FC<HeadingType> = ({ Component = "h1", ...props }) => {
	return (
		<Typography Component={Component} size={56} weight="regular" variant="secondary" {...props} />
	);
};

export const Heading2: FC<HeadingType> = ({ Component = "h1", ...props }) => {
	return <Typography Component={Component} size={78} weight="bold" variant="primary" {...props} />;
};

type BodyComponentType = Exclude<keyof JSX.IntrinsicElements, "button" | "a">;

type BodyType = Omit<TypographyType, "size" | "Component" | "variant"> & {
	Component?: BodyComponentType;
};

export const Body1: FC<BodyType> = ({ Component = "p", ...props }) => {
	return (
		<Typography Component={Component} size={22} weight="regular" variant="primary" {...props} />
	);
};
