import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyEducation() {
  const educationData = [
    {
      id: 1,
      level: "Universitas",
      institution: "Universitas Klabat",
      major: "Teknik Informatika",
      period: "2023 - Sekarang",
      location: "Airmadidi, Sulawesi Utara",
      description: "Fokus pada AI,  UI/UX Design, dan Software Engineering.",
    },
    {
      id: 2,
      level: "SMA",
      institution: "SMA KSW Salatiga",
      major: "Bahasa",
      period: "2019 - 2022",
      location: "Salatiga, Jawa Tengah",
      description: "Belajar 4 Bahasa disana.",
    },
    {
      id: 3,
      level: "SMP",
      institution: "SMP Don Bosco Manado",
      major: "-",
      period: "2016 - 2019",
      location: "Manado, Sulawesi Utara",
      description: "Belajar disiplin di sekolah katolik.",
    },
    {
      id: 4,
      level: "SD",
      institution: "SD Inpres Sarongsong 1",
      major: "-",
      period: "2011 - 2016",
      location: "Airmadidi, Sulawesi Utara",
      description: "Menang juara Lomba menggambar tingkat Kabupaten.",
    },
  ];

  const getIconName = (level: string) => {
    switch (level) {
      case "Universitas":
        return "school";
      case "SMA":
        return "book";
      case "SMP":
        return "book-outline";
      case "SD":
        return "pencil";
      default:
        return "school-outline";
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="school" size={40} color="#DC143C" />
        <Text style={styles.headerTitle}>My Education</Text>
        <Text style={styles.headerSubtitle}>Riwayat Pendidikan</Text>
      </View>

      {/* Education List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {educationData.map((edu, index) => (
          <View key={edu.id} style={styles.card}>

            {/* Timeline dot */}
            <View style={styles.timeline}>
              <View style={styles.timelineDot} />
              {index < educationData.length - 1 && (
                <View style={styles.timelineLine} />
              )}
            </View>

            {/* Card content */}
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Ionicons 
                    name={getIconName(edu.level) as any} 
                    size={24} 
                    color="#DC143C" 
                  />
                </View>
                <View style={styles.cardHeaderText}>
                  <Text style={styles.level}>{edu.level}</Text>
                  <Text style={styles.period}>{edu.period}</Text>
                </View>
              </View>

              <Text style={styles.institution}>{edu.institution}</Text>
              {edu.major !== "-" && (
                <Text style={styles.major}>{edu.major}</Text>
              )}
              <View style={styles.locationContainer}>
                <Ionicons name="location" size={14} color="#6B7280" />
                <Text style={styles.location}>{edu.location}</Text>
              </View>
              <Text style={styles.description}>{edu.description}</Text>
            </View>
          </View>
        ))}

        {/* Bottom spacing */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', // PGR near-black
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#1A1A1A',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeline: {
    alignItems: 'center',
    marginRight: 15,
    width: 30,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#DC143C', // Crimson red
    borderWidth: 2,
    borderColor: '#DC143C',
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#1A1A1A',
    marginTop: 8,
  },
  cardContent: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#DC143C',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardHeaderText: {
    flex: 1,
  },
  level: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  period: {
    fontSize: 14,
    color: '#DC143C',
    fontWeight: '600',
  },
  institution: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  major: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  location: {
    fontSize: 13,
    color: '#6B7280',
  },
  description: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 20,
  },
});