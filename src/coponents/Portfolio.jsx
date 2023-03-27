import React, { Component } from 'react'

export class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filters: [
                {
                    key: 'all',   // то же, что и id
                    name: 'All'
                },
                {
                    key: 'websites',
                    name: 'Websites'
                },
                {
                    key: 'flayers',
                    name: 'Flayers'
                },
                {
                    key: 'business Cards',
                    name: 'Business Cards'
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.filters.map(el => (
                    <button key={el.key} onClick={() => {this.props.onSelectFilter(el.key)}}>{el.name}</button>
                ))}
            </div>
        )
    }
}

export default Portfolio
