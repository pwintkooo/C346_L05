import React from 'react';
import {View, Text, SectionList, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const dataSource = [
    {
        title: 'Electric',
        data: [{name: 'Pikachu', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png'},
            {name: 'Zapdos', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_145-2x.png'}],
        bgColor: 'yellow',
        icon: 'bolt',
        iconColor: '#FFB84D'
    },
    {
        title: 'Water',
        data: [{name: 'Omanyte', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_138-2x.png'},
            {name: 'Vaporeon', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_134-2x.png'}],
        bgColor: 'lightblue',
        icon: 'water',
        iconColor: 'blue'
    },
    {
        title: 'Fire',
        data: [{name: 'Charmander', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png'},
            {name: 'Vulpix', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_37-2x.png'}],
        bgColor: 'orange',
        icon: 'fire',
        iconColor: 'red'
    }
]

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        backgroundColor: '#D3D3D3'
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold"
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    imageStyle: {
        width: 150,
        height: 200,
        margin: 10,
        backgroundColor: 'gray',
        padding: 0
    },
    viewStyle: {
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
    },
    container: {
        margin: 20,
        marginTop: 20
    }
})

const renderItem = ({item}) => {
    return(
        <TouchableOpacity style={styles.opacityStyle}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={{ uri: item.img }} style={styles.imageStyle}/>
            </View>
        </TouchableOpacity>
    )
};

const renderSection = ({section}) => {
    return(
        <Text style={[styles.headerText, {backgroundColor: section.bgColor, margin: 10, color: section.iconColor}]}>
            <Icon name={section.icon} size={20} color={section.iconColor}/>   {section.title}
        </Text>
    )
};

const HandleButton = () => {
    return(
        <Button title='ADD POKEMON'/>
    )
}

function App() {
  return(
      <View style={styles.container}>
        <SectionList
            sections={dataSource}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
            ListHeaderComponent={<HandleButton/>}
        />
      </View>
  );
}

export default App;
