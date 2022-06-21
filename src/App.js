import { useEffect, useState } from "react";
import { InputComponent ,ListComponent, Popup} from "./Component";
import { useDispatch } from "react-redux";



function App() {
  const [showPopup ,setShowPopup] = useState(false);
  const [deleteitem,setDeleteitem] = useState("NO") ;
  const [deleteindex , setDeleteindex] = useState();

  const dispatch = useDispatch();

  useEffect(()=>{
    if(deleteitem === 'yes'){
      dispatch({
        type: "name/deleted",
        index: deleteindex,
      });
    }

    setShowPopup(false)

  },[deleteitem])


  return (
    <div className="flex gap-x-16">
      <InputComponent/>
      <ListComponent setShowPopup = {setShowPopup} setDeleteindex={setDeleteindex} ></ListComponent>
       { showPopup && <Popup setDeleteitem={setDeleteitem}/>}
    </div>
  );
}

export default App;
