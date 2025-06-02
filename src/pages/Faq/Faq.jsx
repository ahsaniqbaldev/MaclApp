
import Banner from "../../components/Banner";
import Tabs from "../../components/Tabs"
import FaqForFood from "../../components/FaqForFood"
import FaqForChef from "../../components/FaqForChef"

const tabData = [
  { key: "for_food", label: "For Food", component: FaqForFood },
  { key: "for_chef", label: "For Chef", component: FaqForChef }
];
const Faq = (props) => {
  return (
    <>
      <Banner BannerTitle="Frequently Asked Questions" showSearch={false} TitleStyle="font-medium text-xl" />
      <Tabs tabs={tabData} />
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 text-center justify-center items-center rounded-xl mx-auto bg-[#F9FAFB] p-5  mb-8 sm:h-[278px]">
          <img src="/imgs/query.png" alt="query" />
          <h3 className="font-medium">Still have questions?</h3>
          <p className="text-[#667085]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <button className="bg-[#006A5A] hover:cursor-pointer hover:bg-[#006a5acc] text-[#F2FaD3] px-8 py-3 rounded-full font-medium">
          Contact
        </button>
        </div>

      </div>

    </>
  );
};

export default Faq;
