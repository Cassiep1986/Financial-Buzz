const newFormHandler = async (event) => {
    event.preventDefault();
  
    const expense_name = document.querySelector('#expense-name').value.trim();
    const amount = document.querySelector('#amount').value.trim();
    const date = document.querySelector('#date').value.trim();
  
    if (expense_name && amount && date) {
      const response = await fetch(`/api/profile`, {
        method: 'POST',
        body: JSON.stringify({ expense_name, amount, date }),
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
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);