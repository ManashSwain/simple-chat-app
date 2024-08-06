import React , {useEffect, useMemo, useState} from "react";
import {io} from "socket.io-client";

const Header = () => {

    const [Id , setId] = useState("");
    const [data , setdata] = useState("");
    const [roomID , setroomID] = useState("");
    const [roomName , setroomName] = useState("");
    const [messages, setMessages] = useState([]);

    const socket = useMemo(() => io("https://chatapp-backend-alpha.vercel.app/" , {
      transports: ['websocket', 'polling']
    }), []);
    
    useEffect(()=>{
       socket.on("connect" , () => {
         console.log(`connected with ID : ${socket.id}`);
         setId(socket.id);
         socket.on("receive-message" , (data)=>{
            setMessages((messages)=>[...messages , data])
         })
       })
    },[])

    const handleSubmit = (e)=>{
       e.preventDefault();
       socket.emit("message" , {data , roomID})
       setdata("");
    }

    const handleRoom = (e)=>{
       e.preventDefault();
       socket.emit("room-details" ,roomName )
    }

  return (
    <>
      <div className="container my-3">
        <h3>Your Current ID will be displayed here: <span className="text-danger mx-3 my-2">{Id}</span> </h3>
        
        <p className="text-danger my-2">Note: ID will be auto refreshed once the web page loads</p>

        {/* Room form  */}
        <form onSubmit={handleRoom}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
               Create Room Name
            </label>
            <input
              type="text"
              value={roomName}
              onChange={(e)=> setroomName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Create a unique room name and share it with those you want to chat with.
            </div>
          </div>
          <button  type="submit" className="btn btn-primary">
            Join Room
          </button>
        </form>
        {/* Message form  */}
        <h3 className="my-3">Send Messages</h3>
        <form onSubmit={handleSubmit} >
        <div className="form-floating mb-3">
            <input
              type="text"
              value={data}
              onChange={(e)=>setdata(e.target.value)}
              className="form-control"
              placeholder="Enter your senders ID here"
            />
            <label htmlFor="floatingInput">Enter your message</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              value={roomID}
              onChange={(e)=> setroomID(e.target.value)}
              className="form-control"
              placeholder="Enter your senders ID here"
            />
            <label htmlFor="floatingInput">Sender ID</label>
          </div>
          <button  type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <div className="container">
        <h3 className="my-3">Your Messages will be displayed below</h3>
         <div className="container">
         {
            messages.map((data,index)=>{
             return <div  className="bg-primary text-white my-4  p-3 rounded-pill"key={index}>{data}</div>
            })
         }
         </div>
      </div>
    </>
  );
};

export default Header;
