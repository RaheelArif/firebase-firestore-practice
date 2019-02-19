const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");



//create element and render cafe
 function renderCafe(element){
     let li = document.createElement('li');
     let name = document.createElement('span');
     let city = document.createElement('span');
     let cross = document.createElement('div');

     li.setAttribute('data-id', element.id);
     name.textContent = element.data().name;
     city.textContent = element.data().city;
     cross.textContent = "x";

     li.appendChild(name);
     li.appendChild(city);
     cafeList.appendChild(li);
     li.appendChild(cross);

     //delete data
     cross.addEventListener('click', (e) => {
         let id = e.target.parentElement.getAttribute('data-id');
         db.collection('cafe').doc(id).delete();
     })
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
