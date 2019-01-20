import React, { Component } from "react";
import { Text, View, StyleSheet,Dimensions,TouchableOpacity,AsyncStorage } from "react-native";
import { Container, Content } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "react-native-custom-checkbox";
import axios from "axios";


const width= Dimensions.get('window')
class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            checked:false,
            email:" ",
            password:" "

        }
    }

     

  static navigationOptions = {
    header: null
  };


  buttonLogin(){
    if(this.state.email==" "){
      alert('Email anda belum diisi')
    }else if(this.state.password==" "){
      alert('Password anda belum diisi')
    }else{
      axios.post('http://192.168.0.21:3333/login', {
        email:this.state.email,
        password:this.state.password
      }).then( response => {
        if(response.data.status_code == 400){
          alert('Username & Password anda salah')
        }else{
          AsyncStorage.setItem("token", response.data.token).then(() => {
            this.props.navigation.push("MainScreen");
          });

        }
        
      })
      .catch(error=> {
        console.log(error);
      });
      
      
      
    } 
  }




  render() {
    
    return (
       
      <Container>
        <Content>
          <View style={{ marginTop: 35, marginLeft: 20 }}>
            <Text style={styles.title}>Masuk Aplikasi</Text>
          </View>
          <View
            style={{
              height: 3,
              width: 40,
              marginTop: 10,
              backgroundColor: "#208CF4",
              marginLeft: 20
            }}
          />
          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
          </View>
          
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
            <View>
              <TextInput
                style={{
                  height: 60,
                  borderColor: "#E5E5E5",
                  borderWidth: 1,
                  paddingLeft: 10,
                  borderRadius: 5,
                  fontFamily: "Helvetica",
                  color: "#979797"
                }}
                placeholder="Masukan email anda"
                placeholderTextColor="#C4C4C4"
                onChangeText={(email)=>{this.setState({email})}}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput
                style={{
                  height: 60,
                  borderColor: "#E5E5E5",
                  borderWidth: 1,
                  paddingLeft: 10,
                  borderRadius: 5,
                  fontFamily: "Helvetica",
                  color: "#979797"
                }}
                placeholder="Masukan password anda"
                placeholderTextColor="#C4C4C4"
                onChangeText={(password)=>{this.setState({password})}}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={{marginLeft:20,marginTop:20,flexDirection:'row',alignItems:'center',flex:1,marginRight:20}}>
            <Checkbox name="checkbox1" checked={this.state.checked} size={25} 
                style={{backgroundColor: '#FFF',
                borderRadius: 5,
                borderWidth: 1,
                borderColor:'#E5E5E5',
                color: '#208CF4',
                margin: 2,
                flex:1}}
                onChange={() => this.state.checked?this.setState({checked:false}):this.setState({checked:true})}
            />
            <View style={{height:25,alignItems:'center',marginLeft:5,flexDirection:'row',flex:5}}>
                
                
                <Text style={{fontFamily:'Helvetica',color:'#979797',fontSize:12}}>
                    Ingat Saya
                </Text>
                
                
            </View>
            <View style={{alignItems:'center',flex:4}}>
                <Text style={{fontFamily:'Helvetica-Bold',color:'#208CF4',fontSize:12}}>
                    Lupa Password ?
                </Text>
                </View>
            
          </View>
          
          <TouchableOpacity style={{marginTop:20}} onPress={()=>this.buttonLogin()}>
          <View style={{height:60,backgroundColor:'#208CF4',marginLeft:20,marginRight:20,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Text style={{fontFamily:'Helvetica-Bold',color:'white'}}>
                    Masuk
                </Text>
          </View>
          </TouchableOpacity>

          <View style={{flex:1,marginTop:20,marginLeft:20,marginRight:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontFamily:'Helvetica'}}>
                    Belum punya akun ?
                </Text>
                <Text style={{fontFamily:'Helvetica-Bold',marginLeft:5,color:'#208CF4'}} onPress={()=>this.props.navigation.navigate('Register')}>
                    Daftar
                </Text>

          </View>
          
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: 20,
    color: "#30353C"
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: "#979797"
  }
});

export default LoginScreen;
