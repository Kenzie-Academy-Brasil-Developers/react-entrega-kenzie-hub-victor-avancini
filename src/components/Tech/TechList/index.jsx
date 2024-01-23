import { TechCard } from "../TechCard"
import { useUserContext } from "../../../providers/UserContext";
import styles from "./style.module.scss"


export const TechList = () => {
    const { techList } = useUserContext();

    return (
        <ul >
            {techList.map((tech) => (
                <TechCard key={tech.id} tech={tech}/>
            ))}
        </ul>
    )
}