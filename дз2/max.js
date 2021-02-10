function maximum()
{   
   var max = 0
   for(key in term)
   {
      if(max < term[key])
      {
         max = term[key]
      }
   }
   alert('Максимальное значение температуры: ' + max )
}
maximum()