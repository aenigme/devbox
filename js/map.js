var Map = {
	initialize: function(element, markers) {
		if (GBrowserIsCompatible()) 
		{
			Map.map = new GMap2(document.getElementById(element));
			Map.geocoder = new GClientGeocoder();
			Map.bounds = new GLatLngBounds();

			Map.map.setUIToDefault();

			Map.recursiveAddMarkers(markers, 0);
		}  
	},

	recursiveAddMarkers: function(markers, i) {
		if (i < markers.length)
		{
			var address = markers[i].address;
			var city = markers[i].city;
			var state = markers[i].state;
			var zip = markers[i].zip_code;
			var latitude = markers[i].latitude;
			var longitude = markers[i].longitude;
			var geocode_string = address + ', ' + city + ', ' + state + ' ' + zip;

			Map.geocoder.getLatLng(geocode_string, function(point) {
				if (latitude != '' && longitude != '')
					point = new GLatLng(latitude, longitude);

				if (point)
				{
					var marker = new GMarker(point);
					var studio = markers[i];

						var str = '<p style="width: 260px; height: 80px;">' +
							'<b>' + studio.name + '</b><br />' + 
							studio.address + '<br />' + 
							studio.city + ', ' + studio.state + '  ' + studio.zip_code + '<br />';						


					if (studio.phone_number != '')
					{
						var phone_number = studio.phone_number = studio.phone_number.replace('/[^0-9]/', '');
						if (phone_number.length == 10)
						{
							var areacode = studio.phone_number.substring(0, 3);
							var exch = studio.phone_number.substring(3, 6);
							var num = studio.phone_number.substring(6, 10);
							str += "(" + areacode + ") " + exch + "-" + num + "<br />";							
						}
						else
						{
							str += phone_number + '<br />';
						}
					}

					if (studio.website)
						str += '<a href="http://' + studio.website + '/" rel="external" target="_blank">http://' + studio.website + '</a><br />';
					else if (studio.package == 'pro' && studio.slug != '')
						str += '<a href="http://fitnesstogether.com/' + studio.slug + '" target="_blank">http://fitnesstogether.com/' + studio.slug + '</a><br />';

					str += "</p>";

					GEvent.addListener(marker, "click", function() {
						marker.openInfoWindowHtml(str);
					});

					Map.map.addOverlay(marker);
					Map.bounds.extend(point);
				}
				
				i++;
				Map.recursiveAddMarkers(markers, i);
			});
		}
		else
		{
			Map.map.setCenter(Map.bounds.getCenter());
			if (markers.length == 1)
			{
				Map.map.setZoom(12);
			}
			else
			{
				Map.map.setZoom(Map.map.getBoundsZoomLevel(Map.bounds));
				Map.map.zoomOut();
			}
		}
	}
};

