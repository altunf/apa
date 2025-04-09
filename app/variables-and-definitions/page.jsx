import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function VariablesAndDefinitions() {
  return (
    <main className="flex flex-1 md:p-8 h-full w-full min-h-screen flex-col  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <Table className="w-full">
      <TableCaption>Akademik Personel Veri Seti - Tam Değişken Tanımları</TableCaption>
      <TableHeader>
        <TableRow className="bg-secondary">
          <TableHead className="w-[200px]">Değişken</TableHead>
          <TableHead className="min-w-[400px]">Tam Tanım</TableHead>
          <TableHead className="min-w-[400px]">Dikkat Edilecek Noktalar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* # */}
        <TableRow>
          <TableCell className="font-medium">#</TableCell>
          <TableCell>İlgili araştırmacının veri setindeki numarasını gösterir. Veri seti ile çalışırken yardımcı olması amacıyla oluşturulmuştur ve herhangi bir kullanım amacı bulunmamaktadır.</TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Ünvan */}
        <TableRow>
          <TableCell className="font-medium">Ünvan</TableCell>
          <TableCell>
            Araştırmacının YÖKAKADEMİK veri tabanına göre ünvanını gösterir. Değişkenin 5 düzeyi bulunur:
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>Öğretim Görevlisi</li>
              <li>Dr. Öğretim Üyesi</li>
              <li>Dr. Öğretim Üyesi (Unvan: Doçent)</li>
              <li>Doçent</li>
              <li>Profesör</li>
            </ol>
          </TableCell>
          <TableCell>
            3. düzey, doçent kadrosu almaya hak kazanmasına rağmen, henüz o kadroya atanmadığı için, YÖKAKADEMİK'te Dr. Öğr. Üyesi unvanıyla listenen araştırmacıları işaret etmektedir.
          </TableCell>
        </TableRow>

        {/* Ad-Soyad */}
        <TableRow>
          <TableCell className="font-medium">Ad-Soyad</TableCell>
          <TableCell>
            Araştırmacının ad ve soyadını gösterir. Araştırmacı evlilik veya boşanma gibi nedenlerle farklı soyadına sahip olmuş olabilir. Veri seti incelenirken bu durum göz önünde bulundurulmalıdır. Öte yandan bazı durumlarda araştırmacılar soyadlarında düzeltme yaptırtmaktadır. Bu durum da göz önünde bulundurulmalıdır. Veri tabanı oluşturulurken, bu olasılıklar göz önünde bulundurularak tarama yapılmıştır.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Üniversite */}
        <TableRow>
          <TableCell className="font-medium">Üniversite</TableCell>
          <TableCell>
            Araştırmacının veri tabanı oluşturma sırasında bağlı olduğu üniversiteyi gösterir. Özellikle üniversite dönemi tercih dönemlerinde bazı üniversitelerin bazı hocaların isimlerini kendi üniversitelerinin personeliymiş gibi göstermesi söz konusu olabilir.
          </TableCell>
          <TableCell>
            Bu nedenle güncel veriler her zaman YÖKAKADEMİK'ten takip edilmelidir.
          </TableCell>
        </TableRow>

        {/* Bilim Alanı */}
        <TableRow>
          <TableCell className="font-medium">Bilim Alanı</TableCell>
          <TableCell>
            Araştırmacının YÖKAKADEMİK'e göre bilim alanını gösterir. Bu değişken, genel olarak araştırmacının psikolojinin hangi alt alanında araştırmalar yaptığını gösterir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Anahtar Kelimeler */}
        <TableRow>
          <TableCell className="font-medium">Anahtar Kelimeler</TableCell>
          <TableCell>
            Araştırmacının YÖKAKADEMİK'e göre hangi konulara odaklandığını gösterir.
          </TableCell>
          <TableCell>
            YÖKAKADEMİK sistemi, bu açıdan oldukça sınırlı sayıda anahtar kelime sağladığı için odaklanılan konu için araştırmacının yayınlarını incelemek daha isabetli bir çıkarım yapmaya izin verebilir.
          </TableCell>
        </TableRow>

        {/* Lisans Bilgileri */}
        <TableRow>
          <TableCell className="font-medium">Lisans Üniversite</TableCell>
          <TableCell>
            Araştırmacının lisans derecesini aldığı üniversitenin adını gösterir. Eğer araştırmacı birden fazla lisans programından mezun olduysa, burada yalnızca psikoloji lisans programını bitirdiği üniversitenin adı verilmiştir. Araştırmacı birden fazla lisans programından mezun olmasına rağmen, bu lisans programları arasında psikoloji programı bulunmuyorsa, en son mezun olduğu sosyal bilimler programının (örneğin, sosyoloji, vb.) üniversitesi ifade edilmiştir. Ayrıca Tıp Fakültesi mezunları için birebir karşılık olmasa da mezun oldukları üniversite burada belirtilmiştir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Lisans Bölüm</TableCell>
          <TableCell>
            Araştırmacının lisans derecesini aldığı bölümü işaret eder. "Lisans Üniversite" değişkeninde olduğu gibi, eğer araştırmacı psikoloji dahil birden fazla bölümden mezunsa, burada sadece psikoloji belirtilmiştir. Eğer değilse, mezun olduğu bölüm, ya da sosyal bilimler ile ilgili olan en son mezun olunan bölüm ifade edilmiştir. Ayrıca Tıp Fakültesi mezunları için birebir karşılık olmasa da mezun oldukları bölüm "Tıp" olarak burada belirtilmiştir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Yüksek Lisans Bilgileri */}
        <TableRow>
          <TableCell className="font-medium">Yüksek Lisans Üniversite</TableCell>
          <TableCell>
            Araştırmacının yüksek lisans derecesini aldığı üniversitenin adını gösterir. Eğer araştırmacı birden fazla yüksek lisans programından mezun olduysa, burada yalnızca psikoloji yüksek lisansı altında bitirdiği program ile ilişkili üniversitenin adı verilmiştir. Araştırmacı birden fazla yüksek lisans programından mezun olmasına rağmen, bu lisans programları arasında psikoloji yüksek lisansıyla ilişkili program bulunmuyorsa, en son mezun olduğu sosyal bilimler programının (örneğin, kent sosyolojisi, vb.) üniversitesi ifade edilmiştir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Yüksek Lisans Program</TableCell>
          <TableCell>
            Araştırmacının mezun olduğu yüksek lisans programını gösterir. Psikoloji ile ilgili birden fazla yüksek lisans programından mezun olunması durumunda ilk mezun olunan program belirtilmiştir. Biri psikoloji ile ilişkili olmak üzere birden fazla yüksek lisans programından mezun olunması durumunda, psikoloji ile ilişkili olan bilgi ifade edilmiştir. Psikoloji alt alanı olmayan birden fazla programdan mezun olunması durumunda, sosyal bilimler ile ilişkili olan kronolojik olarak ilk mezun olunan program bilgisine yer verilmiştir. Mezun olunan yüksek lisans programları birden fazla olmasına rağmen herhangi biri sosyal bilimler ile ilişkili değilse, kronolojik olarak ilk mezun olunan program ifade edilmiştir. Programın tezli ya da tezsiz oluşuna yönelik bilgi sunulmamıştır.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Doktora Bilgileri */}
        <TableRow>
          <TableCell className="font-medium">Doktora Üniversite</TableCell>
          <TableCell>
            Araştırmacının doktora derecesini aldığı üniversitenin adını gösterir. Eğer araştırmacı birden fazla doktora programından mezun olduysa, burada yalnızca psikoloji doktorası altında bitirdiği program ile ilişkili üniversitenin adı verilmiştir. Araştırmacı birden fazla doktora programından mezun olmasına rağmen, bu doktora programları arasında psikolojiyle ilişkili program bulunmuyorsa, en son mezun olduğu sosyal bilimler doktora programının (örneğin, kent sosyolojisi, vb.) üniversitesi ifade edilmiştir. Bu da bulunmadığı durumlarda, ilk mezun olduğu doktora programının üniversitesine yönelik bilgi girilmiştir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Doktora Program</TableCell>
          <TableCell>
            Araştırmacının mezun olduğu doktora programını gösterir. Psikoloji ile ilgili birden fazla doktora programından mezun olunması durumunda ilk mezun olunan program belirtilmiştir. Biri psikoloji ile ilişkili olmak üzere birden fazla doktora programından mezun olunması durumunda, psikoloji ile ilişkili olan bilgi ifade edilmiştir. Psikoloji alt alanı olmayan birden fazla programdan mezun olunması durumunda, sosyal bilimler ile ilişkili olan kronolojik olarak ilk mezun olunan program bilgisine yer verilmiştir. Mezun olunan doktora programları birden fazla olmasına rağmen herhangi biri sosyal bilimler ile ilişkili değilse, kronolojik olarak ilk mezun olunan program ifade edilmiştir. Bütünleşik doktora programları, bu değişkende belirtilmiştir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Diğer Akademik Bilgiler */}
        <TableRow>
          <TableCell className="font-medium">Doktora/Tıpta Mezuniyet Yılı</TableCell>
          <TableCell>
            Araştırmacının doktora programından veya tıpta uzmanlık programından mezun olduğu yılı işaret eder. Eğer araştırmacı her ikisine de sahipse, kronolojik olarak ilk mezun olduğu yıl ifade edilmiştir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Tıpta Uzmanlık Alanı</TableCell>
          <TableCell>
            Eğer araştırmacı tıpta uzmanlık aldıysa, bu uzmanlığın alanını işaret eder.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Post-Doktora</TableCell>
          <TableCell>
            Araştırmacının doktora sonrası araştırmacı olarak çalıştığı üniversiteyi belirtir. Birden fazla olması durumunda, kronolojik olarak ilk post-doktora üniversitesi belirtilmiştir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Proje Bilgileri */}
        <TableRow>
          <TableCell className="font-medium">Uluslararası Proje</TableCell>
          <TableCell>
            YÖKAKADEMİK veri tabanına göre, araştırmacının yürüttüğü uluslararası proje sayısını gösterir. AB projeleri, COST veya HORIZON gibi projeler burada ifade edilmiştir.
          </TableCell>
          <TableCell>
            Bu bilgiler araştırmacılar tarafından girilmektedir. Eğer araştırmacı kendi sistemine herhangi bir bilgi girmezse, buradaki parametreler geçerliliğini yitirir. Öte yandan eğer araştırmacı, buraya gerçek dışı bilgi girerse, bu da parametrelerin doğruyu göstermeyebileceğine yorulur. Son yıllarda akademik teşvik yönetmeliği sayesinde özellikle devlet üniversitelerinde çalışan akademisyenler bu bilgileri doğru bir biçimde kaydederek teşvik alabilmektedir. Bu da bilgilerin doğruluğunu desteklemektedir ancak hala yukarıdaki iki sınırlılık göz önünde bulundurulmalıdır.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">TÜBİTAK Proje</TableCell>
          <TableCell>
            YÖKAKADEMİK veri tabanına göre, araştırmacının yürüttüğü TÜBİTAK tarafından desteklenen proje sayısını gösterir. TÜBİTAK ile ilişkili lisans, lisansüstü, küçük ya da büyük ölçekli bütün projeler bu değişkende gösterilmektedir.
          </TableCell>
          <TableCell>
            Bu bilgiler araştırmacılar tarafından girilmektedir. Eğer araştırmacı kendi sistemine herhangi bir bilgi girmezse, buradaki parametreler geçerliliğini yitirir. Öte yandan eğer araştırmacı, buraya gerçek dışı bilgi girerse, bu da parametrelerin doğruyu göstermeyebileceğine yorulur. Son yıllarda akademik teşvik yönetmeliği sayesinde özellikle devlet üniversitelerinde çalışan akademisyenler bu bilgileri doğru bir biçimde kaydederek teşvik alabilmektedir. Bu da bilgilerin doğruluğunu desteklemektedir ancak hala yukarıdaki iki sınırlılık göz önünde bulundurulmalıdır.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">BAP Proje</TableCell>
          <TableCell>
            YÖKAKADEMİK veri tabanına göre, araştırmacının üniversitelerin BAP birimleri desteğiyle yürüttüğü proje sayısını gösterir.
          </TableCell>
          <TableCell>
            Bu bilgiler araştırmacılar tarafından girilmektedir. Eğer araştırmacı kendi sistemine herhangi bir bilgi girmezse, buradaki parametreler geçerliliğini yitirir. Öte yandan eğer araştırmacı, buraya gerçek dışı bilgi girerse, bu da parametrelerin doğruyu göstermeyebileceğine yorulur. Son yıllarda akademik teşvik yönetmeliği sayesinde özellikle devlet üniversitelerinde çalışan akademisyenler bu bilgileri doğru bir biçimde kaydederek teşvik alabilmektedir. Bu da bilgilerin doğruluğunu desteklemektedir ancak hala yukarıdaki iki sınırlılık göz önünde bulundurulmalıdır.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Diğer Proje</TableCell>
          <TableCell>
            YÖKAKADEMİK veri tabanına göre, araştırmacının yürüttüğü, önceki üç proje değişkeninde gösterilmeyen tüm projelerin sayısını gösterir. Bakanlık destekli projeler, özel girişimlerin desteklediği projeler, valilik projeleri gibi tüm projeler bu değişkende gösterilmiştir.
          </TableCell>
          <TableCell>
            Bu bilgiler araştırmacılar tarafından girilmektedir. Eğer araştırmacı kendi sistemine herhangi bir bilgi girmezse, buradaki parametreler geçerliliğini yitirir. Öte yandan eğer araştırmacı, buraya gerçek dışı bilgi girerse, bu da parametrelerin doğruyu göstermeyebileceğine yorulur. Son yıllarda akademik teşvik yönetmeliği sayesinde özellikle devlet üniversitelerinde çalışan akademisyenler bu bilgileri doğru bir biçimde kaydederek teşvik alabilmektedir. Bu da bilgilerin doğruluğunu desteklemektedir ancak hala yukarıdaki iki sınırlılık göz önünde bulundurulmalıdır.
          </TableCell>
        </TableRow>

        {/* Scopus Metrikleri */}
        <TableRow>
          <TableCell className="font-medium">Scopus Atıf Sayısı</TableCell>
          <TableCell>
            Scopus veri tabanına göre, araştırmacının aldığı toplam atıf sayısını gösterir.
          </TableCell>
          <TableCell>
            Bu değişkene dair değer oldukça dinamiktir. Bu nedenle herhangi bir çıkarım yapmadan önce güncel bilgi kontrol edilmelidir.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Scopus Makale Sayısı</TableCell>
          <TableCell>
            Scopus veri tabanına göre, araştırmacının yayınladığı ve Scopus'ta taranan makale sayısını gösterir.
          </TableCell>
          <TableCell>
            Bu değişkene dair değer oldukça dinamiktir. Bu nedenle herhangi bir çıkarım yapmadan önce güncel bilgi kontrol edilmelidir.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Scopus h-index</TableCell>
          <TableCell>
            Scopus veri tabanına göre, araştırmacının h-indeksini gösterir. Scopus h-index, bir araştırmacının akademik yayınlarının hem niceliğini, yani kaç tane yayın yaptığını, hem de etkisini, yani bu yayınların kaç kez atıf aldığını birlikte değerlendiren bir ölçüttür. Değer Elsevier tarafından sağlanır.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Scopus Link</TableCell>
          <TableCell>
            Önceki üç değişkene yönelik değerlerin elde edildiği sayfayı gösterir.
          </TableCell>
          <TableCell>
            Scopus veri tabanı kullanılarak yaratılan 3 değişken de araştırmacıların isim ve soyisimlerine bağlıdır. İsimlerdeki değişiklikler, benzerlikler ya da farklı nedenlerle, ilgili değerleri kullanmadan önce, Scopus Link değişkeninin değerinden, ilgili linkin araştırmacıya ait olup olmadığı kontrol edilmelidir. Çift soyad, soyad değişikliği, ad değişikliği gibi tüm durumlar için farklı kombinasyonlar ile arama yapılarak en optimum sonuç değer olarak girilmiştir. Örneğin birden fazla kişinin bulunması durumunda, araştırmacının güncel olarak çalıştığı kurumu işaret eden profil, ya da araştırmacının biyografisinde çalışmış olduğu kurumu içeren profil ele alınmıştır. Eğer araştırmacının birden fazla profili varsa, profillerinden makale sayıları ve atıf sayıları toplanarak değer elde edilmiştir. Ancak h-index değeri olarak, büyük değer veri setine girilmiştir. Araştırmacının ismi veri tabanında yoksa, öncelikle araştırmacının YÖKAKADEMİK sayfasından makaleleri incelenerek, Scopus'ta taranan herhangi bir yayını olup olmadığına bakılmış, yayının bulunması durumunda, araştırmacının Scopus ID'si üzerinden Scopus profil linkine erişilmiştir. Ancak burada da herhangi bir bilgi olmaması durumunda (örneğin hiçbir yayının bildirilmemiş olması ya da Scopus'ta taranan herhangi bir yayının olmaması) önceki üç değer 0 olarak girilmiştir. Bu 3 değer herhangi bir karar aşaması için kullanılacaksa, araştırmacıların ayrıca WoS profillerinin incelenmesi önerilir.
          </TableCell>
        </TableRow>

        {/* Düzeltilmiş Metrikler */}
        <TableRow>
          <TableCell className="font-medium">Düzeltilmiş Atıf Sayısı</TableCell>
          <TableCell>
            Doktora mezuniyet yılından sonra, 2025'e kadar geçen sürede, her bir yılda araştırmacının aldığı ortalama Scopus atıf sayısıdır. Değer, Scopus Atıf Sayısı / (2025 - Doktora/Tıpta Mezuniyet Yılı) formülüyle hesaplanır. Araştırmacıları "görece" kıyaslamak için elde edilen standardize değerdir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Düzeltilmiş Makale Sayısı</TableCell>
          <TableCell>
            Doktora mezuniyet yılından sonra, 2025'e kadar geçen sürede, her bir yılda araştırmacının bastığı ve Scopus'ta taranan ortalama makale sayısıdır. Değer, Scopus Makale Sayısı / (2025 - Doktora/Tıpta Mezuniyet Yılı) formülüyle hesaplanır. Araştırmacıları "görece" kıyaslamak için elde edilen standardize değerdir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">Düzeltilmiş h-index</TableCell>
          <TableCell>
            Doktora mezuniyet yılından sonra, 2025'e kadar geçen sürede, her bir yılda araştırmacının edindiği h-index değerini gösterir. Değer, Scopus h-index / (2025 - Doktora/Tıpta Mezuniyet Yılı) formülüyle hesaplanır. Araştırmacıları "görece" kıyaslamak için elde edilen standardize değerdir.
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        {/* Öğrenci Bilgileri */}
        <TableRow>
          <TableCell className="font-medium">YL Mezun Öğrenci Sayısı</TableCell>
          <TableCell>
            YÖKAKADEMİK veri tabanına göre, araştırmacının yönettiği yüksek lisans tez sayılarından elde edilen değeri gösterir.
          </TableCell>
          <TableCell>
            Araştırmacının YÖKAKADEMİK'te profilinin bulunmaması durumda değer 0 olarak girilmiştir.
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className="font-medium">DR Mezun Öğrenci Sayısı</TableCell>
          <TableCell>
            YÖKAKADEMİK veri tabanına göre, araştırmacının yönettiği doktora ya da tıpta uzmanlık tez sayılarından elde edilen değeri gösterir.
          </TableCell>
          <TableCell>
            Araştırmacının YÖKAKADEMİK'te profilinin bulunmaması durumda değer 0 olarak girilmiştir.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </main>
  );
}
