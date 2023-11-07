import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from './MyButton';
import { useState } from 'react';
import Screen from './Screen';


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
        <Screen displayValue={displayValue}></Screen>
        <View style={styles.row}>
            <MyButton onPress={() => handleNumberInput(7)} text="7"></MyButton>
            <MyButton onPress={() => handleNumberInput(8)} text="8"></MyButton>
            <MyButton onPress={() => handleNumberInput(9)} text="9"></MyButton>
            <MyButton onPress={() => handleOperatorInput('/')} text="/" isOperatorButton isOperatorTextButton></MyButton>
        </View>
        <View style={styles.row}>
            <MyButton onPress={() => handleNumberInput(4)} text="4"></MyButton>
            <MyButton onPress={() => handleNumberInput(5)} text="5"></MyButton>
            <MyButton onPress={() => handleNumberInput(6)} text="6"></MyButton>
            <MyButton onPress={() => handleOperatorInput('*')} text="x" isOperatorButton isOperatorTextButton></MyButton>
        </View>
        <View style={styles.row}>
            <MyButton onPress={() => handleNumberInput(1)} text="1"></MyButton>
            <MyButton onPress={() => handleNumberInput(2)} text="2"></MyButton>
            <MyButton onPress={() => handleNumberInput(3)} text="3"></MyButton>
            <MyButton onPress={() => handleOperatorInput('-')} text="-" isOperatorButton isOperatorTextButton></MyButton>
        </View>
        <View style={styles.row}>
            <MyButton onPress={handleClear} text="C"></MyButton>
            <MyButton onPress={() => handleNumberInput(0)} text="0"></MyButton>
            <MyButton onPress={handleEqual} text="=" isOperatorButton isOperatorTextButton></MyButton>
            <MyButton onPress={() => handleOperatorInput('+')} text="+" isOperatorButton isOperatorTextButton></MyButton>
            
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
    } 
})