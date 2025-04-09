export const columns = [
  {
    accessorKey: "university",
    header: "Üniversite",
  },
  {
    accessorKey: "academicStaff",
    header: "Öğr. Gör. Sayısı",
    cell: ({ row }) => row.getValue("academicStaff").length,
  },
];
