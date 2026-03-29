//! Local Storage İşlemleri
function Storage() {}

Storage.prototype.KEY = "cars";

Storage.prototype._generateId = function () {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
};

Storage.prototype._normalizeCarsArray = function (cars) {
  if (!Array.isArray(cars)) return [];

  let mutated = false;
  const normalized = cars.map((car) => {
    const safeCar = car && typeof car === "object" ? car : {};
    const copy = {
      title: (safeCar.title || "").toString(),
      price: (safeCar.price || "").toString(),
      url: safeCar.url || "",
      id: safeCar.id,
    };
    if (!copy.id) {
      copy.id = this._generateId();
      mutated = true;
    }
    return copy;
  });

  if (mutated) {
    this._saveCars(normalized);
  }

  return normalized;
};

Storage.prototype.getCarsFromStorage = function () {
  try {
    const raw = localStorage.getItem(this.KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return this._normalizeCarsArray(parsed);
  } catch (e) {
    console.warn("LocalStorage JSON parse error:", e);
    return [];
  }
};

// Tek kayıt noktası: boşsa anahtarı sil, değilse güncelle
Storage.prototype._saveCars = function (cars) {
  if (!cars || cars.length === 0) {
    localStorage.removeItem(this.KEY);
  } else {
    localStorage.setItem(this.KEY, JSON.stringify(cars));
  }
};

Storage.prototype.addCarToStorage = function (newCar) {
  const cars = this.getCarsFromStorage();
  cars.push(newCar);
  this._saveCars(cars);
};

// Title ile silmek isteyenler için (senin mevcut akışına uygun)
Storage.prototype.deleteCarFromStorage = function (carTitle) {
  const needle = (carTitle || "").trim();
  const cars = this.getCarsFromStorage().filter(c => (c.title || "").trim() !== needle);
  this._saveCars(cars);
};

// ID ile silmek isteyenler için (daha güvenli)
Storage.prototype.deleteCarFromStorageById = function (id) {
  const cars = this.getCarsFromStorage().filter(c => c.id !== id);
  this._saveCars(cars);
};

Storage.prototype.clearAllCarsFromStorage = function () {
  localStorage.removeItem(this.KEY);
};
