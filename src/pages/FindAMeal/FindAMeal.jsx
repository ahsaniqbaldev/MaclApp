import Banner from "../../components/Banner";
import { FoodGridForDeals } from "../../components/FoodGridForDeals";
import { FoodGridForMenu } from "../../components/FoodGridForMenu";
import Tabs from "../../components/Tabs";

const tabData = [
  { key: "for_menu", label: "For Menu", component: FoodGridForMenu },
  { key: "for_deal", label: "For Deal", component: FoodGridForDeals },
];

const FindAMeal = () => {
  return (
    <>
      <Banner
        BannerTitle=" From comforting new classics to bold new flavours, find your perfect plate, anytime, anywhere"
        showSearch={true}
      />
      <Tabs tabs={tabData} />
    </>
  );
};

export default FindAMeal;
