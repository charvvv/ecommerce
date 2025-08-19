import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const user = {
    name: 'Jane Doe',
    username: '@janedoe',
    location: 'san fran',
    joinDate: 'joined: January 2024',
    profileImage: 'https://via.placeholderurl.com/',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search your orders or profile"
            placeholderTextColor="#888"
          />
        </View>

        
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={{ uri: user.profileImage }}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>{user.username}</Text>
        </View>

        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Current Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Past Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Buy It Again</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>location: {user.location}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailText}>date {user.joinDate}</Text>
          </View>
        </View>

        <View style={styles.divider} />
        

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8f4',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0eee8',
    borderRadius: 25,
    paddingHorizontal: 20, 
    paddingVertical: 10,
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#386641',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#c2e5c7',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#386641',
  },
  username: {
    fontSize: 16,
    color: '#578c63',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  orderButton: {
    backgroundColor: '#c2e5c7',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#386641',
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#497452',
  },
  divider: {
    height: 1,
    backgroundColor: '#c2e5c7',
    width: '100%',
    marginBottom: 20,
  },
  placeholderContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0eee8',
    borderRadius: 10,
  },
  placeholderText: {
    fontSize: 16,
    color: '#578c63',
    textAlign: 'center',
  },
});

export default ProfileScreen;