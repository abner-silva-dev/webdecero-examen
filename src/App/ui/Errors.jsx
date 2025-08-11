import { useEffect } from 'react';
import { useUserStore } from '../store/auth';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function Errors() {
  const { error } = useUserStore((state) => state);

  useEffect(() => {
    if (error) {
      Toastify({
        text: error || 'An unexpected error occurred',
        duration: 4000,
        close: true,
        gravity: 'top',
        position: 'right',
        backgroundColor: '#FF4136',
        stopOnFocus: true,
        className: 'toastify-custom',
      }).showToast();
    }
  }, [error]);

  return null;
}

export default Errors;
