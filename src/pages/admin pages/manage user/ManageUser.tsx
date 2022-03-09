import { useEffect, useState } from 'react'
import useFirebase from '../../../Hooks/useFirebase';

const ManageUser = () => {
  const [users, setUsers] = useState<DbUser[] | null>(null);
  const [form, setForm] = useState<number>(-1);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [update]);

  function updateUser(email:string, role: string) {
    fetch(`http://localhost:5000/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({role})
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert("user role updated");
          setForm(-1);
          if (update) setUpdate(false);
          else setUpdate(true);
        }
      })
  };

  function handleForm(index: number) {
    if (index === form) {
      setForm(-1);
    }
    else {
      setForm(index);
    }
  }

  return (
    <div className='manage-user'>
      <div className='item font-medium pb-5 text-center'>
        <p>Name</p>
        <p>Email</p>
        <p>Role</p>
      </div>
      {
        users?.map((item, index) => {
          return (
            <div
              key={item._id}
              className='item border-t relative'
            >
              <p>{item.displayName}</p>
              <p>{item.email}</p>
              <p className='text-center'>
                {item.role}
                <button
                  onClick={()=>handleForm(index)}
                  className='border rounded px-2 ml-4'
                >
                  edit role
                </button>
              </p>

              <div
                className={`menu ${form === index ? "block" : "hidden"}`}
              >
                <button onClick={()=>updateUser(item.email!, "user")}>
                  user
                </button>
                <button onClick={()=>updateUser(item.email!, "editor")}>
                  editor
                </button>
                <button onClick={()=>updateUser(item.email!, "admin")}>
                  admin
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ManageUser