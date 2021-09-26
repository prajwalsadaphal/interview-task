const RowDetails = ({key1,value1,key2,value2})=>{
    return(
                    <tr >
                        <td>{key1}:<span className="detailsValue">{value1}</span></td>
                        <td>{key2}:<span className="detailsValue">{value2}</span></td>
                    </tr>
                   
    )
}

export default RowDetails