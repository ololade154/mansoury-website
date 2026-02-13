import Twitter from '../utilities/Twitter';
import FaceBook from '../utilities/FaceBook';
import LinkedinIcon from '../utilities/LinkedinIcon';
import InstagramIcon from '../utilities/InstagramIcon';
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:justify-between md:gap-24 gap-10 py-12 px-8 md:py-10 md:px-16 ">
      <div className="w-full">
        <div>
          <h1 className="mb-6  montserrat font-bold text-[20px]">
            Stay Connected
          </h1>
          <p className="mb-1 montserrat text-[14px]">
            Address: Instabul, Turkey
          </p>
          <p className="mb-1 montserrat text-[14px]">Phone: (+90)985 98 75</p>
        </div>
        <div className="md:mt-2 mt-6">
          <h2 className="md:mb-3 mb-3 montserrat font-semibold text-[16px]">
            Follow us on social media
          </h2>
          <div className="flex">
            <div className="icon-background-color">
              <Twitter width={18} />
            </div>
            <div className="icon-background-color">
              <FaceBook width={21} />
            </div>
            <div className="icon-background-color">
              <LinkedinIcon width={21} />
            </div>
            <div className="icon-background-color">
              <InstagramIcon width={21} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="mb-6 montserrat font-bold text-[20px]">Mansoury.</h1>
        <p className="mb-1 montserrat text-[14px]">About Us </p>
        <p className="mb-1 montserrat text-[14px]">Careers</p>
        <p className="mb-1 montserrat text-[14px]">Collaboration</p>
        <p className="mb-1 montserrat text-[14px]">Dashboard</p>
        <p className="montserrat text-[14px]">Policies</p>
      </div>
      <div className="w-full">
        <h1 className="mb-6 montserrat font-bold text-[20px]">
          Customer Services
        </h1>
        <p className="mb-1 montserrat text-[14px]">Rules and Regulations</p>
        <p className="mb-1 montserrat text-[14px]">Terms of Use</p>
        <p className="mb-1 montserrat text-[14px]">Return Procedures</p>
        <p className="mb-1 montserrat text-[14px]">Privacy Policy</p>
        <p className="montserrat text-[14px]">Forums</p>
      </div>
      <div className="w-full">
        <h1 className="mb-6 montserrat font-bold text-[20px]">Quick Access</h1>
        <p className="mb-1 montserrat text-[14px]">Contacts Us</p>
        <p className="mb-1 montserrat text-[14px]">Blogs</p>
        <p className="mb-1 montserrat text-[14px]">Returns and refunds</p>
        <p className="mb-1 montserrat text-[14px]">Track order</p>
        <p className="montserrat text-[14px]">FAQ</p>
      </div>
    </div>
  );
};
export default Footer;
