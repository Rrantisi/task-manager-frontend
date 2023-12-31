import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUp extends Component {
  state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
  };

  handleChange = (evt) => {
      this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
      })
  };

  handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
          const formData = {...this.state};
          delete formData.error;
          delete formData.confirm;

          const user = await signUp(formData);
            
          this.props.setUser(user);
      } catch(error) {
          console.error(error)
          this.setState({ error: 'Sign Up Failed - Please Try Again'})
      }
  }

  render() {
      const disabled = this.state.password !== this.state.confirm;
      return (
          <div>
              <div className="form-container">
                  <form autoComplete="off" onSubmit={this.handleSubmit}>
                      <label className="form-label">Name</label>
                      <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          className="form-control"
                          required 
                      />
                      <label className="form-label">Email</label>
                      <input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          className="form-control"
                          required 
                      />
                      <label className="form-label">Password</label>
                      <input 
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          className="form-control"
                          required
                      />
                      <label className="form-label">Confirm</label>
                      <input 
                          type="password"
                          name="confirm"
                          value={this.state.confirm}
                          onChange={this.handleChange}
                          className="form-control"
                          required
                      />
                      <button type="submit" disabled={disabled} className="btn btn-outline-warning mt-2">Sign Up</button>
                  </form> 
              </div>
              <p className="text-danger">&nbsp;{this.state.error}</p>
          </div>
      )
  }
}