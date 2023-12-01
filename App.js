import React, { Component, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

//Recebendo dados Text Input
function App(){
  return(
    <View>

    </View>
  );
}

export default App;

//Recebendo dados Text Input
// function App(){

//   const [nome, setNome] = useState('');

//   function pegaNome(texto){
//     if(texto.length > 0){
//       setNome('Bem vindo ' + texto);
//     }else{
//       setNome('');
//     }

//   }

//   return(
//     <View style = {styles.container}>

//       <TextInput
//         style = {styles.input}
//         placeholder="Digite seu Nome"
//         onChangeText={(text) => pegaNome(text)}
//       />

//       <Text style = {styles.texto}> {nome} </Text>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     marginTop: 50
//   },
//   input:{
//     color: 'red',
//     height: 45,
//     borderWidth: 1,
//     margin: 10,
//     padding: 20,
//     fontSize: 20
//   },
//   texto:{
//     textAlign: 'center',
//     fontSize: 25
//   }
// });

// export default App;

//Alinhamentos e posicionamento
// function App(){

//   return(
//     <View style = {{ 
//       flex: 1,
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'center' 
//       }}>
      
//       <View style={{ height: 50, width:50 , backgroundColor: '#121212' }} ></View>

//       <View style={{ height: 50, width:50 , backgroundColor: 'red' }} ></View>

//       <View style={{ height: 50, width:50 , backgroundColor: 'green' }} ></View>

//     </View>
//   );
// }

// export default App;

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