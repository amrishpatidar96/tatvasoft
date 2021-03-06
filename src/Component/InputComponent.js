import { useState } from "react";
import { useDispatch } from "react-redux";

function InputComponent() {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("gender");

  const [fname, setfname] = useState(""); // fname => first name

  const [lname, setLname] = useState(""); //lname => last name

  let genderHandler = (e) => {
    //console.log(e.target.value)

    setGender(e.target.value);
  };

  let nameHandler = (e) => {
    if (e.target.name === "fname") {
      setfname(e.target.value);
    }

    if (e.target.name === "lname") setLname(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    let name = "";

    if (gender === "male") {
      name = "Mr." + fname + " " + lname;
    } else if (gender === "female") {
      name = "Ms." + fname + " " + lname;
    } else {
      name = fname + " " + lname;
    }

    dispatch({
      type: "name/added",
      name: name,
    });

    setGender("gender");
    setLname("");
    setfname("");

    // return false ;
  }

  return (
    <form  className="m-6 p-6 relative flex flex-col w-1/2 gap-y-6 border-2 border-gray-800 justify-center items-center text-center"
    onSubmit={handleSubmit}

    >
    <span className="absolute -top-4 text-lg font-bold bg-white">InputComponent</span>

      <input
        type="text"
        name="fname"
        className="w-1/2 h-10 rounded-md border-2 border-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        onChange={nameHandler}
        value={fname}
        required
        placeholder="First Name"
      />
      <input
        onChange={nameHandler}
        value={lname}
        type="text"
        name="lname"
        className="w-1/2 h-10 rounded-md border-2 border-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        placeholder="Last Name"
      />
      <select value={gender} onChange={genderHandler} className="w-1/2 h-10 rounded-md border-2 border-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1">
        <option disabled value="gender">
          Gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button className="h-10 w-1/4 bg-green-600" type="submit">
        Submit
      </button>

     
    </form>
  );
}

export default InputComponent;
