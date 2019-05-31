import React, { Component } from 'react';
import '../styles/itinerary.sass';

class ItineraryNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const { navElement } = this.state;
    this.setState({
      top: navElement.offsetTop,
      scroll: window.scrollY
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const navElement = document.querySelector('.itineraryBox');
    this.setState({
      navElement: navElement
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { groupList } = this.props;

    return (
      <ul className={`itineraryList ${(this.state.scroll > this.state.top) && "fixedNav"}`}>
        {groupList.map((groupName, key) =>
          <li key={key}>
            <a href={`#${groupName}`}>
              {groupName}
            </a>
          </li>
        )}
      </ul>
    );
  }
}

export default ItineraryNav;
