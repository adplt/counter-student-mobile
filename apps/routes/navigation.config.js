import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {theme} from '../styles/core.styles';
import SideMenu from '../components/SideMenuComponent/SideMenu.component';
import {language} from '../config/language';
import {logout} from '../state/thunks/onboarding.thunks';

export const navigationOptions = {
  headerBrand: {
    headerTintColor: theme.contrast,
    headerStyle: {
      backgroundColor: theme.brand,
      borderBottomWidth: 0,
      shadowColor: theme.contrast,
      elevation: 0,
    },
    tabBarVisible: {visible: false}
  },
  headerWhite: {
    tintColor: theme.brand,
    style: {
      backgroundColor: theme.contrast,
      borderBottomWidth: 0,
      shadowColor: theme.white,
      elevation: 0
    }
  },
  drawerStyle: {
    activeTintColor: theme.black,
    inactiveTintColor: theme.black,
    activeBackgroundColor: theme.activeBackgroundColor,
    itemsContainerStyle: {
      backgroundColor: theme.white,
    },
    style: {
      marginVertical: 10,
    }
  },
  gesturesEnabled: false
};


const mapStateToProps = ({user = {}}) => ({user});
const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});
const Drawer = (props) => <SideMenu title={language.DRAWER__TITLE} {...props} />;
export const DrawerConfig = connect(mapStateToProps, mapDispatchToProps)(Drawer);

Drawer.propTypes = {navigation: PropTypes.object, user: PropTypes.object};
