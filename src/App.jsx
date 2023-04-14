import { useState } from "react"
import Joinscreen from "./components/Joinscreen"
import  Quizscreen from "./components/Quizscreen"
import Header from "./components/Header";

function App() {
 const [quizstart,setQuizstart]=useState(false)

  return (
  <>
<Header/>
<div className="quiz-container">
{quizstart?(
<Quizscreen retry={()=>setQuizstart(false)}/>
  ):(
  <Joinscreen start={()=>setQuizstart(true)}/>
  )             
   }
    </div>
    </>
  ); 
}

export default App
