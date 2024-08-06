Steps for setting socket.io in client 

1. import {io} from "socket.io-client" .

2. Make a memo and load the component:  const socket = useMemo(()=>io("http://localhost:3000"), []) ;

3.  Render it in useEffect : useEffect(()=>{
      socket.on("connect" , ()=>{
        console.log(`Connected and socket ID is : ${socket.id}`);
      })
    } , [])