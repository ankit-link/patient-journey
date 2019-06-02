import React from 'react';

class Step2 extends React.Component {

   constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state= {
        notwell: this.props.formData.notwell
    }
   }

   componentWillReceiveProps(nextProps) {
        this.setState({
           notwell: nextProps.formData.notwell,
         });
      }

   handleChange(event) {
        debugger;
           const field = event.currentTarget.name;
           const val =  event.target.value
           switch(field) {
               case "notwell":
                   this.setState({ notwell: val })
                   this.props.setStep2(field, val)
                   break;
           }
        }

  render() {
    return (
        <div className="text-center">
                    <h2>Symptoms</h2>

                    <div className="form-group row">

                    <p>
                                        <label>Not well Since</label>

                                        <input  type="number"
                                                name="notwell"
                                                placeholder="Time in days"
                                                value={this.state.notwell}
                                                onChange={this.handleChange} />
                                      </p>


                        <button type="button" class="btn btn-success" onClick={() => this.props.setActiveStep(1)}>Prev</button>
                        <button type="button" class="btn btn-success" onClick={() => this.props.setActiveStep(3)}>Next</button>
                      </div>

                </div>
    )
  }
}

export default Step2