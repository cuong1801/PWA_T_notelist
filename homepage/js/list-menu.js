//Original version spelt accordion accordian?

/*jQuery time*/
// $(document).ready(function() {
//     $("#accordion i").click(function() {
//         //slide up all the link lists
//         $("#accordion ul ul").slideUp(200);
//         //slide down the link list below the h3 clicked - only if its closed
//         if (!$(this).next().is(":visible")) {
//             $(this).next().slideDown(200);
//         }
//     })
// })

// $(function() {
//     FastClick.attach(document.body);
// });

function ListNotes() {
    $('#listNotes').load('show_not.html');
    var dem = 0;
    $('#listNotes').load('show_not.html');
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

            var user = firebase.auth().currentUser;

            if (user != null) {
                var idUser = firebase.auth().currentUser.uid;
                // var listcategory = document.getElementById("ListNotes_category").value;
                db.collection("notelist").orderBy("timepost", "desc").get().then(snapshot => {

                    snapshot.docs.forEach(doc => {
                        if (doc.data().userID == idUser) {
                            var des = doc.data().content;
                            var tit = doc.data().name;
                            var subTit = tit.slice(0, 30);
                            var subDes = des.slice(0, 30);
                            $("#name_notes").append(
                                '<a  class="card3 a " href="#" >' +
                                '<div  data-toggle="modal" data-target="#exampleModalScrollable' + doc.id + '">' +
                                '<div class="row">' +

                                '<div class="col-md-7">' +
                                '<h3 class="h3">' + subTit + '</h3>' +
                                '</div>' +
                                '<div class="col-md-5">' +
                                '<h4 class="h4" style="margin-top:20px;">' + doc.data().category + '</h4>' +
                                '</div>' +
                                '</div>' +
                                '<p class="p small ">Content:' + subDes + '</p>' +
                                '<div class="dimmer"> <h6 class="h6">' + doc.data().timepostShow + '</h6></div>' +
                                '<div class="go-corner" href="#">' +
                                '<div id="' + doc.id + '" class="go-arrow btn btn-outline-danger"  onclick="deleteNote()">' +
                                'x' +
                                '</div>' +
                                '</div>' +
                                '<button  id="' + doc.id + '" type="button" class="btn btn-outline-success border border-warning" style="width:100px; margin:30px 88px"  onclick="detailNote()">More</button>' +
                                '</div>' +

                                '</a>' +

                                '<div class="modal fade" id="exampleModalScrollable' + doc.id + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">' +
                                '<div class="modal-dialog modal-dialog-scrollable" role="document">' +
                                '<div class="modal-content">' +
                                '<div class="modal-header">' +
                                '<h1 class="modal-title" id="exampleModalScrollableTitle">' + doc.data().name + '</h1>' +
                                '<small style="padding: 15px;"><em>' + doc.data().category + '</em></small>' +

                                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                                '<span aria-hidden="true">&times;</span>' +
                                '</button>' +
                                '</div>' +
                                '<div class="modal-body">' +
                                '<small><em>' + doc.data().timepostShow + '</em></small>' +
                                '<small><em>  ::::' + doc.data().location + '</em></small>' +
                                '<p>' + doc.data().content + '</p>' +
                                '<img id="imgNote' + doc.data().name + '" style="width: 60% ; height: 100%; margin-left: 25%"></img>' +

                                '</div>' +
                                '<div class="modal-footer">' +
                                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                                '<button type="button" class="btn btn-primary">Save</button>' +
                                '</div>' +
                                ' </div>' +
                                '</div>' +
                                '</div>'

                            );

                            var imgNote = document.getElementById("imgNote" + doc.data().name);
                            storageRef.child('NoteImage/' + doc.data().image + '').getDownloadURL().then(function(url) {
                                imgNote.src = url;
                            }).catch(function(error) {});
                        }
                    });
                });
            }
        }
    });
}