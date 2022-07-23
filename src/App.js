import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
  };
  return (
    <div className='app'>
      <label htmlFor='name'>Name</label>
      <input id='name' value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type='submit'
        disabled={name === '' || email === ''}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
