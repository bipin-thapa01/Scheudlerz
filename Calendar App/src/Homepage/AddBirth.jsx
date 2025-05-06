function AddBirth({ getBirthDate }) {
  function registerBirthDate(value) {
    getBirthDate(value);
    localStorage.setItem('birthData', value);
  }

  return (
    <>
      <input type="date" name="birthDate" id="birthDate" />
      <button type="submit" id="birthDateSubmit" onClick={() => { registerBirthDate(document.getElementById('birthDate').value) }}>Submit</button>
    </>
  );
}

export default AddBirth;