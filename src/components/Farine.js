import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions, Modal, ScrollView } from 'react-native'
import ImageElement from './album/imageElement'

export default class ImageGallery extends Component {
    state = {
        modalVisible: false,
        modalImage: require('./img/150.png'),
        images: [
            require('./img/faraine1.jpg'),
        ]
    }

    setModalVisible(visible, imagekey){
        this.setState({ modalImage: this.state.images[imagekey] });
        this.setState({ modalVisible: visible });
    }

    getImage() {
        return this.state.modalImage;
    }

    render() {
        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback 
                    key={key}
                    onPress={() => { this.setModalVisible(true, key) }}                        
                   >
                        <View style={styles.imgwrap}>
                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableWithoutFeedback>
        });
        return(
            <ScrollView>
            <View style={styles.container}>
                <Modal style={styles.modal} animationType={'fade'}
                    transparent={true} visible={this.state.modalVisible}
                    onRequestClose={() => {}}
                >
                    <View style={styles.modal}>
                        <Text style={styles.text}
                            onPress={() => {this.setModalVisible(false)}}
                        >
                            Close
                        </Text>
                        <ImageElement imgsource={this.state.modalImage}></ImageElement>
                    </View>
                </Modal>
                { images }
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },
    imgwrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/1) - 12,
        width: (Dimensions.get('window').width/1) - 20,
        backgroundColor: '#fff',
    },
    modal: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: {
        color: '#fff'
    }
});