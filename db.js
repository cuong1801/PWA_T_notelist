// enable offline data
var storageRef = firebase.storage().ref();

db.enablePersistence()
  .catch(function (err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });
// function renderNotes(doc) {
//   $("#name_notes").append(
//     '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><div data-toggle="modal" data-target="#' + change.doc.data().name.replace(/\s+/g, '') + '" class="card border-info mb-3" style="cursor: pointer; max-width: 30rem;"><div class="card-header"><h6 class="card-title"></h6></div><div class="card-body text-center"><p class="card-text" id="lblName' + change.doc.data().name.replace(/\s+/g, '') + '">' + change.doc.data().name + '</p> </div> <div class="card-footer text-center"> </div></div></div><div class="modal" id="' + change.doc.data().name.replace(/\s+/g, '') + '"><div class="modal-dialog modal-lg"><div class="modal-content"><!-- Modal Header --><div class="modal-header"><h4 class="modal-title">' + change.doc.data().name + '</h4><div><small>' + change.doc.data().location + '</small><br><small id="timeyourpost">' + change.doc.data().timepost + '</small></div> </div><!-- Modal body --><div class="modal-body"><pre>' + change.doc.data().content + '</pre><br><br><div><img id="imgNote' + change.doc.data().name + '" style="width: 60% ; height: 100%; margin-left: 25%"></div><br><!-- Modal footer --><div class="modal-footer"><button type="button" style="width: 70px;height: 50px;" class="btn btn-outline-info">Sửa</button><button type="button" style="width: 70px;height: 50px;"  class="btn btn-outline-info" data-toggle="modal" onclick = "deleteNote(\'' + change.doc.data().name.replace(/\s+/g, '') + '\')">Xóa</button>'
//     + '<button type="button" style="width: 70px;height: 50px;" class="btn btn-outline-info" data-dismiss="modal">Thoát</button></div></div></div></div>'
//     + '<div class="modal fade" id="XoaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'
//     + '<div class="modal-dialog" role="document">'
//     + '<div class="modal-content">'
//     + '<div class="modal-header">'
//     + '<h5 class="modal-title" id="exampleModalLabel">Delete</h5>'
//     + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
//     + '<span class="material-icons" aria-hidden="true">help_outline</span>'
//     + '</button>'
//     + '</div>'
//     + '<div class="modal-body"> <i class="material-icons"  >delete_forever</i>'
//     + 'Do you really  want to delete?'
//     + '</div>'
//     + '<div class="modal-footer">'
//     + '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
//     + '<button type="button" class="btn btn-primary" >Delete</button>'
//     + '</div>'
//     + '</div>'
//     + '</div>'
//     + '</div>'
//   );

// }



function Category_select(category) {
  var options = category.children;
  for (var i = 0; i < options.length; i++) {
    if (options[i].selected) {
      var category_selected = options[i].value;
      console.log($('#load').load('show_not.html'));
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

          var user = firebase.auth().currentUser;

          if (user != null) {
            var idUser = firebase.auth().currentUser.uid;
            // var listcategory = document.getElementById("ListNotes_category").value;
            db.collection('notelist').where('category', '==', category_selected).orderBy('name').get().then(snapshot => {
              snapshot.docs.forEach(doc => {
                if (doc.data().userID == idUser) {
                  $("#name_notes").append(
                    '<div id="notes" data-id="' + doc.id + '" class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><div data-toggle="modal" data-target="#' + doc.data().name.replace(/\s+/g, '') + '" class="card border-info mb-3" style="cursor: pointer; max-width: 30rem;"><div class="card-header"><h6 class="card-title"></h6></div><div class="card-body text-center"><p class="card-text" id="lblName' + doc.data().name.replace(/\s+/g, '') + '">' + doc.data().name + '</p> </div> <div class="card-footer text-center"> <button type="button" id="delete_notes" class="btn btn-outline-info" style="width:100px;" onclick="deleteNote()">Delete</button> </div></div></div><div class="modal" id="' + doc.data().name.replace(/\s+/g, '') + '"><div class="modal-dialog modal-lg"><div class="modal-content"><!-- Modal Header --><div class="modal-header"><h4 class="modal-title">' + doc.data().name + '</h4><div><small>' + doc.data().location + '</small><br><small id="timeyourpost">' + doc.data().timepost + '</small></div> </div><!-- Modal body --><div class="modal-body"><pre>' + doc.data().content + '</pre><br><br><div><img id="imgNote' + doc.data().name + '" style="width: 60% ; height: 100%; margin-left: 25%"></div><br><!-- Modal footer --><div class="modal-footer"><button type="button" style="width: 70px;height: 50px;" class="btn btn-outline-info">Sửa</button><button type="button" style="width: 70px;height: 50px;" class="btn btn-outline-info" data-toggle="modal" onclick = "deleteNote()">Xóa</button>'
                    + '<button type="button" style="width: 70px;height: 50px;" class="btn btn-outline-info" data-dismiss="modal">Thoát</button></div></div></div></div>'
                    + '<div class="modal fade" id="XoaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'
                    + '<div class="modal-dialog" role="document">'
                    + '<div class="modal-content">'
                    + '<div class="modal-header">'
                    + '<h5 class="modal-title" id="exampleModalLabel">Delete</h5>'
                    + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
                    + '<span class="material-icons" aria-hidden="true">help_outline</span>'
                    + '</button>'
                    + '</div>'
                    + '<div class="modal-body"> <i class="material-icons"  >delete_forever</i>'
                    + 'Do you really  want to delete?'
                    + '</div>'
                    + '<div class="modal-footer">'
                    + '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
                    + '<button type="button" class="btn btn-primary" >Delete</button>'
                    + '</div>'

                    + '</div>'
                    + '</div>'
                    + '</div>'
                  );
                  var imgNote = document.getElementById("imgNote" + doc.data().name);
                  storageRef.child('NoteImage/' + doc.data().image + '').getDownloadURL().then(function (url) {
                    imgNote.src = url;
                  }).catch(function (error) {
                  });
                }
              });
            });
          }
        }
      });
    }
  }
}
var NewNotes_name = document.getElementById("NewNotes_name");
var NewNotes_location = document.getElementById("location_Name");
var NewNotes_content = document.getElementById("NewNotes_content");
var category_Name = document.getElementById("category_Name");
var ListNotes_category = document.getElementById("ListNotes_category")
function addnewcategory() {
  var category_Name_text = category_Name.value;
  var category_Name_text_value = category_Name_text.trim();
  if (category_Name_text_value.length === 0 || category_Name_text_value.length > 15) {
    alert('Comments are required to continue!');
    return false;
  }
  else {
    var idUser = firebase.auth().currentUser.uid;
    db.collection("category").doc(document.getElementById("category_Name").value + idUser).set({
      category: document.getElementById("category_Name").value,
      userID: idUser
    })
    alert("Add to category");
  }
}
function deleteCategory() {
  var category_Name_text = category_Name.value;
  var category_Name_text_value = category_Name_text.trim();

  if (category_Name_text_value.length === 0 || category_Name_text_value.length > 150) {
    alert('Comments are required to continue!');

  }
  else {
    db.collection("category").doc(document.getElementById("category_Name").value + firebase.auth().currentUser.uid).delete();
  }
}

// function deleteCategoryInSelect() {
//   // var result = confirm("Do you want to continue?");
//   // if(result)  {
//   // alert("OK Next lesson!");
//   db.collection("category").doc(document.getElementById("ListNotes_category1").value + firebase.auth().currentUser.uid).delete();
//   // location.reload();
//   // } else {
//   // alert("Bye!");
//   // }

// }

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
document.getElementById('NewNotes_checkTime').onclick = function (e) {
  var check = false;
  if (this.checked) {
    document.getElementById('notification').style.display = 'block';
  }
  else {
    document.getElementById('notification').style.display = 'none';
  }

};

function writeNotesData() {
  var today = new Date();
  var timepost;

  var DD = today.getDate();
  var MM = today.getMonth() + 1;
  var YYYY = today.getFullYear();

  var h = today.getHours();
  var m = today.getMinutes();
  DD = checkTime(DD);
  MM = checkTime(MM);
  YYYY = checkTime(YYYY);

  h = checkTime(h);
  m = checkTime(m);
  timepost = DD + "/" + MM + "/" + YYYY + " " + h + ":" + m;
  // alert(timepost)


  var NewNotes_name_text = NewNotes_name.value;
  var NewNotes_location_text = NewNotes_location.value;
  var NewNotes_name_text_value = NewNotes_name_text.trim();

  if (NewNotes_name_text_value.length === 0 || NewNotes_name_text_value.length > 20) {
    alert('Comments are required to continue!');
  }
  else {
    var n = 0;
    db.collection('notelist').add({
      name: document.getElementById("NewNotes_name").value,
      location: document.getElementById("location_Name").value,
      timepost: timepost,
      // timenotification: document.getElementById("date_no").value,
      content: document.getElementById("NewNotes_content").value,
      category: document.getElementById("ListNotes_category").value,
      userID: firebase.auth().currentUser.uid,
      image: temp,



    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        alert(error);
        console.error("Error adding document: ", error);
      });
  }
}

//listen for image profile selection
var tempProfile = "";
var userImg = document.getElementById('profile-image-upload');
userImg.addEventListener('change', function (e) {
  //get file
  var file = e.target.files[0];
  //create a storage ref

  var storageRef = firebase.storage().ref('/userImage/' + file.name);
  //upload file
  var task = storageRef.put(file);
  tempProfile = file.name;
  // upload progress bar
  task.on('state_changed',
    function progress(snapshot) {
      var percentage = (snapshot.bytedTransferred / snapshot.totalByles) * 100;
      // uploader.value = percentage;
    },
    function error(err) {
      alert(err);

    },
    function complete() {

    }
  );
});

function saveIn() {

  var idUser = firebase.auth().currentUser.uid;
  var firstName = document.getElementById("first_Name").value;
  var lastName = document.getElementById("last_Name").value;
  var nationality = document.getElementById("nationality").value;
  var timeZone = document.getElementById("DropDownTimezone").value;

  db.collection('users').doc(idUser).set({
    firstName: firstName,
    lastName: lastName,
    nationality: nationality,
    timeZone: timeZone,
    temp: tempProfile
  })
}
//delete note by select list
function deleteNote() {
  // var result = confirm("Do you want to continue?");

  // if(result)  {  
  // alert("OK Next lesson!");
  // e.stopPropagation();
  var id = document.getElementById("notes").getAttribute("data-id");
  db.collection('notelist').doc(id).delete();
  console.log($('#load').load('show_not.html'));

  // alert(x);
  // db.collection('notelist').doc(document.getElementById(x).innerText).delete();
  // location.reload();
  // } else {
  // alert("Bye!");    
  // } 
}


function openProfile() {
  $('#userProfileModal').modal('show');
  var idUser = firebase.auth().currentUser.uid;
  var docRef = db.collection('users').doc(idUser);
  docRef.get().then(function (doc) {

    if (doc.exists) {
      console.log("Document user profile:", doc.data());
      $('#first_Name').val(doc.data().firstName);
      $('#last_Name').val(doc.data().lastName);
      $('#nationality').val(doc.data().nationality);
      $('#national').text(doc.data().nationality);
      $('#full_Name').text((doc.data().firstName) + " " + (doc.data().lastName));
      $('#DropDownTimezone').val(doc.data().timeZone);

      var imgProfile = document.getElementById("profile-image1");
      storageRef.child('userImage/' + doc.data().temp).getDownloadURL().then(function (url) {
        imgProfile.src = url;
      }).catch(function (error) {
        // Handle any errors
      });

    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
    alert(error);
  });
}
function uploadImg() {
  $('#profile-image-upload').click();
}