import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">

         
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>

          <p className="text-secondary text-center sm:text-left text-sm">
            © {new Date().getFullYear()} <span className="text-primary font-medium">Ashik Mathew</span>.  
            All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-1">
            <a 
              href="https://github.com/4shikmathew" 
              target="_blank" 
              className="text-secondary hover:text-primary text-sm transition"
            >
              GitHub
            </a>

            <a 
              href="https://www.linkedin.com/in/ashik-mathew-varughese-319981303/" 
              target="_blank" 
              className="text-secondary hover:text-primary text-sm transition"
            >
              LinkedIn
            </a>

            <a 
              href="mailto:ashikmathew937@gmail.com" 
              className="text-secondary hover:text-primary text-sm transition"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
