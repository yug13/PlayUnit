import React, { Component } from 'react';
import profilePic from './profilePic.svg';
import Profile from './Components/Profile/Profile';
import Events from './Components/Events/Events';
import Chat from './Components/Chat/Chat';
import './App.css';
import { resolve, reject } from 'q';
import { BrowserRouter, Route } from 'react-router-dom';
import Rewards from './Components/Rewards'
import Home from './Components/Home'
import MyEvents from './Components/MyEvents'
import CreateEvents from './Components/CreateEvents'
import NearMe from './Components/NearMe'

// var options ={
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };

// var myString;
// var crd;

// function success(pos) {
//   crd = pos.coords;
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function showPosition(position){
//   var myString = {
//     lat: position.coords.latitude,
//     long: position.coords.longitude
//   }
//   myVar = myString;
//   return myString;
//  }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// //navigator.geolocation.getCurrentPosition(success, error, options);
// var myVar = navigator.geolocation.getCurrentPosition(showPosition);

// alert(myVar)

// console.log(`testing : ${myString}`)
// console.log(`asd : ${crd}`)

// const initialState={
//   lat: myVar.lat,
//   long: myVar.long
// }


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = initialState;
  // 

  render() {
    return (
      <BrowserRouter>
        <div className="App">

<<<<<<< HEAD
          <Route path='/Rewards' component={Rewards} />
          <Route path='/Home' component={Home} />
          <Route path='/MyEvents' component={MyEvents} />

=======
          <Route path='/Rewards' component={Rewards}/>
          <Route path='/Home' component={Home}/>
          <Route path='/MyEvents' component={MyEvents}/>
          <Route path='/CreateEvents' component={CreateEvents}/>
          <Route path='/NearMe' component={NearMe}/>
          
>>>>>>> 969c77757b4b0fd4fb1d1b2da9465b469ffb20c7
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
