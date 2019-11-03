const createCalculate = (kurs) => () => {

    
    const amount = document.getElementById('amount').value;
    const result = document.getElementById('result');
    const totalOnCard = document.getElementById('totalOnCard');
    const requiredWithdrawal = document.getElementById('requiredWithdrawal');
    let resultOne;
    let resultTwo;
    

  if (amount<=0) {
        alert ('Iznos mora biti veci od 0!');
    }

  else if(requiredWithdrawal.checked===true) {
        resultOne = Math.round((amount/kurs)*1.035+3.15);
        result.innerHTML=`Iznos koji ce vam biti skinut sa kartice je $${resultOne}`;
    } else if (totalOnCard.checked===true) {
        resultTwo = Math.round((`${amount}`*0.965-3.15)* `${kurs}`);
        result.innerHTML = `Najvise sto mozete podici je ${resultTwo},00RSD`;
    }

} 




fetch('https://free.currconv.com/api/v7/convert?q=USD_RSD&compact=ultra&apiKey=630dcd06989ddce437c4')
  .then(response => {
     return response.json();
    })
    .then(data => {
      // Work with JSON data here
      const kurs = data.USD_RSD;



     const calculate = createCalculate(kurs);

    const button = document.getElementById('calculateButton');
    button.addEventListener('click', calculate);
    button.removeAttribute('disabled');




    })
    .catch(err => {
      // Do something for an error here
      alert ('Network Error! Please use the manual input field for exchange rate!');
      document.getElementById('kurspolje').classList.remove('hidden');
      const button = document.getElementById('calculateButton');
      button.addEventListener('click', ()=>{
        const exchangeRate = document.getElementById('exchangeRate').value;
        createCalculate(exchangeRate)();
      });
      button.removeAttribute('disabled');

    }) 








   