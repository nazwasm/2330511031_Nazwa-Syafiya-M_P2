import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';

const DATA = [
  { id: 1, title: 'Pagi yang Tenang', date: '2025-10-06', preview: 'Bangun lebih pagi…', body: 'Catatan lengkap…', moodUri: 'https://picsum.photos/seed/happy/200', heroUri: 'https://picsum.photos/seed/happyhero/800/450' },
  { id: 2, title: 'Produktif di Kampus', date: '2025-10-05', preview: 'Menyelesaikan modul…', body: 'Kemajuan proyek…', moodUri: 'https://picsum.photos/seed/focus/200', heroUri: 'https://picsum.photos/seed/focushero/800/450' },
  { id: 3, title: 'Senja di Taman', date: '2025-10-04', preview: 'Membaca buku…', body: 'Refleksi singkat…', moodUri: 'https://picsum.photos/seed/calm/200', heroUri: 'https://picsum.photos/seed/calmhero/800/450' },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;

  const [selected, setSelected] = useState(null);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title} date={item.date} preview={item.preview} moodUri={item.moodUri}
        variant={twoCols ? 'grid' : 'list'} onPress={() => setSelected(item)}
      />
    </View>
  );

  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{ padding: SPACE.l, gap: SPACE.m, paddingTop: SPACE.m }}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
      />
      <DiaryDetailModal visible={!!selected} entry={selected} onClose={() => setSelected(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  header: { fontSize: TYPO.h1, fontWeight: '700', paddingHorizontal: SPACE.l, paddingTop: SPACE.l, color: COLORS.text },
  itemWrap: { flex: 1 },
  itemWrap2: { flex: 1 / 2 },
  empty: { textAlign: 'center', color: COLORS.muted, marginTop: 40 },
});
