import { useDispatch, useSelector } from "react-redux";

function ListComponent(){

    const names = useSelector((state)=>{
        console.log(state);
        return state.names ;
    }) ;

    const dispatch = useDispatch() ; 
    const deleteName = (index)=> {
        dispatch({
            type:'name/deleted',
            index:index
        })
    }



    return (<div className="w-1/2 p-24">
            {console.log('print',names)}
        <ul>
        {   
            
            (names.length > 0 ) && names.map((name ,i)=>{
                
                return (<li>
                    {name} <span onClick={()=>deleteName(i)}>X</span>
                    </li>)
            })
        }
        </ul>

    </div>);

}

export default ListComponent ;