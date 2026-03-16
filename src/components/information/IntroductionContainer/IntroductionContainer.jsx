import styles from "./IntroductionContainer.module.css";
import IntroductionAvatar from "../../smallcomponents/Introduction/IntroductionAvatar/IntroductionAvatar.jsx"
import IntroductionWelcome from "../../smallcomponents/Introduction/IntroductionWelcome/IntroductionWelcome.jsx"

function IntroductionContainer() {

    return (
        <div className={styles.introductionContainer}>
            <IntroductionAvatar />
            <IntroductionWelcome />
        </div>
    );
}

export default IntroductionContainer;