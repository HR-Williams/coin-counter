export default function coinCounter(amount) {
  const dollars = Math.trunc(amount)
  const cents = (amount - dollars)*100
  if(cents === 0){
    return cents
  };
}

// cents%25 = centsLessQuarters, centsLessQuarters%10 = centsLessQuartersLessDimes, centsLessQuartersLessDimes%5 = pennies