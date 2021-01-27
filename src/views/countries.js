function countries(cntArray) {
  let listItems = "";

  for (let i = 0; i < cntArray.length; i++) {
    listItems += `<li>${cntArray[i].name} - ${cntArray[i].capital} - ${cntArray[i].region} - ${jezici}</li>`;
  }
  return "<ul>" + listItems + "</ul>";
}

export default countries;

/*
let jezici = "";
for (let j = 0; j < cntArray[j].languages.length; j++) {
  jezici += cntArray[i].languages[j].name;
}*/
