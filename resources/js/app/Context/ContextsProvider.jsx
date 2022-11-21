import { useContext, useState } from "react";

/**
 * import all contexts
 */
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { ContentContext } from "./ContentContext";
import { UserContext } from "./UserContext";
import { contents } from "../Content/contents";

/**
 * create custom hook which will provide all contexts
 * import this hook in any file and deconstruct it with values which are needed
 * for example:
 * const {content, theme, user} = useCustomContexts();
 */
export function useCustomContexts() {
    return {
        ...useContext(ThemeContext),
        ...useContext(LanguageContext),
        ...useContext(ContentContext),
        ...useContext(UserContext),
    };
}
/**
 * create one ContextsProvider component which takes children as parameter
 * and pass all individual context providers
 *
 * This way we can have just one Context provider in our index.jsx file
 */
export default function ContextsProvider({ children }) {
    /**
     * create object which contains different themes whit basic styling
     * we can switch between them
     */
    const themeModes = {
        lightTheme: {
            name: "lightTheme",
            color: "black",
            boxShadow: "10px 10px 40px -20px #000",
            backgroundColor: "#fff",
        },
        darkTheme: {
            name: "darkTheme",
            color: "white",
            boxShadow: "10px 10px 40px -20px #ccc",
            backgroundColor: "#333",
        },
    };
    // load all content from contents()component and put it into allContent constant
    const allContents = contents();

    //create states which will switch between the key words of corresponding objects
    const [theme, setTheme] = useState(themeModes.lightTheme);
    const [content, setContent] = useState(allContents["en"]);

    const changeLang = (lang) => {
        setContent(allContents[lang.target.value]);
    };

    const changeTheme = (chosenTheme) => {
        setTheme(themeModes[chosenTheme.target.value]);
    };

    // user states - default values
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false);

    // userData states - default values
    const [userData, setUserData] = useState({});

    const changeUserData = async () => {
        try {
            const responseUserData = await axios.get("/api/userData");
            setUserData(responseUserData.data);
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * pass all contexts values and functions in individual providers
     *  so they can be used in all children
     */
    return (
        // <UserDataContext>
        <UserContext.Provider
            value={{
                user,
                setUser,
                loadingUser,
                setLoadingUser,
                userData,
                changeUserData,
            }}
        >
            <ContentContext.Provider value={{ content }}>
                <LanguageContext.Provider value={{ changeLang }}>
                    <ThemeContext.Provider value={{ theme, changeTheme }}>
                        {children}
                    </ThemeContext.Provider>
                </LanguageContext.Provider>
            </ContentContext.Provider>
        </UserContext.Provider>
        // </UserDataContext>
    );
}
