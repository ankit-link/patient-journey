import React from 'react';
import logo from './logo.svg';
import Step1 from './stepper/Step1';
import Step2 from './stepper/Step2';
import Step3 from './stepper/Step3';
import Step4 from './stepper/Step4';
import StepHeader from './stepper/StepHeader';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
            step1: {
                username: '',
                phone: '',
                email: '',
                gender: 'male',
                address: ''
            },
            step2: {
                notwell: ''
            },
            step3: {
                modeofpayment: 'card'
            }
        }
        this.renderStep = this.renderStep.bind(this);
        this.setActiveStep = this.setActiveStep.bind(this);
        this.setStep1= this.setStep1.bind(this);
        this.resetSet1= this.resetSet1.bind(this);
        this.setStep2 = this.setStep2.bind(this);
        this.setPayment = this.setPayment.bind(this);
        this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(this);
        this.saveStateToLocalStorage = this.saveStateToLocalStorage.bind(this)

    }

    componentDidMount() {

          this.hydrateStateWithLocalStorage();
          window.addEventListener(
                "beforeunload",
                this.saveStateToLocalStorage.bind(this)
              );
    }

    componentWillUnmount() {
        window.removeEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );

        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
          // save to localStorage
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
      }

    hydrateStateWithLocalStorage() {
        // for all items in state
        debugger;
        for (let key in this.state) {
          // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);

            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
        }
      }

    setStep2(field, val) {

        let obj = {};
        switch(field) {
            case 'notwell':
                obj = {notwell: val}
                break;

        }
        this.setState({
            step2: {
                ...this.state.step2,
                ...obj
            }
        })

    }

    setStep1(field, val) {
        let obj = {};
        switch(field) {
            case 'name':
                obj = {username: val}
                break;
            case'phone':
                obj = { phone: val};
                break;
             case 'email':
                obj= {email: val}
                break;
             case 'address':
                obj={address: val}
                break;
            case 'gender':
                obj={gender: val}
                break;
        }
        this.setState({
            step1: {
                ...this.state.step1,
                ...obj
            }
        })
    }


    setActiveStep(stepId) {
        this.setState({
            activeTab: stepId
        })
    }


    resetSet1() {
    console.log("reset")
        this.setState({
                    step1: {
                        username: '',
                        phone: '',
                        email: '',
                        address: '',
                        gender: ''
                    }
                })
    }

    setPayment(val) {
        this.setState({
            step3: {
                modeofpayment: val
            }
        })
    }

    renderStep(stepId) {
        console.log(this.state )

        const step1props = {
            formData: this.state.step1,
            resetStep1: this.resetSet1,
            setActiveStep: this.setActiveStep,
            setStep1: this.setStep1
         };

         const step2props = {
            formData: this.state.step2,
            setStep2: this.setStep2,
            setActiveStep: this.setActiveStep
         }

         const step3props = {
            formData: this.state.step3,
            setPayment: this.setPayment,
            setActiveStep: this.setActiveStep
         }

         const step4props = {
            formData: this.state,
            setActiveStep: this.setActiveStep
         }

      switch(stepId) {
        case 1:
            return <Step1 {...step1props}/>;
         case 2:
            return <Step2 {...step2props}/>;
          case 3:
             return <Step3 {...step3props}/>;
          case 4:
             return <Step4 {...step4props}/>;
          default:
            return <Step1 />;
      }
    }

  render() {
    return (
        <div className="container">
            <StepHeader setActiveStep={this.setActiveStep} activeStep={this.state.activeTab}/>
            {this.renderStep(this.state.activeTab)}
        </div>
    )
  }
}

export default App;
