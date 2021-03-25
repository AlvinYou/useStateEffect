# useStateEffect
<!-- useStateEffect는 데이터를 동기화 해줄 수 있는 Hooks이다. 상속 받은 데이터(Props or useSelector...)를 컴포넌트 내에서 간편하게 재가공할 때 사용한다. -->
useStateEffect is Hooks that can synchronize data. It is used to easily reprocess the inherited data (Props or useSelector...) within the component.

## Install with npm
``` bash
$ npm install use-state-effect
# or 
$ yarn add use-state-effect
```

## Example
```typescript
import useStateEffect from 'use-state-effect';

// original code
const Component = ({ list }) => {
  const [filteredList, setFilteredList] = useState(list.filter(v => v.visible));
  
  useEffect(() => {
    setFilteredList(list.filter(v => v.visible);
  }, [list]);

  ...
}

// with useStateEffect
const Component = ({ list }) => {
  const [filteredList, setFilteredList] = useStateEffect(() => list.filter(v => v.visible), [list]);

  ...
}
```


```typescript
import useStateEffect from 'useStateEffect';

// original code
const Component = () => {
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight));
  
  useEffect(() => {
    setCurrentHeight(() => window.innerHeight);
  }, []);

  ...
}

// with useStateEffect
const Component = () => {
  const [currentHeight] = useStateEffect(() => window.innerHeight), [window.innerHeight]);
  
  ...
}
```

```typescript
import useStateEffect from 'useStateEffect';

// original code
const Component = ({ user }) => {
  const userId = user.id; 

  ...
}

// with useStateEffect
const Component = ({ user }) => {
  const [userId] = useStateEffect(() => user.id), [user.id]);
  
  ...
}

```
