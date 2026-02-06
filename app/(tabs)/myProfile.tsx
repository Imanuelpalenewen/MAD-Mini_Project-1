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
    photo: require('../../assets/images/noel-profil.jpg'),
  };

  // Social Media Links
  const socialMedia = [
    {
      platform: "GitHub",
      icon: "logo-github",
      username: "@Imanuelpalenewen",
      url: "https://github.com/Imanuelpalenewen",
      color: "#FFFFFF",
    },
    {
      platform: "LinkedIn",
      icon: "logo-linkedin",
      username: "Imanuel Palenewen",
      url: "https://www.linkedin.com/in/imanuel-palenewen-672966253/",
      color: "#0A66C2",
    },
    {
      platform: "Instagram",
      icon: "logo-instagram",
      username: "@o_wel05",
      url: "https://instagram.com/o_wel05",
      color: "#E4405F",
    },
  ];

  // Technical Skills - Edit sesuai kemampuan Anda
  const skills = [
    { name: "HTML", level: "Expert", icon: "logo-html5", iconColor: "#E34F26" },
    { name: "CSS", level: "Advanced", icon: "logo-css3", iconColor: "#1572B6" },
    { name: "JavaScript", level: "Intermediate", icon: "logo-javascript", iconColor: "#F7DF1E" },
    { name: "Python", level: "Intermediate", icon: "logo-python", iconColor: "#3776AB" },
    { name: "Go", level: "Beginner", icon: "code-slash", iconColor: "#00ADD8" },
    { name: "Java", level: "Beginner", icon: "cafe", iconColor: "#007396" },
    { name: "ReactJs", level: "Intermediate", icon: "logo-react", iconColor: "#61DAFB" },
    { name: "React Native", level: "Intermediate", icon: "logo-react", iconColor: "#61DAFB" },
    { name: "UI/UX Design", level: "Intermediate", icon: "color-palette", iconColor: "#DC143C" },
    { name: "Git & GitHub", level: "Intermediate", icon: "logo-github", iconColor: "#FFFFFF" },
    { name: "MySQL", level: "Beginner", icon: "server", iconColor: "#4479A1" },
    { name: "C# / .NET", level: "Beginner", icon: "code-working", iconColor: "#512BD4" },
    { name: "Welding", level: "Intermediate", icon: "construct", iconColor: "#FFA500" },
  ];

  // Level mapping untuk progress indicator
  const getLevelInfo = (level: string) => {
    switch (level) {
      case "Beginner":
        return { dots: 1, color: "#6B7280" };
      case "Intermediate":
        return { dots: 2, color: "#DC143C" };
      case "Advanced":
        return { dots: 3, color: "#DC143C" };
      case "Expert":
        return { dots: 4, color: "#DC143C" };
      default:
        return { dots: 1, color: "#6B7280" };
    }
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${profileData.email}`);
  };

  const handlePhone = () => {
    Linking.openURL(`https://wa.me/${profileData.phone.replace(/\s/g, '')}`);
  };

  const handleSocialMedia = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* Header section */}
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

      {/* About Me section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person-outline" size={24} color="#DC143C" />
          <Text style={styles.sectionTitle}>About Me</Text>
        </View>
        <Text style={styles.bio}>{profileData.bio}</Text>
      </View>

      {/* Contact Info section */}
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

      {/* Social Media Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="share-social-outline" size={24} color="#DC143C" />
          <Text style={styles.sectionTitle}>Social Media</Text>
        </View>

        {socialMedia.map((social, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.socialItem} 
            onPress={() => handleSocialMedia(social.url)}
          >
            <Ionicons name={social.icon as any} size={24} color={social.color} />
            <View style={styles.socialInfo}>
              <Text style={styles.socialPlatform}>{social.platform}</Text>
              <Text style={styles.socialUsername}>{social.username}</Text>
            </View>
            <Ionicons name="arrow-forward" size={18} color="#6B7280" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Technical Skills Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="code-slash-outline" size={24} color="#DC143C" />
          <Text style={styles.sectionTitle}>Technical Skills</Text>
        </View>

        {skills.map((skill, index) => {
          const { dots, color } = getLevelInfo(skill.level);
          return (
            <View key={index} style={styles.skillItem}>
              <View style={styles.skillInfo}>
                <View style={styles.skillNameContainer}>
                  <Ionicons name={skill.icon as any} size={20} color={skill.iconColor} />
                  <Text style={styles.skillName}>{skill.name}</Text>
                </View>
                <Text style={styles.skillLevel}>{skill.level}</Text>
              </View>
              <View style={styles.skillIndicator}>
                {[1, 2, 3, 4].map((dot) => (
                  <View
                    key={dot}
                    style={[
                      styles.dot,
                      {
                        backgroundColor: dot <= dots ? color : "#2A2A2A",
                      },
                    ]}
                  />
                ))}
              </View>
            </View>
          );
        })}
      </View>

      {/* Spacing at bottom */}
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
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    marginBottom: 10,
  },
  socialInfo: {
    flex: 1,
  },
  socialPlatform: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  socialUsername: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  skillItem: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  skillInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  skillNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  skillLevel: {
    fontSize: 13,
    color: '#DC143C',
    fontWeight: '500',
  },
  skillIndicator: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default MyProfile;