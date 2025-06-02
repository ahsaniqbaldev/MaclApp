export const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 bg-[#f40000] px-4 py-5 rounded-full cursor-pointer z-10 hover:bg-[#f40000d3]"
  >
   <img src="../../imgs/Arrow-Right.png"/>
  </div>
);

export const EmptyArrow = () => <></>;
