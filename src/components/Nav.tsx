export default function Nav() {
    return (
        <div className="navbar">
            <a href="./">
                <img className="navbar__logo" src="" alt=""></img>
            </a>
            <img className="navbar__btn" src="" alt="" />
            <div className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a className="navbar__link" href="">PokeDex</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="">About</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
