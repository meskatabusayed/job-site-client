import axios from "axios";
import { useState } from "react";


const NewRow = ({bidReq}) => {
    const [values, setValues] = useState();




    const handleAccept = (adding) => {
        
        setValues(adding);
        
        const resultValue = { values };
        axios.patch(`http://localhost:5000/bid/${bidReq._id}` , resultValue)
          .then((data) => {
            console.log(data.data);
            
          });
      };



    return (
        <tr>
                <th>.</th>
                <th>{bidReq.jobTitle}</th>
                <td>{bidReq.email}</td>
                <td>{bidReq.deadline}</td>
                <td>{bidReq.values  ? bidReq.values  : "Pending"}</td>
                
                <td>
                    {
                        bidReq.values ? <progress className="progress progress-secondary w-56" value={bidReq.comValue ? 100 : 80} max="100"></progress> :  <button
                        onClick={() =>
                          handleAccept('accept')
                        }
                        className="btn btn-warning"
                      >
                        Accept
                      </button>
                    }
                       
                    
                  
                </td>
                <td>
                    {
                        !bidReq.values && <button
                        onClick={() =>
                          handleAccept("reject")
                        }
                        className="btn btn-error"
                      >
                        Reject
                      </button>
                    }
                  
                </td>
              </tr>
    );
};

export default NewRow;
