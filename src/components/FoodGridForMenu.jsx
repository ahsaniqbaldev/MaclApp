import { useEffect, useState } from "react";
import { getAllMenu } from "../API/Api";
import Loader from "./Loader";
import API_CONFIG from "../API/apiConfig";
import { useNavigate } from "react-router-dom";

const { apiKey } = API_CONFIG;

export const FoodGridForMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const getAllMenuData = async () => {
    setLoading(true);
    try {
      const response = await getAllMenu();
      const menuData = response.data.data;
      console.log(menuData);
      setMenuItems(menuData);
    } catch (error) {
      console.error("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  //for navigating to orderDetails page
  const handleOrderNow = () => {
    navigate("/order-details");
  };

  useEffect(() => {
    getAllMenuData();
  }, []);

  return (
    <>
      <div>{loading && <Loader />}</div>
      <div>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10">
            {menuItems.map((item) => {
              const { menuName, description, images, _id, Price, discount } = item;
              return (
                <div key={_id} className="p-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={`${apiKey}${images[0]}`}
                      alt={menuName}
                      className="w-full h-[235px] object-cover rounded-2xl"
                      crossOrigin="anonymous"
                    />

                    <div className="p-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-lg text-gray-800">{menuName}</h3>
                        <div className="text-[#FADC00] font-semibold">
                          ★ <span className="text-gray-800 font-medium">4.5</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start">
                        <p className="text-gray-800 text-[12px]">Price: ${Price}</p>
                        <p className="text-gray-800 text-[12px]">Discount: {discount}%</p>
                        <p className="text-gray-800 text-[12px]">Description: {description}</p>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <div className="flex items-center space-x-2">
                          <img
                            src="../../imgs/chefAlwin.png"
                            alt="chef"
                            className="rounded-full w-6 h-6"
                          />
                          <span className="font-semibold text-[12px] text-black">
                            Chef Andres Elvin
                          </span>
                        </div>
                        <button
                          onClick={handleOrderNow}
                          className="bg-[#006A5A] text-[#FAf2D3] md:text-sm text-[10px] md:font-medium md:px-3 px-2 md:py-2 py-1 rounded-full hover:bg-[#006a5ad3] hover:cursor-pointer transition"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
