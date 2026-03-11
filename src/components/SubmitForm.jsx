import { useState } from 'react';

const emptyForm = { username: '', email: '', password: '', address: ''  , postcode:''};

export default function SubmitForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setFormData(emptyForm);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h2>Register</h2>

      {submitted && (
        <p className="form-success">Registration successful!</p>
      )}

      <label>
        Username
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
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
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </label>
      <label>
        Address
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
      </label>

        <label>
        Post Code
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
          placeholder="Post code"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
