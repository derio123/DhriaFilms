import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView, ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  View
} from 'react-native';
import styles from './src/styles/style';
import React, { Component, Fragment, useEffect, useState, useCallback } from 'react';
import FilmsItem from './src/components/filmsItem/filmsItem';
import colors from './src/styles/colors';
import moment, { locale } from 'moment';


export default function App({ route, navigation }) {
  const [films, setFilms] = useState([]);
  const fetchFilms = useCallback(async () => {
    try {
      const res = await fetch('https://swapi.dev/api/films/');
      const data = await res.json();
      //console.log(data.results);
      setFilms(data.results)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchFilms();
  }, []);

  //console.log(films) 

  /* <View style={styles.container}>
                <Text >Titulo:{film.title}</Text>
                <Text >Sinopse:{film.opening_crawl}</Text> 
                <Text >Diretor:{film.director}</Text>
                <Text >Produção:{film.producer}</Text>
              </View>  */
  return (
    <Fragment>
      <SafeAreaView >
        <StatusBar backgroundColor={colors.green} />
        <View style={styles.container}>
          <View style={styles.containerBorderScroll}>
            <View style={styles.containerPrincipal}>
              <Text style={styles.title}>Filmes</Text>
            </View>
            <ScrollView style={styles.containerScroll}>
              {films.map(film => {
                return (
                  <View key={film.episode_id}>
                    <FilmsItem
                      title={film.title}
                      diretor={film.director}
                      production={film.producer}
                      data={moment(film.release_date).format('DD/MM/yyyy')}
                      onPress={() => {
                        navigation.navigate('ProductDetails', films);
                      }}

                    />
                  </View>

                );
              })
              }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );

}
