import React, { Component } from 'react';
import './App.css';
import Portfolio from './coponents/Portfolio';
import ProjectList from './coponents/ProjectList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: [],    // будет хранить те элементы, которые на данный моент должен увидеть пользователь
      items: [
        {
          id: 1,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
          category: "Business Cards"
        }, {
          id: 2,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          id: 3,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          id: 4,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
          category: "Websites"
        }, {
          id: 5,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
          category: "Business Cards"
        }, {
          id: 6,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
          category: "Websites"
        }, {
          id: 7,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
          category: "Websites"
        }, {
          id: 8,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          id: 9,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
          category: "Websites"
        }, {
          id: 10,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
          category: "Flayers"
        }, {
          id: 11,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
          category: "Websites"
        }, {
          id: 12,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
          category: "Business Cards"
        }, {
          id: 13,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
          category: "Websites"
        }, {
          id: 14,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
          category: "Websites"
        }, {
          id: 15,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
          category: "Business Cards"
        }, {
          id: 16,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
          category: "Websites"
        }, {
          id: 17,
          img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
          category: "Flayers"
        }
      ]
    }
    this.state.filters = this.state.items  // изначально все элементы
    
    this.onSelectFilter = this.onSelectFilter.bind(this)//   добавляем возмжность работать с this




    this.state.selected = "All"


    
  }


  render() {
    return (
      <div className='App'>
        <Portfolio onSelectFilter={this.onSelectFilter} />  {/* мой метод сюда и передали */}
        {/* <ProjectList items={this.state.items} /> Внутрь компонента ProjectList передали весь наш items - массив со всеми нашими товарами, чтоб можно было перебрать в нужном компоненте - это если нужно просто всё вывести */}

        <ProjectList items={this.state.items} /> {/* Внутрь компонента ProjectList передали весь наш  filters - массив с товарами по фильтрам-категориям*/}

      </div>
    )
  }

  onSelectFilter(filter) {
    if (filter === "all") {
      this.setState({
        filters: this.state.items
      })
      return
    } 
    this.setState({
    filters: this.state.items.filter(el =>  el.category === filter)})
 
    console.log(filter)
    console.log(this.state.filters)
  }
}



export default App;