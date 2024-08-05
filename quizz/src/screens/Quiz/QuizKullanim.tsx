import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


const QuizKullanim = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Modal animationType="slide" transparent={false} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Quiz Nasıl Kullanılır</Text>
          <ScrollView  style={styles.kullanım}>
               <Text style={styles.header}>
        quiz uygulaması, kullanıcıların eğlenceli ve etkileşimli bir şekilde bilgilerini test etmelerine ve yeni bilgiler öğrenmelerine olanak sağlamak için tasarlanmıştır.
      </Text>
      <Text style={styles.subHeader}>başlamak için</Text>
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>⬇ </Text>
        <Text style={styles.buttonText}>QUIZ START</Text>
        <Text style={styles.arrow}>⬇ </Text>
                <Text style={styles.buttonText}> 
                <FontAwesome5 name="tasks" size={30} color="grey" /> 
            </Text>
      </View>
       <Text style={styles.header}>
        Test soruları, kolay, orta, zor seviyede, 7 dersimiz, her derste 15 soru olacaktır.
      </Text>
      <View style={styles.arrowContainer}>
       <Text style={styles.arrow}>⬇ </Text>
       </View>
       <Text style={styles.header}>
         Soruları bitirdiğinizde skor sayfasına gidecek ve seviyenizi görülecektir.
      </Text>
      
            
          </ScrollView>
        
          <TouchableOpacity
            style={styles.button}
            onPress={handleGoBack}
          >
            <Text style={styles.buttonText}>Geri Dön</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  kullanım: {
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },


 header: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  arrowContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  arrow: {
    fontSize: 24,
    color: 'red',
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#000',
  },
});

export default QuizKullanim;
