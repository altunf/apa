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


export function getUndergraduateUniversityFrequence(data) {
  const counts = {};

  data.forEach((item) => {
    const university = item?.undergraduate?.university;
    if ( university &&
        university.toString().trim().toLocaleLowerCase('tr-TR') !== "veri yok" &&
        university.toString().trim() !== "") {
      const cleanUniversity = capitalizeWords(
        university.toString().trim().toLocaleLowerCase("tr-TR")
      );
      counts[cleanUniversity] = (counts[cleanUniversity] || 0) + 1;
    }
  });

  return Object.entries(counts)
  .map(([university, count]) => ({ university, count }))
  .sort((a, b) => b.count - a.count);
}

export function getSubfieldFrequence(data) {
  const counts = {};

  data.forEach((item) => {
    const subfield = item?.subfield;
    if ( subfield &&
        subfield.toString().trim().toLocaleLowerCase('tr-TR') !== "veri yok" &&
        subfield.toString().trim() !== "") {
      const cleanSubfield = capitalizeWords(
        subfield.toString().trim().toLocaleLowerCase("tr-TR")
      );
      counts[cleanSubfield] = (counts[cleanSubfield] || 0) + 1;
    }
  });

  return Object.entries(counts)
  .map(([subfield, count]) => ({ subfield, count }))
  .sort((a, b) => b.count - a.count);
}
