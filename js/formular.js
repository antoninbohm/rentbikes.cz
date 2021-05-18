
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      var x = document.forms["my-form"]["Jmeno"].value;
      if (x == "") {
        alert("Vyplňte prosím všechna políčka");
        return false;
        }
      var y = document.forms["my-form"]["Email"].value;
      if (y == "") {
        alert("Vyplňte prosím všechna políčka");
        return false;
        }
      var v = document.forms["my-form"]["Telefon"].value;
      if (v == "") {
          alert("Vyplňte prosím všechna políčka");
          return false;
          }
    
      else
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Děkujeme, rezervace proběhla úspěšně!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Něco se pokazilo :("
      });
    }
    form.addEventListener("submit", handleSubmit);