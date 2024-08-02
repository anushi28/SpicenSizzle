export default function Body(props){
    return(
        <div className="body">
         <div className="imgbox"> <img src={props.Image} className="img"></img></div> <br></br>
          <h5> {props.Title}</h5> <br></br>
          <p>{props.Description}</p>
          
        </div>

        
    )
}