import DownloadBtn from "./DownloadBtn";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";

import Header from "./Header";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

//Create a component called APP
function App() {

    let car = {
        name :"Nexon",
        brand:"Tata",
        color:"WHite",
        year:2018
    }

    let fullName = "arjit";

    let userLoggedIn = true;
    let counter = 0;

    function logButtonClick(){
        counter++;
        console.log(counter);
    }    



    return (
   
      <div className="body-container">
        <h2>My name is {fullName ? (fullName):("Stranger")}</h2>
        <h4>My car is {car.name}</h4>
        <p>{car.brand}</p>
        <p>{car.color}</p>
        <p>{car.year < 2020 ? ("Old car"):("New Car")}</p>
        <button onClick={logButtonClick}>Click Me</button>
        {userLoggedIn? <LoggedIn/>:<LoggedOut/>}

        {/* <Header/>
        <DownloadBtn/>
        <Feature1/>
        <Feature2/>
        <Feature3/> */}
      </div>
     
    )
}

//Exporting the app component
export default App;

