const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");



//create element and render cafe
 function renderCafe(element){
     let li = document.createElement('li');
     let name = document.createElement('span');
     let city = document.createElement('span');

     li.setAttribute('data-id', element.id);
     name.textContent = element.data().name;
     city.textContent = element.data().city;

     li.appendChild(name);
     li.appendChild(city);
     cafeList.appendChild(li);
 };  

 //getting data
db.collection('cafe').get().then((snapshot) => {

    snapshot.docs.forEach(element => {
        renderCafe(element)
    });
});

//adding data
form.addEventListener('submit', (e) => {
   e.preventDefault();
    db.collection('cafe').add({
        name: form.name.value,
        city: form.city.value
    });
    form.name.value= '';
    form.city.value= '';
});
