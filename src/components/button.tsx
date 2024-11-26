import { PropsWithChildren } from 'react';

// Types
interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

export const Button = ({
  children,
  border,
  color,
  height,
  onClick,
  radius,
  width,
}: PropsWithChildren<Props>) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
