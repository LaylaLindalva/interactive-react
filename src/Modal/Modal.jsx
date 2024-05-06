import Img2 from "../../images/illustration-thank-you.svg"

const Modal = ({modal}) => {
    if(modal === true){
    return(
        <>
        <img src={Img2} alt="" />
        <div>
            <p>You select 4 out of 5</p>
        </div>
        <h1>Thank you!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod possimus ratione adipisci autem odio nostrum? Aliquid inventore autem, commodi quia error fugit eos sit ipsum officiis sequi, reiciendis modi.</p>
        </>
    )
} else {
    return null
}
}

export default Modal;