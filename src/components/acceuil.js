import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native'

class Homme extends Component {
    constructor(props) {
      super(props)
    }
    _displayAlbumitkane(){
      this.props.navigation.navigate('AlbumItkane')
    }
    _displayAlbumbelkis(){
      this.props.navigation.navigate('Albumbelkis')
    }
    render() {
        return(
            <ImageBackground
              style={{
                backgroundColor: '#ccc',
                flex: 1,
                resizeMode: 'center',
                position: 'absolute',
                width: '100%',
                height: Dimensions.get('window').height,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../Images/background.jpg')}
            >
              <View style={styles.MainContainer}>
                  <TouchableOpacity style={styles.itkan} activeOpacity={0.5} onPress={() => this._displayAlbumitkane() }>
                      <Text style={styles.TextStyle}> Catalogue </Text>
                  </TouchableOpacity>
              </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
      },
      itkan: {
        flex: 1,
        alignItems: 'center',
        width: (Dimensions.get('window').width/12) - 4,
        height: (Dimensions.get('window').height/12) - 4,
        borderRadius: 5,
        backgroundColor: '#cb1416',
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 5,
        marginRight: 5
      },
      TextStyle: {
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
		    paddingBottom: 10
      },
});

export default Homme;