export const BAIDU_MAP_STYLE = [
  {
    featureType: 'all',
    elementType: 'all',
    stylers: {
      lightness: 24,
      saturation: -100
    }
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: {
      color: '#0000ff',
      weight: '1',
      lightness: 24
    }
  },
  {
    featureType: 'label',
    elementType: 'labels',
    stylers: {
      visibility: 'off'
    }
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: {
      visibility: 'off'
    }
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: {
      color: '#ffffff',
      hue: '#ffffff',
      weight: '1',
      lightness: 23,
      saturation: -18,
      visibility: 'on'
    }
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: {
      color: '#cccccc',
      lightness: 18,
      saturation: -24,
      visibility: 'on'
    }
  },
  {
    featureType: 'railway',
    elementType: 'all',
    stylers: {
      visibility: 'off'
    }
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: {
      visibility: 'off'
    }
  }
];
