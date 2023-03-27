// для вывода каждого отдельного товара
import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            //   <div>{this.props.item.id}</div>
            <div className='item'>
                <img src={this.props.item.img} alt="" />
                {/* <h2>{this.props.item.id}</h2> */}
            </div>
        )
    }
}

export default Item