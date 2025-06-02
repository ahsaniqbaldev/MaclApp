import Tabs from "../../components/Tabs";
import ForFood from "../../components/HowWorkForFood";
import ForChef from "../../components/HowWorkForChef";
import Testimonial from "../../components/Testimonial";
import AboutUs from "../../components/AboutUs";

const tabData = [
  { key: "for_food", label: "For Food", component: ForFood },
  { key: "for_chef", label: "For Chef", component: ForChef },
];
const HowItWorks = (props) => {
  return (
    <>
      <div className="container mx-auto pt-10">
        <div className="flex items-center gap-2 md:gap-4 mx-auto px-6">
          <h2 className="text-base md:text-xl font-medium text-black">
            How It Works
          </h2>
          <div className="w-8 md:w-20 h-px border-[#006A5A] border-b-3"></div>
        </div>
      </div>
      <Tabs tabs={tabData} />
      <div className="container mx-auto">
        <button className="flex mx-auto bg-[#006A5A] hover:cursor-pointer hover:bg-[#006a5acc] text-[#F2FaD3] px-20 py-5 rounded-full font-medium">
          Find Food Near You
        </button>
      </div>

      <AboutUs />

      <Testimonial />
    </>
  );
};

export default HowItWorks;
