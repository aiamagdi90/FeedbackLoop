import { useState } from 'react';

export default function SubmitForm() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' , address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert(`Submitted!\nUsername: ${formData.username}\nEmail: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Register</h2>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="assword"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
