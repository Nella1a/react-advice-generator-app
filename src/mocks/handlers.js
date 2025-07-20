import '@testing-library/jest-dom';
import 'whatwg-fetch'; // For fetch in jsdom
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://api.adviceslip.com/advice/search/love', () => {
    return HttpResponse.json({
      total_results: '3',
      query: 'love',
      slips: [
        {
          id: 101,
          advice: 'Always do anything for love.',
          date: '2015-12-08',
        },
        { id: 174, advice: 'Be a good lover.', date: '2014-06-03' },
        {
          id: 184,
          advice: 'Take a chance on doing what you love.',
          date: '2017-03-10',
        },
      ],
    });
  }),
  http.get('https://api.adviceslip.com/advice', () => {
    return HttpResponse.json({
      slip: {
        id: 224,
        advice: 'Mocked random advice.',
      },
    });
  }),
];
