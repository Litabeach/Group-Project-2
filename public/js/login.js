const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector(PLACEHOLDER).value.trim();
    const password = document.querySelector(PLACEHOLDER).value.trim();
  
    if (email && password) {

      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dash');
      } else {
        alert('Failed to log in');
      }
    }
  };

  
  
  document
    .querySelector(PLACEHOLDER)
    .addEventListener('submit', loginFormHandler);
