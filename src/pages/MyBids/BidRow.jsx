

const BidRow = ({mybids}) => {

  const {_id , 
    values, email , deadline , jobTitle } = mybids;

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
          
         
          <button className={`btn btn-active btn-primary${values ? "" : "opacity-50 cursor-not-allowed"}`}>Complete</button>
        
          </td>
        
      </tr>
    );
};

export default BidRow;