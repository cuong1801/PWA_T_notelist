const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe

// $("document").ready(function () {
//     $("show").click(function () {
//         $("#cafe-list").append(
//             '<li data-id="' + doc.id + '">'
//             + ' <span>' + doc.data().name + '</span>'
//             + ' < span >' + doc.data().city + '</span >'
//             + '< div >x </div >'
//             + '</li >'
//         );
//         cross.addEventListener('click', (e) => {
//             e.stopPropagation();
//             let id = e.target.parentElement.getAttribute('data-id');
//             db.collection('cafes').doc(id).delete();
//         });
//     });
// });
function renderCafe(doc) {
    // $("#cafe-list").append(
    //     '<li data-id="' + doc.id + '">'
    //     + ' <span>' + doc.data().name + '</span>'
    //     + ' < span >' + doc.data().city + '</span >'
    //     + '< div >x </div >'
    //       +  '</li >'
    // );
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    city.textContent = doc.data().city;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);

    cafeList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cafes').doc(id).delete();
    });
}

// getting data

// db.collection('notelist').where('category', '==', 'No Categories').orderBy('name').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         // renderCafe(doc);
//         if (doc.data().userID === 'mxeyEpmyZuaHqV6XMHrnw8FoeDP2') {
//         $("#cafe-list").append(
//             '<li data-id="' + doc.id + '">'
//             + ' <span>' + doc.data().category + '</span>'
//             + ' <span>' + doc.data().content + '</span>'

//             + '<div> x </div>'
//             + '</li >'
//         );
//         }
//     });
// });

// saving data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('cafes').add({
//         name: form.name.value,
//         content: form.city.value
//     });
//     form.name.value = '';
//     form.city.value = '';
// });