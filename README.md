# 🚗 Cars Project

Bu proje, kullanıcıların **araç ekleyip yönetebildiği** basit ama işlevsel bir **Car Management (Araç Yönetim)** uygulamasıdır.  
Uygulama tamamen **HTML, CSS ve JavaScript** ile geliştirilmiştir.  
Eklenen araçlar tarayıcının **LocalStorage** özelliği sayesinde kalıcı olarak saklanır.  
Sayfa yenilense veya kapatılsa bile veriler kaybolmaz.

---

## 🚀 Özellikler

- ➕ Yeni araç ekleme  
- 🗑️ Tek bir aracı listeden silme  
- 💥 Tüm araçları tek bir butonla temizleme  
- 💾 Verileri tarayıcının **LocalStorage**’ında kalıcı olarak saklama  
- 🔁 Sayfa yenilendiğinde araç listesinin otomatik olarak yüklenmesi  
- ⚙️ Boş liste durumunda LocalStorage anahtarının otomatik silinmesi  
- 💻 **Modern ve okunabilir arayüz:** sade, kullanıcı dostu tasarım  

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Rolü |
|------------|-----------|
| **HTML5** | Uygulamanın temel yapısını oluşturur. |
| **CSS3** | Arayüzün görsel düzeni ve stillendirmesini sağlar. |
| **JavaScript (ES6+)** | Dinamik işlemler (ekleme, silme, temizleme, LocalStorage yönetimi). |
| **LocalStorage API** | Verilerin kalıcı olarak saklanmasını sağlar. |

---

## 📂 Proje Dosya Yapısı

📁 Cars_Project  
├── 📄 cars.js
├── 📄 index.html  
├── 📄 project.js  
├── 📄 README.md  
├── 📄 storage.js  
└── 📄 ui.js  

---

## ⚙️ Kurulum ve Çalıştırma

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Bu projeyi klonlayın:
   ```bash
   git clone https://github.com/mhilmicicek07/Cars_Project.git
Proje klasörüne gidin:

bash
Kodu kopyala
cd Cars_Project
index.html dosyasını tarayıcınızda açın.

Hepsi bu kadar! 🎉
Artık araç ekleyebilir, silebilir ve verilerin LocalStorage üzerinde kalıcı olarak saklandığını test edebilirsiniz.

🧠 Teknik Açıklama
app.js dosyası uygulamanın tüm iş mantığını içerir.
Sayfa yüklendiğinde LocalStorage kontrol edilir, kayıtlı araçlar varsa listeye otomatik olarak eklenir.

Kullanıcı bir araç eklediğinde:

Araç, DOM üzerinde listeye eklenir.

Aynı anda LocalStorage’a JSON formatında kaydedilir.

Araç silindiğinde veya tüm liste temizlendiğinde:

DOM güncellenir.

LocalStorage’daki kayıtlar da senkron şekilde silinir.

Liste tamamen boş kaldığında LocalStorage anahtarı (örneğin "cars") sistemden kaldırılır.

👨‍💻 Geliştirici
Mehmet Hilmi Çiçek
💼 Full Stack Web Developer
📍 Geislingen an der Steige

💬 “Temiz ve düzenli kod, sürdürülebilir projenin temelidir.”

🪪 Lisans
Bu proje açık kaynaklıdır.
İsteyen herkes kodu inceleyebilir, geliştirebilir veya kişisel projelerinde kullanabilir.