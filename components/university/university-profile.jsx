"use client";
import { useUniversityContext } from "@/context/university-context";
import React from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Book, Award, Globe, Banknote } from "lucide-react";

export const UniversityProfile = ({ id }) => {
  const { mergedData, academics } = useUniversityContext();
  const university = mergedData.find((x) => x.id == id);

  const router = useRouter();

  const handleClick = (name) => {
    const staffIndex = academics.findIndex((staff) => {
      return staff.fullName.toLowerCase() === name.toLowerCase();
    });
    router.push(`/academics/${staffIndex}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-16 capitalize">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            {university?.university}
          </h1>

          <div className="flex flex-wrap justify-center gap-6">
            <Badge
              variant="outline"
              className="text-lg py-1 px-3 flex items-center border-none"
            >
              <Users className="mr-2 h-5 w-5" />
              Öğr. Gör. Sayısı: {university?.academicStaff?.length}
            </Badge>
          </div>

          {/*           <div className="flex justify-center mb-4">
            {university?.accreditation == "Hayır" ? (
              <Badge
                variant="secondary"
                className="text-lg py-1 px-3 flex items-center"
              >
                Akreditasyon Yok
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="text-lg py-1 px-3 flex items-center"
              >
                <Award className="mr-2 h-5 w-5" />
                {university?.accreditation} tarafından akredite edilmiştir
              </Badge>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Badge
              variant="outline"
              className="text-lg py-1 px-3 flex items-center border-none"
            >
              <Globe className="mr-2 h-5 w-5" />
              {university?.undergraduate?.english
                ? "Eğitim Dili: English"
                : "Eğitim Dili: Türkçe"}
            </Badge>
            <Badge
              variant="outline"
              className="text-lg py-1 px-3 flex items-center border-none"
            >
              <Banknote className="mr-2 h-5 w-5" />
              {university?.undergraduate?.scholarship.toLowerCase() !== "yok"
                ? `Öğrenci Bursu: ${university?.undergraduate?.scholarship}`
                : "Öğrenci Bursu Yok"}
            </Badge>
          </div> */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
{/*         <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Temel Bilgiler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Öğr. Gör. Sayısı
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {university?.academicStaff?.length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Psikoloji Bölümü
                </CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {university?.undergraduate?.psychologyDepartment}
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}

{/*         <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">YKS - KPSS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {university?.yks?.map((rank, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>YKS Sıralaması</CardTitle>
                  <CardDescription>
                    {rank?.yıl}: {rank?.sıra}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}{" "}
            <Card>
              <CardHeader>
                <CardTitle>KPSS Puanı</CardTitle>
                <CardDescription>
                  KPSS 1: {university?.kpss?.kpss1}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section> */}

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Akademik Personel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {university?.academicStaff?.map((staff, index) => (
              <Card
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  handleClick(staff?.fullName);
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-start ml-0 space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={`/academicStaff.jpg?height=40&width=40`}
                        alt={staff?.fullName}
                      />
                      <AvatarFallback>
                        {staff?.fullName.slice(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <CardTitle>
                        {staff?.title} {staff?.fullName}
                      </CardTitle>
                      <CardDescription>{staff?.subfield}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <i className="underline">Anahtar kelimeler</i>:{" "}
                    {staff?.keyWords}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
