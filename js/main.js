var lat, lng , _lat , _lng ;
var bandera = false;
/*$( document ).ready( ( event ) => {});*/
window.addEventListener('load',initMap);

function initMap(){

	var myCoord1 = [
		 {
			"name" : "sanblas",
			"latitud":"19.6598863",
			"longitud":"-99.16479"
		 },
		 {
			"name": "misiones",
			"latitud":"19.6585236",
			"longitud":"-99.1657627"	
		 },
		 {
			"name":"santaElena",
			"latitud":"19.6712986",
			"longitud":"-99.1555581"	
		 }
	];//end json

	
		lat = "19.6622991";
		lng = "-99.1631242";		
		
		var myLoc = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));

		var option = {
			center: myLoc,
			zoom:16,
		}

		var map = new google.maps.Map(document.getElementById('map'),option);

		var positionMarker = {
			position: myLoc,
	      	map: map
		}

		 var marker = new google.maps.Marker(positionMarker);

	
		$('select').change( function(){
			var indice = $('select option:selected').val();
			var indice = indice - 1;
			
			for(item in myCoord1)
			{

				if( item == indice ){
					 _lat = myCoord1[item].latitud;
					 _lng = myCoord1[item].longitud; 
					
				}//end if
				
			}//end for

			lat = _lat;
			lng = _lng;		
			
			var myLoc = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));

			var option = {
				center: myLoc,
				zoom:16,
			}

			var map = new google.maps.Map(document.getElementById('map'),option);

			var positionMarker = {
				position: myLoc,
		      	map: map
			}

			 var marker = new google.maps.Marker(positionMarker);

			 bandera = true;
		});//end change
		
}//end function



