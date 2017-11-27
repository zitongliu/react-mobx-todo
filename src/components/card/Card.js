import React, {Component} from 'react';
import styles from './Card.css';

class Card extends Component {
  render() {
    return(
      <div className={styles.card} >
        <div className={styles["card-header"]}>
          <h2 className={styles.h2}>Greetings</h2>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Card;
