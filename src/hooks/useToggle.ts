import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isActive, setIsActive] = useState(initialState);

  const toggle = useCallback(() => setIsActive((oldState) => !oldState), []);

  return [isActive, toggle];
};
