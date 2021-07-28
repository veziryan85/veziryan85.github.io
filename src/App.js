
import {useState , useEffect} from "react";

import PostLIst from "./components/PostList";
import PostForm from "./components/PostForm";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';



function App() {

          const [items, setItems] = useState(
         JSON.parse(localStorage.getItem("items")) ||
               []
          )

        useEffect(() => {
          localStorage.setItem("items", JSON.stringify(items))
        }, [items])

         function addTask (inpValue , valueData) {
             // id: Math.random().toString(36).substr(2,9),
             if (inpValue) {

                 const newItem = {
                     id: Math.random().toString(36).substr(2,9),
                     task:inpValue,
                     data:valueData,
                     complete:"dddd",
                 }
                 setItems(() =>[...items , newItem])
             }
             else {
                 alert("Введите Текст")
             }
         }
         const  deleteItems = (id) => {
             setItems( items.filter( (item) => item.id !== id))
         }

         return (
            <div className=" container block ">
                <PostForm addTask={ addTask } items={items}/>
                <PostLIst posts={items} deleteItems={deleteItems} />

            </div>
        );
      }

export default App;
