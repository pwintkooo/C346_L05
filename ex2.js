// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, SectionList} from 'react-native';
//
// const datasource = [
//     {
//         data: [
//             {key: 'a'}, {key: 'e'}, {key: 'i'}, {key: 'o'}, {key: 'u'},
//         ],
//         title: 'Vowels',
//         bgColor: 'yellow'
//     },
//     {
//         data: [
//             {key: 'b'},
//             {key: 'c'},
//             {key: 'd'},
//             {key: 'f'},
//             {key: 'g'},
//             {key: 'h'},
//             {key: 'j'},
//             {key: 'k'},
//             {key: 'l'},
//             {key: 'm'},
//             {key: 'n'},
//             {key: 'p'},
//             {key: 'q'},
//             {key: 'r'},
//             {key: 's'},
//             {key: 't'},
//             {key: 'v'},
//             {key: 'w'},
//             {key: 'x'},
//             {key: 'y'},
//             {key: 'z'}
//         ],
//         title: 'Consonants',
//         bgColor: 'blue'
//     }
// ];
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1
//     },
//     textStyle: {
//         fontSize: 15,
//         margin: 10,
//         textAlign: "left"
//     },
//     headerText: {
//         fontSize: 20,
//         margin: 10,
//         textAlign: "center",
//         fontWeight: "bold"
//     }
// })
//
// const renderItem = ({item}) => {
//     return(
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     )
// };
//
// const renderSection = ({section}) => {
//     return(
//         <Text style={[styles.headerText, {backgroundColor: section.bgColor, margin: 10}]}>
//             {section.title}
//         </Text>
//     )
// }
//
// function App() {
//     return(
//         <View>
//             <SectionList
//                 sections={datasource}
//                 renderItem={renderItem}
//                 renderSectionHeader={renderSection}
//             />
//         </View>
//     );
// }
//
// export default App;
