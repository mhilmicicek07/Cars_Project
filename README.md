# 🚗 Cars Project

Bu proje, basit bir "Araç Yönetim" (Car Management) uygulamasıdır. Kullanıcılar araç ekleyebilir, tek tek silebilir veya tüm listeyi temizleyebilir. Veriler tarayıcının LocalStorage'ında saklanır, böylece sayfa yenilense bile kayıtlar korunur.

---

## TR — Türkçe

### Özellikler
- ➕ Yeni araç ekleme
- 🗑️ Tek bir aracı listeden silme
- 🧹 Tüm araçları temizleme
- 💾 LocalStorage üzerinde kalıcı veri saklama
- 🔁 Sayfa yüklendiğinde kayıtlı araçların otomatik yüklenmesi
- ⚙️ Boş liste durumunda LocalStorage anahtarının temizlenmesi
- 🆔 Eski kayıtlar id'siz gelse bile otomatik kimliklendirme ve sorunsuz silme
- 🖼️ Eksik veya hatalı görsel linklerinde otomatik placeholder gösterimi

### Kullanılan Teknolojiler
- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage API

### Proje Dosya Yapısı
- `index.html` — Uygulamanın ana HTML sayfası
- `car.js` — Car modeli (veri yapısı)
- `ui.js` — Kullanıcı arayüzü (DOM işlemleri)
- `storage.js` — LocalStorage yönetimi
- `project.js` — Uygulama başlatma / olay bağlamaları
- `README.md` — Bu dosya

> Not: Yukarıdaki dosya adları repodaki mevcut dosyalara göre düzenlenmiştir.

### Kurulum ve Çalıştırma
1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/mhilmicicek07/Cars_Project.git
   cd Cars_Project
   ```
2. `index.html` dosyasını tarayıcınızda açın (veya basit bir HTTP sunucusu ile çalıştırın):
   - Örnek (Python 3):
     ```bash
     python -m http.server 8000
     ```
     Ardından tarayıcıda `http://localhost:8000` adresini açın.

### Nasıl Çalışır (Kısa Teknik Özet)
- Kullanıcı yeni bir araç eklediğinde, araç DOM'a eklenir ve LocalStorage'a JSON formatında kaydedilir.
- Bir araç silindiğinde veya tüm liste temizlendiğinde, hem DOM hem de LocalStorage güncellenir.
- Eğer liste tamamen boşalırsa, LocalStorage'daki ilgili anahtar silinir.

### Geliştirici
Mehmet Hilmi Çiçek  
Full Stack Web Developer — Geislingen an der Steige

### Lisans
Açık kaynaklıdır. İsteyen herkes kodu inceleyebilir ve geliştirebilir.

---

## ENG — English

### Overview
This is a small Car Management web app. Users can add cars, delete single entries, or clear the whole list. Data is stored in the browser's LocalStorage so records persist across page reloads.

### Features
- Add new car entries
- Delete a single car
- Clear all cars
- Persistent storage via LocalStorage
- Automatic loading of saved cars on page load
- Remove LocalStorage key when the list becomes empty
- Auto-assign ids for legacy records so delete actions stay reliable
- Graceful placeholder image when the provided URL is missing or broken

### Technologies
- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage API

### Project Structure
- `index.html` — Main HTML file
- `car.js` — Car model (data structure)
- `ui.js` — User interface (DOM manipulation)
- `storage.js` — LocalStorage helper
- `project.js` — Application initialization / event bindings
- `README.md` — This file

### Installation & Run
1. Clone the repository:
   ```bash
   git clone https://github.com/mhilmicicek07/Cars_Project.git
   cd Cars_Project
   ```
2. Open `index.html` in your browser (or serve the folder with a simple HTTP server):
   - Example (Python 3):
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.

### How it works (Short)
- When a user adds a car, it is rendered to the DOM and saved to LocalStorage as JSON.
- When a car is deleted or the list is cleared, both DOM and LocalStorage are updated.
- When the list is empty, the LocalStorage key is removed.

### Author
Mehmet Hilmi Çiçek  
Full Stack Web Developer — Geislingen an der Steige

### License
Open source — feel free to inspect and modify.

---

## DE — Deutsch

### Übersicht
Dies ist eine kleine Web-App zur Verwaltung von Fahrzeugen (Car Management). Benutzer können Fahrzeuge hinzufügen, einzelne Einträge löschen oder die ganze Liste leeren. Die Daten werden im LocalStorage des Browsers gespeichert, sodass sie nach einem Neuladen der Seite erhalten bleiben.

### Funktionen
- Neue Fahrzeuge hinzufügen
- Ein einzelnes Fahrzeug löschen
- Alle Fahrzeuge löschen
- Persistente Speicherung über LocalStorage
- Automatisches Laden gespeicherter Fahrzeuge beim Seitenstart
- Entfernen des LocalStorage-Schlüssels, wenn die Liste leer ist
- Fehlende IDs in alten Datensätzen werden automatisch vergeben, damit Löschen weiterhin klappt
- Platzhalterbild, wenn die bereitgestellte Bild-URL fehlt oder defekt ist

### Technologien
- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage API

### Projektstruktur
- `index.html` — Haupt-HTML-Datei
- `car.js` — Car-Modell (Datenstruktur)
- `ui.js` — Benutzeroberfläche (DOM-Manipulation)
- `storage.js` — LocalStorage-Hilfsfunktionen
- `project.js` — Applikationsinitialisierung / Event-Bindings
- `README.md` — Diese Datei

### Installation & Ausführung
1. Repository klonen:
   ```bash
   git clone https://github.com/mhilmicicek07/Cars_Project.git
   cd Cars_Project
   ```
2. `index.html` im Browser öffnen (oder den Ordner mit einem einfachen HTTP-Server bereitstellen):
   - Beispiel (Python 3):
     ```bash
     python -m http.server 8000
     ```
     Dann `http://localhost:8000` im Browser öffnen.

### Funktionsweise (Kurz)
- Beim Hinzufügen eines Fahrzeugs wird dieses im DOM dargestellt und als JSON im LocalStorage gespeichert.
- Beim Löschen eines Fahrzeugs oder dem Leeren der Liste werden sowohl DOM als auch LocalStorage aktualisiert.
- Ist die Liste leer, wird der entsprechende LocalStorage-Schlüssel entfernt.

### Autor
Mehmet Hilmi Çiçek  
Full Stack Web Developer — Geislingen an der Steige

### Lizenz
Open Source — jeder kann den Code einsehen und anpassen.
