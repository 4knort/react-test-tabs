import React, { PureComponent, PropTypes } from 'react';

export default class Tabs extends PureComponent {
  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
  }

  static defaultProps = {
    selected: 0,
  }

  state = {
    selected: this.props.selected,
  }

  handleClick = (index, event) => {
    event.preventDefault();
    this.setState({
      selected: index,
    });
  }

  renderTitles() {
    const tabs = this.props.children.map((child, index) => {
      const activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={`tab-item-${index}`}>
          <a href="#" 
            className={activeClass}
            onClick={(event) => this.handleClick(index, event)}
          >
            {child.props.label}
          </a>
        </li>
      );
    });
    return (
      <ul className="tabs__labels">
        {tabs}
      </ul>
    );
  }
  renderContent() {
    return (
      <div className="tabs__content">
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {
    return (
      <div className="tabs">
        {this.renderTitles()}
        {this.renderContent()}
      </div>
    );
  }
}
