import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Hub } from "../src/pages/Hub";

const Index = pageWithLayout(
	() => <Hub />,
	() => (
		<Layout
			title="Chain Swap"
			description="Crosschain asset, one click crosschain deployment."
			isBlack
		/>
	)
);

export default Index;
