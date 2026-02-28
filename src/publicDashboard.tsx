import type { Bandit } from "./App"
interface BanditProps {
    bandit:Bandit[]
    setList:React.Dispatch<React.SetStateAction<Bandit[]>>;
}

export function PublicDashboard({bandit, setList}:BanditProps):React.JSX.Element {

    return (
        <>
            <h1>Public Dashboard</h1>
            <p>Welcome to the Public Dashboard! Here you can view public information and stay updated on the latest news.</p>
            
        </>
    )
}