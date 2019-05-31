import React, { Component } from 'react';
import fetchList from '../fetchList';
import Itinerary from './Itinerary';

class ItineraryContainer extends Component {
  constructor() {
    super();
    this.state = {
      itineraryGroups: []
    }
    this.sortByGroup = this.sortByGroup.bind(this);
  }

  sortByGroup(itineraryList) {
    const itineraryGroups = {};

    for (const itinerary of itineraryList) {
      let itineraryName = itinerary.text.trim();
      let groupName = itineraryName.charAt(0).toUpperCase();

      if (!isNaN(parseInt(groupName, 10))) {
        groupName = '0-9';
      }
      if (!itineraryGroups.hasOwnProperty(groupName)) {
        itineraryGroups[groupName] = []
      }

      itineraryGroups[groupName].push({
        url: itinerary.url,
        text: itinerary.text
      });
    }
    return itineraryGroups;
  }

  componentDidMount() {
    const itineraryList = fetchList('itineraries');
    let itineraryGroups = this.sortByGroup(itineraryList);

    this.setState({
      itineraryGroups
    });
  }

  render() {
    const { itineraryGroups } = this.state;
    let groups = Object.keys(itineraryGroups);
    groups.sort();

    return (
      <Itinerary groupList={groups} itineraryGroups={itineraryGroups} />
    );
  }
}

export default ItineraryContainer;
