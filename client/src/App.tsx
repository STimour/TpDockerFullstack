import React, { useState } from "react"
import { useNavigate } from "react-router-dom";


const App = () =>{
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try{
      const response = await fetch (`http://localhost:3000/hello/${userName}`)
      const data = await response.json()
      setUserName(data.message)
    }catch(error){
      console.log("Erreur lors de la récupération des données");
      
    };
  }

  return(
    <>
     <button onClick={()=>navigate("/server/time")}>serveurHeure</button>
    <form>
      <input type="text"
             id="userName"
             name="userName"
             placeholder="Name"
             value={userName}
             onChange={handleInput} />
      <button onClick={handleSubmit}>Envoyer</button>
    </form>
    <h1>Hello {userName}</h1>
    </>
  )
}

export default App