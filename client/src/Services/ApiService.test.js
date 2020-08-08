function getFilterPlants(
  difficulty,
  type,
  light,
  water,
  humidity,
  airPurifying
) {
  return fetch(
    'http://localhost:3001/plants/filter/?difficulty=${difficulty}&type=${type}&light=${light}&water=${water}&humidity=${humidity}&airPurifying=${airPurifying}'
  ).then((response) => response.json());
}

describe('get my plants', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('calls API and returns the match based on filtering criteria', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getFilterPlants(
      'low',
      'Cacti and succulent',
      'low',
      '14 days',
      'low',
      'true'
    ).then((res) => {
      expect(res.data).toEqual('12345');
    });

    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      'http://localhost:3001/plants/filter/?difficulty=${difficulty}&type=${type}&light=${light}&water=${water}&humidity=${humidity}&airPurifying=${airPurifying}'
    );
  });
});
