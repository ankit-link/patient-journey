import React from 'react';

class Step1 extends React.Component {

   constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
        username: this.props.formData.username,
        phone: this.props.formData.phone,
         email: this.props.formData.email

    }
   }

   componentWillReceiveProps(nextProps) {
   debugger
     this.setState({
        username: nextProps.formData.username,
        phone: nextProps.formData.phone,
        email: nextProps.formData.email

      });
   }

   handleChange(event) {
        console.log("changed")
        debugger
        const field = event.currentTarget.name;
        const val =  event.target.value
        switch(field) {
            case "name":
                this.setState({ username: val })
                this.props.setStep1(field, val)
                break;
            case "phone":
                this.setState({ phone: val })
                this.props.setStep1(field, val)
                break;
            case "email":
                this.setState({ email: val })
                this.props.setStep1(field, val)
                break


        }

     }



  render() {
    return (
        <div className="text-center">
            <h2>Patient Details</h2>

            <div className="form-group row">
                <p>
                    <label>Name</label>
                    <input  type="text"
                            name="name"
                            value={this.state.username}
                            onChange={this.handleChange} />
                  </p>
                   <p>
                    <label>Mobile number</label>
                    <input type="tel"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                     />
                  </p>
                  <p>
                      <label>Email</label>
                      <input type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required />
                    </p>

                    <button type="button" class="btn btn-primary" onClick={this.props.resetStep1}>Reset</button>
                    <button type="button" class="btn btn-success" onClick={() => this.props.setActiveStep(2)}>Next</button>
              </div>

        </div>
       )
  }
}

export default Step1