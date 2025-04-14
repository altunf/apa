import { capitalizeWords } from "@/helpers/wordFormatter";

export function mergeAndConvertData2(data2) {
  const universityMap = new Map();
  let count = 0;

  // Üniversite verisi
  data2.forEach((item) => {
    const uniName = item["Üniversite Adı"];
    if (!universityMap.has(uniName)) {
      count++;
      universityMap.set(uniName, {
        university: uniName.toLocaleLowerCase("tr"),
        academicStaff: [],
        id: count,
      });
    }

    const university = universityMap.get(uniName);

    // Akademik Personel verisi
    university.academicStaff.push({
      fullName:
        item["Ad-Soyad"] && capitalizeWords(item["Ad-Soyad"].toString()),
      title: item["Ünvan"] && capitalizeWords(item["Ünvan"].toString()),
      undergraduate: {
        university: item["Lisans Üniversite"]
          ? capitalizeWords(item["Lisans Üniversite"].toString())
          : "veri yok",
        department: item["Lisans Bölüm"] || "veri yok",
      },
      master: {
        university: item["Yüksek Lisans Üniversite"]
          ? capitalizeWords(item["Yüksek Lisans Üniversite"].toString())
          : "veri yok",
        program: item["Yüksek Lisans Program"]
          ? capitalizeWords(item["Yüksek Lisans Program"].toString())
          : "veri yok",
      },
      phd: {
        university: item["Doktora Üniversite"] || "veri yok",
        program: item["Doktora Program"] || "veri yok",
        graduationYear: item["Doktora/Tıpta Mezuniyet Yılı"] || "veri yok",
      },
      postDoc: item["Post-Doktora"] || "veri yok",
      subfield: item["Bilim Alanı"] || "veri yok",
      keyWords: item["Anahtar Kelimeler"] || "veri yok",
      projects: {
        international: item["Uluslararası Proje"] || "veri yok",
        tubitak: item["Tübitak Proje"] || "veri yok",
        bap: item["BAP Proje"] || "veri yok",
        other: item["Diğer Proje"] || "veri yok",
      },
      scopus: {
        article: item["Scopus Makale Sayısı"] || "veri yok",
        cite: item["Scopus Atıf Sayısı"] || "veri yok",
        hIndex: item["Scopus h-index"] || "veri yok",
        link: item["Scopus Link"] || "veri yok",
      },

      adjustedCiteCount: item["Düzeltilmiş Atıf Sayısı"] || "veri yok",
      adjustedArticleCount: item["Düzeltilmiş Makale Sayısı"] || "veri yok",
      adjustedHIndex: item["Düzeltilmiş h-index"],

      medicalSpecialty: item["Tıpta Uzmanlık Alanı"] || "veri yok",
      graduateStudentCount: {
        master: item["YL Mezun Öğrenci Sayısı"] || "veri yok",
        phd: item["DR Mezun Öğrenci Sayısı"] || "veri yok",
      },
    });
  });

  return Array.from(universityMap.values());
}
