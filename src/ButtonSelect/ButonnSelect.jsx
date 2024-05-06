

const ButtonSelect = ({setModal, name}) => {
    return(
        <button className='botao' onClick={() => setModal(true)}>{name}</button>
    )
}

export default ButtonSelect;