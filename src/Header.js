function Header(props){

    console.log("Props from header",props)
    var x = "Somedata";

    return(
        <>
        {props.getDataFromChild(x)}
        <h1>THis is a header {props.abc} {props.age} </h1>
        <button onClick={props.logSomething}>Dont click me</button>
        </>
    )
}

export default Header