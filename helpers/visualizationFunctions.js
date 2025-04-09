export function getUniqueDepartments(data) {
  const counts = {};

  data.forEach((item) => {
    const bolum = item?.undergraduate?.department;
    if ( bolum &&
        bolum.toString().trim().toLocaleLowerCase('tr-TR') !== "veri yok" &&
        bolum.toString().trim() !== "") {
      const cleanBolum = capitalizeWords(
        bolum.toString().trim().toLocaleLowerCase("tr-TR")
      );
      counts[cleanBolum] = (counts[cleanBolum] || 0) + 1;
    }
  });

  return Object.entries(counts)
  .map(([department, count]) => ({ department, count }))
  .sort((a, b) => b.count - a.count);
}

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(
      (word) =>
        word.charAt(0).toLocaleUpperCase("tr-TR") +
        word.slice(1).toLocaleLowerCase("tr-TR")
    )
    .join(" ");
}
