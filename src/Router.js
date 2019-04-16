import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './components/acceuil'
import AlbumItkane from './components/albumItkane'
import Albumbelkis from './components/albumIbelkis'
import Tobigo from './components/Tobigo'
import Dwist from './components/Dwist'
import The from './components/The'
import Couscous from './components/Couscous'
import Farine from './components/Farine'
import Pates from './components/Pates'
import Semoule from './components/Semoule'


const AlbumStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    AlbumItkane: {
        screen: AlbumItkane
    },
    Albumbelkis: {
        screen: Albumbelkis
    },
    Tobigo: {
        screen: Tobigo
    },
    Dwist: {
        screen: Dwist
    },
    The: {
        screen: The
    },
    Couscous: {
        screen: Couscous
    },
    Farine: {
        screen: Farine
    },
    Pates: {
        screen: Pates
    },
    Semoule: {
        screen: Semoule
    }
})

export default createAppContainer(AlbumStackNavigator)