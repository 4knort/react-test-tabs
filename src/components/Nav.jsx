import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => (
  <ul className="nav">
    <li className="nav-item">
      <IndexLink to={'/'} activeClassName="nav-link--active" className="nav-link">Create</IndexLink>
    </li>
    <li className="nav-item">
      <Link to={'/explore'} activeClassName="nav-link--active" className="nav-link">Explore</Link>
    </li>
    <li className="nav-item">
      <Link to={'/modify'} activeClassName="nav-link--active" className="nav-link">Modify</Link>
    </li>
    <li className="nav-item">
      <Link to={'/export'} activeClassName="nav-link--active" className="nav-link">Export</Link>
    </li>
  </ul>
);

export default Nav;
