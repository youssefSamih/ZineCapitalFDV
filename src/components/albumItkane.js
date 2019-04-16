import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'

const data = [
    { key: 'The', cover: require('../Images/itkane.png'), backgroun:'#cb1416' }, { key: 'Couscous', cover: require('../Images/itkane.png'), backgroun:'#cb1416' }, { key: 'Pates', cover: require('../Images/itkane.png'), backgroun:'#cb1416' }, { key: 'Farine', cover: require('../Images/itkane.png'), backgroun:'#cb1416' }, { key: 'Semoule', cover: require('../Images/itkane.png'), backgroun:'#cb1416' }, { key: 'Mundiriz', cover: require('./img/mundiriz.png'), backgroun:'#585858ba' }, { key: 'Tobigo', cover: require('./img/Tobigo.png'), backgroun:'#09b' }, { key: 'Dwist', cover: require('./img/Dwist.png'), backgroun:'#9b1ca7' },
  ]; 

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};

const numColumns = 2;

class Album extends Component {
    constructor(props) {
        super(props)
    }

    _displayAlbumikane(name){
        this.props.navigation.navigate(name)
    }

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
          return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <TouchableOpacity
              style={{ backgroundColor: item.backgroun, alignItems: 'center', justifyContent: 'center', flex: 1, margin: 1, height: Dimensions.get('window').width / numColumns }}
              onPress={() => this._displayAlbumikane(item.key)}
            >
              <Image source={item.cover} style={styles.ImageIconStyle}/>
              <Text style={styles.itemText}>{item.key}</Text>
            </TouchableOpacity>
        );
      };
    
      render(){
        return (
            <FlatList
              data={formatData(data, numColumns)}
              style={styles.container}
              renderItem={this.renderItem}
              numColumns={numColumns}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 20,
    },
    item: {
      backgroundColor: '#cb1416',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    ImageIconStyle: {
        padding: 10,
        width: (Dimensions.get('window').width/5) - 4,
        height: (Dimensions.get('window').height/12) - 4,
        resizeMode: 'stretch',
      },
    itemText: {
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        width: 80,
        height: 30,
        margin: 0,
        textAlign: 'center',
        marginTop: 5,
        fontSize: 15,
        fontWeight: '600'
    },
  });

export default Album;