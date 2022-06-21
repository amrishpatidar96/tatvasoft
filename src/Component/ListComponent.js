import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function ListComponent(props) {
  const names = useSelector((state) => {
    //console.log(state);
    return state.names.names;
  });

  
  return (
    <div className="m-6 px-24 py-6 relative flex flex-col w-1/2 gap-y-6 border-2 border-gray-800 items-center"


    >
    <span className="absolute -top-4 text-lg font-bold bg-white">ListComponent</span> 
      <ul className="w-full">
        {names.length > 0 &&
          names.map((name, i) => {
            console.log("name" + name);
            return (
              <li key={uuidv4()} className="list-disc  h-10 ">
                <span>{name}</span>
                <span className="cursor-pointer text-xl font-bold float-right" onClick={()=>{props.setShowPopup(true);props.setDeleteindex(i)}}>X</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ListComponent;
