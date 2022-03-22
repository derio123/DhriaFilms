'strict'

import React, {Component, Fragment } from 'react';
import {
  SafeAreaView, ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  Alert,
  TextInput, 
  View
} from 'react-native';

import Button from '../src/components/button';

//Stateful
export default class App extends Component {

  state = {
    contador: 0,
    name: '',
    films: [],
  }

  pressOn = () => {
    //Alert.alert('teste')

    this.setState({ contador: this.state.contador + 1});
  }

  edit = (name) => {
    //Alert.alert('teste')
    this.setState({ name: name })
  }


  async componentWillMount() {
    try {
      const res = await fetch('https://swapi.dev/api/films/');
      const data = await res.json();

      this.setState({ films: data.results }) 
    } catch {
      console.log(error);
    }
  }

  render() {
  
  //console.log(films)

  return (
    <Fragment>
      <SafeAreaView >
        <StatusBar barStyle="dark-content" />
        <ScrollView>

        {this.state.films.map(film => {
          return ( 
            <View>
              <Text key={film.title}>Titulo:{film.title}</Text>
              <Text key={film.opening_crawl}>Sinopse:{film.opening_crawl}</Text>
              <Text key={film.director}>Diretor:{film.director}</Text>
              <Text key={film.producer}>Produção:{film.producer}</Text>
            </View>
           )
          })
        }

        </ScrollView>
      </SafeAreaView>
    </Fragment>
    );
  }
};
