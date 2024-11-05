const form = document.getElementById('user-info');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let errorFound = false;

  const formData = new FormData(this);

  const fullName = formData.get('name');
  if (fullName.length === 0) {
    document.getElementById('name-error').textContent = "Please enter your name";
    errorFound = true;
  } else {
    document.getElementById('name-error').textContent = "";
  }

  const age = formData.get('ageGroup');
  if (!age) {
    document.getElementById('age-error').textContent = "Please select an age group";
    errorFound = true;
  } else {
    document.getElementById('age-error').textContent = "";
  }

  const browsers = formData.getAll('browserChoice');
  if (browsers.length === 0) {
    document.getElementById('browser-error').textContent = "Please select a browser";
    errorFound = true;
  } else {
    document.getElementById('browser-error').textContent = "";
  }

  const genre = formData.get('movies');
  if (!genre) {
    document.getElementById('movie-error').textContent = "Please select a genre";
    errorFound = true;
  } else {
    document.getElementById('movie-error').textContent = "";
  }

  if (!errorFound) {
    document.getElementById('form-result').textContent = "Thanks, your data was submitted!"
  }
});

form.addEventListener('reset', function(e) {
    document.getElementById('form-result').textContent = "";
    document.getElementById('movie-error').textContent = "";
    document.getElementById('browser-error').textContent = "";
    document.getElementById('name-error').textContent = "";
    document.getElementById('age-error').textContent = "";
})