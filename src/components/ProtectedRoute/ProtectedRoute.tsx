import React from "react";
import { Route, RouteProps } from "react-router-dom";
import useRouter from "use-react-router";

interface IProps {
  condition: boolean;
  path: string;
  fallbackPath: string;
}

export default function ProtectedRoute({
  condition,
  fallbackPath,
  ...rest
}: IProps & RouteProps) {
  const { history } = useRouter();

  if (!condition) {
    history.replace(fallbackPath);
  }

  return <Route {...rest} />;
}
