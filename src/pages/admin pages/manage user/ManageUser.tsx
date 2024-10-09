import { useEffect, useState } from "react";

const ManageUser = () => {
  const [users, setUsers] = useState<DbUser[] | null>(null);
  const [form, setForm] = useState<number>(-1);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch("https://server.switchcafebd.com/appartment/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [update]);

  function updateUser(email: string, role: string) {
    fetch(`https://server.switchcafebd.com/appartment/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user role updated");
          setForm(-1);
          if (update) setUpdate(false);
          else setUpdate(true);
        }
      });
  }

  function handleForm(index: number) {
    if (index === form) {
      setForm(-1);
    } else {
      setForm(index);
    }
  }

  return (
    <div className='overflow-auto'>
      <table className='manage-user'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            return (
              <tr key={item._id} className='relative'>
                <td>{item.displayName}</td>
                <td>{item.email}</td>
                <td>
                  <div className='text-center flex flex-col'>
                    <p>{item.role}</p>
                    <button onClick={() => handleForm(index)} className='btn'>
                      edit role
                    </button>
                  </div>
                  <div
                    className={`menu ${form === index ? "block" : "hidden"}`}
                  >
                    <button
                      className='btn rounded-none'
                      onClick={() => updateUser(item.email!, "user")}
                    >
                      user
                    </button>
                    <button
                      className='btn rounded-none'
                      onClick={() => updateUser(item.email!, "editor")}
                    >
                      editor
                    </button>
                    <button
                      className='btn rounded-none'
                      onClick={() => updateUser(item.email!, "admin")}
                    >
                      admin
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
