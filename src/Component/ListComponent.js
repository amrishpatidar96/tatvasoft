import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function ListComponent() {
  const names = useSelector((state) => {
    console.log(state);
    return state.names.names;
  });

  const dispatch = useDispatch();
  const deleteName = (index) => {
    dispatch({
      type: "name/deleted",
      index: index,
    });
  };

  return (
    <div className="w-1/2 p-24 flex-col align-center">  
      <ul>
        {names.length > 0 &&
          names.map((name, i) => {
            console.log("name" + name);
            return (
              <li key={uuidv4()} className="list-disc">
                {name} <span className="text-xl font-bold text-right" onClick={() => deleteName(i)}>X</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ListComponent;
