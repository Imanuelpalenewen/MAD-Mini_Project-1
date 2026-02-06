import { ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyProfile = () => {
  const profileData = {
    name: "Palenewen, Imanuel Fredy",
    major: "Teknik Informatika",
    university: "Universitas Klabat",
    nim: "105022310103",
    bio: "Computer Science student who loves coding and welding, helping run my father’s welding business while sharpening both digital and hands-on skills.",
    email: "imanuelpalenewen15@gmail.com",
    phone: "+62 853 2012 9270",
    location: "North Minahasa, Indonesia",
    photo: require('../../assets/images/noel-profil.jpg'), // Path: app/(tabs) → assets/images
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${profileData.email}`);
  };

  const handlePhone = () => {
    Linking.openURL(`https://wa.me/${profileData.phone}`);
  };

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.photoContainer}>
          <Image 
            source={profileData.photo}
            style={styles.photo}
          />
        </View>
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.major}>{profileData.major}</Text>
        <Text style={styles.university}>{profileData.university}</Text>
        <Text style={styles.nim}>NIM: {profileData.nim}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person-outline" size={24} color="#DC143C" />
          <Text style={styles.sectionTitle}>About Me</Text>
        </View>
        <Text style={styles.bio}>{profileData.bio}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="call-outline" size={24} color="#DC143C" />
          <Text style={styles.sectionTitle}>Contact Info</Text>
        </View>

        <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
          <Ionicons name="mail-outline" size={20} color="#6B7280" />
          <Text style={styles.contactText}>{profileData.email}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handlePhone}>
          <Ionicons name="call-outline" size={20} color="#6B7280" />
          <Text style={styles.contactText}>{profileData.phone}</Text>
        </TouchableOpacity>

        <View style={styles.contactItem}>
          <Ionicons name="location-outline" size={20} color="#6B7280" />
          <Text style={styles.contactText}>{profileData.location}</Text>
        </View>
      </View>

      
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', // near-black
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#1A1A1A', // Slightly lighter than background
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#DC143C', // Crimson red border
    overflow: 'hidden',
    marginBottom: 20,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  major: {
    fontSize: 18,
    color: '#DC143C', // Crimson red
    fontWeight: '600',
    marginBottom: 4,
  },
  university: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 8,
  },
  nim: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  bio: {
    fontSize: 16,
    color: '#D1D5DB',
    lineHeight: 24,
    textAlign: 'justify',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    marginBottom: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#D1D5DB',
    flex: 1,
  },
});

export default MyProfile;