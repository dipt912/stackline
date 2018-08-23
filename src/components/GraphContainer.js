import React, { Component } from 'react';
import { connect } from 'react-redux';
import {LineChart} from 'react-easy-chart';



class GraphContainer extends Component {
    graphSaledata(sales){
        return (
            sales.map(sale=> {
                return {x:new Date(sale.weekEnding).getMonth('MMM'), y:parseInt(sale.unitsSold)}
            })
        )
    }

    graphRetaildata(sales){
        return (
            sales.map(sale=> {
                return {x: new Date(sale.weekEnding).getMonth('MMM'), y:parseInt(sale.wholesaleSales)}
            })
        )
    }
    render(){
        const data= this.graphSaledata(this.props.sales);
        const reatailData = this.graphRetaildata(this.props.sales);
        console.log("data", data,reatailData);
        return(
            <div className="row graph-container">
                  <LineChart 
                   xType={'text'}
                  axes
                  margin={{top: 10, right: 10, bottom: 50, left: 50}}
                  width={600}
                  interpolate={'cardinal'}
                  height={250}
                  data={[
                    data,
                    reatailData
                  ]}/>   
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
export default connect(mapStateToProps)(GraphContainer);