import { FC, PropsWithChildren } from "react";

export type FCC<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Props extends Record<string, any> = Record<string, any>,
> = FC<PropsWithChildren<Props>>;
