import { FC, ReactElement } from "react";

type Props = {
  /**
   * A flag that disables the injection of the `react-scan` script when set to `true`.
   * @default false
   */
  disable?: boolean;
};

/**
 * ReactScan is a React functional component that conditionally injects the `react-scan` script
 * into the document `<head>` element. It is intended to be used only in development environments.
 *
 * @component
 * @param {Object} props - The properties for the ReactScan component.
 * @param {boolean} [props.disable=false] - When set to `true`, prevents the script from being injected.
 * @returns {JSX.Element|null} A `<head>` element containing the script tag if conditions are met, otherwise `null`.
 *
 * @example
 * // Example usage in a development-only context:
 * import { ReactScan } from "./ReactScan";
 *
 * const App = () => {
 *   return (
 *     <>
 *       <ReactScan disable={false} />
 *
 *       <body>Application Body</body>
 *     </>
 *   );
 * };
 */

export const ReactScan: FC<Props> = ({ disable = false }): ReactElement | null => {
  if (process.env.NODE_ENV === "production" || disable) return null;

  return (
    // eslint-disable-next-line @next/next/no-head-element
    <head>
      <script src="https://unpkg.com/react-scan/dist/auto.global.js" async />
    </head>
  );
};
