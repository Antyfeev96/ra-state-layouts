import React, { Component } from 'react'
import CardsView from '../Card/CardsView/CardsView';
import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../List/ListView/ListView';

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {icon: 'view_module'};
    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
  }

  onSwitch = (e) => {
    this.setState(() => {
      const name = this.state.icon === 'view_module' ? 'view_list' : 'view_module';
      return {icon: name};
    })
  } 

  render() {
    return (
      <div className="store">
        <IconSwitch key="icon" icon={this.state.icon} onSwitch={this.onSwitch}/>
        {this.state.icon === 'view_module' ? <CardsView cards={this.products} /> : <ListView items={this.products} />}
      </div>
    )
  }
}
