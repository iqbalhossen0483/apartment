import React, { useEffect, useState } from 'react'

const ManageUser = () => {
  const [users, setUsers] = useState<DbUser[] | null>(null);
  const [form, setForm] = useState<number>(-1);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

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
                  <button>user</button>
                  <button>editor</button>
                  <button>admin</button>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ManageUser