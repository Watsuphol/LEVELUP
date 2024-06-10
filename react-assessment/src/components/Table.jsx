import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ name, lastName, position, deleteItem }) => {
  return (
    <div>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {lastName}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {position}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <button
              onClick={deleteItem}
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

Table.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Table;
