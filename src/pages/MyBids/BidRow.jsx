import axios from "axios";
import { useState } from "react";


const BidRow = ({mybids}) => {

  const [comValue , setComValue] = useState();

  const {_id , 
    values, email , deadline , jobTitle } = mybids;

    const handleCompleted = completedValue => {
      setComValue(completedValue);
      const comInitValue = {comValue};
      axios.patch(`http://localhost:5000/bid/${_id}` , comInitValue)
      .then(data => {
        console.log(data.data);

      })
    }

    console.log(comValue);
    


  console.log(mybids);
    return (
        <tr>
        <th>.</th>
        <th>{ jobTitle }</th>
        <td>{email}</td>
        <td>{deadline}</td>
        <td>
        {
          values ? values : 'Pending'
        }

        </td>
        <td>
          
         
          <button onClick={() => handleCompleted("Completed")} className={`btn btn-active btn-primary${values ? "" : "opacity-50 btn-disabled cursor-not-allowed"}`}>Complete</button>
        
          </td>
        
      </tr>
    );
};

export default BidRow;