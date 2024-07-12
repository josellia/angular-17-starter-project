import { ModalConfig } from './modal-config';

export interface ComponentConfig {
  componentType: 'modal';
  data: ModalConfig;
  dynamicComponentType: any;
}
