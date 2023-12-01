import React, { Component, useState } from "react";
import { View, Text, Image, Butto, Styles, StyleSheet } from "react-native";

//Tamanhos Fixos e Dinamicos
function App(){

  return(
    <View style = {{ flex: 1 }}>
      
      <View style={{ height: 65, backgroundColor: '#121212' }} ></View>

      <View style={{ flex: 1, backgroundColor: '#DDD' }} >
        <Text>Sou um texto</Text>
      </View>

      <View style={{ height: 65, backgroundColor: '#121212' }} ></View>

    </View>
  );
}

export default App;

//Tamanhos Fixos e Dinamicos
// function App(){

//   return(
//     <View style = {{ flex: 1 }}>
      
//       <View style={{ height: 65, backgroundColor: '#121212' }} ></View>

//       <View style={{ flex: 1, backgroundColor: '#DDD' }} >
//         <Text>Sou um texto</Text>
//       </View>

//       <View style={{ height: 65, backgroundColor: '#121212' }} ></View>

//     </View>
//   );
// }

// export default App;

//Grupos de Estilos
// function App(){

//   return(
//     <View style = {styles.area}>
      
//       <Text style = { [styles.titulo, styles.textoAlinhado] }> Miqueias Mesquita </Text>
      
//       <Text style = { styles.titulo }> 25 </Text>
      
//       <Text style = { styles.subTitulo } >Texto 3</Text>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   area:{
//     marginTop: 60
//   },
//   titulo:{
//     fontSize: 20,
//     color: 'green'
//   },
//   subTitulo:{
//     color: 'blue',
//     fontSize: 17,
//     marginTop: 15
//   },
//   textoAlinhado:{
//     textAlign: 'center'
//   }
// });

// export default App;

// STATES
// function App(){

//   const [nome, setNome] = useState('Miquéias');
//   const [idade, setIdade] = useState(20);

//   function entrar(nome, idade){
//     setNome('Miqueias Mesquita');
//     setIdade(25);
//   }

//   return(
//     <View style = {{marginTop: 25}}>
//       <Button title="Mudar nome" onPress={ () =>  entrar('Miqueias Mesquita', 25)} />
//       <Text style = {{ fontSize: 19 }}> { nome } </Text>
//       <Text style = {{ fontSize: 17}}> {idade} </Text>
//     </View>
//   );
// }

// export default App;

// COMPONENTES
// function App(){
//   let nome = "Miquéias Mesquita";

//   return(
//     <View>
//       <Text>Olá Mundo</Text>
//       <Text style={{ color: 'red', fontSize: 25, margin: 15 }}>Meu Primeiro App</Text>
//       <Text style={{ fontSize: 18, color: 'green' }}>
//         Programação
//       </Text>

//       <Logo largura={300} altura={300} fulano={"Miquéias"} />

//     </View>
//   );
// }

// export default App;

// PROPS
// function Logo(props){
//   let img = "https://sujeitoprogramador.com/reactlogo.png";

//   return(
//     <View>
//       <Image source = {{  uri: img }} style = {{ width: props.largura, height: props.altura}} />
//       <Text>{props.fulano}</Text>
//     </View>
   
//   );
// }

// class App extends Component{
//   render(){
//     return(
//       <View>
//         <Text>Olá Mundo!!!</Text>
//         <Text>Meu Primeiro APP</Text>
//       </View>
//     );
//   }
// }

// export default App;