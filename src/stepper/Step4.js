import React from 'react';

class Step4 extends React.Component {

    constructor(props) {
        super(props);
        this.book = this.book.bind(this)
    }


   book(){
    alert('booked successfully')
   }

  render() {
  debugger
  const {username, email, phone} = this.props.formData.step1;
  const {notwell} = this.props.formData.step2;
  const {modeofpayment} = this.props.formData.step3;
  const btnDisabled = username && email && phone;
    return (<div className="text-center">
                        <h2>Review</h2>

                        <div className="review step1">
                            <h4>Step1 <i className="fa fa-pencil-square-o icon"
                                        aria-hidden="true"
                                        onClick={()=> this.props.setActiveStep(1)}></i>
                            </h4>
                            {!username && !email && !phone &&
                                <p> {`Please fill up details on step1 in order to submit`}</p>
                            }

                            {username &&
                            <div>
                                <span>Name: </span>
                                {username}
                              </div>
                             }
                             {email &&
                              <p>
                                  <span>Email: </span>
                                  {this.props.formData.step1.email}
                                </p>
                              }
                              {phone &&
                              <p>
                                  <span>Mobile: </span>
                                  {this.props.formData.step1.phone}
                                </p>
                                }
                          </div>

                          <div className="review step2">
                              <h4>Step2 <i className="fa fa-pencil-square-o icon"
                                            aria-hidden="true"
                                            onClick={()=> this.props.setActiveStep(2)}></i>
                              </h4>


                              <p>
                                  <span>Not well since: </span>
                                  {`${this.props.formData.step2.notwell} days`}
                                </p>

                            </div>

                            <div className="review step3">
                                <h4>Step3 <i className="fa fa-pencil-square-o icon"
                                                aria-hidden="true"
                                                onClick={()=> this.props.setActiveStep(3)}></i>
                                </h4>
                                 <p>
                                  <span>Mode of payment: </span>
                                  {this.props.formData.step3.modeofpayment}
                                </p>
                              </div>
                              <button disabled={!btnDisabled}
                               title= "Fill all values in step1 to enable submit"
                              type="button" class="btn btn-success" onClick={this.book}>Submit</button>

                    </div>)
  }
}

export default Step4