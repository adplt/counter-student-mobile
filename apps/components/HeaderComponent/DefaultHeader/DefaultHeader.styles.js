import {APPBAR_HEIGHT, STATUSBAR_HEIGHT, theme, TITLE_OFFSET} from '../../../styles/core.styles';
import {
  containerRowCenter,
  fontSizeLarge, fontWeightMedium,
  textWhiteColor
} from '../../../styles/common.styles';
import {getPlatform} from '../../../utils/device.util';

export default {
  backContainer: {
    ...containerRowCenter,
    height: APPBAR_HEIGHT,
  },

  container: {
    paddingTop: STATUSBAR_HEIGHT,
    height: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    backgroundColor: theme.primary,
  },

  iconLeft: {
    ...containerRowCenter,
    paddingHorizontal: 10,
    height: APPBAR_HEIGHT,
  },

  header: {
    flexDirection: 'row',
  },

  title: {
    ...fontSizeLarge,
    ...fontWeightMedium,
    ...textWhiteColor,
  },

  titleContainer: {
    height: APPBAR_HEIGHT,
    position: 'absolute',
    right: TITLE_OFFSET,
    left: getPlatform === 'ios' ? TITLE_OFFSET : theme.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftContainer: {
    left: 0,
    position: 'absolute',
    width: TITLE_OFFSET,
    height: APPBAR_HEIGHT,
  },

  left: {
    height: APPBAR_HEIGHT,
    width: TITLE_OFFSET,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightContainer: {
    right: 0,
    position: 'absolute',
    width: TITLE_OFFSET,
    height: APPBAR_HEIGHT,
  },

  right: {
    height: APPBAR_HEIGHT,
    width: TITLE_OFFSET,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
