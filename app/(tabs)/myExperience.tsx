import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MyExperience() {
  const experienceData = [
    {
      id: 1,
      type: "organization",
      role: "PIC Web Developer",
      organization: "UVICS",
      period: "September 2024 - January 2026",
      location: "Klabat University",
      description: "Developing the official UVICS website for organizational activity information.",
      achievements: [
        "Built UVICS status website",
        "Collaborated with Coordinator and other PICs to execute the project together with Web Development department members",
      ],
      repoLink: "https://github.com/WEBUVICS/frontend",
    },
    {
      id: 2,
      type: "project",
      role: "Team Leader",
      organization: "CoachMind AI - Football Player Detection & Analysis",
      period: "November 2025",
      location: "Final Project - AI Course",
      description: "Led development of an AI-powered football analysis system that detects players, referees, and ball in real-time using YOLOv5 and YOLOv8. The system provides tactical insights powered by Google Gemini AI, helping coaches analyze game dynamics and player performance through computer vision and machine learning.",
      achievements: [
        "Led team of 6 members in AI project development",
        "Built web detection system with YOLOv5 & YOLOv8",
        "Achieved ~92% mAP detection accuracy",
        "Integrated Google Gemini AI for tactical insights",
      ],
      repoLink: "https://github.com/Imanuelpalenewen/-CoachMind-AI-",
    },
    {
      id: 3,
      type: "project",
      role: "Team Leader & User Flow Developer",
      organization: "Klinik Apotek App - Clinic & Pharmacy Management",
      period: "November 2025",
      location: "Final Project - Visual Programming",
      description: "Led development of a desktop-based clinic and pharmacy management system using C# Windows Forms and MySQL. Designed and implemented the user flow including shopping cart system with real-time inventory management, multi-role authentication, and transaction processing for seamless operations.",
      achievements: [
        "Led team of 4 in desktop application development",
        "Developed shopping cart with real-time stock updates",
        "Implemented multi-role authentication system",
      ],
      repoLink: "https://github.com/Imanuelpalenewen/Vispro-Klinik",
    },
    {
      id: 4,
      type: "project",
      role: "Member & Backend Developer",
      organization: "Lost & Found Web - University Lost Item Tracker",
      period: "2025",
      location: "Final Project - Frontend Course",
      description: "Developed backend functionality for a web-based lost and found system for Universitas Klabat. Built RESTful API with full CRUD operations connected to JSON database, enabling students to report and track lost items systematically across campus.",
      achievements: [
        "Built CRUD functionality with JSON-based API",
        "Developed RESTful endpoints for item management",
        "Collaborated in team of 5 using Vite + Tailwind CSS",
      ],
      repoLink: "https://github.com/SodiumZar/Vite-Tailwind",
    },
    {
      id: 5,
      type: "project",
      role: "Newbie",
      organization: "Yoseina Wedding Website",
      period: "2023",
      location: "Personal Project",
      description: "Built a responsive wedding invitation website for my brother's wedding as my first web development project. This was a self-learning journey following YouTube tutorials, where I gained hands-on experience with HTML, CSS, JavaScript, and Bootstrap 5 to create an interactive and visually appealing wedding site.",
      achievements: [
        "Built responsive wedding invitation website",
        "Learned web development fundamentals from scratch",
      ],
      repoLink: "https://github.com/Imanuelpalenewen/Yoseina-Wedding",
    },
    {
      id: 6,
      type: "work",
      role: "Welding Technician",
      organization: "Family Welding Business",
      period: "Sep 2025 - Present",
      location: "North Minahasa, Indonesia",
      description: "Working alongside my father in the family welding business, gaining hands-on experience in metal fabrication and welding techniques. This role has taught me the value of practical craftsmanship, precision work, and balancing technical coding skills with real-world manual skills.",
      achievements: [
        "Built house fence and iron window grills",
        "Welded iron Christmas trees (~6 units sold)",
        "Fabricated sliding gates and iron crosses",
        "Hands-on metal fabrication & welding work",
      ],
      repoLink: null,
    },
  ];

  const getIconAndColor = (type: string) => {
    switch (type) {
      case "organization":
        return { icon: "people", color: "#DC143C" };
      case "project":
        return { icon: "code-slash", color: "#DC143C" };
      case "work":
        return { icon: "construct", color: "#DC143C" };
      default:
        return { icon: "briefcase", color: "#DC143C" };
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "organization":
        return "Organization";
      case "project":
        return "Project";
      case "work":
        return "Work";
      default:
        return "Experience";
    }
  };

  const handleRepoLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="briefcase" size={40} color="#DC143C" />
        <Text style={styles.headerTitle}>My Experience</Text>
        <Text style={styles.headerSubtitle}>Projects & Activities</Text>
      </View>

      {/* Experience List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {experienceData.map((exp, index) => {
          const { icon, color } = getIconAndColor(exp.type);
          
          return (
            <View key={exp.id} style={styles.card}>
              {/* Timeline dot */}
              <View style={styles.timeline}>
                <View style={styles.timelineDot} />
                {index < experienceData.length - 1 && (
                  <View style={styles.timelineLine} />
                )}
              </View>

              {/* Card content */}
              <View style={styles.cardContent}>
                {/* Type badge */}
                <View style={styles.typeBadge}>
                  <Ionicons name={icon as any} size={14} color="#DC143C" />
                  <Text style={styles.typeText}>{getTypeLabel(exp.type)}</Text>
                </View>

                <View style={styles.cardHeader}>
                  <View style={styles.iconContainer}>
                    <Ionicons name={icon as any} size={24} color={color} />
                  </View>
                  <View style={styles.cardHeaderText}>
                    <Text style={styles.role}>{exp.role}</Text>
                    <Text style={styles.period}>{exp.period}</Text>
                  </View>
                </View>

                <Text style={styles.organization}>{exp.organization}</Text>
                
                <View style={styles.locationContainer}>
                  <Ionicons name="location" size={14} color="#6B7280" />
                  <Text style={styles.location}>{exp.location}</Text>
                </View>

                <Text style={styles.description}>{exp.description}</Text>

                {/* Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <View style={styles.achievementsContainer}>
                    <Text style={styles.achievementsTitle}>Highlights:</Text>
                    {exp.achievements.map((achievement, idx) => (
                      <View key={idx} style={styles.achievementItem}>
                        <Ionicons name="checkmark-circle" size={16} color="#DC143C" />
                        <Text style={styles.achievementText}>{achievement}</Text>
                      </View>
                    ))}
                  </View>
                )}

                {/* Repository Link Button */}
                {exp.repoLink && (
                  <TouchableOpacity 
                    style={styles.repoButton}
                    onPress={() => handleRepoLink(exp.repoLink!)}
                  >
                    <Ionicons name="logo-github" size={18} color="#FFFFFF" />
                    <Text style={styles.repoButtonText}>View Repository</Text>
                    <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}

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
    marginBottom: 25,
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
  typeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 12,
    gap: 6,
  },
  typeText: {
    fontSize: 12,
    color: '#DC143C',
    fontWeight: '600',
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
  role: {
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
  organization: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  location: {
    fontSize: 13,
    color: '#6B7280',
  },
  description: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 20,
    marginBottom: 12,
  },
  achievementsContainer: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  achievementsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A0A0A0',
    marginBottom: 8,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 6,
  },
  achievementText: {
    fontSize: 13,
    color: '#D1D5DB',
    flex: 1,
    lineHeight: 18,
  },
  repoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#DC143C',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  repoButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});