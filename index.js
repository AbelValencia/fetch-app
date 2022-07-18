import ReactDOM from 'react-dom/client';
import React, {useState, useEffect} from "react";

const App = () => {
    const [team, setTeam] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setTeam(users)
    }
    return (
        <div>
            <h1>Random Users</h1>
            <ul>
                {
                    team.map(item => (
                        <li key={item.id}>Name: {item.name} - Email: {item.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


