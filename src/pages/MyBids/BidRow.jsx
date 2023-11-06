

const BidRow = ({mybids}) => {

  const {email , deadline , jobTitle } = mybids;
  
    return (
        <tr>
        <th>.</th>
        <th>{ jobTitle }</th>
        <td>{email}</td>
        <td>{deadline}</td>
        
      </tr>
    );
};

export default BidRow;