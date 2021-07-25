import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyComponent = () => {
  const openMenu = () => console.log('Menu Opened');

  const _handleSearch = () => console.log('Search');

  return (
    <Appbar.Header>
      <Appbar.Action icon={"menu"} onPress={openMenu} />
      <Appbar.Content title="BD Medical Jobs" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default MyComponent;