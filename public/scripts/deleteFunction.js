const deleteFunction = function(id) {
  const deletions = document.getElementsByClassName(`delete`);
  // const dropdowns = document.getElementsByClassName(`dropdown-content`);

  for (let i = 0; i < deletions.length; i++) {
    let deleteFromDb = document.getElementsByClassName(`delete ${id}`);
    console.log(deleteFromDb[0]);
    $.ajax({
      method: "POST",
      url: `/home/delete/${deleteFromDb[0]}`,
    })
      .then((result) => {
        console.log("result--------", result);
        location.replace('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
