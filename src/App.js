
import './App.css';
import CustomButton from './Component/CustomButton';
import CustomInput from './Component/CustomInput';
import Header from './Component/Header';
import Card from './Component/Card';
import { useState } from 'react';


function App() {
  const [add, setAdd]=useState(false);
  const [Tasks, setTasks]=useState([]);


  const [singleTask, setSingleTask]=useState('');
  const [singleDes, setSingleDes]=useState('');

  const UpdateTask =(id)=>
  {
      setTasks(
          Tasks.map((t)=>(
              t.id==id? {...t,complete:true}:t
          ))
      )
  
  }
  const deleteTask =(id)=>
  {
      setTasks(
          Tasks.filter((t)=>(
              t.id==id?false:true
          ))
      )
  
  }


  const handleCustomTask=(event)=>
  {
    setSingleTask(event.target.value);
  }

  const handleCustomDes=(event)=>
  {
    setSingleDes(event.target.value);
  }
 



const addToCard =()=>
{
    const id= Tasks.length==0?1:Tasks.length+1;
    const taskDetail=
    {
        id:id,
        task:singleTask,
        des:singleDes,
        complete:false

    }
    setTasks(
        [...Tasks,taskDetail]
    )

}




  const handleInput =()=>
{
    setAdd(!add)
}


 
  return (
    <div className='main'>

      <div className='inputSection'>
      <Header handleInput={handleInput}  />

      {add==true ?
                    <>
                    <CustomInput placeHolder='Enter Task' name='Task' change={handleCustomTask} /> 
                    <CustomInput placeHolder='Enter Description' name='Description' change={handleCustomDes}/>
                    <div className='btnWrapper'>
          <CustomButton name='Save Task' fontSize='5px' color='black' bg='#3821bb' click={addToCard}  />
         <CustomButton name='Cancel' fontSize='5px' color='black' bg='#d24646'  />
          </div>

            </>:null
            }
                   
              
                 


        
         
     
        </div>
 
        <div className='cardSection'>
               {
                Tasks.map((t)=>
                ( 
                  <Card title={t.task} des={t.des}   key={t.id} delete={()=>deleteTask(t.id)}  
                  update={()=>UpdateTask(t.id)}  complete={t.complete}   />
                ))
               }
            </div>
        </div>
     );
}

export default App;
