import { DependencyList, Dispatch, SetStateAction, useEffect, useState } from 'react';

const useStateEffect: <T>(func: () => T, deps: DependencyList) => [T, Dispatch<SetStateAction<T>>] = <T>(
  func: () => T,
  deps: DependencyList
) => {
  const [value, setValue] = useState<T>(func());
  useEffect(() => setValue(func()), deps);

  return [value, setValue];
};

export default useStateEffect;
