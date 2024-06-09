import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AdminHomeSector = () => {
  //useState
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Position, setPosition] = useState("");

  //onChange CallFunction

  const inputName = (event) => {
    setName(event.target.value);
  };
  const inputLastName = (event) => {
    setLastName(event.target.value);
  };
  const inputPosition = (event) => {
    setPosition(event.target.value);
  };
  const saveData = (event) => {
    event.preventDefault();
    const initData = {
      id: uuidv4(),
      Name: Name,
      LastName: LastName,
      Position: Position,
    };

    setName("");
    setLastName("");
    setPosition("");
    console.log(initData);
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <label className="px-24 text-2xl font-bold my-5 block">
          Create User Here
        </label>
        <div className="flex gap-5 px-24">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            onChange={inputName}
            value={Name}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            onChange={inputLastName}
            value={LastName}
          />
          <input
            type="text"
            placeholder="Position"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none"
            onChange={inputPosition}
            value={Position}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-5 font-bold text-base rounded-lg hover:bg-blue-600 hover:ring hover:ring-blue-300"
          >
            SAVE
          </button>
        </div>
        <tabl className="border border-1">
          <tr>
            <td>Name</td>
            <td>Last Name</td>
            <td>Position</td>
            <td>Action</td>
          </tr>
        </tabl>
      </form>
    </div>
  );
};

export default AdminHomeSector;
