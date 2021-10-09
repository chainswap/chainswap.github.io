import React from "react";
import { pageWithLayout } from "../../src/utils/page/pageInLayout";
import { Hub } from "../../src/pages/Hub";
import { Layout } from "../../src/layout";

const HubPage = pageWithLayout(
	() => <Hub />,
	() => (
		<Layout
			title="Chain Swap"
			description="Crosschain asset, one click crosschain deployment."
			isBlack
		/>
	)
);

export default HubPage;
