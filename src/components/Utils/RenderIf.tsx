import { FC } from 'react';

interface IProps {
  condition: boolean;
  fallback?: any;
}

const RenderIf: FC<IProps> = ({ condition, children, fallback = null }) => {
  return condition ? children : fallback;
};

export default RenderIf;
