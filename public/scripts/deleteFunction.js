const deleteFunction = function(id) {
  const deletions = document.getElementsByClassName(`delete`);
  // const dropdowns = document.getElementsByClassName(`dropdown-content`);
  let deleteFromDb = document.getElementsByClassName(`delete ${id}`);
  for (let i = 0; i < deletions.length; i++) {
    console.log(deleteFromDb[0].id);
  }

  const data = {
    id: deleteFromDb[0].id
  };
  if (window.confirm(`Are you sure you want to delete this credential?`)) {
    $.ajax({
      method: "POST",
      url: "/home/delete/" + deleteFromDb[0].id,
      data,
    })
      .then((result) => {
        console.log("result--------", result);
        location.replace('/home');
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    return;
  }
};
