import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [player, setPlayer] = useState('X')
  const [symbol, setSymbol] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const markSymbol = (position) => {
    if(!symbol[position]){
      let temp = [...symbol]
      temp[position] = player
      setSymbol(temp)
      if(player === 'X'){  
        setPlayer('O')
      }else{
        setPlayer('X')
      }
    }
  }

  const resetSymbol = () => {
    setSymbol([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = calculateWinner(symbol);
    if(winner === 'X'){
      alert("Player X Won!")
      resetSymbol()
    }else if(winner === 'O'){
      alert("Player O Won!")
      resetSymbol()
    }
  }, [symbol])
  return (
    <View style={styles.body}>
      <View style={styles.player}>
        <Text style={styles.turn}>Player {player}'s turn </Text>
      </View>
      <View style={styles.Container}>
        <View>
          <Pressable style={styles.box} onPress={()=>markSymbol(0)}>
            {symbol[0] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[0] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>

          <Pressable style={styles.box} onPress={()=>markSymbol(1)}>
            {symbol[1] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[1] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>

          <Pressable style={styles.box} onPress={()=>markSymbol(2)}>
            {symbol[2] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[2] === 'O' && <Text style={styles.text}>0</Text>}
            </Pressable>
        </View>

        <View>
          <Pressable style={styles.box} onPress={()=>markSymbol(3)}>
            {symbol[3] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[3] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>

          <Pressable style={styles.box} onPress={()=>markSymbol(4)}>
            {symbol[4] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[4] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>

          <Pressable style={styles.box} onPress={()=>markSymbol(5)}>
            {symbol[5] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[5] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>
        </View>

        <View>
          <Pressable style={styles.box} onPress={()=>markSymbol(6)}>
            {symbol[6] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[6] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>

          <Pressable style={styles.box} onPress={()=>markSymbol(7)}>
            {symbol[7] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[7] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>

          <Pressable style={styles.box} onPress={()=>markSymbol(8)}>
            {symbol[8] === 'X' && <Text style={styles.text}>X</Text>}
            {symbol[8] === 'O' && <Text style={styles.text}>0</Text>}
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.replay} onPress={resetSymbol}>Replay</Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff'
  },
  player: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  turn: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 100
  },
  box: {
    width: 100,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  replay: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontSize: 26,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold'
  }
})
