import type {TurboModule} from 'react-native/types';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getPeerName(name: string): Promise<string>;
}

export default TurboModuleRegistry.get<Spec>('RTNSample') as Spec | null;
