/*
  Map data
*/
const mapConstants = {
  REGIONS: [
    {
      id: 'US', label: 'United States', coordinates: [39.827078, -101.850953], currency: 'USD', speed: 'MPH', distance: 'Miles', volume: 'gallon(gal)', timezone: 'GMT-4',
    },
    {
      id: 'IN', label: 'India', coordinates: [20.5937, 78.9629], currency: 'INR', speed: 'KMPH', distance: 'Kilometers', volume: 'litres(l)', timezone: 'GMT+5:30',
    },
    {
      id: 'UK', label: 'United Kingdom', coordinates: [55.3781, 3.4360], currency: 'GBP', speed: 'MPH', distance: 'Miles', volume: 'gallon(gal)', timezone: 'GMT',
    },
  ],
};

export default mapConstants;
