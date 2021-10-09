import classNames from "classnames";
import { FC, useCallback, useState, useEffect, useRef, CSSProperties } from "react";

import styles from "./Header.module.scss";
import { MaybeWithClassName } from "../../helper/react/types";
import { NavLink } from "../../components/button";
import { Logo } from "../../components/icons/Icons";
import { Navigation } from "./ui/navigation";
import { FocusOn } from "react-focus-on";
import { useScatteredContinuousState } from "../../hooks/use-continuous-state";
import { MobileNavigation } from "./ui/mobile-navigation";
import { Toggle, Close } from "../../components/icons/Icons";

type HeaderType = { isBlack?: boolean };

export const Header: FC<HeaderType & MaybeWithClassName> = ({ className, isBlack }) => {
	const [mobileNavigationShown, setMobileNavigationVisibility] = useState(false);
	const mobileNavigation = useScatteredContinuousState(mobileNavigationShown, {
		timeout: 350,
	});
	const closeMobileNavigationDisplay = useCallback(() => setMobileNavigationVisibility(false), []);
	// toggle is bound to a visible state of button
	const toggleMobileNavigationDisplay = useCallback(
		() => setMobileNavigationVisibility(!mobileNavigation.present),
		[mobileNavigation.present]
	);

	// close mobile navigation on route change
	useEffect(() => {
		closeMobileNavigationDisplay();
	}, [closeMobileNavigationDisplay]);

	const toggleRef = useRef<HTMLButtonElement>(null);

	return (
		<header
			className={classNames(styles.component, className, isBlack && styles.black)}
			style={{ "--underline": mobileNavigation.present ? "block" : "none" } as CSSProperties}
		>
			<div className={styles.wrapper}>
				<NavLink className={styles.logo} href="/" icon={<Logo />} variant="text">
					Home
				</NavLink>
				<Navigation className={styles.navigation} />
				<button className={styles.toggle} onClick={toggleMobileNavigationDisplay} ref={toggleRef}>
					{mobileNavigation.present ? <Close /> : <Toggle />}
					<span>{mobileNavigation.present ? "Close" : "Open"}</span>
				</button>
			</div>
			{mobileNavigation.defined && (
				<FocusOn
					// autoFocus
					enabled={mobileNavigation.present}
					onEscapeKey={closeMobileNavigationDisplay}
					onClickOutside={closeMobileNavigationDisplay}
					shards={[toggleRef]}
				>
					<MobileNavigation
						className={classNames(
							styles.dropdown,
							mobileNavigation.defined && styles.visible,
							mobileNavigation.present && styles.animation
						)}
						sideEffect={<mobileNavigation.DefinePresent timeout={16} />}
					/>
				</FocusOn>
			)}
		</header>
	);
};
