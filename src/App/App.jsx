import Img1 from "../../images/icon-star.svg"
import Button from "../Button/Button"
import React from "react"
import ButtonSelect from "../ButtonSelect/ButonnSelect"
import Modal from "../Modal/Modal"
import './App.css'


const App = () => {
    
    const [modal, setModal] = React.useState(false)
    
    return(
        <>
            <div className="principal">
            <img src={Img1} alt="" />
            <h1>How did we do?</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda debitis optio ab est exercitationem reiciendis repudiandae cupiditate, odit beatae saepe maxime autem tempore esse similique possimus quidem voluptatem quia doloremque!</p>
            <div>
            <Button num="1"/>
            <Button num="2"/>
            <Button num="3"/>
            <Button num="4"/>
            <Button num="5"/>
            </div>
            <ButtonSelect setModal={setModal} name= "SUBMIT"/>
            </div>
            <Modal modal={modal}/>
      </>
    )
}

export default App;