'strict'

import React, {Component} from 'react';
import {
    View,
    Text, 
    TouchableOpacity, 
    Alert
} from 'react-native';

import PropTypes from 'prop-types';

//Stateless
export default class Button extends Component {

    static propTypes = {
        alerta: PropTypes.string,
    }


    static defaultProps = {
        alerta: "Me chame agora"
    };


    render() {
        return (
            <TouchableOpacity onPress={() => {
                Alert.alert(this.props.alerta);
            }
             }>
                <Text>{this.props.title}</Text>
                {this.props.children}
            </TouchableOpacity>
        );
    }
};

