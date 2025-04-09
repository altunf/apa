export const columnsShort = [
  {
    accessorKey: "fullName",
    header: "Ad Soyad",
  },
  {
    accessorKey: "university",
    header: "Üniversite",
  },

  {
    accessorKey: "title",
    header: "Ünvan",
  },

  {
    accessorKey: "subField",
    header: "Bilim Alanı",
  },
  {
    accessorKey: "keyWords",
    header: "Anahtar Kelimeler",
  },

  {
    accessorKey: "undergraduate.department",
    header: "Lisans Bölüm",
    cell: ({ row }) => row.original.undergraduate.department,
  },
  {
    accessorKey: "undergraduate.university",
    header: "Lisans Üniversite",
    cell: ({ row }) => row.original.undergraduate.university,
  },

  {
    accessorKey: "master.program",
    header: "Yüksek Lisans Bölüm",
    cell: ({ row }) => row.original.master.program,
  },
  {
    accessorKey: "master.university",
    header: "Yüksek Lisans Üniversite",
    cell: ({ row }) => row.original.master.university,
  },

  {
    accessorKey: "phd.program",
    header: "Doktora Bölüm",
    cell: ({ row }) => row.original.phd.program,
  },
  {
    accessorKey: "phd.university",
    header: "Doktora Üniversite",
    cell: ({ row }) => row.original.phd.university,
  },
];

export const columnsDetail = [
  {
    accessorKey: "fullName",
    header: "Ad Soyad",
  },

  {
    accessorKey: "university",
    header: "Üniversite",
  },

  {
    accessorKey: "title",
    header: "Ünvan",
  },

  {
    accessorKey: "subField",
    header: "Alt Alan",
  },
  {
    accessorKey: "keyWords",
    header: "Anahtar Kelimeler",
  },

  {
    accessorKey: "undergraduate.department",
    header: "Lisans Bölüm",
    cell: ({ row }) => row.original.undergraduate.department,
  },
  {
    accessorKey: "undergraduate.university",
    header: "Lisans Üniversite",
    cell: ({ row }) => row.original.undergraduate.university,
  },

  {
    accessorKey: "master.department",
    header: "Yüksek Lisans Bölüm",
    cell: ({ row }) => row.original.master.department,
  },
  {
    accessorKey: "master.university",
    header: "Yüksek Lisans Üniversite",
    cell: ({ row }) => row.original.master.university,
  },

  {
    accessorKey: "phd.department",
    header: "Doktora Bölüm",
    cell: ({ row }) => row.original.phd.department,
  },
  {
    accessorKey: "phd.university",
    header: "Doktora Üniversite",
    cell: ({ row }) => row.original.phd.university,
  },
  {
    accessorKey: "phd.graduationYear",
    header: "Doktora Mezuniyet Yılı",
    cell: ({ row }) => row.original.phd.graduationYear ,
  },
  {
    accessorKey: "postDoc",
    header: "Post Doktora",
  },
  {
    accessorKey: "medicalSpecialty",
    header: "Tıpta Uzmanlık Alanı",
  },

  {
    accessorKey: "adjustedHIindex",
    header: "Düzeltilmiş H-Index",
  },
  {
    accessorKey: "adjustedArticleCount",
    header: "Düzeltilmiş Makale Sayısı",
  },

  {
    accessorKey: "scopus.hIndex",
    header: "Scopus H-Index",
  },
  {
    accessorKey: "scopus.article",
    header: "Scopus Makale Sayısı",
    cell: ({ row }) => row.original.scopus.article ,
  },
  {
    accessorKey: "scopus.cite",
    header: "Scopus Atıf Sayısı",
    cell: ({ row }) => row.original.scopus.cite ,
  },
  {
    accessorKey: "scopus.link",
    header: "Scopus Link",
  },

  {
    accessorKey: "projects.bap",
    header: "BAP",
    cell: ({ row }) => row.original.projects.bap ,
  },
  {
    accessorKey: "projects.international",
    header: "Uluslararası",
    cell: ({ row }) => row.original.projects.international ,
  },
  {
    accessorKey: "projects.tubitak",
    header: "TÜBİTAK",
    cell: ({ row }) => row.original.projects.tubitak ,
  },
  {
    accessorKey: "projects.other",
    header: "Diğer",
    cell: ({ row }) => row.original.projects.other ,
  },

  {
    accessorKey: "graduateStudentcount.tezyokYl",
    header: "YL (TEZYOK)",
    cell: ({ row }) => row.original.graduateStudentcount.tezyokYl ,
  },
  {
    accessorKey: "graduateStudentcount.yoksisYl",
    header: "YL (YOKSIS)",
    cell: ({ row }) => row.original.graduateStudentcount.yoksisYl ,
  },

  {
    accessorKey: "graduateStudentcount.tezyokDr",
    header: "DR (TEZYOK)",
    cell: ({ row }) => row.original.graduateStudentcount.tezyokDr ,
  },
  {
    accessorKey: "graduateStudentcount.yoksisDr",
    header: "DR (YOKSIS)",
    cell: ({ row }) => row.original.graduateStudentcount.yoksisDr ,
  },
];

export const educationInfo = [
  {
    accessorKey: "undergraduate.department",
    header: "Lisans Bölüm",
    cell: ({ row }) => row.original.undergraduate.department,
  },
  {
    accessorKey: "undergraduate.university",
    header: "Lisans Üniversite",
    cell: ({ row }) => row.original.undergraduate.university,
  },

  {
    accessorKey: "master.department",
    header: "Yüksek Lisans Bölüm",
    cell: ({ row }) => row.original.master.department,
  },
  {
    accessorKey: "master.university",
    header: "Yüksek Lisans Üniversite",
    cell: ({ row }) => row.original.master.university,
  },

  {
    accessorKey: "phd.department",
    header: "Doktora Bölüm",
    cell: ({ row }) => row.original.phd.department,
  },
  {
    accessorKey: "phd.university",
    header: "Doktora Üniversite",
    cell: ({ row }) => row.original.phd.university,
  },
  {
    accessorKey: "phd.graduationYear",
    header: "Doktora Mezuniyet Yılı",
    cell: ({ row }) => row.original.phd.graduationYear ,
  },
  {
    accessorKey: "postDoc",
    header: "Post Doktora",
  },
];
