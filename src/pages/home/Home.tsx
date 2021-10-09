import { FC, CSSProperties } from "react";
import styles from "./Home.module.scss";
import { Video } from "../../components/video";
import { ArrowUp } from "../../components/icons/Icons";
import { LaunchPopUp } from "../../modules/launch-pop-up";
import { Body1, Heading1 } from "../../components/typography";
import video from "../../assets/video.mp4";
import image from "../../assets/image.jpg";
import { useWindowSize } from "../../hooks/use-window-size";
import { Button } from "../../components/button";
import { useControlPopUp } from "../../components/pop-up-container";
import { Marquee } from "../../components/marquee";

type HomeType = {};

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
				<Marquee />
			</section>

			{popUp.defined && <LaunchPopUp control={popUp} close={close} />}
		</>
	);
};
