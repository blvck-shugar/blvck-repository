import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import {HomePage, About, Projects, Game, Loader, Contact, Loader2} from "./pages"
import {createContext,useState} from 'react'
export const ThemeContext=createContext(null)


function App() {
  const [theme,setTheme]= useState("dark")
  const [loading,setLoading]= useState(0)
  const [load,setLoad]= useState(0)
  const toggleTheme=()=>{
    setTheme((curr)=>(curr=== "light"? "dark":"light"));
    console.log(theme)
  }
  const toggleLoading=()=>{
    setLoading(1);
    setTimeout(()=>{setLoading(0)},1000)
  }
  
  const toggleLoad=()=>{
    setLoad(1);
    setTimeout(()=>{setLoad(0)},1000)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
       <div id={theme}> 
      {loading===1 && ( <Loader  theme={theme} toggleTheme={toggleTheme}/>)}
      {load===1 && ( <Loader2  theme={theme} toggleTheme={toggleTheme}/>)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading}/>}/>

          <Route path="/about" element={<About  theme={theme} toggleTheme={toggleTheme} toggleLoad={toggleLoad} load={load}/>}/>

          <Route path="/projects" element={<Projects theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading} toggleLoad={toggleLoad} load={load}/>}/>

          <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme} toggleLoading={toggleLoading} loading={loading}  toggleLoad={toggleLoad} load={load}/>}/>

          <Route path="/game" element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>
   
  );
}

export default App;
