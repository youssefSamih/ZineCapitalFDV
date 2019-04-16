import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
// import { CachedImage } from 'react-native-cached-image';

export default class ImageElement extends Component {
    render() {
        return(
            <Image source={this.props.imgsource} style={styles.image} resizeMethod="resize"/>
            // <CachedImage
            //     source={this.props.imgsource}
            //     style={styles.image}
            // />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }
});