import React, { useState } from "react";
import Header from "./../../components/Header";
import axios from "axios";

function Users() {
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    phone_number: "",
    email: "",
    other_info: "",
  });

  // useEffect(() => {
  //   fetchAndDisplayUserList();
  // }, []); // Fetch user list on initial render

  const handleButtonClick = () => {
    setShowModal(true);
  };
  const closeButtonClick = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("", formData);

      // localStorage.setItem("uuid", response.data.uuid);

      setShowModal(false);

      // Fetch and display the updated user list
      async function fetchAndDisplayUserList() {
        try {
          const response = await axios.get("/api/v1/users/");
          const userList = response.data;

          // Update the component's state to reflect the fetched user list
          setUserList(userList); // Assuming you have a state variable for the user list
        } catch (error) {
          console.error("Error fetching user list:", error);
          // Display an error message to the user
        }
      }

      fetchAndDisplayUserList(); // Assuming you have a function for this
    } catch (error) {
      console.error("Error:", error);
      // Display error message to the user
    }
  };

  function UserListComponent() {
    // Render the user list using JSX
    return (
      <ul>
        {userList.map((user) => (
          <li key={user.uuid}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    );
  }
  //
  return (
    <div className="users">
      <Header
        name="Users"
        buttons={[{ name: ["+"], click: handleButtonClick }]}
      />

      <table className="w-full text-sm text-left tableBorder">
        <thead className="text-xs text-black">
          <tr className="">
            <th scope="col" className="px-6 py-3 w-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Regin
            </th>
            <th scope="col" className="px-6 py-3">
              Contact number
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border dark:border-black">
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
              1
            </th>
            <td className="px-6 py-4">Firsname Surname</td>
            <td className="px-6 py-4">Manager</td>
            <td className="px-6 py-4">KZ</td>
            <td className="px-6 py-4">+998931234567</td>
            <td className="px-6 py-4">
              <button
                type="button"
                class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-90  font-medium rounded-lg text-sm px-4 py-1 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Edit
              </button>
            </td>
            <td className="px-6 py-4">
              {" "}
              <button
                type="button"
                class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-1 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 inline-block"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-white border dark:border-black">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap "
            ></th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
          </tr>
          <tr className="bg-white dark:border-black">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
            ></th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>

      {/* Modal Form Users */}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-md ">
          <div className="flex justify-center items-center h-screen">
            <form className="modal w-1/2 bg-slate-50 px-5 rounded-2xl ">
              <Header
                name="Personal Information"
                buttons={[{ name: ["x"], click: closeButtonClick }]}
              />
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <p className="mt-1 text-base leading-6 text-gray-600 pl-5 pt-3">
                    Use a permanent address where you can receive mail.
                  </p>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setFormData((f) => ({
                              ...f,
                              first_name: e.target.value,
                            }))
                          }
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setFormData((f) => ({
                              ...f,
                              last_name: e.target.value,
                            }))
                          }
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setFormData((f) => ({
                              ...f,
                              password: e.target.value,
                            }))
                          }
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="given-pswd"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        E-mail
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setFormData((f) => ({
                              ...f,
                              email: e.target.value,
                            }))
                          }
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setFormData((f) => ({
                              ...f,
                              phone_number: e.target.value,
                            }))
                          }
                          type="tel"
                          name="phone-number"
                          id="phone-number"
                          autoComplete="phone-number"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Other Info
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={(e) =>
                            setFormData((f) => ({
                              ...f,
                              other_info: e.target.value,
                            }))
                          }
                          type="text"
                          name="other-info"
                          id="other-info"
                          autoComplete="other-info"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6 pb-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
