import "./AddBirth.css"

function AddBirth({ getBirthDate }) {
  function registerBirthDate(value) {
    getBirthDate(value);
    localStorage.setItem('birthData', value);
  }

  return (
    <div id="container">
      <div id="text">Enter your birth date:</div>
      <input type="date" name="birthDate" id="birthDate" />
      <button type="submit" id="birthDateSubmit" onClick={() => { registerBirthDate(document.getElementById('birthDate').value) }}>Submit</button>
    </div>
  );
}

export default AddBirth;