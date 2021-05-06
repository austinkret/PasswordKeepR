const myFunction = function(id) {

  const dropdowns = document.getElementsByClassName(`dropdown-content`);
  for (let i = 0; i < dropdowns.length; i++) {
    if (dropdowns[i].classList.contains("show")) {
      dropdowns[i].classList.remove("show");
    }
  }

  let dropdown = document.getElementsByClassName(`dropdown-content ${id}`);
  dropdown[0].classList.toggle("show");
};
// if (dropdown[0].classList.contains('show')) {
//   dropdown[0].classList.remove('show');
// } else {
//   dropdown[0].classList.add('show');
// }

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     let dropdowns = document.getElementsByClassName(`dropdown-content ${user[i].id}`);
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };


// {/* <div class="dropdown" id="${passwordData.website_name}">
// <button onclick="myFunction()" id="${passwordData.id}" class="dropbtn"><i class="fas fa-ellipsis-h"></i></button>
// <div id="myDropdown" class="dropdown-content">
// <a id="edit" href="/update-password">Edit</a>
// <a id="delete" href="/delete/${passwordData.id}">Delete</a>
// </div> */}
