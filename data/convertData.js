export function mergeAndConvertData(data) {
  const universityMap = new Map();
  let count = 0;
  data.forEach((item) => {
    const uniName = item["Üniversite"];
    if (!universityMap.has(uniName)) {
      count++;
      universityMap.set(uniName, {
        university: uniName.toLocaleLowerCase("tr"),
        undergraduate: {
          psychologyDepartment: item["Lisans Programı"] ? "var" : "yok",
          english:
            item["Lisans Programı"] &&
            typeof item["Lisans Programı"] === "string"
              ? item["Lisans Programı"]
                  .toLocaleLowerCase("tr")
                  .includes("ingilizce")
              : false,
          scholarship: extractBursInfo(item["Lisans Programı"]),
        },
        accreditation: item["Akreditasyon"],
        yks: [],
        kpss: {
          kpss1: item["KPSS 1"],
          kpss2: item["KPSS 2"],
        },
        academicStaff: [],
        id: count,
      });
    }

    const university = universityMap.get(uniName);

    // YKS verisini birleştiriyoruz
    const yksSira = item["2022 YKS Sıra"];
    if (yksSira && !university.yks.some((yks) => yks["sıra"] === yksSira)) {
      university.yks.push({
        yıl: "2022",
        sıra: yksSira,
      });
    }

    // Akademik Personel verisini ekliyoruz
    university.academicStaff.push({
      fullName: item["Ad-Soyad"],
      title: item["Ünvan"],
      undergraduate: {
        university: item["Lisans Üniversite "],
        department: item["Lisans Bölüm"],
      },
      master: {
        university: item["Yüksek Lisans Üniversite"],
        department: item["Yüksek Lisans Bölüm"],
      },
      phd: {
        university: item["Doktora Üniversite"],
        department: item["Doktora Bölüm"],
        graduationYear: item["Doktora/Tıpta Mezuniyet Yılı"],
      },
      postDoc: item["Post-Doktora"] || "-",
      subfield: item["Alt Alan"].toLocaleLowerCase("tr"),
      keyWords: item["Anahtar Kelimeler"],
      projects: {
        international: item["Uluslararası Proje"],
        tubitak: item["Tübitak Proje"],
        bap: item["BAP Proje"],
        other: item["Diğer Proje"],
      },
      scopus: {
        article: item["Scopus Makale Sayısı"],
        cite: item["Scopus Atıf Sayısı"],
        hIndex: item["Scopus h-index"],
        link: item["Scopus Link"],
      },
      adjustedHIndex: item["Düzeltilmiş h-index"],
      adjustedArticleCount: item["Düzeltilmiş makale sayısı"],
      medicalSpecialty: item["Tıpta Uzmanlık Alanı"] || "-",
      graduateStudentCount: {
        yoksisYl: item["YL Mezun Öğrenci Sayısı (YOKSIS)"] || "0",
        yoksisDr: item["DR Mezun Öğrenci Sayısı (YOKSIS)"] || "0",
        tezyokYl: item["YL Mezun Öğrenci Sayısı (TEZYOK)"] || "0",
        tezyokDr: item["DR Mezun Öğrenci Sayısı (TEZYOK)"] || "0",
      },
    });
  });
  return Array.from(universityMap.values());
}

// Burs bilgisini çıkarmak için fonksiyon
function extractBursInfo(lisansProgrami) {
  if (typeof lisansProgrami === "string") {
    const bursMatch = lisansProgrami.match(/%[\d]+ İndirimli|burslu/i);
    return bursMatch ? bursMatch[0] : "Yok";
  }
  return "Yok";
}
