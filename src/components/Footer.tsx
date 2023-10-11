import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const ICON = 'icon';

type Props = {};

const Footer = (props: Props) =>{
  const iconStyle = { //fontAwesome Icon default styles
    fontSize: '35px',
    padding: '0.5em',
  };

  return <nav> 
      <div className = "flex justify-between position:static py-8 pt-4 text-footerFontSize">
        <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4  text-footer-textSize  ">
          <div style={iconStyle}>
            <FontAwesomeIcon icon={icon({name: 'info-circle'})} />
          </div>
          <h1>About</h1>
        </a>
        <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4 text-footer-textSize ">
          <div style={iconStyle}>
            <FontAwesomeIcon icon={icon({name: 'users'})} />
          </div>
          <h1>Team</h1>
        </a>
        <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4 text-footer-textSize  ">
          <div style={iconStyle}>
            <FontAwesomeIcon icon={icon({name: 'github', style: 'brands', })} /> 
          </div>
          <h1>GitHub</h1>
        </a>
        <a href="#" className="  hover:text-footer-blue hover:stroke-footer-blue  flex items-center py-2 px-2 text-footer-textSize  ">
          <div style={iconStyle}>
            <FontAwesomeIcon icon={icon({name: 'lightbulb', style: 'regular'})} />
          </div>
          <h1>What's New</h1>
        </a>
        <a href="#" className=" text-black hover:text-footer-blue flex items-center py-2 px-4 text-footer-textSize  ">
          <div style={iconStyle}>
            <FontAwesomeIcon icon={icon({name: 'discord', style: 'brands'})} /> 
          </div>
          <h1>Discord</h1>
        </a>
      </div>
    </nav>
};

  export default Footer;