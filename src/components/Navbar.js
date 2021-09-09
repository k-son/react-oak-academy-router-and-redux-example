import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  console.log('Navbar props: ',props);

  return(
    <nav>
      <a>Gloria</a>
      <div>
        <button>
          <NavLink to="/">Home</NavLink>
        </button>
        <button>
          <NavLink to="/about">About</NavLink>
        </button>
        <button>
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);