import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Minum teh sambil makan gorengan, beuh muantap tenan',
    moodUri: 'https://picsum.photos/seed/happy/80' // ikon mood (remote)
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Keren sekali, ilmu baru yang patut diacungi jempol',
    moodUri: 'https://picsum.photos/seed/focus/80'
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menunggu sunset, tenang sekali',
    moodUri: 'https://picsum.photos/seed/calm/80'
  }
];

export default function DiaryListScreen(){
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.header}>Buku Harian</Text>

      {diaryEntries.map(entry => (
        <DiaryCard
        key={entry.id}
        title={entry.title}
        date={entry.date}
        preview={entry.preview}
        moodUri={entry.moodUri}
        />
    ))}


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    marginBottom: 12
  },
  mood: { width: 64, height: 64, borderRadius: 32 },
  title: { fontSize: 16, fontWeight: '700' },
  date: { fontSize: 12, color: '#6b7280', marginBottom: 6 },
  preview: { fontSize: 14 }
});