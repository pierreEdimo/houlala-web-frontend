import * as React from "react";
import { useRecoilState } from "recoil";
import AuthState from "../../state/auth.state";
import { UserToken } from "../../types/user.token";
import Login from "../login";
import { UserIdState } from "../../state/user.id.state";

type Props = {
    children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    const [isLoggedIn, setIsLoggin] = useRecoilState(AuthState);
    const [loading, setIsLoading] = React.useState(true);
    const [userId, setUserId] = useRecoilState(UserIdState); 

    React.useEffect(() => {
        setIsLoading(false);
        const userToken: UserToken = JSON.parse(localStorage!.getItem('userToken')!); 
        if(userToken){
            setUserId(userToken.userId!); 
            setIsLoggin(true); 
        }
    }, []);

    if (loading) return <div>...Loading</div>

    return (
        <div>
            {
                isLoggedIn ?
                    <div>{children}</div> :
                    <Login />
            }
        </div>
    );
};

export default DefaultLayout; 