// The LoadingModal component acts as a simple loading overlay for use whilst waiting for
// a remote task to complete.
// It is connected to Redux to determine whether it should be showing or not.

import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Store } from '../redux/uiReducer';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 150,
    justifyContent: 'center',
    width: 150,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(204, 204, 204, 0.7)',
    flex: 1,
    justifyContent: 'center',
  },
});

class LoadingModal extends React.Component {
  static propTypes = {
    // Whether the modal is visible
    loading: PropTypes.bool,
  }
  
  static defaultProps = {
    loading: true,
  }

  render() {
    const { loading } = this.props;

    return (
      <Modal
        onRequestClose={onRequestClose}
        transparent
        visible={loading}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      </Modal>
    )
  }
}

const onRequestClose = () => {};

const mapStateToProps = state => ({
  loading: Store.isLoading(state),
});


// connect allows the component to communicate with redux
export default connect(mapStateToProps)(LoadingModal);

