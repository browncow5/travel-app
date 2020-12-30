import './App.css';
import { Component } from 'react';

import awsconfig from './aws-exports';
//import { Logger } from 'aws-amplify';
//import { DataStore } from '@aws-amplify/datastore';
//import { Place } from './models';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listPlaces } from './graphql/queries';


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

class Item extends Component {
  constructor (props){
    super ();
    this.state = {
      name: "not set",
      id : "-1"
    };
  }
  render (){
    let text = this.props.name;
    return (
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox"  />&nbsp;{text}
            <hr />
          </div>
        </div>
    );
  }
}

class ItemList extends Component {
  constructor (props){
    super ();
    this.state = {
      places: Array(3).fill("initArrayVal")
    }
  }

  async componentDidMount() {
    try {
      const allPlaces = await API.graphql(graphqlOperation(listPlaces));
      let placeArray = allPlaces.data.listPlaces.items;

      const places = this.state.places.slice();      
      console.log(places);
      
      //console.log(placeArray.forEach(element => console.log(element.name)));
      
      for (let index = 0; index < placeArray.length; index++) {
        const element = placeArray[index];
        places[index] = element.name;
        console.log(places[index]);
      }

      this.setState({places: places});

      console.log(allPlaces);
    } catch (error) {
      console.log("Error retrieving Places", error);
    }
  }

  renderPlace(i, name){
    return <Item message={name} value={this.state.Places}/>;
  }

  render (){
    let item1 = <Item key="0" name={this.state.places[0]} />;
    let item2 = <Item key="1" name={this.state.places[1]} />;
    let item3 = <Item key="2" name={this.state.places[2]} />;
    let item4 = <Item key="3" name={this.state.places[3]} />;

    let itemArray = [item1, item2, item3, item4];
    return (
        <h4>{itemArray}</h4>
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

  async componentDidMount() {
    try {
 
      const allPlaces = await API.graphql(graphqlOperation(listPlaces));
      console.log(allPlaces);
    } catch (error) {
      console.log("Error retrieving Places", error);
    }
  }


  render (){
    let item1 = <PlaceItem key="0" message="before update" />;
    let item2 = <PlaceItem key="1" message={sampleJSON.name} />;
    let item3 = <PlaceItem key="2" message="test test test" />;
    let item4 = <PlaceItem key="3" message="one more task" />;

    let allTheThings = [item1, item2, item3, item4];
    let items = allTheThings.map(thing => thing);
    return (
        <h4>{items}</h4>
    );
  }
}

class ApiObject extends Component {
  constructor (props){
    super ();
  }
  async componentDidMount() {
    try {
 
      const allPlaces = await API.graphql(graphqlOperation(listPlaces));
      console.log(allPlaces);
    } catch (error) {
      console.log("Error retrieving Places", error);
    }
  }
  render (){
    return(
      <div>
        <h4>
          TEXT
        </h4>
      </div>
    );
  }
}

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Travel App Admin
      </header>
      <AddPlace></AddPlace>
      <ItemList></ItemList>
    </div>
  );
}

export default App;
