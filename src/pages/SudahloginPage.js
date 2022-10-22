import { useNavigate } from "react-router-dom";

function SudahloginPage(props) {
    // protected route
    const navigate = useNavigate()

    const signOut = () => {
        localStorage.removeItem("access_token");
        navigate("/signup");
    };
    
    return (
        <div>
            Sudah login
            <button onClick={signOut}>SIGN OUT</button>
        </div>
    );
}

export default SudahloginPage;