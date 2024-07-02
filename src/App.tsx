import { useCallback, useEffect, useState } from 'react';
import * as S from './style';

const InternetDetected = () => {
  const [isOnline, setOnline] = useState(true);

  const updateNetworkStatus = useCallback(() => {
    setOnline(navigator.onLine);
  }, []);

  useEffect(() => {
    window.addEventListener('offline', () => updateNetworkStatus());
    window.addEventListener('online', () => updateNetworkStatus());
    return () => {
      window.removeEventListener('offline', () => updateNetworkStatus());
      window.removeEventListener('online', () => updateNetworkStatus());
    };
  }, [updateNetworkStatus]);

  if (!isOnline) {
    return (
      <S.Container type={!isOnline && 'error'}>Erro! Problema de conexão com a internet!
      </S.Container>
    );
  }
  return null;
};

export default InternetDetected;
