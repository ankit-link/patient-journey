import React from 'react';

class TableContent extends React.Component {

  render() {
//  debugger
    const rowData = this.props.data.map((prop)=>{
    let color = '';
    let icon ;
    if(prop.delta > 0) {
        color = 'green';
        icon='icon-arrow-up'
    } else if(prop.delta < 0) {
        color = 'red';
        icon='icon-arrow-down'
    }
        return (
                <tr>
                    <td>{prop.ticker}</td>
                    <td className={color}>{prop.price} <i className={icon}></i>

</td>

                </tr>
            )
    })
    return rowData
  }
}

export default TableContent