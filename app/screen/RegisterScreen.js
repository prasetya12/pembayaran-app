import React, { Component } from "react";
import { Text, View, StyleSheet,Dimensions,TouchableOpacity,Image } from "react-native";
import { Container, Content,Card,CardItem,Body } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "react-native-custom-checkbox";

import axios from "axios";

import Modal from "react-native-modal";

import ip from '../config/ip'


const width= Dimensions.get('window')
class RegisterScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            checked:false,
            isVisible:false,
            username:" ",
            email:" ",
            nomor_telpon:" ",
            password:" "

        }
    }

     

  static navigationOptions = {
    header: null
  };

 button(){
  //  this.setState({isVisible:!this.state.isVisible})
  // alert('Register Berhasil, Silahkan Login Terlebih dahulu')
  this.props.navigation.navigate('Login')
  
   
 }

 componentWillUnmount(){
  this.setState({isVisible:!this.state.isVisible})
 }

 buttonDaftar(){
   if(this.state.email==" "){
      alert('Email anda belum diisi')
   }else if(this.state.username==" "){
      alert('Username anda belum diisi')
   }else if(this.state.nomor_telpon==" "){
      alert('Nomor Telpon anda belum diisi')
   }else if(this.state.password==" "){
    alert('Password anda belum diisi')
  }else{
    axios.post('http://192.168.0.21:3333/register', {
    username:this.state.username,
    email:this.state.email,
    nomor_telpon:this.state.nomor_telpon,
    password:this.state.password
  })
  .then( response=> {
    // alert(JSON.stringify(response) );
    if(response.data.status_code== 200){
      try{
        this.setState({isVisible:!this.state.isVisible})
      }catch(e){
        alert(e.message)
      }
      
    }else{
      alert("Username sudah ada")
    }
  })
  .catch(error=> {
    console.log(error);
  });
  }
   
  // this.setState({isVisible:!this.state.isVisible})
  // alert(this.state.username)
  



 }

  render() {
    
    return (
       
      <Container>
        <Content>
        <View>
        <Modal isVisible={this.state.isVisible}>
          <View style={{ flex: 1 }}>
          <Card style={{height:330,backgroundColor:'white',marginTop:50,borderRadius:5,alignItems:'center'}}>
            
              <Image source={require('../assets/check.png')} style={{width:100,height:100,marginTop:30}}/>
             
              <TouchableOpacity onPress={()=>this.setState({isVisible:!this.state.isVisible})}>
                <View style={{marginTop:20}}>
                  <Text style={{fontFamily:'Helvetica',color:'#30353C',fontSize:20}}>
                    Berhasil !!!
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={{marginTop:5}}>
                  <Text style={{fontFamily:'Helvetica',color:'#C4C4C4'}}>
                    berhasil melakukan registrasi
                  </Text>
                </View>
                <View style={{marginTop:5}}>
                  <Text style={{fontFamily:'Helvetica',color:'#C4C4C4'}}>
                    Silahkan Login terlebih dahulu
                  </Text>
                </View>

                <TouchableOpacity style={{marginTop:20,marginBottom:20}} onPress={()=>this.button()}>
          <View style={{height:60,backgroundColor:'#31D195',marginLeft:20,marginRight:20,justifyContent:'center',alignItems:'center',borderRadius:5,width:250}}>
                <Text style={{fontFamily:'Helvetica-Bold',color:'white'}}>
                    Mulai
                </Text>
          </View>
          </TouchableOpacity>
              
          </Card>
            
              

            
          </View>
        </Modal>
      </View>
          <View style={{ marginTop: 35, marginLeft: 20 }}>
            <Text style={styles.title}>Daftar Akun</Text>
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
          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
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
                onChangeText={(email)=>this.setState({email:email})}
                
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
                placeholder="Masukan username anda"
                placeholderTextColor="#C4C4C4"
                onChangeText={(username)=>this.setState({username})}
                
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
                placeholder="Masukan nomor telpon anda"
                placeholderTextColor="#C4C4C4"
                onChangeText={(nomor_telpon)=>this.setState({nomor_telpon})}
                
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
                secureTextEntry={true}
                onChangeText={(password)=>this.setState({password})}
                
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
                    Saya menyetujui
                </Text>
                <Text style={{fontFamily:'Helvetica-Bold',color:'#208CF4',marginLeft:5,fontSize:12}}>
                    Syarat dan Ketentuan
                </Text>
                
                
            </View>
            
            
          </View>
          
          <TouchableOpacity style={{marginTop:20}} onPress={()=>this.buttonDaftar()}>
          <View style={{height:60,backgroundColor:'#208CF4',marginLeft:20,marginRight:20,justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Text style={{fontFamily:'Helvetica-Bold',color:'white'}}>
                    Daftar
                </Text>
          </View>
          </TouchableOpacity>

          <View style={{flex:1,marginTop:20,marginLeft:20,marginRight:20,marginBottom:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontFamily:'Helvetica'}}>
                    Sudah punya akun ?
                </Text>
                <Text style={{fontFamily:'Helvetica-Bold',marginLeft:5,color:'#208CF4'}} onPress={()=>this.props.navigation.navigate('Login')}>
                    Masuk
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

export default RegisterScreen;
