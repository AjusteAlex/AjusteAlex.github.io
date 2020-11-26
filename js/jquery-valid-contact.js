// function validate() {
//     var isValid = true;
//     var name = $("#nom").val();
//     var email = $("#mail").val();
//     var message = $("#msg").val();
    
//     if (name == "") {
//         $("#nom").css('border', '#fb0505 1px solid');
//         isValid = false;
//     }
//     if (email == "") {
//         $("#mail").css('border', '#fb0505 1px solid');
//         isValid = false;
//     }
//     if (!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
//         $("#info").html("(Adresse email non valide)");
//         $("#mail").css('border', '#fb0505 1px solid');
//         isValid = false;
//     }
//     if (message == "") {
//         $("#msg").css('border', '#fb0505 1px solid');
//         isValid = false;
//     }
//     return isValid;
// }


// $(document).ready(function(){

// var resultat = true;

//     $('#form').sumbit(function(){
//         if($('#nom').val() == ""){
//             $('#nom').attr('placeholder', 'je ne peux pas etre vide').parent().addClass('has-error');
//         }
//     });
// });
