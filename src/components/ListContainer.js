import React, { Component } from 'react';
import List from './List';
import fetchList from '../fetchList'

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      destinations: [],
      packages: []
    }
    this.getUniqueList = this.getUniqueList.bind(this);
  }

  getUniqueList(List) {
    const uniqueList = [];
    const map = new Map();
    for (const item of List) {
        if(!map.has(item.text)){
            map.set(item.text, true);
            uniqueList.push({
                url: item.url,
                text: item.text
            });
        }
    }
    return uniqueList;
  }

  componentDidMount() {
    const packages = fetchList('vacations');
    const destinationList = fetchList('destinations');
    const destinations = this.getUniqueList(destinationList);

    this.setState ({
      destinations: destinations,
      packages: packages
    });
  }

  render() {
    return (
      <div>
        <List name='Destination' listItems={this.state.destinations} />
        <List name='Packages' listItems={this.state.packages} />
      </div>
    );
  }
}

export default ListContainer;
