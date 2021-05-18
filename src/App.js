import React from "react";
import Navbar from "./components/Navbar";
import BandsList from "./components/BandsList";
import ModalDialog from "./components/Modal";

class App extends React.Component {
  state = {
    bands : [],
    currentBand : {},
    show : false
  }

  changeCurrentBand = (band) =>{
    this.setState({currentBand:band })
    this.handleShow();
  }

  handleClose = () => {
    this.setState({show:false})
  }

  handleShow = () =>{
    this.setState({show:true})
  }

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      this.setState({bands:data});
    })
  }

  provera(){
    console.log(this.state.bands);
  }

  render(){
    return(
      <>
        <Navbar />
        <BandsList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand}/>
        <ModalDialog show={this.state.show} currentBand={this.state.currentBand} handleClose={this.handleClose}/>
      </>
    )
  }
}

export default App;
