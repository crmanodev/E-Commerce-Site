import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [content, setContent] = useState([]);
  useEffect(()=>{
    fetch("/api/users")
    .then((res) =>res.json())
    .then((data)=>{
        setUsers(data);
      });
    },[]);

    console.log('Users', users);


    const onSendClick = (e) => {
      e.preventDefault();
      fetch('/api/createuser',{method: "POST", headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({content}),
    })
    }
  return (
      <div>
        {
          users?.map((item)=>{
          return <p key={item?.id}>{`${item?.firstName} ${item?.lastName}`}</p>
          })
        }
        <input value={content} onChange={(e)=>setContent(e.target.value)}></input>
        <button onClick={onSendClick}>Send</button>
      </div>
  )
}

export default App
