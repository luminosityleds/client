import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const ICON = 'icon';

type Props = {};

const Footer = (props: Props) =>{
  const flexBetween = "flex justify-evenly";
  return <nav> 
{/* flex justify-between flex-row inset-x-0 bottom-12 f */}
          <div className = "flex justify-between position:static py-8 pt-4 text-footerFontSize">
            <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4  text-footer-textSize  ">
              <FontAwesomeIcon icon={icon({name: 'info-circle'})} />
              <h1>About</h1>
            </a>
            <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4 text-footer-textSize ">
              <FontAwesomeIcon icon={icon({name: 'users'})} />
              <h1>Team</h1>
            </a>
            <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4 text-footer-textSize  ">
              <FontAwesomeIcon icon={icon({name: 'github', style: 'brands', })} /> 
              <h1>GitHub</h1>
            </a>
            <a href="#" className="  hover:text-footer-blue hover:stroke-footer-blue  flex items-center py-2 px-2 text-footer-textSize  ">
              <FontAwesomeIcon icon={icon({name: 'lightbulb', style: 'regular'})} />
              <h1>What's New</h1>
            </a>
            <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4 text-footer-textSize  ">
              <FontAwesomeIcon icon={icon({name: 'discord', style: 'brands'})} /> 
              <h1>Discord</h1>
            </a>
          </div>
    </nav>
};

  export default Footer;