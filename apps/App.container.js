import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, StatusBar} from 'react-native';
import {theme} from './styles/core.styles';
import OverlaySpinner from './components/OverlaySpinnerComponent/OverlaySpinner.component';
import {ConnectedRoutes} from './routes/router';

const mapStateToProps = ({spinner, networkStatus, currentLanguage, highlightText}) => ({
  spinner,
});

const mapDispatchToProps = (dispatch) => ({
});

class AppComponent extends PureComponent {

  static propTypes = {
    spinner: PropTypes.bool
  };

  render () {
    const {highlightText, networkStatus, resetNetworkBar, setNetworkStatus, spinner} = this.props;
    return (
      <View style={{flexGrow: 1}}>
        <StatusBar barStyle='light-content' backgroundColor={theme.primary} />
        <ConnectedRoutes />
        <OverlaySpinner showSpinner={spinner}/>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
