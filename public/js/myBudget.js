document.getElementById('budgetBtn').addEventListener('click', navigate);

function navigate() {
  console.log('clicked');
  document.location.replace('/addBudget');
}

fetch('/api/expenses')
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    console.log(results);

    let myChart = document.getElementById('myChart').getContext('2d');

    let housingArray = results.filter(
      (result) => result.expense_type === 'Housing'
    );

    let totalHousing = 0;
    housingArray.forEach((value) => {
      totalHousing = totalHousing + value.amount;
      console.log(value.amount)
    });
    

    let transportationArray = results.filter(
      (result) => result.expense_type === 'Transportation'
    );

    let totalTransportation = 0;
    transportationArray.forEach((value) => {
      totalTransportation = totalTransportation + value.amount;
    });

    let foodArray = results.filter(
      (result) => result.expense_type === 'Food'
    );

    let totalFood = 0;
    foodArray.forEach((value) => {
      totalFood = totalFood + value.amount;
      console.log(value.amount)
    });

    console.log('housing', totalHousing);
    console.log('transportation', totalTransportation);
    console.log('food', totalFood);

    let totalExpensesChart = new Chart(myChart, {
      type: 'pie', //bar, horizontal bar, pie, line, doughnut, radar, polarArea
      data: {
        labels: [
          'Housing',
          'Transportation',
          'Food',
          'Utilities',
          'Medical/Healthcare',
          'Household Items/Supplies',
          'Personal/Entertainment',
          'Misc.',
        ],
        datasets: [
          {
            label: 'Total Cost',
            data: [totalHousing, 50, 100, 1, 12, 72, 12, 45],
            // backgroundColor:"green"
            backgroundColor: [
              'green',
              'blue',
              'yellow',
              'teal',
              'red',
              'purple',
              'orange',
              'magenta'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBoarderColor: 'black',
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Expenses by type',
            fontsize: 25,
          },
          legend: {
            //display true to show. False to hide.
            display: true,
            position: 'right',
            labels: {
              fontColor: 'black',
            },
          },
        },
      },
    });
  });

//Global options (Do not work)
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = "18";
// Chart.defaults.global.defaultFontColor = "grey";

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/myBudget');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/myBudget');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
