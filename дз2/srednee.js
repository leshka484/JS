var term = {
    Canada:10,
    Russia:15,
    Germany:13,
    Spain:22,
    Belarus:25, 
}
var srednee = 0
var srednee2 = 0

for(key in term)
{ 
    srednee +=term[key]
    srednee2++
}
srednee/= srednee2
alert('Среднее знаение температуры: ' + srednee)