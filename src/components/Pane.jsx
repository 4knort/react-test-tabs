import React, { PropTypes, Component } from 'react';

export default class Pane extends Component {
  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.any.isRequired,
  }

  static defaultProps = {
    selected: 0,
  }

  state = {
    selected: this.props.selected,
  }

  handleClick = (index) => {
    this.setState({
      selected: index,
    });
  }

  renderContent() {
    const paneContent = this.props.children.map((child, index) => {
      const activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <div key={`paneContent-${index}`} className="something">
          <div className="something-title" onClick={() => { this.handleClick(index) }}>{child.props.label}</div>
          <div className={`something-content ${activeClass}`}>{child.props.children}</div>
        </div>
      );
    });

    return (
      <div>
        {paneContent}
      </div>
    );
  }

  render() {
    return (
      <div className="omg">
        {this.renderContent()}
      </div>
    );
  }
}
