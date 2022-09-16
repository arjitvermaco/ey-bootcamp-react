import DownloadBtn from "./DownloadBtn";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";

import Header from "./Header";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

//Create a component called APP
function App() {




    return (
   
      <div className="body-container">
    

        <Header/>
        <DownloadBtn/>
        <Feature1/>
        <Feature2/>
        <Feature3/>
      </div>
     
    )
}

//Exporting the app component
export default App;

