import { useState, useEffect } from 'react'
import { DeleteIcon, UpdateIcon, ViewIcon } from '../../../images/icon/iconsSvg'
import axios from 'axios'
import Loader from '../../../components/lodaer'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


interface User {
  _id: string;
  name: string;
  email: string
  role: string
}

const UserIndex = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState<User[]>([]); // Initialize as an empty array of User objects
  const [loader, setLoader] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get<User[]>('http://localhost:3300/users');
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      console.log(users, "finally")
    }
  };
  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3300/user/${id}`);
      fetchData()
      toast.success("User Deleted Successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      {loader ? (
        <Loader />
      ) :
        (
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[10px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      No.
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      Name
                    </th>
                    <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                      Email
                    </th>
                    <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                      Role
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((elem, index) => (
                      <tr key={elem._id}>
                        <td className="border-b text-center border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">{index + 1}</p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                          <h5 className="font-medium text-black dark:text-white">
                            {elem.name}
                          </h5>
                          <p className="text-sm">Admin</p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="text-black dark:text-white">{elem.email}</p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                            {elem.role}
                          </p>
                        </td>
                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                          <div className="flex items-center space-x-3.5">
                            {/* <button className="hover:text-primary">
                              <ViewIcon />
                            </button> */}
                            <button onClick={() => { deleteUser(elem._id) }} className="hover:text-primary">
                              <DeleteIcon />
                            </button>
                            <button onClick={() => { navigate(`/users/update/${elem._id}`) }} className="hover:text-primary">
                              <UpdateIcon />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        )
      }
    </>
  )
}

export default UserIndex