import { RC } from "../../helper/react/types";
import { ScatteredContinuousState } from "../../hooks/use-continuous-state";
import { PopUpContainer } from "../../ui/pop-up-container";
import { NavLink } from "../../ui/button";
import styles from "./LaunchPopUp.module.scss";

const LINKS = [
	{
		caption: "Cross chain assets",
		href: "https://exchange.chainswap.com/",
	},
	{
		caption: (
			<>
				Cross chain application<span className={styles.soon}>Coming soon</span>
			</>
		),
		href: "#",
	},
	{
		caption: (
			<>
				The Hub<span>Coming soon</span>
			</>
		),
		href: "#",
	},
];

export const LaunchPopUp: RC<{
	control: ScatteredContinuousState<boolean>;
	close(): void;
}> = ({ close, control }) => (
	<PopUpContainer animated={control.present} visible={control.defined} size="sm" onClose={close}>
		<div className={styles.component}>
			{LINKS.map((item) => (
				<NavLink
					className={styles.link}
					href={item.href}
					variant="outlined"
					size="medium"
					color="white"
				>
					{item.caption}
				</NavLink>
			))}
			<control.DefinePresent />
		</div>
	</PopUpContainer>
);
