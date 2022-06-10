import { NativeModules } from 'react-native';

const { DeviceInfoModule } = NativeModules;

export interface DeviceInfoModuleType {
    getUniqueId:(str: string, callback: (error: unknown, result:string) => void) => void;
};

export default DeviceInfoModule as DeviceInfoModuleType;
