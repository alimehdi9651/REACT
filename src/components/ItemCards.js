import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemCards = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="hi">
      {items.map((item) => (
        <div
          data-testid="foodItem"
          className="border-b-1 p-2 m-2 border-gray-300 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-[500px]">
            <span>{item.card.info.name}</span> <br />
            <span className="text-[15px]">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="">
            <img
              className="relative w-[100px] h-[100px]"
              src={
                item.card.info.imageId
                  ? CDN_URL + item.card.info.imageId
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneVAQXO1dWUf1W8JZbjkNUSX-4LYH6650IfTENKHi2yBoOnyvo_McGrZxGMciOvZYSyA"
              }
              alt=""
            />
            <button
              className=" text-sm px-3 py-0.5 rounded-md bg-gray-400 cursor-pointer hover:bg-gray-500"
              // onClick={handleAddItems}
              onClick={() => handleAddItems(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCards;
