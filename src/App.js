import './App.css';
import { Component } from 'react';
import { Logger } from 'aws-amplify';


const sampleJSON = {
  "business_status" : "CLOSED_TEMPORARILY",
  "formatted_phone_number" : "020 7420 9320",
  "name" : "Dishoom Covent Garden",
  "place_id" : "ChIJxZXYx7cEdkgRdgAOZ6OHOJw",
  "rating" : 4.5,
  "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
  "url" : "https://maps.google.com/?cid=11256896404490944630",
  "user_ratings_total" : 5063,
  "website" : "http://www.dishoom.com/"
};



class AddPlace extends Component{
  render() {
    return (
        <form className="add-place">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}

class PlaceItem extends Component {
  constructor (props){
    super ();
    this.state = {
      checked: false
    };
    this.handleClick = this.handleClick.bind(this);    
  }

  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });
  }

  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

class PlaceList extends Component {
  constructor (props){
    super ();
  }


  render (){
    let item2 = <PlaceItem message={sampleJSON.name} />;
    let item3 = <PlaceItem message="another message" />;
    let item4 = <PlaceItem message="one more task" />;

    let allTheThings = [item2, item3, item4];
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Travel App Admin
      </header>
      <AddPlace></AddPlace>
      <PlaceList></PlaceList>
    </div>
  );
}

export default App;
