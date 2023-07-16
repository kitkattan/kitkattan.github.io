function Header(props: { background: string; text: string;}){


    return <div className="text-right p-10" style={{color: props.text, background: props.background
    }}>
        <a href="#" className="pr-8 karla-800"> HOME </a>
        <a href="#"className="pr-8"> PORTFOLIO </a>
        <a href="#"className="pr-8"> CURRICULUM VITAE </a>
        <a href="#"className="pr-8"> ABOUT </a>
    </div>;
}

export default Header;
