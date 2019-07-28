import React from 'react'
import QuantityInput from './QuantityInput '
import '../css/SelectList.css'

class SelectList extends React.Component {
    state = {
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        valueSelect: 0
    }
    handleChange = (e) => {
        this.setState({valueSelect: e.target.value})
    }

    renderComponent = (valueSelect) => {
        if(valueSelect >9 && valueSelect < 11){
            return <QuantityInput addItem={this.addToData} data={this.state.data} />
        }
        return <div></div>
    }

    addToData = (newNumber) => {
        if(!newNumber && newNumber !== 0){
            alert('Please enter a number')
            return false         
        }

        else if(this.state.data.includes(newNumber)){
            alert('That number already exists')
            return false
        }

        else{
            this.setState({ data: [...this.state.data, newNumber].sort((a,b) => a-b) });
        }
        return true
    }

    render(){
        return (
            <div className='listAndUpdateHolder'>
                <div className='listHolder'>
                    <h4 className='title'>Quantity</h4>
                    <select 
                        value={this.state.valueSelect} 
                        onChange={this.handleChange} 
                        className='selectInput'
                    >
                        {this.state.data.map((num,index) => <option key={index} value={num}>{num === 10 ? num + '+' : num}</option>)}
                    </select>
                </div>
                    <>{this.renderComponent(this.state.valueSelect)}</>
            </div>
        )
    }
}

export default SelectList