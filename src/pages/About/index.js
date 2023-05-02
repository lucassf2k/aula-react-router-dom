import { Component } from "react";
import hocRouter from "../../hocs/hocRouter";

class About extends Component {
  

  handleToHome = () => {
    this.props.navigate('/')
  }
  
  render() {
    console.log(this.props)
    
    return (
      <>
        <h1>Sobre</h1>
        <button type="button" onClick={this.handleToHome}>
          Voltar para Home
        </button>
      </>
    )
  } 
}

// hoc -> Higher Order Component
export default hocRouter(About)