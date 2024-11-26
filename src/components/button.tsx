import { PropsWithChildren } from 'react';

// Types
interface Props {
  border: string;
  color: string;
  height: string;
  radius: string;
  width: string;
  onClick: () => void;
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
