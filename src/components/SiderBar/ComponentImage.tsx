import foto from "../../assets/foto.jpg";


export const ComponentImage = () => {


    return(
        <>
            <div className="itemSideBar cImage">
                <img src={foto} alt="Foto de Omar" />
                <h1 className="aditionalNames">OMAR DE JESUS DIAZ DITTA</h1>
            </div>
        </>
    )
}