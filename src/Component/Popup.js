function Popup(props) {
    
    let handler = (e)=>{
        if(e.target.name === 'yes'){
            props.setDeleteitem("yes") ;
        }
        else{
            //console.log("setting no")
            props.setDeleteitem("no") ;
            props.setShowPopup(false);
        }
    }

    return(
        <div className="fixed w-full h-screen bg-gray-400 flex items-center justify-center flex-col ">
            <div className="bg-white w-1/3 h-1/3 flex items-center justify-center flex-col p-6 gap-y-6 rounded-md">
                <p className="font-bold text-xl">Are you sure you want to delete ? </p>
                <div className="flex justify-around w-full">
                <button name="yes" onClick={handler} className="bg-green-800 py-2 px-8 rounded-md text-sm font-semibold text-white">YES</button>
                <button name="no" onClick={handler} className="bg-red-400 py-2 px-8 rounded-md text-sm font-semibold text-white" >NO</button>
                </div>
            </div>
        </div>
    )
}

export default Popup ; 