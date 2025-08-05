import { CDN_URL } from "../utils/constants";
const ItemCards = ({ items }) => {
  
  return (
    <div className="hi">
      {items.map((item) => (
        <div
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
            <img className="relative w-[100px] h-[100px]" src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRneVAQXO1dWUf1W8JZbjkNUSX-4LYH6650IfTENKHi2yBoOnyvo_McGrZxGMciOvZYSyA"} alt="" />
            <button className=" text-sm px-3 py-0.5 rounded-md bg-gray-400">Add+</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemCards;

// <div>
// {items.map((item) => {
//   <div key={item.card.info.id}>
//     <div>
//       <span>{item.card.info.name}</span>
//       <span>{item.card.info.price / 100}</span>
//     </div>
//     <p>{item.card.info.discription}</p>
//   </div>;
// })}
// </div>
// );
// };

// {items.map((item) => {
//     <div key={item.card.info.id}>
//       <div>
//         <span>{item.card.info.name}</span>
//         <span>{item.card.info.price / 100}</span>
//       </div>
//       <p>{item.card.info.discription}</p>
//     </div>;
//   })}
