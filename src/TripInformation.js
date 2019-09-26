// Node imports
import React, {Component} from 'react';
import {Button} from 'reactstrap';
import PropTypes from "prop-types"

// Local imports
import './libs/stringUtils.js'
import valueToBool from './buttons.css';

class BlockButton extends Component {
    static propTypes = {
      buttonName: PropTypes.string,
      hidden:     PropTypes.bool
    };

    render() {
      console.log(this.props.hidden);
      if (this.props.hidden === 'true')
      {
        console.log(this.props.hidden);
        return [
          <p>
          hidden :tm:
          </p>
        ];
      }
      return [
              <Button className="transition-button" variant="primary" size="lg" block>
                  {this.props.buttonName}
              </Button>
        ];
    }
}

class TransitionButtonMenu extends Component {

    static propTypes = {
        leftButtonName:     PropTypes.string,
        leftButtonHidden:   PropTypes.bool,
        middleButtonName:   PropTypes.string,
        middleButtonHidden: PropTypes.bool,
        rightButtonName:    PropTypes.string,
        rightButtonHidden:  PropTypes.bool
    };

    render() {
        return [
        <div className="transition-button-menu">
            <BlockButton buttonName={this.props.leftButtonName} hidden={this.props.leftButtonHidden}/>

            <BlockButton buttonName={this.props.middleButtonName} hidden={this.props.middleButtonHidden}/>

            <BlockButton buttonName={this.props.rightButtonName} hidden={this.props.rightButtonHidden}/>

        </div>
        ];
    }
}


    // Everything below here is just for testing components, I'll wipe it as i need to.
class TripInformation extends Component {

    render() {

        return [
            <div>
          <p>
          some text
          </p>
          <div>
                <button>text </button>
                <TransitionButtonMenu
                  leftButtonName="left button" leftButtonHidden="false"
                  middleButtonName="middle button" middleButtonHidden="true"
                  rightButtonName="right button" rightButtonHidden="false"
                />
                <button>text</button>
          </div>

           <p>
           some more text
           </p>
           </div>

        ];
    }
}

export default TripInformation;

