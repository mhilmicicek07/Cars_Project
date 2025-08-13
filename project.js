//! Projenin Ana JS Dosyası

const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-cars");


//? UI Objesini Başlatma

const ui = new UI();

const storage = new Storage();

//? Tüm Eventleri Yükleme

function eventListeners(){
    form.addEventListener("submit",addCar);

    document.addEventListener("DOMContentLoaded",function(){
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars);
    });
    
    cardbody.addEventListener("click",deleteCar);
    clear.addEventListener("click",clearAllCars);
}
eventListeners();

function addCar(e){

    e.preventDefault();

    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if(title === "" || price === "" || url === ""){
        // Alert 
        ui.displayMessages("Tüm Alanları Doldurun!","danger");
    }
    else{
        // Yeni Araç
        const newCar = new Car(title,price,url);

        ui.addCarToUI(newCar); // Arayüze araç ekleme

        storage.addCarToStorage(newCar);

        ui.displayMessages("Araç Başarıyla Eklendi!","success");
    }
    ui.clearInputs(titleElement,urlElement,priceElement);

    e.preventDefault();

}

function deleteCar(e){

    // console.log(e.target)
    
    if(e.target.id === "delete-car"){
        ui.deleteCarFromUI(e.target);
        
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme İşlemi Başarıyla Gerçekleşti!!!","success");

    }
}

function clearAllCars(){

    if(confirm("Tüm Araçlar Silinecek! Emin Misiniz?")){
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }
}