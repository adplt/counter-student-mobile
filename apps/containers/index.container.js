import {connect} from 'react-redux';
import IndexPage from '../pages/index.page';
import {reduxForm} from 'redux-form';
import {validateStudent} from '../state/thunks/index.thunk';

const formConfig = {
  form: 'IndexForm',
  destroyOnUnmount: true,
  onSubmit: (values, dispatch) => {
    dispatch(validateStudent(values));
  },
  validate: (values) => {},
  initialValues: {
    nim: '',
  },
};

const IndexPageForm = reduxForm(formConfig)(IndexPage);

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPageForm);
