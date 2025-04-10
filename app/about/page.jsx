import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Veri Seti Hakkında</h1>
      <p className="mb-4">
        Bu veri seti <strong>Dr. Sami Çoksan</strong> tarafından oluşturulmuş ve
        psikolog <strong>Fırat Altun</strong> tarafından görselleştirilmiştir. Veri
        seti atıf verilerek her türlü amaç ile kullanılabilir.
      </p>
      <p className="mb-4">
        Veri setinin amacı, lisans ve lisans üstü eğitimde psikoloji disiplinini
        tercih edecek öğrencilere yol gösterebilmektir. Veri tabanında her bir
        üniversitede kaç öğretim üyesi olduğu, bu kişilerin ne kadar yüksek lisans
        ve doktora öğrencisi yetiştirdiği, yayın yaptığı ve atıf aldığı gibi
        bilgiler yer almaktadır. Bu bilgilerin öğrencilerin tercihlerinde işe
        yarayabileceğini düşünüyorum.
      </p>
      <p className="mb-4">
        Veri seti ağırlıklı olarak <strong>2024 Eylül - 2025 Şubat</strong>
         aralığındaki taramalara göre oluşturulmuştur.
      </p>
      <p className="mb-4">
        Araştırmacıların ünvanları, ad ve soyadları, bağlı bulundukları üniversite,
        bilim alanları, anahtar kelimeleri, lisans ve lisansüstü mezuniyet
        bilgileri, projeleri ve Scopus verileri gibi birçok bilgiye yer verilmiştir.
        Bu bilgiler kamuya açık <strong>YÖKAKADEMİK</strong> ve
        <strong>Scopus</strong> veri tabanlarından elde edilmiştir.
      </p>
      <p className="mb-4">
        <strong>Önemli Not:</strong> Amacım ilgili bölümlerin ne ölçüde
        multidisipliner olduğunu veri tabanından yararlanabilecek kişilere
        gösterebilmektir. Ancak multidisiplinerlikten bahsedilebilmesi için bir
        bölümde çekirdek psikoloji derslerini verebilecek uzman kadronun varlığı
        önemlidir. Diğer disiplinlerden gelen öğretim üyeleri bu temelin üzerine
        multidisipliner katkı sağlayabilir.
      </p>
      <p className="mb-4">
        Araştırmacıların <strong>h-indeks</strong> değerleri tek başına değerlendirilmemelidir.
        Bunun yerine süpervize ettikleri yüksek lisans ve doktora öğrencisi sayısı
        gibi göstergelerle birlikte incelenmesi daha sağlıklı olacaktır.
      </p>
      <p className="mb-4">
        Psikoloji bölümü haricindeki bölümlerce açılan psikoloji lisansüstü
        programlar (örneğin siyaset bilimi bölümlerinde açılan siyaset psikolojisi
        programları) bu veri setinin kapsamı dışındadır.
      </p>
      <p className="mt-6 italic">
        Veri setinin bu versiyonunun oluşturulmasında katkı sağlayan <strong>Gülin
        Yıldız</strong> ve <strong>Serpil Yıldız-Çoksan</strong>'a teşekkür ederim.
      </p>
    </div>
  );
}

