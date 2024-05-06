function winingBalance(victories,defeats){
  let average = victories - defeats
 return average
}
let rank = winingBalance(300,45)

function nivel(result){
  if(result < 10){
    return( 'classe ferro')
  }else if(result >= 11 && result <= 20){
    return( 'classe bronze')
  }else if(result >= 21 && result <= 50){
    return( 'classe prata')
  }else if(result >= 51 && result <= 80){
    return( 'classe ouro')
  }else if( result >= 81 && result <= 90){
    return( 'classe diamante')
  }else if( result >= 91 && result <= 100){
    return( 'classe lendário')
  }else{
    return( 'classe imortal')
  }
  
}

let balance = nivel(rank)




console.log(
`O Herói tem de saldo de ${rank} está no nível de ${balance}`

)






