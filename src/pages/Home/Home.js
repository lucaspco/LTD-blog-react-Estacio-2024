import style from './Home.module.css';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <img src={require("./imagen-prato.jpeg")} alt="prato"/>
        </div>
    )
}
export default Home;