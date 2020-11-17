import React from 'react';
import { Link } from 'react-router-dom';

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { title, active, path, button, icon } = this.props;
    // Use active to change background colour
    if (button) {
      return (
        <div className={`nav-item ${active ? 'active' : ''}`}>
          <Link to={path} onClick={this.handleClick}>
            <div className="avatar avatar-secondary avatar-square mr-2">
              <span className="avatar-icon"><i className={icon} /></span>
            </div>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="nav-item">
          <Link to={path} onClick={this.handleClick}>
            <div className="avatar avatar-primary avatar-square mr-2">
              <span className="avatar-initials">{title.charAt(0)}</span>
            </div>
          </Link>
        </div>
      );
    }
  }
}

export default NavItem;
