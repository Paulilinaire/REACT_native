import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './MyButton'
import { useState } from 'react';


export default function Keypad() {
    
  const [displayValue, setDisplayValue] = useState('0'); 
  const [operator, setOperator] = useState(null); 
  const [firstValue, setFirstValue] = useState(''); 

  // number inputs
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString())
    } else {
      setDisplayValue(displayValue + num)
    }
  };

  // operator inputs 
  const handleOperatorInput = (operator) => { 
      setOperator(operator) 
      setFirstValue(displayValue)
      setDisplayValue('0')
  }; 

  // equal button
  const handleEqual = () => { 
      const num1 = parseFloat(firstValue); 
      const num2 = parseFloat(displayValue); 

      if (operator === '+') { 
          setDisplayValue((num1 + num2).toString())
      } else if (operator === '-') { 
          setDisplayValue((num1 - num2).toString())
      } else if (operator === '*') { 
          setDisplayValue((num1 * num2).toString())
      } else if (operator === '/') { 
          setDisplayValue((num1 / num2).toString())
      } 

      setOperator(null); 
      setFirstValue(''); 
  };

  // clear button  
  const handleClear = () => { 
      setDisplayValue('0') 
      setOperator(null) 
      setFirstValue('');
  }; 

  return (
    <View style={styles.buttonContainer}>

        <View style={styles.row}>
            <MyButton onPress={() => handleNumberInput(7)}><Text style={styles.buttonText}>7</Text></MyButton>
            <MyButton onPress={() => handleNumberInput(8)}><Text style={styles.buttonText}>8</Text></MyButton>
            <MyButton onPress={() => handleNumberInput(9)}><Text style={styles.buttonText}>9</Text></MyButton>
            <MyButton onPress={() => handleOperatorInput('*')}><Text style={styles.buttonText}>X</Text></MyButton>
        </View>
        <View style={styles.row}>
            <MyButton onPress={() => handleNumberInput(4)}><Text style={styles.buttonText}>4</Text></MyButton>
            <MyButton onPress={() => handleNumberInput(5)}><Text style={styles.buttonText}>5</Text></MyButton>
            <MyButton onPress={() => handleNumberInput(6)}><Text style={styles.buttonText}>6</Text></MyButton>
            <MyButton onPress={() => handleOperatorInput('-')}><Text style={styles.buttonText}>-</Text></MyButton>
        </View>
        <View style={styles.row}>
            <MyButton onPress={() => handleNumberInput(1)}><Text style={styles.buttonText}>1</Text></MyButton>
            <MyButton onPress={() => handleNumberInput(2)}><Text style={styles.buttonText}>2</Text></MyButton>
            <MyButton onPress={() => handleNumberInput(3)}><Text style={styles.buttonText}>3</Text></MyButton>
            <MyButton onPress={() => handleOperatorInput('+')}><Text style={styles.buttonText}>+</Text></MyButton>
        </View>
        <View style={styles.row}>
            <MyButton onPress={() => handleNumberInput(0)}><Text style={styles.buttonText}>0</Text></MyButton>
            <MyButton onPress={handleClear}><Text style={styles.buttonText}>C</Text></MyButton>
            <MyButton onPress={() => handleOperatorInput('/')}><Text style={styles.buttonText}>/</Text></MyButton>
            <MyButton onPress={handleEqual}><Text style={styles.buttonText}>=</Text></MyButton>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 3,
        marginBottom: 20,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    buttonText: {
        fontSize: 34, 
        color: 'black', 
    }, 
})