import React, { Component, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity } from "react-native";

// APP BISCOITO DA SORTE
function App(){

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    "A persistência leva à conquista.",
    "O sucesso sorri para aqueles que trabalham duro.",
    "Grandes desafios trazem grandes recompensas.",
    "Acredite nos seus sonhos e siga em frente.",
    "A sorte favorece a mente preparada.",
    "A paciência é a chave para superar obstáculos.",
    "O melhor está por vir; continue persistindo.",
  ];

  function quebraBiscoito()
  {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase('" ' + frases[numeroAleatorio] + ' "');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciaBiscoito(){
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }

  return(
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style = {styles.btnArea}>
          <Text style = {styles.btnTexto} >Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={ reiniciaBiscoito }>
        <View style = {styles.btnArea}>
          <Text style = {[styles.btnTexto, {color: '#121212'}]} >Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
    fontSize: 20, 
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;

// Trabalhando com botao e input
// function App(){

//   const [nome, setNome] = useState('');
//   const [input, setInput] = useState('');

//   function entrar(){

//     if(input === ''){
//       Alert('Digite seu nome!');
//       return;
//     }

//     setNome('Bem vindo: ' + input);

//   }

//   return(
//     <View style = {styles.container}>

//       <TextInput
//         style = {styles.input}
//         placeholder="Digite seu Nome"
//         onChangeText={(text) => setInput(text)}
//       />

//       <Text style = {styles.texto}> {nome} </Text>

//       <Button title="Entrar" onPress={entrar} />

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
//     fontSize: 25,
//     marginTop: 15
//   }
// });

// export default App;

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