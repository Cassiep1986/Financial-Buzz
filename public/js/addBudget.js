const expenseFormHandler = async (event) => {
    event.preventDefault();
  
    const expense_name = document.querySelector('#expense-name').value.trim();
    const expense_type = document.querySelector('.form-select').value.trim();
    const amount = document.querySelector('#amount').value.trim();
    const date = document.querySelector('#date').value.trim();
  
    if (expense_name && expense_type && amount && date) {
      const response = await fetch(`/api/expenses`, {
        method: 'POST',
        body: JSON.stringify({ expense_name,expense_type, amount, date }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/addBudget');
      } else {
        alert('Failed to add expense');
      }
    }
  };

  const incomeFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#income-name').value.trim();
    
    const amount = document.querySelector('#amount2').value.trim();

    const date = document.querySelector('#paydate').value.trim();
  
    if (name && amount && date) {
      const response = await fetch(`/api/income`, {
        method: 'POST',
        body: JSON.stringify({ name, amount, date }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/addBudget');
      } else {
        alert('Failed to add expense');
      }
    }
  };
  
  document
  .querySelector('.expense-form')
  .addEventListener('submit', expenseFormHandler);
  
  document
  .querySelector('.income-form')
  .addEventListener('submit', incomeFormHandler);
  
    

  
    
  //   const delButtonHandler = async (event) => {
  //     if (event.target.hasAttribute('data-id')) {
  //       const id = event.target.getAttribute('data-id');
    
  //       const response = await fetch(`/api/projects/${id}`, {
  //         method: 'DELETE',
  //       });
    
  //       if (response.ok) {
  //         document.location.replace('/profile');
  //       } else {
  //         alert('Failed to delete project');
  //       }
  //     }
  //   };
  
  const form = document.querySelector('#select')
  form.addEventListener('change', e => console.log(e.target.value))
  // console.log(form.value);
//   if (option.value === housing) {

    
    
// }