import { FC, CSSProperties } from "react";
import styles from "./Hub.module.scss";
import { Video } from "../../components/video";
import { Body1 } from "../../components/typography";
import { ArrowUp } from "../../components/icons/Icons";
import video from "../../assets/video.mp4";
import image from "../../assets/image.jpg";
import { useWindowSize } from "../../hooks/use-window-size";
import { NavLink } from "../../components/button";
import { Marquee } from "../../components/marquee";
import classNames from "classnames";
import { Navigation } from "../../modules/header/ui/navigation";

type HomeType = {};

enum Status {
	live,
	comingSoon,
}

interface BlockType {
	title: string;
	subTitle: string;
	status: Status;
	img: string;
	link?: string;
}

const BlockList: BlockType[] = [
	{
		title: "Chainswap + Anyswap",
		subTitle: "Chainswap Bridge powered by Anyswap Solution",
		status: Status.live,
		img: "chainswapAnyswap.png",
		link: "https://exchange.chainswap.com/",
	},
	{
		title: "Chainswap Bridge V2",
		subTitle: "Permissionless crosschain bridge",
		status: Status.comingSoon,
		img: "chainswap.png",
		link: "",
	},
	{
		title: "NFT Bridge",
		subTitle: "Permissionless crosschain bridge for all NFTs",
		status: Status.live,
		img: "NFTBridge.png",
		link: "https://nft.chainswap.com",
	},

	{
		title: "Cross-chain DEX",
		subTitle: "Crosschain Swap and trading protocol",
		status: Status.comingSoon,
		img: "crosschainDex.png",
		link: "",
	},

	{
		title: "Cross-chain Lending",
		subTitle: "Crosschain lending and borrowing protocol",
		status: Status.comingSoon,
		img: "crosschainLending.png",
		link: "",
	},
	{
		title: "NFT Marketplace",
		subTitle: "Crosschain NFT tools",
		status: Status.comingSoon,
		img: "NFTMarket.png",
		link: "",
	},
	{
		title: "Chainswap Scan",
		subTitle: "Live statistics to track network usage",
		status: Status.comingSoon,
		img: "chainswapStatistics.png",
		link: "",
	},
];

export const Hub: FC<HomeType> = () => {
	const windowHeight = useWindowSize()[1];

	return (
		<>
			<section
				className={styles.component}
				style={{ "--window-height": windowHeight ? `${windowHeight}px` : "100vh" } as CSSProperties}
			>
				<div className={classNames(styles.title, styles.hideMobile)}>
					<h1 className={styles.titleText}>The cross-chain {"\n"}hub for all ecosystems</h1>
					<Body1 className={styles.text} color="black">
						Asset. Data. Application.
						{/*<span style={{ opacity: 0.4 }}>All chains with one dream.</span>*/}
					</Body1>
				</div>
				<Video className={styles.video} source={video} autoPlay={true} imageSource={image} loop />
				<div className={classNames(styles.title, styles.showMobile)}>
					<h1 className={styles.titleText}>The cross-chain {"\n"}hub for all ecosystems</h1>
					<Body1 className={styles.text} color="black">
						Asset. Data. Application.
						{/*<span style={{ opacity: 0.4 }}>All chains with one dream.</span>*/}
					</Body1>
				</div>
			</section>
			<div className={styles.marqueeWrapper}>
				<Marquee isBlack={true} />
			</div>
			<section className={styles.blockWrapper}>
				{BlockList.map((data) => (
					<Block data={data} key={data.title} />
				))}
			</section>
			<section className={styles.bottomBlock}>
				<div className={styles.grid}>
					<p>Wanna keep track of ChainSwap's updates? {"\n"}Read our blog</p>
					<span>
						<NavLink className={styles.goToMedium} href="https://chain-swap.medium.com/">
							Go To Medium
						</NavLink>
					</span>
				</div>
			</section>
			<footer className={classNames(styles.footer)}>
				<p>©2021 Chainswap Ltd. {"\n"}All rights reserved.</p>
				<Navigation className={styles.nav} />
			</footer>
		</>
	);
};

const Block = ({ data: { status, img, title, subTitle, link } }: { data: BlockType }) => {
	return (
		<div className={classNames(styles.block, status === Status.live ? styles.liveBlock : "")}>
			<div className={styles.rowBetween} style={{ alignItems: "flex-start" }}>
				<div className={styles.imgWrapper}>
					<img src={`/images/hub/${img}`} alt={title} />
				</div>
				{status === Status.live ? (
					<span className={styles.capsuleLive}>Live </span>
				) : (
					<span className={styles.capsuleComingSoon}>Coming Soon</span>
				)}
			</div>
			<div className={styles.filler}></div>
			<h4>{title}</h4>
			<h5>{subTitle}</h5>

			<NavLink className={styles.launchButton} href={link ?? ""}>
				<span>Launch App</span>
				<ArrowUp width="19px" height="15px" />
			</NavLink>
		</div>
	);
};
