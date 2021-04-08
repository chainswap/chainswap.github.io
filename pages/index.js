import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";

const Index = pageWithLayout(
	() => <Home />,
	() => <Layout title="Chain Swap" description="Crosschain asset, one click crosschain deployment." />
);

export default Index;
