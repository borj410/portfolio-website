import styles from './StackContainer.module.css';
import * as Icons from '../../../assets/icons';

function StackContainer() {
    const stackFrontend = [
        {name: "Angular", icon: Icons.AngularIcon, color: "#DD0031"},
        {name: "Vue.js", icon: Icons.VueIcon, color: "#42b883"},
        {name: "React.js", icon: Icons.ReactIcon, color: "#61DBFB"},
    ];

    const stackBackend = [
        {name: "Entity Framework Core", icon: Icons.DotNetIcon, color: "#007ACC"},
        {name: "Spring Boot (Java)", icon: Icons.JavaIcon, color: "#6CB52D"},
    ];

    const stackMobile = [
        {name: "Kotlin", icon: Icons.KotlinIcon, color: "#B125EA"},
        {name: "Flutter", icon: Icons.FlutterIcon, color: "#027DFD"}
    ];

    const stackDatabase = [
        {name: "MySQL", icon: Icons.MySQLIcon, color: "#00758f"},
        {name: "SQL Server", icon: Icons.SQLServerIcon, color: "#EC9700"},
    ];

    const stackDevOps = [
        {name: "Git", icon: Icons.GitHubIcon, color: "#5C6BC0"},
        {name: "Docker", icon: Icons.DockerIcon, color: "#0db7ed"}
    ];

    const stackDesign = [
        {name: "Figma", icon: Icons.FigmaIcon, color: "#ffffff"},
    ];

    const stackOther = [
        {name: "C++", icon: Icons.CPlusPlusIcon, color: "#659AD2"},
        {name: "C#", icon: Icons.CSharpIcon, color: "#953DAC"},
        {name: "Python", icon: Icons.PythonIcon, color: "#3776AB"}
    ];

    const categories = [
        {name: "Frontend", stack: stackFrontend, color: "#61DBFB"},
        {name: "Backend", stack: stackBackend, color: "#007ACC"},
        {name: "Mobile", stack: stackMobile, color: "#FF6B6B"},
        {name: "Database", stack: stackDatabase, color: "#4ECDC4"},
        {name: "Dev Ops", stack: stackDevOps, color: "#FFE66D"},
        {name: "Design & UX", stack: stackDesign, color: "#F24E1E"},
        {name: "Other", stack: stackOther, color: "#A0D2EB"}
    ]

    return (
        <section 
            className={styles.stackContainer} 
            aria-labelledby="stack-main-title"
        >
            <header className={styles.stackHeader}>
                <h2 id="stack-main-title" className={styles.stackTitle}>
                    TECHNOLOGY_STACK
                </h2>
            </header>

            <div className={styles.stackList} role="list">
                {categories.map((category, index) => (
                    <section 
                        key={index} 
                        className={styles.stackCategoryContainer}
                        role="listitem"
                        aria-labelledby={`category-${index}`}
                    >
                        <h3 
                            id={`category-${index}`} 
                            className={styles.stackCategory} 
                            style={{color: category.color}}
                        >
                            {category.name}
                        </h3>

                        <div className={styles.stackItemsContainer} role="list">
                            {category.stack.map((tech, techIndex) => (
                                <div 
                                    key={techIndex} 
                                    className={styles.stackItem} 
                                    style={{ '--tech-color': tech.color, borderColor: tech.color }}
                                    role="listitem"
                                >
                                    <img 
                                        src={tech.icon} 
                                        alt=""
                                        aria-hidden="true" 
                                        className={styles.stackIcon} 
                                        width='25px' 
                                        height='25px'
                                    />
                                    <p className={styles.stackName}>{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}

export default StackContainer;