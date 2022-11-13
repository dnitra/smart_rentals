
 import { useContext, useState } from "react";

/**
 * import all contexts
 */
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";
import { ContentContext } from "./ContentContext";

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
    ...useContext(ContentContext)
  }
}
/**
 * create one ContextsProvider component which takes childern as parameter
 * and pass all individual context providers
 * 
 * This way we can have just one Context provider in our index.jsx file
 */
export default function ContextsProvider({ children }) {
 
  /**
   * create object which contains different themes whit basic styling
   * we can switch between them
   */
 const themeModes ={
   lightTheme: {
      name:"lightTheme",
      color: "black",
      boxShadow: "10px 10px 40px -20px #000",
      backgroundColor: "#fff",
      
    },
   darkTheme: {
      name:"darkTheme",
      color: "white",
      boxShadow: "10px 10px 40px -20px #ccc",
      backgroundColor: "#333",
      
    }
  }
 
  const allContents = contents()


  

  //create states which will switch between the key words of corresponding objects
  const [theme, setTheme] = useState(themeModes.lightTheme);
  const [content, setContent] = useState(allContents["en"]);

  
  const changeLang = (lang) => {   
    setContent(allContents[lang.target.value]);
  };

  const changeTheme = (chosenTheme) => {
    setTheme(themeModes[chosenTheme.target.value]);
  };

  
/**
 * pass all contexts values and functions in individual providers
 *  so they can be used in all childern
 */
  return (
    <ContentContext.Provider value={{ content }}>
      <LanguageContext.Provider value={{ changeLang }}>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          {children}
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </ContentContext.Provider>
  );
}
