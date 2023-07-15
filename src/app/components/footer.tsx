import Image from 'next/image'
import Link from 'next/link'
import Facebook from '../images/logos/fb.svg'
import Insta from '../images/logos/ig.svg'
import Behanced from '../images/logos/behance.svg'
import Git from '../images/logos/github.svg'
import Linkedin from '../images/logos/linkedin.svg'



function Footer(){

    return <div className="p-10 pb-40 bg-white text-black">
        <div className="float-left w-1/2">
            <p> KATRINA <br /> BERNICE <br /> M. TAN </p> <br />
            <div style = {{
                display: 'grid',
                gridTemplateColumns: '25px 30px 30px 30px 20px',
            }}>
                <Link href={'https://www.youtube.com/watch?v=LTRWgZjRViw'}>
                    <Image
                        src={Facebook}
                        alt={'Facebook logo'}
                        width={20}
                        height={20}
                    />
                    
                </Link>

                <Image
                    src={Insta}
                    alt={'Facebook logo'}
                    width={20}
                    height={20}
                    objectFit={'contain'}
                />
                <Image
                    src={Git}
                    alt={'Facebook logo'}
                    width={20}
                    height={20}
                />
                <Image
                    src={Behanced}
                    alt={'Facebook logo'}
                    width={20}
                    height={20}
                />
                <Image
                    src={Linkedin}
                    alt={'Facebook logo'}
                    width={20}
                    height={15}
                />
            </div>
        </div>
        <div className="float-right w-1/2text-right pr-10">
            <a href="#" className="pr-8"> HOME </a> <br />
            <a href="#"className="pr-8"> PORTFOLIO </a> <br />
            <a href="#"className="pr-8"> CURRICULUM VITAE </a> <br />
            <a href="#"className="pr-8"> ABOUT </a> <br />
        </div>
    </div>;

}

export default Footer;