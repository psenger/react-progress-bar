import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ButtonBarsActions from '../actionCreators/buttonBarsActions';
import Button from '../components/button/Button';
import Option from '../components/option/Option';
import ProgressBar from '../components/progressBar/ProgressBar';
import Section from '../components/section/Section';
import Select from '../components/select/Select';

/**
 * App Class, a container, wires all the components.
 *
 * Note: by using connect on the default export, I can pry open the class and wire it up by hand
 *
 * @class
 */
export class App extends Component {

  constructor(props) {
    super(props);
    this.displayName = 'containers/App';
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      selected: {
        index: 0
      }
    };
  }

  componentWillMount() {
    this.props.buttonBarsActionDispatcher.fetchData();
  }

  onChangeHandler(data) {
    this.setState({ selected: { index: data } });
  }

  onClickHandler(percentage) {
    this.props.buttonBarsActionDispatcher.updateBar({ index: this.state.selected.index, percentage });
  }

  render() {
    let { buttons, bars } = this.props;

    return (
      <div data-component-name={this.displayName}>
        <Section title="Progress Bars Demo" level={1}>
          {bars.map((percentage, i) => (<ProgressBar key={i} percentage={percentage} />))}
          <Select onChangeHandler={this.onChangeHandler} name='selected-progressbar'>
            {bars.map((percentage, i) => (<Option key={i} value={i} text={'#progress ' + (i+1)} />))}
          </Select>
          {buttons.map((percentage, i) => (<Button key={i} value={percentage} onClickHandler={this.onClickHandler} />))}
        </Section>
      </div>
    );
  }
}

App.defaultProps = {
  buttons: [],
  bars: []
};

App.propTypes = {
  buttons: PropTypes.array,
  bars: PropTypes.array,
  buttonBarsActionDispatcher: PropTypes.func.isRequired
};

let mapStateToProps = (state) => {
  return {
    buttons: state.buttonBarsReducer.get('buttons').toJS(),
    bars: state.buttonBarsReducer.get('bars').toJS()
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    buttonBarsActionDispatcher: bindActionCreators(ButtonBarsActions, dispatch)
  };
};

// Note: by using connect on the default export, I can pry open the class and wire it up by hand
export default connect(mapStateToProps, mapDispatchToProps /**, mergeProps **/)(App);

