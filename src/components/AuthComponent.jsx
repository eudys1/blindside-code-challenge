import { useEffect, useState } from "react";


export default function AuthComponent({children}) {
    const [isAuth, setIsAuth] = useState(false);
    const [passwd, setPasswd] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => (

        passwd == "12345" ?
            (setIsAuth(true), sessionStorage.setItem("signed", "true"), setError(""))
            :
            (setIsAuth(false), setError("Wrong password, try again"),document.getElementsByTagName("input")[0].value = "")
    )


    useEffect(() => {
        const signed = sessionStorage?.getItem("signed");
        setIsAuth(signed === "true");

    }, []);


    return (
        <div>
            {isAuth ? children :
                <div className="max-w-2xl mx-auto flex flex-row md:flex-col text-center mt-10">
                    <p className="py-5">Type the password to see the proyect ;)</p>
                    <div className="m-5 flex flex-col md:flex-row gap-4 items-center justify-center">
                        <label>Password:
                            <input type="password" name="passwd" value={passwd} onChange={(e) => setPasswd(e.target.value)} />
                        </label>
                        <input type="submit" value="Login" onClick={handleSubmit} />
                    </div>
                    <span className="text-[#ff0000]">{error}</span>
                </div>}
        </div>
    )

}
