import { useEffect, useState } from "react";

const Form = ({ addUser, isEdite, setIsEdite, user, updateUser }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    useEffect(() =>{
        update();
    },[user]);
    const update = () => {
        if (isEdite) {
            setId(user.id);
            setName(user.name);
        }
    };
    return (
        <form className="max-w-sm mt-10 mx-auto">
            <div className="mb-5">
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 ">User Id</label>
                <input type="number" value={id} id="id" name="id"
                    onChange={(e) => {
                        setId(e.target.value);
                    }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">User Name</label>
                <input type="text" value={name} id="name" name="name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <button
                type="button"
                onClick={isEdite ? () => {
                    updateUser({ id, name });
                    setId(0);
                    setName('');
                    setIsEdite(false);
                } :() => {
                    addUser({ id, name });
                    setId(0);
                    setName('');}}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                {isEdite ? 'Update' : 'Add User'}
            </button>
        </form>
    );
}

export default Form;