import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles/Style';

const Calculator = () => {
  const [resultText, setResultText] = useState('');
  const [calcText, setCalcText] = useState('');

  const onButtonClick = text => {
    //console.log(text);
    if (text == '=') {
      return calculation();
    }
    setResultText(resultText + text);
  };

  const calculation = () => {
    setCalcText(eval(resultText));
  };

  const onOperationClick = text => {
    if (text == 'AC') {
      setResultText('');
      setCalcText(0);
      return;
    }

    if (text == 'DEL') {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1),
      );
    }
    //console.log(text);
    setResultText(resultText + text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calcText}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(1);
              }}>
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(2);
              }}>
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(3);
              }}>
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(4);
              }}>
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(5);
              }}>
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(6);
              }}>
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(7);
              }}>
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(8);
              }}>
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(9);
              }}>
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick('.');
              }}>
              <Text style={styles.number}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(0);
              }}>
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onButtonClick('=');
              }}>
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('DEL');
            }}>
            <Text style={styles.operationButtons}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('AC');
            }}>
            <Text style={styles.operationButtons}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('+');
            }}>
            <Text style={styles.operationButtons}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('-');
            }}>
            <Text style={styles.operationButtons}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('*');
            }}>
            <Text style={styles.operationButtons}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onOperationClick('/');
            }}>
            <Text style={styles.operationButtons}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calculator;
