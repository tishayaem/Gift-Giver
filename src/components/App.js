import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = { gifts: [] };
  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    gifts.push({ id: max_id + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id );
    this.setState({ gifts })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => {
                return (  
                    <Gift 
                    key={gift.id} 
                    gift={gift}
                    removeGift={this.removeGift}
                    />
                )
            })
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}
