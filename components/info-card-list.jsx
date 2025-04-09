import { InfoCard } from "./info-card";
import React from "react";

import { mergeAndConvertData2 } from "@/data/convertData2";
import { data2 } from "@/data/data2";

export const InfoCardList = () => {
  const convertedData = mergeAndConvertData2(data2);

  const academicStaffList = () => {
    let academicsData = [];
    convertedData?.forEach((personel) => {
      const academicStaff = personel.academicStaff;
      const updatedStaff = academicStaff.map((staff) => ({
        ...staff,
        university: personel.university,
      }));

      academicsData.push(...updatedStaff);
    });

    return academicsData;
  };
/* 
  const english = convertedData.filter(
    (el) => el.undergraduate.english == true
  );
  const accreditation = convertedData.filter(
    (el) => el.accreditation !== "Hayır"
  ); */

  const titles = [
    "Toplam Üniversite Sayısı",
    "Akademisyen Sayısı",
/*     "Eğitim Dili İngilizce Olan Üniversiteler",
    "Akreditasyonu Olan Üniversite Sayısı", */
  ];
  const values = [
    convertedData.length,
    academicStaffList().length,
/*     english.length,
    accreditation.length, */
  ];
  const description = [
    "Psikoloji bölümü bulunan üniversiteler",
    "Psikoloji bölümlerinde yer alan akademisyenler",
/*     "Psikoloji bölümü eğitim dili İngilizce olan üniversiteler",
    "Psikoloji bölümü akredite olan üniversite sayısı", */
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {titles?.map((el, index) => (
        <InfoCard
          key={index}
          title={el}
          value={values[index]}
          desc={description[index]}
        />
      ))}
    </div>
  );
};
