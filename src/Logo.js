import logo from './images/h1.gif';
function Logo(){
    return(
        <div className="header-col logo animate__animated animate__bounce">
            <img src={logo} className=""  alt="Logo" />
        </div>
    )
}

export default Logo