const HowWorkForChef = (props) => {
  return (
    <>
      <div className="container mx-auto pt-5 pb-5">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 sm:col-span-6 col-span-12 lg:col-span-4">
            <div className="relative -top-5 flex flex-col text-center items-center">
              <img className="h-[353px] w-[266px]" src="../../imgs/howitwork1.png" />
              <h2 className="mt-10 font-semibold">Find a Home Cook Near You</h2>
              <p className="w-[20rem] text-center">Explore dishes and local home cooks by location or craving</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 col-span-12 lg:col-span-4">
            <div className="flex flex-col text-center items-center">
              <img className="h-[329px] w-[264px]" src="../../imgs/howitwork2.png" />
              <h2 className="mt-5 font-semibold">Place Your Order</h2>
              <p className="w-[20rem] text-center">Pick your favorites and place an order in just a few taps.</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-12 col-span-12 lg:col-span-4">
            <div className="flex flex-col text-center items-center">
              <img className="h-[304px] w-[264px]" src="../../imgs/howitwork3.png" />
              <h2 className="mt-10 font-semibold"> Enjoy Delicious Homemade Food </h2>
              <p className="w-[20rem] text-center"> Get fresh, homemade food delivered to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWorkForChef;
