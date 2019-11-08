import React, {useState,useContext, useEffect} from 'react';
import './App.css';
import jb from './imgs/jb.png'

export const UserContext = React.createContext({});

function App() {
    let u = {
        username:'MI5_agent',
        name:'James Bond',
        password:'007',
        bio:'Commander James Bond, CMG, RNVR, is a fictional spy created by the British journalist and novelist Ian Fleming in 1953. He is the protagonist of the James Bond series of novels, films, comics and video games. Fleming wrote twelve Bond novels and two short story collections.',
        loggedIn : false,
        loggOut,
        loggIn,
    }
    const [user, updateUser] = useState(u);
    function loggOut(){
        updateUser({
            ...user,
            loggedIn:false
        })
    }
    function loggIn(e){
        const t= e.target.closest('.LogIn_inputs');
        const inputs = t.querySelectorAll('input');
        if(inputs[0].value.trim()==='MI5_agent' && inputs[1].value.trim()==='007' ){
            updateUser({
                ...user,
                loggedIn:true
            })
        }
    }
  return (
      <UserContext.Provider value={user}>
          <div className="App">
              <div className="bg"></div>
              {user.loggedIn && <Page/>}
              {!user.loggedIn &&<LogIn/>}
          </div>
      </UserContext.Provider>
  );
}
export default App;

function LogIn(){
    return(
        <UserContext.Consumer>
            {user=><div className="LogIn">
                <Links/>
                <div>
                    <h1>REACT CONTEXT</h1>
                    <p>In A Working Example</p>
                </div>
                <div className="LogIn_inputs">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Password"/>
                    <button onClick={ e=>user.loggIn(e)}>LogIn</button>
                </div>

            </div>}
        </UserContext.Consumer>
    )
}

function Page(){
    return(
        <UserContext.Consumer>
            {user=><div className="Page">
                <div className="Page_accordion">
                    <Links/>
                    <img src={jb} alt="james bond" className="avatar"/>
                    <h2>{user.name}</h2>

                </div>
                <div className="Page_body">
                    <p>{user.bio}</p>
                    <button onClick={user.loggOut} className="logout">LogOut</button>
                </div>
            </div>}
        </UserContext.Consumer>
    )
}
function Links(){
    return <div className="Links">
        <a href="https://k2project.github.io/portfolio/">Portfolio</a>
        <a href="https://k2project.github.io/portfolio/blog/">Blog</a>
        <a href="https://k2project.github.io/portfolio/blog/react-context-cheat-sheet-3">Post</a>
    </div>
}
