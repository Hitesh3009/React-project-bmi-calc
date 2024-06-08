import React, { useState } from 'react';

export default function Calculator() {
    const [bmiVal, setBmiVal] = useState(0);
    const [categoryVal, setCategoryVal] = useState('');
    const [color, setColor] = useState('');

    const calcBmiAndCategory = (event) => {
        let weight = document.getElementById('Weight').value;
        let height = document.getElementById('Height').value;
        event.preventDefault();
        let bmi = weight / Math.pow(height, 2)
        if (weight && height) {
            setBmiVal(bmi.toFixed(2));
        }

        if (bmi < 18.5) {
            setCategoryVal('Based on your BMI value you are Underweight');
            setColor('primary');
        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            setCategoryVal('Based on your BMI value you are Healthy weight');
            setColor('success');
        }
        else if (bmi >= 25.0 && bmi < 29.9) {
            setCategoryVal('Based on your BMI value you are Overweight');
            setColor('orange');
        }
        else if (bmi >= 30) {
            setCategoryVal('Based on your BMI value you are Obese');
            setColor('danger');

        }
    };
    return (
        <>
            <div className="container" style={{ padding: '3rem 9rem',backgroundColor:'#f0f0f0'}}>
                <form action="#">
                    <p className='text-dark'>Weight (in Kilograms)</p>
                    <input id={'Weight'} type="number" style={{ width: '25rem', padding: '0.3rem', borderRadius: '0.5rem' }} placeholder='Enter your weight' />
                    <br />
                    <br />
                    <p className='text-dark'>Height (in metres)</p>
                    <input id={'Height'} type="number" style={{ width: '25rem', padding: '0.3rem', borderRadius: '0.5rem' }} placeholder='Enter your height' />
                    <br />
                    <br />
                    <button className="btn btn-success" id='calcBtn' onClick={calcBmiAndCategory} >Calculate</button>
                    <br />
                    <br />
                    <p id="result" className='text-dark'>Your BMI is {bmiVal}</p>
                    <p className={`text-${color}`}>{categoryVal}</p>
                </form>

            </div>
        </>
    )
}

