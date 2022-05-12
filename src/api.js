import MOCK from './Mock.json';

const api = {
  getMock: async () => MOCK,
  getApiData: async () => {
    // 'http://localhost:3000' has been blocked by CORS policy
    try {
      const response = await fetch(
        'http://wstest.gestionersoft.com/api/TareaTurno/List',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            FechaDesde: '2019-01-01',
            FechaHasta: '2022-04-04',
            Operario: {
              id: 5,
            },
          }),
        }
      );

      const data = await response.json();

      return data;
    } catch (err) {
      throw err;
    }
  },
};

export default api;
