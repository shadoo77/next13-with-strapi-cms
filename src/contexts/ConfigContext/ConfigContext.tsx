// import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
// import { CONSTANTS } from '@/config/constants';
// import { config as defaultConfig } from '@/config';
// import { useGlobalInfo } from '@/queries/hooks/globalInfo';
// import { ConfigProps } from '@/types/defaultTheme';
// import { getParsedItemFromLocalStorageByKey, isSSR } from '@/utils';

// // ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

// const ConfigContext = createContext(defaultConfig);

// type ConfigProviderProps = {
//   children: ReactNode;
// };

// export function ConfigProvider({ children }: ConfigProviderProps) {
//   const [globalConfig, setGlobalConfig] = useState<ConfigProps>(defaultConfig);

//   const { data, isFetched } = useGlobalInfo();

//   useEffect(() => {
//     const storedConfig = getParsedItemFromLocalStorageByKey(
//       CONSTANTS.MY_APP_CONFIG_STORAGE
//     ) as ConfigProps;

//     if (storedConfig) {
//       setGlobalConfig(storedConfig);
//       return;
//     }
//   }, []);

//   useEffect(() => {
//     if (isFetched && data) {
//       const { borderRadius, fontFamily, navType, outlinedFilled, presetColor } = data;
//       setGlobalConfig((prevState: ConfigProps) => ({
//         ...prevState,
//         fontFamily: fontFamily,
//         borderRadius: borderRadius,
//         outlinedFilled: outlinedFilled,
//         navType: navType,
//         presetColor: presetColor
//       }));

//       if (!isSSR) {
//         localStorage.setItem(
//           CONSTANTS.MY_APP_CONFIG_STORAGE,
//           JSON.stringify({
//             borderRadius,
//             fontFamily,
//             navType,
//             outlinedFilled,
//             presetColor
//           })
//         );
//       }
//     }
//   }, [data, setGlobalConfig, isFetched]);

//   return <ConfigContext.Provider value={globalConfig}>{children}</ConfigContext.Provider>;
// }

// export const useConfig = () => {
//   const context = useContext(ConfigContext);

//   if (!context) throw new Error('useConfig must be use inside config provider');

//   return context;
// };
