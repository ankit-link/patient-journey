import React from 'react';

class StepHeader extends React.Component {

   constructor(props) {
    super(props);

   }

  render() {
    const steps= [];

     for(let i= 1; i<= 4; i++) {
        steps.push(<li className={`numberCircle ${i == this.props.activeStep ? 'active': ''}`} onClick={() => this.props.setActiveStep(i)}>{i}</li>)
    }
    return (<div className="step-header">
        <ul className="step-header-container">
            {steps}
        </ul>
    </div>)
  }
}

export default StepHeader