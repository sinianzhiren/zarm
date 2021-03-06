import { ReactNode } from 'react';

export interface IDataSource {
  [key: string]: any;
  label: string;
  value: string;
  children: IDataSource[];
}

export type TDataSource = Pick<IDataSource, 'label' | 'value'>;

type TItemRender = (data: TDataSource) => string;

type TDisplayRender = (data: TDataSource[]) => string;

export default interface PropsType {
  prefixCls: string;
  defaultValue: ReactNode[];
  value: ReactNode[];
  displayMember: string;
  valueMember: string;
  dataSource: IDataSource[];
  title: string;
  visible: boolean;
  disabled: boolean;
  maskClosable: boolean;
  cols: number;
  labelAddon: string;
  displayRender: TDisplayRender;
  itemRender: TItemRender;
  onChangeValidate?: (v: ReactNode) => ReactNode;
  cancelText: string;
  okText: string;
  onChange?: (selected: string[]) => void;
  onOk?: (value: string[]) => void;
  onCancel?: () => void;
}
