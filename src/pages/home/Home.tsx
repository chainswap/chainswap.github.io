import { FC, useState, useRef, CSSProperties } from "react";
import classNames from "classnames";
import styles from "./Home.module.scss";
import { Video } from "../../ui/video";
import { ArrowUp } from "../../ui/icons/Icons";
import { LaunchPopUp } from "../../modules/launch-pop-up";
import { Body1, Heading1 } from "../../ui/typography";

import video from "./assets/video.mp4";
import image from "./assets/image.jpg";
import { useWindowSize } from "../../hooks/use-window-size";
import { Button } from "../../ui/button";
import { useResizeObserver } from "../../hooks/use-resize-observer";
import { useControlPopUp } from "../../ui/pop-up-container";

type HomeType = {};

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

export const Home: FC<HomeType> = () => {
	const windowHeight = useWindowSize()[1];

	const { popUp, close, toggle } = useControlPopUp();

	return (
		<>
			<section
				className={styles.component}
				style={{ "--window-height": windowHeight ? `${windowHeight}px` : "100vh" } as CSSProperties}
			>
				<Video className={styles.video} source={video} autoPlay={true} imageSource={image} loop />
				<div className={styles.footer}>
					<div className={styles.wrapper}>
						<div className={styles.texts}>
							<Heading1 className={styles.title} Component="h2">
								The cross-chain hub for all chains
							</Heading1>
							<Body1 className={styles.text}>
								Asset. Data. Application.{" "}
								{/*<span style={{ opacity: 0.4 }}>All chains with one dream.</span>*/}
							</Body1>
						</div>
						<Button
							className={styles.launch}
							variant="outlined"
							color="white"
							size="medium"
							iconAfter={<ArrowUp />}
							onClick={toggle}
						>
							Launch App
						</Button>
					</div>
				</div>
				{/* <div className={styles.grid}>
					{logos.map((img) => {
						return <img className={styles.img} src={`images/partner/${img}`} alt="" />;
					})}
				</div> */}
				<div className={styles.marqueeWrapper}>
					<div className={styles.marquee}>
						{logos.map((img) => {
							return (
								<div className={styles.imgWrap} key={img}>
									<img className={styles.img} src={`images/partners/${img}`} alt="" />
								</div>
							);
						})}
						{/* {logos.map((img) => {
							return (
								<div className={styles.imgWrap} key={img}>
									<img className={styles.img} src={`images/partners/${img}`} alt="" />
								</div>
							);
						})} */}
					</div>
				</div>
			</section>

			{popUp.defined && <LaunchPopUp control={popUp} close={close} />}
		</>
	);
};
