const domElemnts = {
    inputEmailWrapp: document.getElementById('inputEmailWrapp'),
    inputEmail: document.getElementById('inputEmail'),
    btnSearch: document.getElementById('btnSearch'),
    resultsTitle: document.getElementById('resultsTitle'),
    informationAddress: document.getElementById('informationAddress'),
    informationEmail: document.getElementById('informationEmail'),
    informationNumbers: document.getElementById('informationNumbers'),
    informationRelatives: document.getElementById('informationRelatives'),
    personName: document.getElementById('personName'),
    personLast: document.getElementById('personLast'),
    personAge: document.getElementById('personAge'),
    personDescription: document.getElementById('personDescription'),
  };
  
  const apiHandler = (user) => { 
    fetch(`https://ltv-data-api.herokuapp.com/api/v1/records.json?email=${user}`)
      .then(response => response.json())
      .then(data => {
        let myData = data;

        if (myData === undefined || myData.length == 0) {
          domElemnts.resultsTitle.textContent = '0 Results';
        } else {
          domElemnts.resultsTitle.textContent = '1 Result';
          domElemnts.personName.textContent = myData.first_name;
          domElemnts.personLast.textContent = myData.last_name;
          domElemnts.personDescription.textContent = myData.description;
          domElemnts.personAge.textContent = myData.age;
          domElemnts.informationAddress.textContent = myData.address;
          domElemnts.informationEmail.textContent = myData.email;
          domElemnts.informationNumbers.textContent = myData.phone_numbers;
          domElemnts.informationRelatives.textContent = myData.relatives;

        }
      });
  } 
  
  let userEmail = 'doesmith@example.com'
  
  const ckechEmail = email => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  let search = () => {
    userEmail = domElemnts.inputEmail.value;
  
    if (ckechEmail(userEmail)) {
      apiHandler(userEmail);

      // location.replace("./results.html")
    } else {
      domElemnts.inputEmailWrapp.classList.add('search__input--error');
    }
  }
  
  domElemnts.btnSearch.addEventListener('click', search);