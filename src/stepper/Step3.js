import React from 'react';



class Step3 extends React.Component {

  constructor(props) {
    super(props);
    debugger
    this.state = {
        value: this.props.formData.modeofpayment,
          startDate: new Date(),
          format: "YYYY-MM-DD",
          inputFormat: "DD/MM/YYYY",
          mode: "date"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillReceiveProps(nextProps) {
      this.setState({
         modeofpayment: nextProps.formData.modeofpayment,
       });
    }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.setPayment(event.target.value)
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div className="text-center">
                    <h2>Slot and Payment</h2>




                    <div className="form-group row">
                        <label>
                                  Mode of payment: </label>
                                  <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="cash">Cash</option>
                                    <option value="card">Card</option>
                                    <option value="online">Online</option>

                                  </select>
                             <div></div>
                            <button type="button" class="btn btn-success" onClick={() => this.props.setActiveStep(2)}>Prev</button>
                            <button type="button" class="btn btn-success" onClick={() => this.props.setActiveStep(4)}>Next</button>
                      </div>

                </div>
      )
  }
}

export default Step3