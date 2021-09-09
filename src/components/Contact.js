import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Contact = ({ cards }) => {
  return (
    <div>
      <h3>Contact</h3>
      {cards.map(card => {
        return(
          <div
            key={card.id} 
            className="ui raised very padded text container segment" 
            style={{marginTop: '80px'}}
          >
            <Link to={`/${card.title}`} className="ui header">{card.title}</Link>
            <p>{card.body}</p>
            <div>
              <button>Delete card</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// higher order component that wraps our Contact component and provides props to Contact component
const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps)(Contact);