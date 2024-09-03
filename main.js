function calculateLove() {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;

  if (name1 === '' || name2 === '') {
      alert('Please enter both names.');
      return;
  }

  const randomPercentage = Math.floor(Math.random() * 101); //Will help to generate a random number between 0 and 100
  const resultText = `${name1} and ${name2} are ${randomPercentage}% match!!`;

  document.getElementById('result').innerText = resultText;
}


