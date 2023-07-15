function Header(props: { background: string; text: string;}){


    return <div className="text-right p-10" style={{color: props.background, background: props.background
    }}>
        <a href="#" className="pr-8"> HOME </a>
        <a href="#"className="pr-8"> PORTFOLIO </a>
        <a href="#"className="pr-8"> CURRICULUM VITAE </a>
        <a href="#"className="pr-8"> ABOUT </a>
    </div>;
}

export default Header;
