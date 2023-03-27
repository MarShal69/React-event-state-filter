import React, { Component } from 'react'
import Item from './Item'

export class ProjectList extends Component {
  render() {
    return (
      <div className='items'>
        {/* //   {this.props.items.map(el => ( */}
        {/* //     <h1>{el.id}</h1> */}
        {/* //   ))} */}



        {/* или так */}
        {
          this.props.items.map(el => (
            <Item key={el.id} item={el} /> // тут item - это из Item строчка 7
          ))
        }

      </div >
    )
  }
}

export default ProjectList