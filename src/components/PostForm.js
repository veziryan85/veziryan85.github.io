import "./PostForm.css"
import {useState} from "react";

function PostForm ({addTask , items} ) {

    const [ inpValue , setInpValue ] = useState("")

    const [ valueData , setValueData ] = useState("")

    const handleChange = e => setInpValue (e.currentTarget.value)

    const handleChangeData = e => setValueData(e.currentTarget.value)


    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(inpValue , valueData)
        setInpValue("")
        setValueData("")
    }

    const handleKayPress = (e) =>{
        if (e.kay === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <div >
            <h2 style={{color:"white"}}>Список  Напоминание  {items.length}</h2>
            <div className=" form_block">

                <form onSubmit={handleSubmit}>
                    <input
                        className="input_text"
                        type="text"
                        value={inpValue}
                        onChange={handleChange}
                        onKeyPress={handleKayPress}
                        placeholder={"ввидите техт"}
                    />
                    <input className="input_text"  type="datetime-local"
                           value={valueData}
                           onChange={handleChangeData}
                    />
                    <button className="but">сахранить</button>
                </form>
            </div>
        </div>



    )
}

export  default PostForm