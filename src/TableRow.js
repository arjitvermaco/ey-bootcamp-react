import TableData from "./TableData";

export default function TableRow(props){

    let {user, logClicks,tally} =  props;
    //let user = props.user;
    //let logClicks = props.logClicks;

    let counter = 0;
    function logUser(user){
        console.log("loggin user")
       
        counter++;
        console.log(`Row with the id : ${user.id} is clicked:`,counter,"times")
    }

    // console.log(props)


    return(
        <tr onClick={()=>{
            logClicks()
            logUser(user)
            tally()
        }}>
        {/* <td> {user.first_name}</td> */}
        <TableData data={user.first_name}/>
        <TableData data={user.last_name}/>
        <TableData data={user.email}/>
        <TableData data={user.gender}/>
        <TableData data={user.ip_address}/>
       
      </tr>
    // <p>This is a table row</p>
    )
}

