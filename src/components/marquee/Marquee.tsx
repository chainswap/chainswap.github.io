import React from "react";
import classNames from "classnames";
import styles from "./Marquee.module.scss";

const logos = [
	"alamedaResearch.png",
	"cms.png",
	"continueCapital.png",
	"rarestone.png",
	"ngc.png",
	"sanctorCapital.png",
	"mask.png",
	"mondayCapital.png",
	"spark.png",
	"obc.png",
	"dreamFund.png",
];

export function Marquee({ isBlack }: { isBlack?: boolean }): JSX.Element {
	return (
		<div className={styles.marqueeWrapper}>
			<div className={styles.marquee}>
				{logos.map((img) => {
					return (
						<div className={styles.imgWrap} key={img}>
							<img
								className={classNames(styles.img, isBlack ? styles.imgInvert : null)}
								src={`images/partners/${img}`}
								alt=""
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
