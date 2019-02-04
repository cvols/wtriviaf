import React from 'react';
import { View, Text } from 'react-native';
import store from '../../../redux/store';
import { connect } from 'react-redux';

class Duel extends React.Component {
	render() {
		const {quizData} = this.props
		console.log('Duel this.props: ', this.props);
		return (
			<View>
				<Text>Duel</Text>
			</View>
		)
	}
}

const mapStateToProps = (state, props) => {
	console.log('mapStateToProps', state);
	console.log('props', props);
        
	return {
	    quizData = state.quizData   
	}
}

export default connect(mapStateToProps,{})(Duel);