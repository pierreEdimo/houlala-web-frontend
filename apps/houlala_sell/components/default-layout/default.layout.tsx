import * as React from "react";
import { useRecoilState } from "recoil";
import AuthState from "../../state/auth.state";
import Login from "../login/login";
import LoginRenewState from "../../state/home.state";
import Renew from "../renew/renew";
import { HoulalaSpinner } from "ui";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const [isLoggedIn, setIsLoggin] = useRecoilState(AuthState);
  const [loading, setIsLoading] = React.useState(true);
  const [loginRenew, setLoginRenew] = useRecoilState(LoginRenewState);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (loading)
    return (
      <div>
        <HoulalaSpinner />
      </div>
    );

  return (
    <div>
      {isLoggedIn ? <div>{children}</div> : loginRenew ? <Login /> : <Renew />}
    </div>
  );
};

export default DefaultLayout;
