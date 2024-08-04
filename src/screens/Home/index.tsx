import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import {styles} from './styles';

import { Participant } from '../../components/Participant';

// Hooks servem para trabalharmos com funções no React ao invés de Classes
// useState é um Hook para criar e acessar estados
// useEffect é um Hook para disparar uma logica quando a interface for renderizada.
// Nome dos Hooks sempre começa com use
// Estados e Imutabilidade
// Estados são assíncronos

export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParcipantName] = useState('')

  // Estado participants faz este papel de array
  //const participants = ["José", "Roberto", "Jorge", "Marcos", "Ana", "Jack", "Mike", "Dan", "Clara", "Monica", "Karlach"]

    function handleParticipantAdd() {
      if(participants.includes(participantName)) {
        //MELHORIA: fazer por ID único. Nome não é uma boa métrica para comparação.
        return Alert.alert("Participante já existe", "Já existe alguém com este nome!")
      }

      setParticipants( prevState => [...prevState, participantName])
      setParcipantName('');

    }

    function handleParticipantRemove(name: string) {

      Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
          text: "Sim",
          onPress: () => setParticipants(prevState => prevState.filter(Participant => Participant !== name))
        },
        {
          text: "Não",
          style: "cancel" 
        }
      ])
    }


  return (
    
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
      <TextInput 
      style={styles.input} 
      placeholder='Nome do Participante' 
      placeholderTextColor='#6B6B6B'
      onChangeText={setParcipantName}
      value={participantName}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttomText}>+</Text>
      </TouchableOpacity>
      </View>

      
      <FlatList //Equivalente ao participants.map abaixo porém melhor. Renderiza apenas o que cabe na tela e renderiza os demais aos poucos.
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.listEmptyText}>Ninguém no evento. Adicione participantes a sua lista de presença</Text>}
        renderItem={({item}) => (
          <Participant 
          key={item}
          name={item} 
          onRemove={() => handleParticipantRemove(item)} />

        )}
      />

        {/* <ScrollView> //Adiciona rolagem quando os elementos não cabem na tela. Carrega todos os elementos mesmo os não visiveis na tela.
        {
        participants.map(participant => ( //Para cada participante 'participant' será renderizado um cartão
          <Participant 
          key={participant}
          name={participant} 
          onRemove={() => handleParticipantRemove({participant})}></Participant>
        )) 
      }

      <StatusBar style="auto" />
      </ScrollView> */}
    </View>
  );
}