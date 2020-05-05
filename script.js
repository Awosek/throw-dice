function kostka(){

  var rzut = Math.floor(Math.random() * 6 + 1  );

  console.log(rzut); //Dla upewnienia sie ze podana wartosc zgadza sie ze stanem faktycznym

switch(rzut - 1) //Nie wiem czy to po bożemu ale tak działa od case 0 przynajmniej xd 
{
    case 0:
        rzut = "Jedyneczka - 1" + "<br>" + "<img src='images/1.jpg'>" + "<br>" + "Następnym razem będzie lepiej :) ";
        break;
      case 1:
        rzut = "Dwójeczka - 2" + "<br>" + "<img src='images/2.jpg'>" + "<br>"  + "Nie ma najgorzej ";
        break;
      case 2:
        rzut = "Trójeczka - 3" + "<br>" + "<img src='images/3.jpg'>" + "<br>"  + "Elo Elo 320. Następnym razem będzie 6! ";
        break;
      case 3:
        rzut = "Czwóreczka - 4" + "<br>" + "<img src='images/4.jpg'>" + "<br>"  + "420 ";
        break;
      case 4:
        rzut = "Piąteczka - 5" + "<br>" + "<img src='images/5.jpg'>" + "<br>"  + " High Five! ";
        break;
      case 5:
        rzut = "Szósteczka - 6" + "<br>" + "<img src='images/6.jpg'>" + "<br>"  + "WOHOHO :D ";
        break;
}
    document.getElementById('rzut').innerHTML = rzut ;
}
