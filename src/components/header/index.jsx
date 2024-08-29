import { Button } from "../button";
import "./style.css";

export default function Header() {
    return (
        <>
            <div className={"containerHeader"}>
                <h1 className={"title"}>PDA</h1>
                <ul className={"listMenuHeader"}>
                    <li>
                        <Button title={"inscrever-se"} />
                    </li>
                    <li>
                        <Button title={"logar-se"} />
                    </li>
                    <li>
                        <Button title={"mais informacoes"} />
                    </li>
                </ul>
            </div>

        </>
    )
}