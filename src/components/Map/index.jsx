import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

const MapContainer = (props) => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;

  useEffect(() => {
    if (query) {
      searchByQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (placeId) {
      restaurantDetail(placeId);
    }
  }, [placeId]);

  function restaurantDetail() {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurant(null));
    const request = {
      placeId,
      fields: [
        'name',
        'opening_hours',
        'formatted_address',
        'formatted_phone_number',
      ],
    };

    service.getDetails(request, (res, stats) => {
      if (stats === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(res));
      }
    });
  }

  function searchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));
    const request = {
      location: map.getCenter(),
      radius: '3000',
      type: ['restaurant'],
      keyword: query,
    };

    service.nearbySearch(request, (res, stats) => {
      if (stats === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(res));
      }
    });
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispatch(setRestaurants([]));
    const request = {
      location: center,
      radius: '3000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (res, stats) => {
      if (stats === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(res));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}
    >
      {restaurants.map((el) => (
        <Marker
          name={el.name}
          position={{
            lat: el.geometry.location.lat(),
            lng: el.geometry.location.lng(),
          }}
          key={el.place_id}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'en-US',
})(MapContainer);
