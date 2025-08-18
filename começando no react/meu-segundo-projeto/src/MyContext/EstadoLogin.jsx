import { createContext, useState } from "react";

export const Mycontext = createContext();




function EstadoLogin({children}) {
    const [status, SetStatus] = useState(false)

  return (
    <Mycontext.Provider value={{status ,SetStatus}}>
        {children}
    </Mycontext.Provider>
  )
}

export default EstadoLogin
