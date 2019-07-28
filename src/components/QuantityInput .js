import React from 'react'
import '../css/QuantityInput.css'

class QuantityInput extends React.Component {
    state = { value: '' }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.value < 0){
            alert('Number must be greater than 0')
            this.setState({value: ''})
            return false
        }else{
            this.props.addItem(parseInt(this.state.value))
            this.setState({value: ''})
        }    
    }

    render(){
        return (
            <div className='quantityHolder'>
                <h4 className='title'>Quantity</h4>
                <form onSubmit={this.onSubmit} className='formHolder'>
                    <input 
                        value={this.state.value} 
                        type='number' 
                        onChange = {(e) => this.setState({value: e.target.value})} 
                        className='inputHolder'
                    />
                    <br />
                    <input type='submit' value='Update' className='submit-btn' />
                </form>
            </div>
        )
    }
}

export default QuantityInput 