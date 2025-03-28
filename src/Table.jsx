const Table = ({ users, getUser,setIsEdite, deleteUser }) => {
    return (
        <div className="relative mr-50 ml-50 mt-30 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 d">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? users.map((row) => (
                            <tr key={users._id} className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {row.id}
                                </th>
                                <td className="px-6 py-4">
                                    {row.name}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEdite(true);
                                            getUser({id: row.id, name: row.name});
                                        }}
                                        className="text-white mr-5 bg-green-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            deleteUser(row.id);
                                        }}
                                        className="text-white bg-red-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    )) : <div></div>}
                </tbody>
            </table>
        </div>

    );
}

export default Table;