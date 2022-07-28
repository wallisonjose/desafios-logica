s = 'MCMXCIV'
arr = []
resp = 0


for (i in s){
  i = parseInt(i)
  h = i-1 // letra anterior
  j = i+1 // letra posterior
  
  switch(s[i]){
    case 'M':
        if (s[h] == 'C'){
            arr.push(900)
        } else {
            arr.push(1000)
        }
        break

    case 'D':
        if (s[h] == 'C'){
            arr.push(400)
        } else {
            arr.push(500)
        }
        break

    case 'C':
        
        if (s[h] == 'X'){
            arr.push(90)
        } else if (s[j] == 'D' || s[j] == 'M'){
            // nada 
        } else {
            arr.push(100)
        }
        break
    
    case 'L':
        if (s[h] == 'X'){
            arr.push(40)
        } else {
            arr.push(50)
        }
        break

    case 'X':
        if (s[h] == 'I'){
            arr.push(9)
        } else if (s[j] == 'L' || s[j] == 'C'){
            // acontece nada
        } else {
            arr.push(10)
        }
        break
    
    case 'V':
        if (s[h] == 'I'){
            arr.push(4)
        } else {
            arr.push(5)
        }
        break
    
    case 'I':
        if (s[j] == 'V' || s[j] == 'X'){
            // acontece nada
        } else {
            arr.push(1)
        }
        break
  }

}

console.log(arr)


for (x in arr){
  resp = resp + arr[x]
}

console.log(resp)
