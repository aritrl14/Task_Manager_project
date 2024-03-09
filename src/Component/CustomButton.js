import '../App.css';

function CustomButton(props) {
  return (
    
  
    <button  onClick={props.click}  className='btn'style={{backgroundColor:props.bg, color:props.color, fontSize:props.font}}>{props.name}</button>


  );
}

export default CustomButton;