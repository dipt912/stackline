import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    renderSalesDetails(salesdata){
        return salesdata.map((data,i)=>{
            return(
                <tr key={i}>
                            <td>{data.weekEnding}</td>
                            <td>{data.retailSales}</td>
                            <td>{data.wholesaleSales}</td>
                            <td>{data.unitsSold}</td>
                            <td>{data.retailerMargin}</td>
                </tr>
            )
        })
    }
    render() {

        return (
            <div className="row deatails">
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>WEEK ENDING</th>
                            <th>RETAILE SALE</th>
                            <th>WHOLESALE SALES</th>
                            <th>UNIT SOLD</th>
                            <th>RETAILE MARGIN</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.renderSalesDetails(this.props.sales)}
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = (state)=> {
    console.log("state", state);
    return {
        sales: state.appData.sales
    };
}

export default connect(mapStateToProps)(Details);