"use client";
import { Button } from "../ui/button";
import ProfileCard from "./profile-card";
import { ExternalLink, Layers2 } from "lucide-react";
import { ProfileHeader } from "./profile-header";
import { useUniversityContext } from "@/context/university-context";

export const AcademicProfile = ({ id }) => {
  const { academics } = useUniversityContext();
  const academic = academics[id];

  return (
    <div className="flex flex-col w-full bg-background">
      <ProfileHeader academic={academic} />
      <div className="container mx-auto max-w-8xl py-12 px-4 md:px-6 flex flex-col gap-12">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Temel Bilgiler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <ProfileCard
              title="Lisans"
              content={[
                `${academic?.undergraduate?.department}`,
                `${academic?.undergraduate?.university}`,
              ]}
            />
            <ProfileCard
              title="Yüksek Lisans"
              content={[
                `${academic?.master.program}`,
                `${academic?.master.university}`,
              ]}
            />
            <ProfileCard
              title="Doktora"
              content={[
                `${academic?.phd?.program}`,
                `${academic?.phd?.university} - ${academic?.phd?.graduationYear}`,
              ]}
            />
            <ProfileCard
              title="Doktora Sonrası"
              description="(Post Doctorate)"
              content={academic?.postDoc}
            />
            <ProfileCard
              title="Scopus Atıf Sayısı"
              content={academic?.scopus.cite}
            />
            <ProfileCard
              title="Scopus H-Index"
              content={academic?.scopus.hIndex}
            />
            <ProfileCard
              title="Scopus Makale Sayısı"
              content={academic?.scopus.article}
            />
            <ProfileCard
              title="Scopus Linki"
              content={
                academic?.scopus.link ? (
                  <a
                    href={academic?.scopus.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Button>
                      Sayfaya Git <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                ) : (
                  " - "
                )
              }
            />
          </div>
        </section>
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Detaylı Bilgiler
          </h2>
          <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ProfileCard
            title="Projeler"
            content={[
              `Uluslararası - ${academic?.projects?.international}`,
              `TÜBİTAK - ${academic?.projects?.tubitak}`,
              `BAP - ${academic?.projects?.bap}`,
              `Diğer - ${academic?.projects?.other}`,
            ]}
          />
          <ProfileCard
            title="Yetiştirilen Öğrenci Sayısı"
            content={[
              `Yüksek Lisans - ${academic?.graduateStudentCount?.master}`,
              `Doktora - ${academic?.graduateStudentCount?.phd}`,
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <ProfileCard
            title="Düzeltilmiş Makale Sayısı"
            content={academic?.adjustedArticleCount}
          />
          <ProfileCard
            title="Düzeltilmiş H-Index"
            content={academic?.adjustedHIndex}
          />
          <ProfileCard
            title="Düzeltilmiş Atıf Sayısı"
            content={academic?.adjustedCiteCount}
          />
          <ProfileCard title="Anahtar Kavramlar" content={academic?.keyWords} />
          {academic?.medicalSpeciality && (
            <ProfileCard
              title="Tıpta Uzmanlık Alanı"
              content={academic?.medicalSpeciality}
            />
          )}
        </div>
      </section>
        </section>
      </div>
    </div>
  );
};
