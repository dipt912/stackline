import React, { Component } from 'react';
import Tag from './Tag';
const ItemDetails = ({ itemData }) => {
    console.log(itemData);
    return (

        <div>
            <div className="row container">
                <div className="col s12"> 
                    <img className="responsive-img" src={itemData.image}/>
                </div>
                <div className="center-align">
                    <h6><b>{itemData.title}</b></h6>
                </div>
                <div>
                    <span>{itemData.subtitle}</span>
                </div>
            </div>
            <hr />
                <div>
                    {renderTags(itemData.tags)}
                </div>
            <hr/>
            <div className="row container">
                <div>
                    <div className="i-block"><i className="small material-icons home">home</i></div>
                    <div className="i-block">Overview</div></div>
                <div>Sales</div>
            </div>
        </div>
    )
}

const renderTags = (tags)=> {
 
        return tags.map((tag) =>{
            return <Tag key={tag} data={tag }/>
        });

}

export default ItemDetails;