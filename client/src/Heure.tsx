import { useEffect, useState } from "react"
import  { useNavigate }  from "react-router-dom"



const Heure = () =>{
const navigate = useNavigate()
const [serveurHeure, setServeurHeure] = useState(Date)

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/server/time");
        const data = await response.json();
        setServeurHeure(data.serverTime); // Access the serverTime property
      } catch (error) {
        console.error("Erreur lors de la récupération des données");
      }
    };

    const intervalId = setInterval(fetchData, 100);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []); 


    return(
        <div>
            <button onClick={()=>navigate("/")}>Accueil</button>
            <h1>
                Heure actuelle:
            </h1>
            <h2>
                {serveurHeure}
            </h2>

        </div>
    )
}

export default Heure