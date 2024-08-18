import './App.css';
import data from './data';
import { useState } from "react"
import SingContent from './components/SingleContent';

function App() {
  const [content,setContent] = useState(data);
  return (
    <main>
      <div className="container">
        <h1>เครื่องมือพัฒนาเว็บ</h1>
        <section>
          {content.map((data)=>{
            return <SingContent key={data.id} {...data}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
