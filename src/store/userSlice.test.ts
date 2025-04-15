import userReducer, { setUserData, clearUserData, updateColors } from './userSlice';

const initialState = {
  firstName: '',
  lastName: '',
  country: '',
  email: '',
  primaryColor: '#0070f3',
  secondaryColor: '#7928ca',
};

describe('userSlice', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle setUserData', () => {
    const newState = {
      firstName: 'Renato',
      lastName: 'Martinez',
      country: 'Brasil',
      email: 'renato@email.com',
      primaryColor: '#ff0000',
      secondaryColor: '#00ff00',
    };

    expect(userReducer(initialState, setUserData(newState))).toEqual(newState);
  });

  it('should handle clearUserData', () => {
    const currentState = {
      firstName: 'João',
      lastName: 'Silva',
      country: 'Portugal',
      email: 'joao@email.com',
      primaryColor: '#111',
      secondaryColor: '#222',
    };

    expect(userReducer(currentState, clearUserData())).toEqual(initialState);
  });

  it('should handle updateColors', () => {
    const currentState = {
      ...initialState,
      firstName: 'Maria',
      email: 'maria@email.com',
    };

    const updated = userReducer(
      currentState,
      updateColors({ primaryColor: '#123456', secondaryColor: '#abcdef' })
    );

    expect(updated.primaryColor).toBe('#123456');
    expect(updated.secondaryColor).toBe('#abcdef');
    expect(updated.firstName).toBe('Maria');
  });
});
