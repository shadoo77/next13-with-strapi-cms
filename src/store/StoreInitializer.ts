// 'use client';

// import { useRef } from 'react';
// import { useConfigStore } from '@/store/configStore';
// import { ConfigProps } from '@/types/defaultTheme';

// function StoreInitializer({ config }: { config: ConfigProps }) {
//   const initialized = useRef(false);
//   if (!initialized.current) {
//     useConfigStore.setState((prevState) => {
//       if (!config) {
//         return { ...prevState };
//       }

//       return { ...prevState, ...config };
//     });
//     initialized.current = true;
//   }
//   return null;
// }

// export default StoreInitializer;
